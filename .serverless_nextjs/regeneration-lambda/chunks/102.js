"use strict";
exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 98097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23863);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);









const NewsLetter = () => {
  // theming
  const {
    colorMode,
    toggleColorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '64'
      },
      bg: '#166cf8',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        templateColumns: {
          md: '3fr 6fr 3fr',
          sm: 'repeat(1, 1fr)'
        },
        textColor: "white",
        gap: 4,
        py: '12',
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: " "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
          textAlign: 'center',
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
            as: "h4",
            size: 'md',
            color: 'white',
            children: "GET THE BEST BLOG STORIES INTO YOUR INBOX!"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
            color: 'white',
            children: "The latest entertainment news in the world"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
              my: '4',
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                bg: "white",
                placeholder: "Enter Your Email ID",
                mr: '4',
                rounded: 'none'
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: 'outline',
                color: "white",
                _hover: {
                  color: 'black',
                  bg: 'white'
                },
                rounded: 'none',
                children: "Submit"
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {})]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsLetter);

/***/ }),

/***/ 55727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ss": () => (/* binding */ DrawerToggle),
  "ZP": () => (/* binding */ Navbar)
});

// UNUSED EXPORTS: MobileNav

// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.cjs.prod.js
var chakra_ui_icons_cjs_prod = __webpack_require__(23005);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.cjs.js
var emotion_styled_cjs = __webpack_require__(81133);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./component/menu/MobileMultiMenus.js

const UL = emotion_styled_cjs["default"].ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LI = emotion_styled_cjs["default"].li``;
const Item = emotion_styled_cjs["default"].div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 5px 8px;
  color: #3e485d;
  padding-left: ${props => `${props.dept * 8}px`};
  align-items: center;
`;
const Label = emotion_styled_cjs["default"].span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = emotion_styled_cjs["default"].span`
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
    transform: ${props => props.toggle ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

 // import { Link } from '@chakra-ui/react';






const MobileMultiMenus = ({
  menus,
  state,
  actions,
  libraries
}) => {
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const {
    0: activeMenus,
    1: setActiveMenus
  } = (0,react.useState)([]);
  const toggleDrawer = (0,react.useContext)(DrawerToggle);

  const handleMenuClick = data => {};

  const handleArrowClick = menuName => {
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

  const ListMenu = ({
    dept,
    data,
    hasSubMenu,
    menuName,
    menuIndex
  }) => /*#__PURE__*/(0,jsx_runtime.jsxs)(LI, {
    id: "mobileMenu",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Item, {
      dept: dept,
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
        href: data.href,
        children: /*#__PURE__*/jsx_runtime.jsx(Label, {
          onClick: () => {
            toggleDrawer();
            handleMenuClick(data);
          },
          children: data.label
        })
      }), hasSubMenu && /*#__PURE__*/jsx_runtime.jsx(Arrow, {
        onClick: () => handleArrowClick(menuName),
        toggle: activeMenus.includes(menuName)
      })]
    }), hasSubMenu && /*#__PURE__*/jsx_runtime.jsx(SubMenu, {
      dept: dept,
      data: data.submenu,
      toggle: activeMenus.includes(menuName),
      menuIndex: menuIndex
    })]
  });

  const SubMenu = ({
    dept,
    data,
    toggle,
    menuIndex
  }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;
    return /*#__PURE__*/jsx_runtime.jsx(UL, {
      children: data.map((menu, index) => {
        const menuName = `submenu-${dept}-${menuIndex}-${index}`;
        return /*#__PURE__*/jsx_runtime.jsx(ListMenu, {
          dept: dept,
          data: menu,
          hasSubMenu: menu.submenu,
          menuName: menuName,
          menuIndex: index
        }, menuName);
      })
    });
  };

  return /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
    bg: "white",
    children: /*#__PURE__*/jsx_runtime.jsx(UL, {
      children: menus.map((menu, index) => {
        const dept = 1;
        const menuName = `menu-${dept}-${index}`;
        return /*#__PURE__*/jsx_runtime.jsx(ListMenu, {
          dept: dept,
          data: menu,
          hasSubMenu: menu.submenu,
          menuName: menuName,
          menuIndex: index
        }, menuName);
      })
    })
  });
};

/* harmony default export */ const menu_MobileMultiMenus = (MobileMultiMenus);
;// CONCATENATED MODULE: ./component/menu/DeskMultiMenus.js






const DeskMultiMenus_UL = emotion_styled_cjs["default"].ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: Flex;
`;
const ULSub = emotion_styled_cjs["default"].ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const DeskMultiMenus_LI = emotion_styled_cjs["default"].li``;
const DeskMultiMenus_Item = emotion_styled_cjs["default"].div`
  font-weight: 600;
  display: flex;
  padding: 5px 8px;
  align-items: center;
`;
const DeskMultiMenus_Label = emotion_styled_cjs["default"].span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const DeskMultiMenus_Arrow = emotion_styled_cjs["default"].span`
  display: flex;
  width: 30px;
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
    transform: ${props => props.toggle ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const DeskMultiMenus = ({
  menus
}) => {
  const {
    0: activeMenus,
    1: setActiveMenus
  } = (0,react.useState)([]);

  const handleMenuClick = data => {};

  const handleArrowClick = menuName => {
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

  const ListMenu = ({
    dept,
    data,
    hasSubMenu,
    menuName,
    menuIndex
  }) => /*#__PURE__*/jsx_runtime.jsx(DeskMultiMenus_LI, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Popover, {
      trigger: 'hover',
      placement: 'right-end',
      children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.PopoverTrigger, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(DeskMultiMenus_Item, {
          dept: dept,
          children: [/*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: data.node.path,
            children: /*#__PURE__*/jsx_runtime.jsx(DeskMultiMenus_Label, {
              onClick: () => handleMenuClick(data),
              children: data.node.label.toUpperCase()
            })
          }), hasSubMenu && /*#__PURE__*/jsx_runtime.jsx(DeskMultiMenus_Arrow, {
            onClick: () => handleArrowClick(menuName),
            toggle: activeMenus.includes(menuName)
          })]
        })
      }), hasSubMenu && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.PopoverContent, {
        children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.PopoverBody, {
          children: /*#__PURE__*/jsx_runtime.jsx(SubMenu, {
            dept: dept,
            data: data.submenu,
            toggle: activeMenus.includes(menuName),
            menuIndex: menuIndex
          })
        })
      })]
    })
  });

  const SubMenu = ({
    dept,
    data,
    toggle,
    menuIndex
  }) => {
    dept = dept + 1;
    return /*#__PURE__*/jsx_runtime.jsx(ULSub, {
      id: "submenu",
      children: data.map((menu, index) => {
        const menuName = `submenu-${dept}-${menuIndex}-${index}`;
        return /*#__PURE__*/jsx_runtime.jsx(ListMenu, {
          dept: dept,
          data: menu,
          hasSubMenu: menu.submenu,
          menuName: menuName,
          menuIndex: index
        }, index);
      })
    });
  };

  return /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.HStack, {
    id: "mainul",
    listStyleType: " none",
    children: menus.map((menu, index) => {
      const dept = 1;
      const menuName = `menu-${dept}-${index}`;
      return /*#__PURE__*/jsx_runtime.jsx(ListMenu, {
        dept: dept,
        data: menu,
        hasSubMenu: menu.submenu,
        menuName: menuName,
        menuIndex: index
      }, menuName);
    })
  });
};

/* harmony default export */ const menu_DeskMultiMenus = (DeskMultiMenus);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
// EXTERNAL MODULE: ./node_modules/react-headroom/dist/index.js
var dist = __webpack_require__(51517);
;// CONCATENATED MODULE: ./component/menu/Navbar.js











function Navbar({
  menu
}) {
  var _menu$menuItems;

  const {
    isOpen,
    onToggle,
    onOpen,
    onClose
  } = (0,chakra_ui_react_cjs_prod.useDisclosure)(); // theming

  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const {
    isOpen: isOpendrawer,
    onOpen: onOpendrawer,
    onClose: onClosedrawer
  } = (0,chakra_ui_react_cjs_prod.useDisclosure)();
  const menuItems = menu === null || menu === void 0 ? void 0 : (_menu$menuItems = menu.menuItems) === null || _menu$menuItems === void 0 ? void 0 : _menu$menuItems.edges; // console.log('menucheck=', menuItems);

  if (menuItems === null || menuItems === undefined) {
    return /*#__PURE__*/jsx_runtime.jsx("div", {});
  }

  return menuItems &&
  /*#__PURE__*/
  // <Headroom>
  jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
    zIndex: '999',
    bg: primaryBgColor,
    className: "sticky-header-div",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      borderBottom: {
        base: '0',
        md: '2px solid black'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
        templateColumns: {
          md: '12fr ',
          sm: 'repeat(2, 1fr)'
        },
        textColor: "white",
        gap: 4,
        py: {
          base: '6',
          md: '12'
        },
        display: {
          base: 'none',
          md: 'block'
        },
        children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/",
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
              color: 'red',
              objectFit: "contain",
              src: "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png",
              height: "54px !important"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
        justify: 'space-between',
        direction: 'row',
        py: 4,
        alignItems: 'center',
        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
          flex: {
            base: 0,
            md: 'auto'
          },
          ml: {
            base: -2
          },
          display: {
            base: 'flex',
            lg: 'none'
          },
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.IconButton, {
            onClick: onOpendrawer,
            icon: isOpen ? /*#__PURE__*/jsx_runtime.jsx(chakra_ui_icons_cjs_prod.CloseIcon, {
              w: 3,
              h: 3
            }) : /*#__PURE__*/jsx_runtime.jsx(chakra_ui_icons_cjs_prod.HamburgerIcon, {
              w: 5,
              h: 5
            }),
            variant: 'ghost',
            "aria-label": 'Toggle Navigation'
          })
        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
          display: {
            base: 'block',
            md: 'none'
          },
          children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/",
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
              color: 'red',
              objectFit: "contain",
              src: "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png",
              width: "100% !important",
              height: "34px !important"
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex // my={2}
        , {
          display: {
            base: 'none',
            lg: 'flex'
          },
          justifyContent: "space-around",
          children: /*#__PURE__*/jsx_runtime.jsx(menu_DeskMultiMenus, {
            menus: menuItems
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
            as: colorMode == 'dark' ? chakra_ui_icons_cjs_prod.MoonIcon : chakra_ui_icons_cjs_prod.SunIcon,
            onClick: toggleColorMode,
            boxSize: 6,
            mr: '4'
          }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "/search",
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
              as: index_esm/* FaSearch */.U41,
              boxSize: 6,
              mr: '4'
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.ModalOverlay, {}), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.ModalContent, {
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.ModalBody, {
            p: '0px',
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.InputGroup, {
              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.InputLeftElement, {
                children: /*#__PURE__*/jsx_runtime.jsx(index_esm/* FaSearch */.U41, {})
              }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Input, {
                type: "text",
                placeholder: "Search"
              })]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Collapse, {
        in: isOpen,
        animateOpacity: true,
        children: /*#__PURE__*/jsx_runtime.jsx(MobileNav, {
          menuItems: menuItems,
          isOpendrawer: isOpendrawer,
          onClosedrawer: onClosedrawer,
          onToggleDrawer: true
        })
      })]
    })
  }) // </Headroom>
  ;
}
const DrawerToggle = /*#__PURE__*/(0,react.createContext)();
const MobileNav = ({
  isOpendrawer,
  onClosedrawer,
  onToggleDrawer,
  state,
  menuItems
}) => {
  var data = 'oka';
  return /*#__PURE__*/jsx_runtime.jsx(DrawerToggle.Provider, {
    value: onClosedrawer,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Drawer, {
      placement: "left",
      isOpen: isOpendrawer,
      onClose: onClosedrawer,
      w: "200px",
      children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerOverlay, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.DrawerContent, {
        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerCloseButton, {}), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerHeader, {
          borderBottomWidth: "1px",
          children: "Metadesk"
        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.DrawerBody, {
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Stack, {
            bg: (0,chakra_ui_react_cjs_prod.useColorModeValue)('white', 'white'),
            p: 4,
            display: {
              lg: 'none'
            },
            children: /*#__PURE__*/jsx_runtime.jsx(menu_MobileMultiMenus, {
              menus: menuItems
            })
          })
        })]
      })]
    })
  });
};
const menus = [{
  label: 'Home',
  href: '/'
}, {
  label: 'Category',
  href: '/category'
}, {
  label: 'Full Width',
  href: '/full-width'
}, {
  label: 'Single Post',
  href: '/singlepost' // submenu: [
  //     {
  //         label: "Sub Menu 1",
  //         submenu: [
  //             {
  //                 label: "Boom 2",
  //                 href: "/",
  //             }
  //         ]
  //     },
  //     {
  //         label: "Sub Menu 2",
  //         submenu: [
  //             {
  //                 label: "Deep 1",
  //                 href: "/",
  //             },
  //             {
  //                 label: "Deep 2",
  //                 submenu: [
  //                     {
  //                         label: "Lorem 1",
  //                         href: "/",
  //                     },
  //                     {
  //                         label: "Lorem 2",
  //                         submenu: [
  //                             {
  //                                 label: "Super Deep",
  //                                 href: "/",
  //                             }
  //                         ]
  //                     }
  //                 ]
  //             }
  //         ]
  //     },
  //     {
  //         label: "Sub Menu 3",
  //         href: "/",
  //     },
  //     {
  //         label: "Sub Menu 4",
  //         submenu: [
  //             {
  //                 label: "Last 1",
  //                 href: "/",
  //             },
  //             {
  //                 label: "Last 2",
  //                 href: "/",
  //             },
  //             {
  //                 label: "Last 3",
  //                 href: "/",
  //             }
  //         ]
  //     }
  // ]

}, {
  label: 'Contact',
  href: '/contact'
}];

/***/ }),

/***/ 85623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./component/menu/Footer.js







const SocialButton = ({
  children,
  label,
  href
}) => {
  return /*#__PURE__*/_jsxs(chakra.button, {
    bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'),
    rounded: 'full',
    w: 8,
    h: 8,
    cursor: 'pointer',
    as: 'a',
    href: href,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s ease',
    _hover: {
      bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
    },
    children: [/*#__PURE__*/_jsx(VisuallyHidden, {
      children: label
    }), children]
  });
};

const ListHeader = ({
  children
}) => {
  return /*#__PURE__*/_jsx(Text, {
    fontWeight: '500',
    fontSize: 'lg',
    mb: 2,
    children: children
  });
};

function Footer_Footer() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Divider, {}), /*#__PURE__*/_jsxs(Box, {
      children: [/*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsxs(Container, {
          as: Stack,
          maxW: '6xl',
          py: 10,
          children: [/*#__PURE__*/_jsxs(SimpleGrid, {
            templateColumns: {
              base: '1fr 1fr ',
              md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr  4fr'
            },
            spacing: 4,
            children: [/*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "Support"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "About"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "About"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "About"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "About"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              }), " ", /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "About"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "About"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Meta"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/',
                children: "Prices"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              align: 'flex-start',
              children: [/*#__PURE__*/_jsx(Heading, {
                size: "sm",
                as: "h5",
                children: "Quick Links"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/about-us',
                children: "About Us"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/contact-us',
                children: "Contact US"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/disclaimer',
                children: "Disclaimer"
              }), /*#__PURE__*/_jsx(Link, {
                href: '/privacy-policy',
                children: "Privacy Policy"
              })]
            }), /*#__PURE__*/_jsxs(Stack, {
              spacing: 6,
              alignItems: 'flex-start',
              display: {
                base: 'none',
                md: 'block'
              },
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/",
                children: /*#__PURE__*/_jsx(Image, {
                  objectFit: "contain",
                  src: "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png",
                  width: "100% !important"
                })
              }), /*#__PURE__*/_jsx(Text, {
                fontWeight: 'medium',
                children: "All That We See or Seem is buta Dream Within a Dream Becomes Her"
              }), /*#__PURE__*/_jsx(Divider, {}), /*#__PURE__*/_jsx(Text, {
                fontSize: 'sm',
                children: "Follow MetaDesk "
              }), /*#__PURE__*/_jsxs(Flex, {
                children: [/*#__PURE__*/_jsx(Icon, {
                  as: FaFacebookF,
                  boxSize: 6,
                  mr: '4'
                }), /*#__PURE__*/_jsx(Icon, {
                  as: FaTwitter,
                  boxSize: 6,
                  mr: '4'
                }), /*#__PURE__*/_jsx(Icon, {
                  as: FaInstagram,
                  boxSize: 6,
                  mr: '4'
                }), /*#__PURE__*/_jsx(Icon, {
                  as: FaLinkedin,
                  boxSize: 6,
                  mr: '4'
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs(Stack, {
            spacing: 6,
            alignItems: 'flex-start',
            display: {
              base: 'block',
              md: 'none'
            },
            mt: '30px !important',
            children: [/*#__PURE__*/_jsx(Link, {
              href: "/",
              children: /*#__PURE__*/_jsx(Image, {
                objectFit: "contain",
                src: "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
              })
            }), /*#__PURE__*/_jsx(Text, {
              fontWeight: 'medium',
              children: "All That We See or Seem is buta Dream Within a Dream Becomes Her"
            }), /*#__PURE__*/_jsx(Divider, {}), /*#__PURE__*/_jsx(Text, {
              fontSize: 'sm',
              children: "Follow MetaDesk "
            }), /*#__PURE__*/_jsxs(Flex, {
              children: [/*#__PURE__*/_jsx(Icon, {
                as: FaFacebookF,
                boxSize: 6,
                mr: '4'
              }), /*#__PURE__*/_jsx(Icon, {
                as: FaTwitter,
                boxSize: 6,
                mr: '4'
              }), /*#__PURE__*/_jsx(Icon, {
                as: FaInstagram,
                boxSize: 6,
                mr: '4'
              }), /*#__PURE__*/_jsx(Icon, {
                as: FaLinkedin,
                boxSize: 6,
                mr: '4'
              })]
            })]
          })]
        })
      }), /*#__PURE__*/_jsx(Box, {
        borderTopWidth: 1,
        borderStyle: 'solid',
        py: '4',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        children: /*#__PURE__*/_jsx(Text, {
          textAlign: 'center',
          children: "\xA9 2022 Trisha Templates. "
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./component/menu/Navbar.js + 2 modules
var menu_Navbar = __webpack_require__(55727);
;// CONCATENATED MODULE: ./component/layout.js
 // import Headroom from 'react-headroom'







function Layout({
  children
}) {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Head, {
      children: "Metadesk"
    }), /*#__PURE__*/_jsx(Navbar, {}), /*#__PURE__*/_jsx("main", {
      children: children
    }), /*#__PURE__*/_jsx(Footer, {})]
  });
}
;// CONCATENATED MODULE: ./styles/theme.js
// theme.js
// 1. import `extendTheme` function
 // 2. Add your color mode config

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1280px',
  xl: '1400px',
  '2xl': '1536px',
  '3xl': '2100px'
};
const fonts = {
  heading: "Poppins, sans-serif",
  body: "Poppins, sans-serif"
};
const styles = {
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      // fontWeight: '700',
      lineHeight: '110%',
      letterSpacing: '-2%',
      color: 'red'
    },
    h2: {
      fontSize: ['24px', '24px'],
      // fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-1%',
      color: 'green'
    },
    h3: {
      fontSize: ['24px', '24px'],
      // fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-1%',
      color: 'blue'
    },
    h4: {
      fontSize: ['24px', '24px'],
      // fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-1%',
      color: 'yellow'
    }
  }
}; // 3. extend the theme

const theme = (0,chakra_ui_react_cjs_prod.extendTheme)({
  config,
  styles,
  fonts,
  breakpoints
});
/* harmony default export */ const styles_theme = (theme);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./component/CustomLoader.js
// CustomLoader.js
 // import userLoca




const Screen = styled_components_cjs/* default.div */.ZP.div`
  // position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: white;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Balls = styled_components_cjs/* default.div */.ZP.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #1b5299;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`; // const Screen = styled.div`` adde with comment
// const Balls = styled.div``

const CustomLoader = () => {
  (0,react.useEffect)(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 0);
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(Screen, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Balls, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "ball one"
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "ball two"
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "ball three"
      })]
    })
  });
};

/* harmony default export */ const component_CustomLoader = (CustomLoader);
// EXTERNAL MODULE: ./component/NewsLetter.js
var NewsLetter = __webpack_require__(98097);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(11334);
;// CONCATENATED MODULE: ./styles/fonts/Font.js



const Fonts = () => /*#__PURE__*/jsx_runtime.jsx(emotion_react_cjs_prod.Global, {
  styles: `
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}



/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

`
});

/* harmony default export */ const Font = (Fonts);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function MyApp({
  Component,
  pageProps,
  router
}) {
  const Router = (0,next_router.useRouter)();
  const {
    0: loading,
    1: setLoading
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  (0,react.useEffect)(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []); //console.log('chakapppae', pageProps.menu);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head["default"], {
      children: [/*#__PURE__*/jsx_runtime.jsx("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "shortcut icon",
        href: "/favicon/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(Font, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.ChakraProvider, {
      theme: styles_theme,
      children: [/*#__PURE__*/jsx_runtime.jsx(menu_Navbar/* default */.ZP, {
        menu: pageProps.menu
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.ScaleFade, {
        animate: {
          y: 0,
          opacity: 1
        },
        initial: {
          y: -16,
          opacity: 0
        },
        initialScale: 0.9,
        in: "true",
        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.CSSReset, {}), !loading ? /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps)) : /*#__PURE__*/jsx_runtime.jsx(component_CustomLoader, {})]
      }, router.route), /*#__PURE__*/jsx_runtime.jsx(NewsLetter/* default */.Z, {})]
    })]
  });
}

async function getStaticProps({
  preview = false
}) {
  const menuData = await getHeaderMenuByName("Main menu"); // await getCateogryRecentPostbyName(
  //   'categoryName',
  //   process.env.home.heroSection.NAME
  // );

  return {
    props: {
      menu: menuData.menu
    },
    revalidate: 15 //10 minutes

  };
}
/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/4TQV5Fm4vyzCmx3B0N_4K/_buildManifest.js","static/4TQV5Fm4vyzCmx3B0N_4K/_ssgManifest.js","static/4TQV5Fm4vyzCmx3B0N_4K/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/582-d79da0492f1f9267.js","static/chunks/417-600349b8ee7221c1.js","static/chunks/pages/index-433a60c2c16df742.js"],"/[...slug]":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/582-d79da0492f1f9267.js","static/chunks/612-1a5406f92bbdfd37.js","static/css/e7408fbdb1dd8d31.css","static/chunks/pages/[...slug]-0b328fe1cf21112e.js"],"/_app":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/css/cef28fa8b50e397d.css","static/chunks/pages/_app-4793bde2dd7f497b.js"],"/_error":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/pages/_error-350d9d86556f6d87.js"],"/category":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/pages/category-8865982ef8fa3196.js"],"/contact":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/pages/contact-54e25306bc3b13f3.js"],"/error":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/pages/error-a8ebe85b5e995fae.js"],"/first-post":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/pages/first-post-43d54bb52c4bca1a.js"],"/full-width":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/pages/full-width-8f98de8d5a564e8f.js"],"/search":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/582-d79da0492f1f9267.js","static/chunks/pages/search-99a1ec460c9bf2e0.js"],"/singlepost":["static/chunks/webpack-94f09d685cc6e333.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-b442b45902648bd0.js","static/chunks/pages/singlepost-0935a9105193b0c5.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = JSON.parse('{"../node_modules/next/dist/client/index.js -> ../pages/_error":{"id":9894,"files":["static/chunks/894.9047cda612e8fce0.js"]}}');

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;