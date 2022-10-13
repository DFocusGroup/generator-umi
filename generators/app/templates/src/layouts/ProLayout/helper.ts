import { matchPath, useAppData } from '@umijs/max';
import { flattenTree } from '@/utils';
import { IBaseMenu } from '@/types';

export function findSelectedMenu<T>(pathname: string, menus: IBaseMenu<T>[]) {
  // @ts-ignore
  const flattenMenus = flattenTree(menus, (t) => t.children);
  return (
    flattenMenus
      .filter((menu) => menu.path)
      // @ts-ignore
      .find((menu) => matchPath(menu.path, pathname))
  );
}

export function findParentOffSelectedMenu<T>(
  pathname: string,
  menus: IBaseMenu<T>[],
) {
  // @ts-ignore
  const flattenMenus = flattenTree(menus, (t) => t.children);
  const parentMenus = flattenMenus.filter((menu) => menu.children);
  const childMenus = flattenMenus.filter((menu) => !menu.children);
  const selectedMenu = findSelectedMenu(pathname, childMenus);

  return parentMenus.find((menu) =>
    menu.children?.some((menu) => {
      // @ts-ignore
      return menu.path === selectedMenu?.path;
    }),
  );
}

export function findRoute({
  routes,
  pathname,
}: {
  routes: ReturnType<typeof useAppData>['routes'];
  pathname: string;
}) {
  return Object.values(routes).find((route) => {
    return route.path && matchPath(route.path, pathname);
  });
}
