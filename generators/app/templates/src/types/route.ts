export interface IRoute {
  name: string;
  path: string;
  component: string;
  redirect?: string;
  access?: string;
  routes?: IRoute[];
}
