import { isProduction } from '../helpers/env'

/**
 * 所有的 *_PLACEHOLDER__，在npm run serve启动时，都需要指定运行时需要的值
 * 这个在“Use docker for release”时非常好用，可以针对不同的运行环境使用同一个镜像，指定不同的环境变量
 */
export const STORAGE_TOKEN_KEY = 'platform-token'

export const STORAGE_EXPIRE_DAYS = 49

export const STORAGE_DOMAIN = !isProduction ? window.location.hostname : 'STORAGE_DOMAIN_PLACEHOLDER__'

export const API_HOST = !isProduction ? '' : 'API_HOST_PLACEHOLDER__'
