import { isProduction } from '../helpers/env'

/**
 * 所有的 *_PLACEHOLDER，都需要在docker镜像启动时被修改成用户指定的值
 */

export const OPEN_PAGES = ['/login', '/', '/404']

export const STORAGE_TOKEN_KEY = 'platform-token'

export const STORAGE_DOMAIN = !isProduction ? window.location.hostname : 'STORAGE_DOMAIN_PLACEHOLDER__'

export const STORAGE_EXPIRE_DAYS = 49

export const API_HOST = !isProduction ? '/' : 'API_HOST_PLACEHOLDER__'
