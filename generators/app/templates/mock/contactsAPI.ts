import { defineMock } from '@umijs/max';
import { ContactsStatus, ErrorShowType, IRawContact } from '../src/types';

import { store } from './_utils/contactsStore';
import { success, failure } from './_utils/helper';
import ResponseError from './_utils/ResponseError';

export default defineMock({
  'GET /api/contacts': async (req, res) => {
    const { page, size, name, team, status, email, sortField, sortOrder } =
      req.query;

    const contactsQuery = {
      page: Number(page),
      size: Number(size),
      name: (name as string) || undefined,
      team: (team as string) || undefined,
      status: (status as ContactsStatus) || undefined,
      email: (email as string) || undefined,
      sortField: (sortField as keyof IRawContact) || undefined,
      sortOrder: (sortOrder as 'ascend' | 'descend') || undefined,
    };

    const contacts = await store.findPaginationContactsByQuery(contactsQuery);

    return res.json(success(contacts));
  },

  'post /api/contacts': async function (req, res) {
    const { name, team, status, email } = req.body;

    try {
      const savedContacts = await store.saveContacts({
        name,
        team,
        status,
        email,
      });
      return res.json(success(savedContacts));
    } catch (error) {
      const err = error as ResponseError;
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: ErrorShowType.WARN_MESSAGE,
        }),
      );
    }
  },

  'put /api/contacts/:id': async function (req, res) {
    const { id } = req.params;
    const { name, team, status, email } = req.body;

    try {
      const savedContacts = await store.updateContacts({
        id: Number(id),
        name,
        team,
        status,
        email,
      });
      return res.json(success(savedContacts));
    } catch (error) {
      const err = error as ResponseError;
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: ErrorShowType.WARN_MESSAGE,
        }),
      );
    }
  },

  'delete /api/contacts/:id': async function (req, res) {
    const { id } = req.params;

    try {
      const deletedContacts = await store.deleteContacts(Number(id));
      return res.json(success(deletedContacts));
    } catch (error) {
      const err = error as ResponseError;
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: ErrorShowType.WARN_MESSAGE,
        }),
      );
    }
  },
});
