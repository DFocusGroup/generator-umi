import React from 'react';
import menuConfig from '../menuConfig';

interface ISidebarTitleProps {
  collapsed: boolean;
}

const { appLogo, appTitle } = menuConfig;

const SideBarTitle: React.FC<ISidebarTitleProps> = ({ collapsed }) => {
  return (
    <div className="h-[64px] py-[0px] px-[24px]">
      <a href="/" className="flex items-center h-[64px]">
        {collapsed ? null : (
          <img
            src={appLogo}
            alt="logo"
            className="inline-block h-[32px] align-middle"
          />
        )}
        <h1 className="text-white inline-block ml-[12px]">
          {collapsed ? appTitle.slice(0, 1) : appTitle}
        </h1>
      </a>
    </div>
  );
};

export default SideBarTitle;
