import React from 'react';
import { useIntl } from '@umijs/max';

import { Select } from 'antd';

interface IUserTeamSelectProps {
  value?: string;
  onChange?: (team: string) => void;
  style?: React.CSSProperties;
  classNames?: string;
  disabled?: boolean;
  prefix: React.ReactElement;
  placeholder: string;
}

const UserTeamSelect: React.FC<IUserTeamSelectProps> = ({
  value,
  prefix,
  onChange,
  disabled,
  placeholder,
}) => {
  const { formatMessage } = useIntl();

  return (
    <div className="flex justify-start items-center border-[1px] border-solid border-[#d9d9d9] [&>div>.ant-select-selector]:!border-0 [&>div>.ant-select-selector]:!shadow-[none]">
      <div className="border-0 py-[4px] pr-0 pl-[9px]">{prefix}</div>
      <Select
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        showArrow={false}
        filterOption
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      >
        <Select.Option value="QA">
          {formatMessage({ id: 'team_qa' })}
        </Select.Option>
        <Select.Option value="DEV">
          {formatMessage({ id: 'team_dev' })}
        </Select.Option>
        <Select.Option value="DATA">
          {formatMessage({ id: 'team_data' })}
        </Select.Option>
      </Select>
    </div>
  );
};

export default UserTeamSelect;
