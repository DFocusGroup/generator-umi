export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isNumber(obj: any): obj is number {
  return Object.prototype.toString.call(obj) === '[object Number]' && !isNaN(obj)
}

export function isBoolean(obj: any): obj is boolean {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}

export function isEmpty(obj: any) {
  return obj === null || obj === undefined
}

export function isNotEmpty<T>(obj: any): obj is T {
  return !isEmpty(obj)
}

export function isEmptyArray(obj: any) {
  return obj === null || obj === undefined || obj.length === 0
}

export function isNotEmptyArray<T>(obj: any): obj is T {
  return !isEmptyArray(obj)
}

export function flattenTree<T>(tree: T[], childResolver: { (t: T): T[] | undefined }): T[] {
  return tree.reduce((newTree, t) => {
    const child = childResolver(t)
    newTree.push(t)
    if (child) {
      newTree.push(...flattenTree(child, childResolver))
    }
    return newTree
  }, [] as T[])
}

export function pick<T extends Object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  return keys.reduce((prev, cur) => {
    prev[cur] = obj[cur]
    return prev
  }, {} as Pick<T, K>)
}
