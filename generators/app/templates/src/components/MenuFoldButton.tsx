import React from 'react';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

interface IMenuFoldButtonProps {
  collapsed: boolean;
  onToggle: (e: any) => void;
}

const MenuFoldButton: React.FC<IMenuFoldButtonProps> = ({
  collapsed,
  onToggle,
}) => {
  if (collapsed) {
    return <MenuUnfoldOutlined onClick={onToggle} />;
  }
  return <MenuFoldOutlined onClick={onToggle} />;
};

export default MenuFoldButton;
