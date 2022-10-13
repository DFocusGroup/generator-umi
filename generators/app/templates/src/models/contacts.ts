import { useRequest } from '@umijs/max';
import type { Params } from 'ahooks/lib/useAntdTable/types';

import { isNotEmpty, isEmpty } from '@/utils';
import {
  addContact,
  deleteContatct,
  updateContatct,
  searchContatct,
} from '@/services';
import {
  IContact,
  IAntdTableFilters,
  IAntdTableSorter,
  IPagination,
  IResponseStructure,
} from '@/types';

const fetchContacts = ({
  current,
  pageSize,
  sorter,
  filters,
}: Params[0]): Promise<IResponseStructure<IPagination<IContact>>> => {
  let query = `page=${current}&size=${pageSize}`;

  if (isNotEmpty<IAntdTableFilters>(filters)) {
    query = Object.keys(filters).reduce((prev, cur) => {
      const val = filters[cur];
      if (isEmpty(val)) {
        return prev;
      }
      return `${prev}&${cur}=${filters[cur]}`;
    }, query);
  }

  if (isNotEmpty<IAntdTableSorter>(sorter) && Object.keys(sorter).length) {
    query = `${query}&sortField=${sorter.sortField}&sortOrder=${sorter.sortOrder}`;
  }

  return searchContatct(query).then((res) => {
    if (isNotEmpty<IPagination<IContact>>(res.data)) {
      return {
        data: {
          page: res.data.page,
          size: res.data.size,
          total: res.data.total,
          list: res.data.list,
        },
        success: true,
      };
    }
    return {
      data: {
        page: 1,
        size: 10,
        total: 0,
        list: [],
      },
      success: true,
    };
  });
};

export default function useContactsModel() {
  const { run: addContacts, loading: addContactsRunning } = useRequest(
    addContact,
    {
      manual: true,
    },
  );

  const { run: deleteContacts, loading: deleteContactsRunning } = useRequest(
    deleteContatct,
    {
      manual: true,
    },
  );

  const { run: updateContacts, loading: updateContactsRunning } = useRequest(
    updateContatct,
    {
      manual: true,
    },
  );

  const {
    data: contacts,
    run: doSearchContacts,
    loading: loadingSearchContacts,
  } = useRequest(fetchContacts, {
    manual: true,
  });

  return {
    addContacts,
    addContactsRunning,
    deleteContacts,
    deleteContactsRunning,
    updateContacts,
    updateContactsRunning,
    contacts,
    doSearchContacts,
    loadingSearchContacts,
  };
}
