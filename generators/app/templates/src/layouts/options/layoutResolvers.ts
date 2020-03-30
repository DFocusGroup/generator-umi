import { ILayoutResolver } from '@/types'

import BlankResolver from './Blank'
import ProLayoutResolver from './ProLayout'

export const LAYOUT_RESOLVERS: ILayoutResolver[] = [ProLayoutResolver, BlankResolver]
