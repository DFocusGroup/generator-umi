import React from 'react'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

interface IMenuFoldButtonProps {
  collapsed: boolean
  onToggle: (e: React.MouseEvent<HTMLElement>) => void
}

export default function MenuFoldButton({ collapsed, onToggle }: IMenuFoldButtonProps) {
  if (collapsed) {
    return <MenuUnfoldOutlined onClick={onToggle} />
  }
  return <MenuFoldOutlined onClick={onToggle} />
}
