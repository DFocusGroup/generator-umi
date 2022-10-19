import { IRawContact, IContact, ContactsStatus } from '../../src/types';
import ResponseError from './ResponseError';

interface IQuery {
  page: number;
  size: number;
  name?: string;
  team?: string;
  status?: ContactsStatus;
  email?: string;
  sortField?: keyof IRawContact;
  sortOrder?: 'ascend' | 'descend';
}

interface IPagination {
  page: number;
  size: number;
  total: number;
  list: IContact[];
}

function filterByStringField(list: any[], field: string, value: string) {
  return list.filter((l) =>
    l[field].toLowerCase().includes(value.toLowerCase()),
  );
}

function toPagination(result: any[], page: number, size: number): IPagination {
  const list = result.slice((page - 1) * size, page * size);

  return {
    page,
    size,
    total: result.length,
    list,
  };
}

class ContactsStore {
  contacts: IContact[] = [{
    id: new Date().getTime(),
    name: 'dage.liang',
    email: 'dage.liang@gmail.com',
    team: 'QA',
    status: ContactsStatus.ACTIVE
  }];

  async findPaginationContactsByQuery(query: IQuery) {
    const result = (Object.keys(query) as (keyof IQuery)[])
      .filter((k) => !['page', 'size', 'sortField', 'sortOrder'].includes(k))
      .reduce((prev, cur) => {
        if (!query[cur]) {
          return prev;
        }
        return filterByStringField(prev, cur, query[cur] as string);
      }, this.contacts);

    if (query.sortField && query.sortOrder) {
      result.sort((a, b) => {
        if (a[query.sortField!] === b[query.sortField!]) {
          return 0;
        }
        if (query.sortOrder === 'ascend') {
          return a[query.sortField!].localeCompare(b[query.sortField!]);
        }
        return b[query.sortField!].localeCompare(a[query.sortField!]);
      });
    }

    return toPagination(result, query.page, query.size);
  }

  async findContactsById(id: number) {
    return this.contacts.find((user) => user.id === id);
  }

  async findContactsByName(name: string) {
    return this.contacts.find((user) => user.name === name);
  }

  async findContactsByEmail(email: string) {
    return this.contacts.find((user) => user.email === email);
  }

  async saveContacts(user: IRawContact) {
    const foundUser = await this.findContactsByName(user.name);
    if (foundUser) {
      throw new ResponseError(409, 'user name exists');
    }
    const foundUser2 = await this.findContactsByEmail(user.email);
    if (foundUser2) {
      throw new ResponseError(409, 'user email exists');
    }

    const newUser: IContact = {
      ...user,
      id: new Date().getTime(),
    };

    this.contacts.push(newUser);

    return newUser;
  }

  async updateContacts(contacts: IContact) {
    const foundContacts = await this.findContactsById(contacts.id);
    if (!foundContacts) {
      throw new ResponseError(410, 'contacts not exist');
    }
    this.contacts = this.contacts.map((u) => {
      if (u.id === contacts.id) {
        return contacts;
      }
      return u;
    });

    return contacts;
  }

  async deleteContacts(id: number) {
    const foundContacts = await this.findContactsById(id);
    if (!foundContacts) {
      throw new ResponseError(410, 'contacts not exist');
    }
    this.contacts = this.contacts.filter((u) => u.id !== id);

    return foundContacts;
  }
}

export const store = new ContactsStore();
