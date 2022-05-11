import React, { createContext, useState, useContext } from 'react';

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LI = styled.li``;
const Item = styled.div`
${'' /* border-left:2px solid blue; */}
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 12px 30px;
  color: #3e485d;
  ${'' /* padding-left: ${(props) => `${props.dept * 8}px`}; */}
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = styled.span`
  display: flex;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #3e485d;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
    transform: ${(props) => (props.toggle ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
import styled from '@emotion/styled';
import { DrawerToggle } from './Navbar';
// import { Link } from '@chakra-ui/react';
import { useColorMode, Box } from '@chakra-ui/react';
import Link from 'next/link';

const MobileMultiMenus = ({ menus, state, actions, libraries }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [activeMenus, setActiveMenus] = useState([]);

  const toggleDrawer = useContext(DrawerToggle);

  const handleMenuClick = (data) => { };

  const handleArrowClick = (menuName) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <LI id="mobileMenu">
      <Item dept={dept}>
        <Link href={data.node.path}>
          <Label
            onClick={() => {
              toggleDrawer();
              handleMenuClick(data);
            }}
          >
            {data.node.label.toUpperCase()}
          </Label>
        </Link>
        {hasSubMenu && (
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}
          />
        )}
      </Item>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </LI>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </UL>
    );
  };

  return (
    <Box bg="white">
      <UL>
        {menus.map((menu, index) => {
          const dept = 1;
          const menuName = `menu-${dept}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </UL>
    </Box>
  );
};

export default MobileMultiMenus;
