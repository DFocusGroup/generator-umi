import React from 'react';
import { Input, Button } from 'antd';
import classnames from 'classnames';
import type {
  FilterDropdownProps,
  TablePaginationConfig,
  SorterResult,
  FilterValue,
} from 'antd/es/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import { FormattedMessage, useSearchParams } from '@umijs/max';
import {
  IAntdTableFilters,
  IContact,
  IAntdTableSorterOrder,
  IAntdTableSorter,
} from '@/types';

import { isNotEmptyArray } from './object';

export function destoryGlobalSpinner() {
  const spinner = document.querySelector('.spinner');
  if (spinner && spinner.parentNode) {
    spinner.parentNode.removeChild(spinner);
  }
}

export function getColumnSearchProps(searchPlaceholder: string) {
  return {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: FilterDropdownProps) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={searchPlaceholder}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => confirm()}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          <FormattedMessage id="search_btn" />
        </Button>
        <Button
          onClick={() => {
            if (clearFilters) {
              clearFilters();
            }
            confirm();
          }}
          size="small"
          style={{ width: 90 }}
        >
          <FormattedMessage id="reset_btn" />
        </Button>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined className={classnames({ 'text-primary': filtered })} />
    ),
  };
}

export function parsePaginationQuery(
  searchParams: URLSearchParams,
  filterKeys: string[],
) {
  const pageSize = searchParams.get('pageSize')
    ? Number(searchParams.get('pageSize'))
    : 10;
  const current = searchParams.get('current')
    ? Number(searchParams.get('current'))
    : 1;
  const sortField = searchParams.get('sortField');
  const sortOrder = searchParams.get('sortOrder');

  const filters: { [key: string]: string | null } = {};
  if (filterKeys && Object.keys(filterKeys)) {
    filterKeys.forEach((key) => {
      filters[key] = searchParams.get(key);
    });
  }

  return {
    pageSize,
    current,
    sortField,
    sortOrder,
    filters,
  };
}

export function convertAntdTableArgsToQuery(
  setSearchParams: ReturnType<typeof useSearchParams>[1],
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorters: SorterResult<IContact>,
) {
  const current = pagination.current;
  const pageSize = pagination.pageSize;

  const nextFilters = Object.keys(filters)
    .filter((key) => isNotEmptyArray<string[]>(filters[key]))
    .reduce((p, c) => {
      p[c] = filters[c]![0] as string;
      return p;
    }, {} as IAntdTableFilters);

  const nextSorters =
    // @ts-ignore
    sorters && sorters.order
      ? {
          sortField: (sorters as SorterResult<IContact>).field! as string,
          sortOrder: (sorters as SorterResult<IContact>)
            .order! as IAntdTableSorterOrder,
        }
      : {};
  setSearchParams({
    current: `${current}`,
    pageSize: `${pageSize}`,
    ...nextFilters,
    ...(nextSorters as IAntdTableSorter),
  });
}
