import React, { type ReactNode } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

interface IPropType {
  title: ReactNode;
  menuItems: MenuProps["items"];
}

const DropdownComponent = (props: IPropType) => {
  const { menuItems, title } = props;

  return (
    <Dropdown
      menu={{ items: menuItems }}
      dropdownRender={(menu) => (
        <div className="bg-black-300 rounded-md">
          {React.cloneElement(menu as React.ReactElement)}
        </div>
      )}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <div className="cursor-pointer flex justify-center items-center gap-1">
          {title}
          <DownOutlined className="text-blue-200" />
        </div>
      </a>
    </Dropdown>
  );
};

export default DropdownComponent;
