import { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon'

export interface IMenu {
  key?: string
  path?: string
  title: string
  icon: React.ForwardRefExoticComponent<AntdIconProps & React.RefAttributes<HTMLSpanElement>>
  children?: IMenu[]
}
