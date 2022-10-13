import React from 'react';
import { useIntl } from '@umijs/max';

export default function Title() {
  const { formatMessage } = useIntl();
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="w-[79px]" src="/app_icon.jpeg" alt="applogo" />
      </div>
      <div className="w-[1px] h-[28px] bg-[#ccc]"></div>
      <div className="text-[24px] tracking-[4px] text-primary">
        {formatMessage({ id: 'app_title' })}
      </div>
    </div>
  );
}
