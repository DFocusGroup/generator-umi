export interface IUser {
  id: number;
  name: string;
  email: string;
  team: string;
  phone: string;
  avatar: string;
  permissions?: string[];
}
