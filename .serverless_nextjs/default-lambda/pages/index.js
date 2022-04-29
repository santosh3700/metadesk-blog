"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(25482);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.cjs.prod.js
var chakra_ui_icons_cjs_prod = __webpack_require__(23005);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/index.js
var react_multi_carousel = __webpack_require__(86529);
// EXTERNAL MODULE: ./node_modules/date-fns/index.js
var date_fns = __webpack_require__(47292);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./component/categories/CategoryA.js






 // import EditorPicks from '../slider/EditorPicks';





const CategoryA = props => {
  // theming
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white'; // responsiveness of carousel

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    }
  }; // store data

  const {
    data
  } = props; // temp var

  const tempArr = [1, 2, 3, 4, 5, 6];
  const tempArrSecond = [1, 2, 3]; // get post  from api

  const postArr = [];
  var k = 0;

  for (let i = 0; i < data.edges.length / 6; i++) {
    var postObj = [];

    if (i > data.edges.length / 6) {
      break;
    }

    for (let j = 0; j < 3; j++) {
      const title = data.edges[k].node.title;
      const featuredImage = data.edges[k].node.featuredImage.node.sourceUrl;
      const date = data.edges[k].node.date;
      const slug = data.edges[k].node.slug;
      const tag = data.edges[k].node.tags;
      const tempObj = {
        title: title,
        featuredImage: featuredImage,
        date: date,
        slug: slug,
        tag: tag
      };
      postObj.push(tempObj);
      k = k + 1;
    }

    postArr.push(postObj);
  }

  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      mb: "20",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
        templateColumns: {
          md: '12fr ',
          lg: '9fr 3fr',
          sm: 'repeat(1, 1fr)'
        },
        textColor: "white",
        gap: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
            justifyContent: 'space-between',
            flexDirection: {
              base: 'column',
              md: 'row'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
              alignItems: 'baseline',
              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                as: index_esm/* FaCircle */.gbA,
                boxSize: 5,
                mr: "6",
                color: '#ab20ef'
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                  textStyle: "h2",
                  fontSize: '24px',
                  mb: "10px",
                  color: primaryTextColor,
                  children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_A.NAME
                }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                  color: subTitleTextColor,
                  children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_A.DESC
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
              display: 'flex',
              alignItems: "center",
              justifyContent: {
                base: 'flex-end'
              },
              mt: {
                base: '4',
                md: '0'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                  as: chakra_ui_icons_cjs_prod.ChevronLeftIcon,
                  boxSize: 6
                }), ' ', /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                  as: chakra_ui_icons_cjs_prod.ChevronRightIcon,
                  boxSize: 6
                })]
              }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                href: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_A.SLUG,
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                  variant: 'outline',
                  colorScheme: "blue",
                  rounded: 'none',
                  size: "sm",
                  fontWeight: 'bold',
                  padding: "6px 13px",
                  border: "2px solid #166cf8",
                  color: "#166cf8",
                  fontSize: '14px',
                  lineHeight: '14px',
                  children: {"MORE":"SEE ALL","FOOTER_DESC":" Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
                })
              })]
            })]
          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
            templateColumns: {
              md: '12fr',
              sm: 'repeat(1, 1fr)'
            },
            gap: 4,
            mt: 6,
            children: /*#__PURE__*/jsx_runtime.jsx(react_multi_carousel["default"], {
              responsive: responsive,
              autoPlay: false,
              children: postArr && postArr.map((post, index) => {
                return /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                  templateColumns: {
                    md: '12fr',
                    sm: 'repeat(1, 1fr)'
                  },
                  textColor: "white",
                  children: post && post.map((item, j) => {
                    var _item$tag, _item$tag$edges$, _item$tag$edges$$node;

                    // console.log('catea', item);
                    const tagName = item === null || item === void 0 ? void 0 : (_item$tag = item.tag) === null || _item$tag === void 0 ? void 0 : (_item$tag$edges$ = _item$tag.edges[0]) === null || _item$tag$edges$ === void 0 ? void 0 : (_item$tag$edges$$node = _item$tag$edges$.node) === null || _item$tag$edges$$node === void 0 ? void 0 : _item$tag$edges$$node.name; // console.log('catA', tagName);
                    //  const tagName =
                    //    item?.node?.tags?.edges[0]?.node?.name;

                    return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                      href: item.slug,
                      children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                        cursor: 'pointer',
                        px: "4",
                        borderRight: '1px solid #b3b3b3',
                        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                          py: "4",
                          borderBottom: '1px solid #b3b3b3',
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                            w: '70%',
                            children: [tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                              bg: '#91b7e7',
                              color: "white" // background="#03a9e7"
                              ,
                              padding: " 7px 12px",
                              mb: 2,
                              fontSize: "14px",
                              lineHeight: "14px",
                              rounded: 'none',
                              size: "xs",
                              fontWeight: 'bold',
                              children: tagName
                            }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                              fontWeight: '700',
                              noOfLines: 2,
                              lineHeight: '16px',
                              fontSize: '16px',
                              color: isLightTheme ? 'black' : 'white',
                              children: item.title
                            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                              mt: "4",
                              alignItems: 'center',
                              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                                fontSize: "sm",
                                as: index_esm/* FaRegClock */.fSQ,
                                color: primaryTextColor
                              }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                ml: 2,
                                color: primaryTextColor,
                                fontSize: "sm",
                                children: (0,date_fns.format)(new Date(item.date), 'yyyy-MM-dd')
                              })]
                            })]
                          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                            w: '30%',
                            ml: 2,
                            children: item.featuredImage && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                              h: '100%',
                              objectFit: 'cover',
                              src: item.featuredImage,
                              alt: item.title
                            })
                          })]
                        })
                      })
                    }, j);
                  })
                }, index);
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
          h: {
            base: "100px",
            lg: "100%"
          },
          bg: "#ededed"
        })]
      })
    })
  });
};

/* harmony default export */ const categories_CategoryA = (CategoryA);
;// CONCATENATED MODULE: ./component/categories/CategoryB.js






 // import EditorPicks from '../slider/EditorPicks';
// import PressSlider from '../slider/PressSlider';




const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};

const CategoryB = props => {
  // theming
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white'; // store data

  const {
    data
  } = props; // console.log('vategoryB', data);

  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      mb: "20",
      py: '20',
      bg: isLightTheme ? '#ededed' : '#000000',
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
        justifyContent: 'space-between',
        flexDirection: {
          base: 'column',
          md: 'row'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
          alignItems: 'baseline',
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
            as: index_esm/* FaCircle */.gbA,
            boxSize: 5,
            mr: "6",
            color: '#ab20ef'
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
              as: "h2",
              fontSize: '24px',
              mb: "10px",
              children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_B.NAME
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
              color: subTitleTextColor,
              children: [' ', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_B.DESC]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          display: 'flex',
          alignItems: "center",
          justifyContent: {
            base: 'flex-end'
          },
          mt: {
            base: '4',
            md: '0'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
              as: chakra_ui_icons_cjs_prod.ChevronLeftIcon,
              boxSize: 6
            }), ' ', /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
              as: chakra_ui_icons_cjs_prod.ChevronRightIcon,
              boxSize: 6
            })]
          }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_B.SLUG,
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
              variant: 'outline',
              colorScheme: "blue",
              rounded: 'none',
              size: "sm",
              fontWeight: 'bold',
              padding: "6px 13px",
              border: "2px solid #166cf8",
              color: "#166cf8",
              fontSize: '14px',
              lineHeight: '14px',
              children: {"MORE":"SEE ALL","FOOTER_DESC":" Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        my: 6,
        bg: 'white',
        p: 4,
        children: /*#__PURE__*/jsx_runtime.jsx(react_multi_carousel["default"], {
          responsive: responsive,
          autoPlay: false,
          children: data.edges && data.edges.map((item, key) => {
            var _item$node;

            return item && item.node && /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: item.node.slug,
              children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                cursor: 'pointer',
                templateColumns: {
                  md: '12fr',
                  sm: 'repeat(1, 1fr)'
                },
                textColor: "white",
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                    py: "4",
                    alignItems: 'center',
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                      children: (item === null || item === void 0 ? void 0 : (_item$node = item.node) === null || _item$node === void 0 ? void 0 : _item$node.featuredImage) && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Image, {
                        h: '100px',
                        w: '100px',
                        rounded: 'full',
                        objectFit: 'cover',
                        src: item.node.featuredImage.node.sourceUrl,
                        alt: item.node.title
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                      w: '70%',
                      px: 4,
                      display: 'grid',
                      children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                        fontWeight: '600',
                        color: 'black',
                        fontSize: "16px",
                        lineHeight: '20px',
                        children: item.node.title
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                        mt: "2",
                        alignItems: 'center',
                        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                          as: index_esm/* FaRegClock */.fSQ,
                          color: subTitleTextColor,
                          fontSize: "sm"
                        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                          ml: 2,
                          color: subTitleTextColor,
                          children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                        })]
                      })]
                    })]
                  })
                })
              })
            }, key);
          })
        })
      })]
    })
  });
};

/* harmony default export */ const categories_CategoryB = (CategoryB);
;// CONCATENATED MODULE: ./component/categories/CategoryC.js











const CategoryC = props => {
  // theming
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white'; // store data

  const {
    data,
    subCategoryData
  } = props;
  var {
    0: apiUrl,
    1: setAPiUrl
  } = (0,react.useState)({"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_C.NAME);
  const {
    0: subcategory,
    1: setSubcategory
  } = (0,react.useState)(subCategoryData);
  const {
    0: catagory,
    1: setCatagory
  } = (0,react.useState)(data.edges); // console.log('categoryC', data);
  // let subcategory;

  function subCategoryMethod(value) {
    return catagory.edges[0].node.tags.edges[0].node.name;
  }

  const filterMethod = value => {
    var tempArr = [];
    data.edges.filter(item => {
      item.node.categories.edges.filter(post => {
        // console.log('checkDtaa', post.node.name);
        if (post.node.name == value) {
          tempArr.push(item);
        } else {}

        return post.node.name == value;
      });
    }); //

    setCatagory(tempArr); //console.log('checkDtaa', catagory.length);
  }; // color


  const switchColor = index => {
    switch (index) {
      case 0:
        "#fb7c00 ";
        break;

      case 1:
        "#fb7c00 ";
        break;

      case 2:
        "#fb7c00 ";
        break;

      case 3:
        "#fb7c00 ";
        break;

      case 4:
        "#fb7c00 ";
        break;

      case 4:
        "#fb7c00 ";
        break;

      default:
        break;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
    px: {
      base: '4',
      lg: '24',
      xl: '58'
    },
    mb: "20",
    py: '18',
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
      justifyContent: 'space-between',
      flexDirection: {
        base: 'column',
        md: 'row'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
        alignItems: 'baseline',
        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
          as: index_esm/* FaCircle */.gbA,
          boxSize: 5,
          mr: "6",
          color: '#ab20ef',
          mb: "10px"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
            as: "h2",
            fontSize: '24px',
            children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_C.NAME
          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
            color: subTitleTextColor,
            children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_C.DESC
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
        display: 'flex',
        alignItems: "center",
        justifyContent: {
          base: 'flex-end'
        },
        mt: {
          base: '4',
          md: '0'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
          mr: '2',
          display: {
            base: 'none',
            md: 'flex'
          },
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
            variant: 'outline',
            colorScheme: "blue",
            rounded: 'none',
            size: "sm",
            onClick: () => {
              setCatagory(data.edges);
            },
            children: "ALL"
          }), subcategory && subcategory.categories.edges.slice(0, 3).map((item, index) => {
            // console.log('cheksub', item);
            return /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
              variant: 'outline',
              colorScheme: "blue",
              rounded: 'none',
              size: "sm",
              onClick: () => {
                filterMethod(item.node.name);
              },
              children: item.node.name
            }, index);
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Select, {
          placeholder: "Select option",
          mr: '2',
          display: {
            base: 'block',
            md: 'none'
          },
          size: "sm" // onClick={() => {
          //   console.log("trisha", value);
          // }}
          ,
          onChange: event => {
            //console.log('trisha', event.target.value);
            filterMethod(event.target.value);
          },
          children: subcategory && subcategory.categories.edges.slice(0, 3).map((item, index) => {
            // console.log('cheksub', item);
            return /*#__PURE__*/jsx_runtime.jsx("option", {
              value: item.node.name // onClick={() => {
              //   console.log("trisha", value);
              //   filterMethod(value);
              //   // filterMethod();
              // }}
              ,
              children: item.node.name
            }, index);
          })
        }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_C.SLUG,
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
            variant: 'outline',
            colorScheme: "blue",
            rounded: 'none',
            size: "sm",
            fontWeight: 'bold',
            padding: "6px 13px",
            border: "2px solid #166cf8",
            color: "#166cf8",
            fontSize: '14px',
            lineHeight: '14px',
            children: {"MORE":"SEE ALL","FOOTER_DESC":" Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
          })
        })]
      })]
    }), catagory && catagory && catagory.length < 1 ? /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
      m: "auto",
      my: 100,
      children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
        textStyles: "h2",
        textAlign: "center",
        children: "No Data Found"
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
      templateColumns: {
        md: '4fr 4fr 4fr',
        sm: 'repeat(1, 1fr)'
      },
      textColor: "white",
      gap: 6,
      my: 6,
      children: [catagory && catagory.slice(0, 1).map((item, index) => {
        var _item$node, _item$node$tags, _item$node$tags$edges, _item$node$tags$edges2;

        const tagName = item === null || item === void 0 ? void 0 : (_item$node = item.node) === null || _item$node === void 0 ? void 0 : (_item$node$tags = _item$node.tags) === null || _item$node$tags === void 0 ? void 0 : (_item$node$tags$edges = _item$node$tags.edges[0]) === null || _item$node$tags$edges === void 0 ? void 0 : (_item$node$tags$edges2 = _item$node$tags$edges.node) === null || _item$node$tags$edges2 === void 0 ? void 0 : _item$node$tags$edges2.name; // .edges[0].node?.name

        return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: item.node.slug,
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
            cursor: "pointer",
            style: {
              position: 'relative'
            },
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
              w: 'full',
              h: catagory.length == 1 ? {
                base: '250px',
                md: '450px'
              } : {
                base: '250px',
                md: '100%'
              },
              backgroundImage: item.node.featuredImage.node.sourceUrl,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                w: 'full',
                justify: 'center',
                bgGradient: 'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);',
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
                  maxW: '2xl',
                  align: 'flex-start',
                  spacing: 6,
                  children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                    p: 4,
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: '10px'
                    },
                    children: tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                      color: "white",
                      bg: index == 0 ? "#fb7c00" : index == 1 ? "#dd03eb" : "#fb7c00" // bg={switchColor}
                      ,
                      rounded: 'none',
                      size: "xs",
                      fontWeight: 'bold',
                      children: tagName
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    p: 4,
                    w: "100%",
                    style: {
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      color: 'white'
                    },
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                      color: 'white',
                      as: "h4",
                      fontSize: "24px",
                      noOfLines: 2,
                      lineHeight: "24px",
                      mb: {
                        base: '12px',
                        md: '37px'
                      },
                      children: item.node.title
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                      mt: "2",
                      alignItems: 'center',
                      children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                        as: index_esm/* FaRegClock */.fSQ,
                        color: 'white',
                        fontSize: "sm"
                      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                        color: 'white',
                        ml: 2,
                        fontSize: "sm",
                        children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                      })]
                    })]
                  })]
                })
              })
            })
          })
        }, index);
      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        children: catagory && catagory.length > 1 ? catagory.slice(1, 4).map((item, index) => {
          var _item$node2, _item$node2$tags, _item$node2$tags$edge, _item$node2$tags$edge2;

          const tagName = item === null || item === void 0 ? void 0 : (_item$node2 = item.node) === null || _item$node2 === void 0 ? void 0 : (_item$node2$tags = _item$node2.tags) === null || _item$node2$tags === void 0 ? void 0 : (_item$node2$tags$edge = _item$node2$tags.edges[0]) === null || _item$node2$tags$edge === void 0 ? void 0 : (_item$node2$tags$edge2 = _item$node2$tags$edge.node) === null || _item$node2$tags$edge2 === void 0 ? void 0 : _item$node2$tags$edge2.name;
          return item && item.node && /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: item.node.slug,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
              py: "4",
              cursor: "pointer",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                w: '70%',
                children: [tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button // bg={'#03a9e7'}
                , {
                  bg: index == 0 ? "#fb7c00" : index == 1 ? "#dd03eb" : "#fb7c00",
                  color: "white",
                  mb: 2,
                  fontSize: "14px",
                  lineHeight: '14px',
                  rounded: 'none',
                  size: "xs",
                  fontWeight: 'bold',
                  children: tagName
                }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                  fontWeight: 'bold',
                  noOfLines: 2,
                  fontSize: "16px",
                  lineHeight: '16px',
                  paddingRight: "2",
                  color: primaryTextColor,
                  children: item.node.title
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                  mt: "2",
                  alignItems: 'center',
                  children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                    as: index_esm/* FaRegClock */.fSQ,
                    color: primaryTextColor,
                    fontSize: 'sm'
                  }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                    ml: 2,
                    color: primaryTextColor,
                    fontSize: 'sm',
                    children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                  })]
                })]
              }), item.node.featuredImage && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                w: '30%',
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                  h: '100%',
                  objectFit: 'cover',
                  src: item.node.featuredImage.node.sourceUrl,
                  alt: item.node.title
                })
              })]
            })
          }, index);
        }) : /*#__PURE__*/jsx_runtime.jsx("div", {})
      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        children: catagory && catagory.slice(4, 7).map((item, index) => {
          var _item$node3, _item$node3$tags, _item$node3$tags$edge, _item$node3$tags$edge2;

          const tagName = item === null || item === void 0 ? void 0 : (_item$node3 = item.node) === null || _item$node3 === void 0 ? void 0 : (_item$node3$tags = _item$node3.tags) === null || _item$node3$tags === void 0 ? void 0 : (_item$node3$tags$edge = _item$node3$tags.edges[0]) === null || _item$node3$tags$edge === void 0 ? void 0 : (_item$node3$tags$edge2 = _item$node3$tags$edge.node) === null || _item$node3$tags$edge2 === void 0 ? void 0 : _item$node3$tags$edge2.name;
          return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: item.node.slug,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
              py: "4",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                w: '70%',
                children: [tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                  bg: index == 0 || index == 1 ? "#fb7c00" : '#ecbd02',
                  color: "white",
                  mb: 2,
                  fontSize: "14px",
                  lineHeight: '14px',
                  rounded: 'none',
                  size: "xs",
                  fontWeight: 'bold',
                  children: tagName
                }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                  fontWeight: 'bold',
                  fontSize: "14px",
                  lineHeight: '14px',
                  noOfLines: 2,
                  paddingRight: "2",
                  color: isLightTheme ? 'black' : 'white',
                  children: item.node.title
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                  mt: "2",
                  alignItems: 'center',
                  children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                    as: index_esm/* FaRegClock */.fSQ,
                    fontSize: 'sm'
                  }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                    ml: 2,
                    fontSize: 'sm',
                    children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                  }), ' ']
                })]
              }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                w: '30%',
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                  h: '100%',
                  objectFit: 'cover',
                  src: item.node.featuredImage.node.sourceUrl,
                  alt: item.node.title
                })
              })]
            }, index)
          }, index);
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
      h: 150,
      bg: '#ededed',
      my: 6
    })]
  });
};

/* harmony default export */ const categories_CategoryC = (CategoryC);
;// CONCATENATED MODULE: ./component/categories/CategoryD.js






 // import ReactPlayer from 'react-player';
// import Video from '../slider/Video';





const CategoryD = props => {
  // theming
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white'; // responsiveness

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    }
  };
  console.log('checkcategoryd', props.data);
  const {
    data
  } = props;
  const tempArr = [1, 2, 3, 4];
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      mb: "20",
      py: '20',
      bg: 'black',
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
        justifyContent: 'space-between',
        flexDirection: {
          base: 'column',
          md: 'row'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
          alignItems: 'baseline',
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
            as: index_esm/* FaCircle */.gbA,
            boxSize: 5,
            mr: "6",
            color: '#ab20ef'
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
              as: "h2",
              fontSize: '24px',
              color: 'white',
              mb: "10px",
              children: "VIDEO"
            }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
              color: 'white',
              children: "The latest entertainment news in the world"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          display: 'flex',
          alignItems: "center",
          justifyContent: {
            base: 'flex-end'
          },
          mt: {
            base: '4',
            md: '0'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
              as: chakra_ui_icons_cjs_prod.ChevronLeftIcon,
              boxSize: 6,
              color: 'white'
            }), ' ', /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
              color: 'white',
              as: chakra_ui_icons_cjs_prod.ChevronRightIcon,
              boxSize: 6
            })]
          }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_D.SLUG,
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
              variant: 'outline',
              colorScheme: "blue",
              rounded: 'none',
              size: "sm",
              fontWeight: 'bold',
              padding: "6px 13px",
              border: "2px solid #166cf8",
              color: "#166cf8",
              fontSize: '14px',
              lineHeight: '14px',
              children: {"MORE":"SEE ALL","FOOTER_DESC":" Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        my: '8',
        children: /*#__PURE__*/jsx_runtime.jsx(react_multi_carousel["default"], {
          arrows: false,
          responsive: responsive,
          autoPlay: false,
          children: data.edges && data.edges.slice(0, 8).map((item, index) => {
            var _item$tag, _item$tag$edges$, _item$tag$edges$$node;

            const videoId = item.node.youtube.videoId;
            const tagName = item === null || item === void 0 ? void 0 : (_item$tag = item.tag) === null || _item$tag === void 0 ? void 0 : (_item$tag$edges$ = _item$tag.edges[0]) === null || _item$tag$edges$ === void 0 ? void 0 : (_item$tag$edges$$node = _item$tag$edges$.node) === null || _item$tag$edges$$node === void 0 ? void 0 : _item$tag$edges$$node.name;
            const featuredImage = videoId && `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
            {
              /* console.log('catD', tagName); */
            }
            return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: item.node.slug,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                cursor: "pointer",
                style: {
                  position: 'relative'
                },
                mx: '2',
                children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                  p: 4,
                  style: {
                    position: 'absolute',
                    left: 0,
                    top: '10px',
                    color: 'white'
                  },
                  children: tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                    bg: '#91b7e7',
                    color: "white",
                    rounded: 'none',
                    size: "xs",
                    fontWeight: 'bold',
                    children: tagName
                  })
                }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                  p: 4,
                  style: {
                    position: 'absolute',
                    right: 0,
                    top: '10px',
                    color: 'white'
                  },
                  children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                    as: index_esm/* FaPlayCircle */.Gzj,
                    boxSize: 14
                  })
                }), featuredImage && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                  draggable: false,
                  style: {
                    width: '100%',
                    height: '100%'
                  },
                  src: featuredImage,
                  alt: item.node.title
                }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                  color: 'white',
                  as: "h4",
                  size: 'md',
                  mt: 2,
                  mb: '38px',
                  "font-size": "24px",
                  "line-height": "24px",
                  children: item.node.title
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                  mt: "2",
                  alignItems: 'center',
                  children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                    as: index_esm/* FaRegClock */.fSQ,
                    color: 'white',
                    fontSize: 'sm'
                  }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                    color: 'white',
                    ml: 2,
                    fontSize: 'sm',
                    children: "Oct 18, 2019"
                  })]
                })]
              })
            }, index);
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {}), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
        templateColumns: {
          md: '4fr 4fr 4fr 4fr',
          sm: 'repeat(1, 1fr)'
        },
        textColor: "white",
        gap: 8,
        my: 6,
        children: data.edges && data.edges.slice(8, 16).map((item, index) => {
          return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: item.node.slug,
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
              cursor: "pointer",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                py: "4",
                children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                  w: '40%',
                  children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                    h: '100%',
                    objectFit: 'cover',
                    src: item.node.featuredImage.node.sourceUrl,
                    alt: item.node.title
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                  w: '60%',
                  px: '4',
                  children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                    colorScheme: 'orange',
                    color: "white",
                    mb: 2,
                    rounded: 'none',
                    size: "xs",
                    fontWeight: 'bold',
                    children: "BITCOIN"
                  }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                    fontWeight: 'medium',
                    noOfLines: 3,
                    lineHeight: "16px",
                    paddingRight: "2",
                    color: 'white',
                    fontSize: "16px",
                    children: item.node.title
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                    mt: "2",
                    alignItems: 'center',
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                      as: index_esm/* FaRegClock */.fSQ,
                      color: 'white'
                    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                      color: 'white',
                      ml: 4,
                      fontSize: '14px',
                      children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                    })]
                  })]
                })]
              })
            })
          }, index);
        })
      })]
    })
  });
};

/* harmony default export */ const categories_CategoryD = (CategoryD);
;// CONCATENATED MODULE: ./component/categories/CategoryE.js










const CategoryE = props => {
  // theming
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white'; // store data

  const {
    data
  } = props; // console.log('categoryE', data);
  // tempvar

  const tempArrFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tempArrSecond = [1, 2, 3, 4, 5];
  const tempArrThird = [1, 2, 3, 4, 5];
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      mb: "20",
      py: '18',
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
        templateColumns: {
          md: '9fr 3fr',
          sm: 'repeat(1, 1fr)'
        },
        textColor: "white",
        gap: 6,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
            justifyContent: 'space-between',
            flexDirection: {
              base: 'column',
              md: 'row'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
              alignItems: 'baseline',
              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                as: index_esm/* FaCircle */.gbA,
                boxSize: 5,
                mr: "6",
                color: '#ab20ef'
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                  as: "h2",
                  fontSize: '24px',
                  mb: "10px",
                  color: primaryTextColor,
                  children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_E.NAME
                }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                  color: subTitleTextColor,
                  children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_E.DESC
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
            templateColumns: {
              md: '4fr 4fr 4fr',
              sm: 'repeat(1, 1fr)'
            },
            textColor: "white",
            gap: 6,
            mt: 6,
            children: data.edges && data.edges.slice(0, 9).map((item, index) => {
              var _item$node, _item$node$tags, _item$node$tags$edges, _item$node$tags$edges2;

              const tagName = item === null || item === void 0 ? void 0 : (_item$node = item.node) === null || _item$node === void 0 ? void 0 : (_item$node$tags = _item$node.tags) === null || _item$node$tags === void 0 ? void 0 : (_item$node$tags$edges = _item$node$tags.edges[0]) === null || _item$node$tags$edges === void 0 ? void 0 : (_item$node$tags$edges2 = _item$node$tags$edges.node) === null || _item$node$tags$edges2 === void 0 ? void 0 : _item$node$tags$edges2.name;
              return item && item.node && /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                href: item.node.slug,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                  cursor: "pointer",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    style: {
                      position: 'relative'
                    },
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                      style: {
                        position: 'absolute',
                        left: 0,
                        bottom: '0',
                        color: 'white'
                      },
                      children: tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                        bg: '#91b7e7',
                        color: "white",
                        rounded: 'none',
                        size: "sm",
                        fontSize: '16px',
                        lineHeight: "16px",
                        fontWeight: 'bold',
                        children: tagName
                      })
                    }), item.node.featuredImage && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                      src: item.node.featuredImage.node.sourceUrl,
                      alt: item.node.title,
                      objectFit: 'cover',
                      w: '100%',
                      h: '162px'
                    })]
                  }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                    fontWeight: '600',
                    my: '4',
                    fontSize: "16px",
                    lineHeight: "16px",
                    color: primaryTextColor,
                    children: item.node.title
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                    mt: "2",
                    alignItems: 'center',
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                      as: index_esm/* FaRegClock */.fSQ,
                      color: primaryTextColor,
                      fontSize: 'sm'
                    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                      ml: 2,
                      color: primaryTextColor,
                      fontSize: 'sm',
                      children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                    })]
                  })]
                })
              }, index);
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
            templateColumns: {
              md: '12fr',
              sm: 'repeat(1, 1fr)'
            },
            textColor: "white",
            gap: 1,
            children: tempArrSecond.map((item, index) => {
              return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                href: 'item.node.slug',
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                  cursor: "pointer",
                  bg: '#03a9e7',
                  p: '4',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
                    direction: "row",
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                      as: index_esm/* FaFacebook */.Am9,
                      boxSize: 10,
                      color: 'white',
                      mr: 4
                    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
                      orientation: "vertical",
                      borderColor: '1px solid gray'
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                    justifyContent: 'space-around',
                    w: '100%',
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                      color: 'white',
                      children: "0"
                    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                      color: 'white',
                      children: "Followers"
                    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                      color: 'white',
                      as: chakra_ui_icons_cjs_prod.ChevronRightIcon,
                      boxSize: 6
                    })]
                  })]
                })
              }, index);
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
            my: 4,
            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
              as: 'h4',
              size: 'lg',
              color: primaryTextColor,
              children: "Most Viewed"
            }), data.edges && data.edges.slice(9, 14).map((item, index) => {
              return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                href: item.node.slug,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                  cursor: 'pointer',
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                    my: 4,
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Circle, {
                      size: "34px",
                      bg: "tomato",
                      color: "white",
                      mr: 4,
                      cursor: "default",
                      children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text // mx="auto"
                      // my="auto"
                      , {
                        children: index + 1
                      })
                    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                      lineHeight: 'normal',
                      fontSize: "sm",
                      color: primaryTextColor,
                      children: item.node.title
                    })]
                  }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {})]
                })
              }, index);
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const categories_CategoryE = (CategoryE);
;// CONCATENATED MODULE: ./component/categories/CategoryF.js






 // import Editorpicks from '../slider/EditorPicks';
// import VideoSecond from '../slider/VideoSecond';




const CategoryF = props => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    }
  }; // theming

  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white'; // store data

  const {
    data
  } = props; // console.log('categoryF', data);

  const tempArr = [1, 2, 3, 4];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
    px: {
      base: '4',
      lg: '24',
      xl: '58'
    },
    mb: "20",
    py: '20',
    bg: !isLightTheme ? 'black' : '#ededed',
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
      justifyContent: 'space-between',
      flexDirection: {
        base: 'column',
        md: 'row'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
        alignItems: 'baseline',
        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
          as: index_esm/* FaCircle */.gbA,
          boxSize: 5,
          mr: "6",
          color: '#ab20ef'
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
            as: "h2",
            fontSize: '24px',
            mb: "10px",
            color: primaryTextColor,
            children: "ACADEMY"
          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
            children: "The latest entertainment news in the world"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
        display: 'flex',
        alignItems: "center",
        justifyContent: {
          base: 'flex-end'
        },
        mt: {
          base: '4',
          md: '0'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
            as: chakra_ui_icons_cjs_prod.ChevronLeftIcon,
            boxSize: 6
          }), ' ', /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
            as: chakra_ui_icons_cjs_prod.ChevronRightIcon,
            boxSize: 6
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_F.SLUG,
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
            variant: 'outline',
            colorScheme: "blue",
            rounded: 'none',
            size: "sm",
            fontWeight: 'bold',
            padding: "6px 13px",
            border: "2px solid #166cf8",
            color: "#166cf8",
            fontSize: '14px',
            lineHeight: '14px',
            children: {"MORE":"SEE ALL","FOOTER_DESC":" Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
      my: '8',
      children: /*#__PURE__*/jsx_runtime.jsx(react_multi_carousel["default"], {
        arrows: false,
        responsive: responsive,
        autoPlay: false,
        children: data.edges && data.edges.slice(4, 8).map((item, index) => {
          var _item$node, _item$node$tags, _item$node$tags$edges, _item$node$tags$edges2;

          const tagName = item === null || item === void 0 ? void 0 : (_item$node = item.node) === null || _item$node === void 0 ? void 0 : (_item$node$tags = _item$node.tags) === null || _item$node$tags === void 0 ? void 0 : (_item$node$tags$edges = _item$node$tags.edges[0]) === null || _item$node$tags$edges === void 0 ? void 0 : (_item$node$tags$edges2 = _item$node$tags$edges.node) === null || _item$node$tags$edges2 === void 0 ? void 0 : _item$node$tags$edges2.name;
          const videoId = item.node.youtube.videoId;
          const featuredImage = videoId && `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
          return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: item.node.slug,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
              cursor: 'pointer',
              style: {
                position: 'relative'
              },
              mx: '2',
              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                p: 4,
                style: {
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                  color: 'white'
                },
                children: tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                  bg: '#91b7e7',
                  color: "white",
                  rounded: 'none',
                  size: "xs",
                  fontWeight: 'bold',
                  children: tagName
                })
              }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                p: 4,
                style: {
                  position: 'absolute',
                  right: 0,
                  top: '10px',
                  color: 'white'
                },
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                  as: index_esm/* FaPlayCircle */.Gzj,
                  boxSize: 14
                })
              }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                draggable: false,
                style: {
                  width: '100%',
                  height: '100%'
                },
                src: featuredImage,
                alt: item.node.title
              })]
            })
          }, index);
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {
      border: '1px solid gray !important'
    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
      templateColumns: {
        md: '4fr 4fr 4fr 4fr',
        sm: 'repeat(1, 1fr)'
      },
      textColor: "white",
      gap: 6,
      my: 6,
      children: data.edges && data.edges.slice(4, 8).map((item, index) => {
        var _item$node2, _item$node2$tags, _item$node2$tags$edge, _item$node2$tags$edge2;

        const tagName = item === null || item === void 0 ? void 0 : (_item$node2 = item.node) === null || _item$node2 === void 0 ? void 0 : (_item$node2$tags = _item$node2.tags) === null || _item$node2$tags === void 0 ? void 0 : (_item$node2$tags$edge = _item$node2$tags.edges[0]) === null || _item$node2$tags$edge === void 0 ? void 0 : (_item$node2$tags$edge2 = _item$node2$tags$edge.node) === null || _item$node2$tags$edge2 === void 0 ? void 0 : _item$node2$tags$edge2.name;
        return item && item.node && /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: item.node.slug,
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
            cursor: "pointer",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
              py: "4",
              w: '100%',
              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                w: '40%',
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                  h: '100%',
                  objectFit: 'cover',
                  src: item.node.featuredImage.node.sourceUrl,
                  alt: item.node.title
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                w: '60%',
                px: '4',
                children: [tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button // colorScheme={'#fb7c00'}
                , {
                  bg: '#fb7c00',
                  color: "white",
                  mb: 2,
                  rounded: 'none',
                  size: "xs",
                  fontWeight: 'bold',
                  children: tagName
                }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                  fontWeight: 'bold',
                  noOfLines: 3,
                  lineHeight: "initial",
                  paddingRight: "2",
                  color: primaryTextColor,
                  children: item.node.title
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                  mt: "2",
                  alignItems: 'center',
                  children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                    as: index_esm/* FaRegClock */.fSQ,
                    color: primaryTextColor,
                    fontSize: 'sm'
                  }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                    ml: 2,
                    color: primaryTextColor,
                    fontSize: 'sm',
                    children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                  })]
                })]
              })]
            })
          })
        }, index);
      })
    })]
  });
};

/* harmony default export */ const categories_CategoryF = (CategoryF);
;// CONCATENATED MODULE: ./component/categories/CategoryG.js










const CategoryG = props => {
  // theming
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white'; // responsiveness of carousel

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    }
  }; // store data

  const {
    data
  } = props; // console.log('categoryG', data);
  // get post  from api

  const postArr = [];
  var k = 0;

  for (let i = 0; i < data.edges.length / 6; i++) {
    if (i > data.edges.length / 6) {
      break;
    }

    var postObj = [];

    for (let j = 0; j < 3; j++) {
      const title = data.edges[k].node.title;
      const featuredImage = data.edges[k].node.featuredImage.node.sourceUrl;
      const date = data.edges[k].node.date;
      const slug = data.edges[k].node.slug;
      const tag = data.edges[k].node.tags;
      const tempObj = {
        title: title,
        featuredImage: featuredImage,
        date: date,
        slug: slug,
        tag: tag
      };
      postObj.push(tempObj);
      k = k + 1;
    }

    postArr.push(postObj);
  } // console.log('looptitle', postArr);


  return /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
    px: {
      base: '4',
      lg: '24',
      xl: '58'
    },
    mb: "20",
    children: postArr && /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
      templateColumns: {
        md: '12fr ',
        lg: '9fr 3fr',
        sm: 'repeat(1, 1fr)'
      },
      textColor: "white",
      gap: 4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
          justifyContent: 'space-between',
          flexDirection: {
            base: 'column',
            md: 'row'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
            alignItems: 'baseline',
            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
              as: index_esm/* FaCircle */.gbA,
              boxSize: 5,
              mr: "6",
              color: '#ab20ef'
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                as: "h2",
                fontSize: '24px',
                mb: "10px",
                color: primaryTextColor,
                children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_G.NAME
              }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                color: subTitleTextColor,
                children: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_G.DESC
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
            display: 'flex',
            alignItems: "center",
            justifyContent: {
              base: 'flex-end'
            },
            mt: {
              base: '4',
              md: '0'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
              children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                as: chakra_ui_icons_cjs_prod.ChevronLeftIcon,
                boxSize: 6
              }), ' ', /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                as: chakra_ui_icons_cjs_prod.ChevronRightIcon,
                boxSize: 6
              })]
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_G.SLUG,
              children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                variant: 'outline',
                colorScheme: "blue",
                rounded: 'none',
                size: "sm",
                fontWeight: 'bold',
                padding: "6px 13px",
                border: "2px solid #166cf8",
                color: "#166cf8",
                fontSize: '14px',
                lineHeight: '14px',
                children: {"MORE":"SEE ALL","FOOTER_DESC":" Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us."}.MORE
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
          templateColumns: {
            md: '12fr',
            sm: 'repeat(1, 1fr)'
          },
          textColor: "white",
          gap: 4,
          mt: 6,
          children: /*#__PURE__*/jsx_runtime.jsx(react_multi_carousel["default"], {
            responsive: responsive,
            autoPlay: false,
            children: postArr && postArr.map((post, index) => {
              return /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                templateColumns: {
                  md: '12fr',
                  sm: 'repeat(1, 1fr)'
                },
                textColor: "white",
                children: post && post.map((item, j) => {
                  var _item$tag, _item$tag$edges$, _item$tag$edges$$node;

                  const tagName = item === null || item === void 0 ? void 0 : (_item$tag = item.tag) === null || _item$tag === void 0 ? void 0 : (_item$tag$edges$ = _item$tag.edges[0]) === null || _item$tag$edges$ === void 0 ? void 0 : (_item$tag$edges$$node = _item$tag$edges$.node) === null || _item$tag$edges$$node === void 0 ? void 0 : _item$tag$edges$$node.name;
                  return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                    href: item.slug,
                    children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                      cursor: 'pointer',
                      px: "4",
                      borderRight: '1px solid #b3b3b3',
                      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                        py: "4",
                        borderBottom: '1px solid #b3b3b3',
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                          w: '70%',
                          pr: "2",
                          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                            fontSize: '16px',
                            lineHeight: "16px",
                            fontWeight: 'bold',
                            noOfLines: 2,
                            color: isLightTheme ? 'black' : 'white',
                            mb: '20px',
                            children: item.title
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                            mt: "2",
                            alignItems: 'center',
                            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                              as: index_esm/* FaRegClock */.fSQ,
                              color: primaryTextColor,
                              fontSize: 'sm'
                            }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                              ml: 2,
                              color: primaryTextColor,
                              fontSize: 'sm',
                              children: (0,date_fns.format)(new Date(item.date), 'yyyy-MM-dd')
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                          w: '30%',
                          children: item.featuredImage && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                            h: '100%',
                            objectFit: 'cover',
                            src: item.featuredImage,
                            alt: item.title
                          })
                        })]
                      })
                    })
                  }, j);
                })
              }, index);
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        h: {
          base: '100px',
          lg: "100%"
        },
        bg: "#ededed"
      })]
    })
  });
};

/* harmony default export */ const categories_CategoryG = (CategoryG);
// EXTERNAL MODULE: ./component/NewsLetter.js
var NewsLetter = __webpack_require__(98097);
;// CONCATENATED MODULE: ./component/slider/brand-list.js






const BrandList = props => {
  // const primaryTextColor = isLightTheme ? 'black' : 'white';
  // const secondaryTextColor = isLightTheme ? 'white' : 'black';
  // const brand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {
    cryptoData
  } = props;
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    }
  };
  return /*#__PURE__*/jsx_runtime.jsx(react_multi_carousel["default"], {
    responsive: responsive,
    partialVisible: true,
    arrows: false,
    infinite: true,
    autoPlay: true,
    transitionDuration: 500,
    autoPlaySpeed: 2000,
    children: cryptoData.slice(0, 5).map((item, index) => {
      return item && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
        py: "2",
        alignItems: 'center',
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
          display: 'flex',
          w: '100%',
          pr: "2",
          borderRight: '1px solid lightgray',
          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
            ml: 2,
            alignItems: 'center',
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
              objectFit: "contain",
              h: "30px",
              w: "30px",
              src: item.image,
              alt: item.name
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
            mx: '2',
            w: '40%',
            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
              fontWeight: 'semibold',
              fontSize: "sm",
              children: item.name
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
              fontSize: 'xs',
              children: [item.symbol.toUpperCase(), "(24h)"]
            })]
          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
            w: '25%',
            mx: '2',
            alignItems: 'center',
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
              objectFit: "contain" // w={'100%'}
              ,
              h: "auto",
              src: "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/cardino-chart.png"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
            mx: '2',
            w: '25%',
            alignItems: 'center',
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Heading, {
              as: 'h6',
              size: "xs",
              children: ["$", item.current_price]
            })
          })]
        })
      }, index);
    })
  });
};

/* harmony default export */ const brand_list = (BrandList);
;// CONCATENATED MODULE: ./component/HeroSection.js








 // import Bulletslider from './slider/BulletSlider';





const HeroSection = props => {
  // responsiveness
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      paritialVisibilityGutter: 30
    }
  }; // theme

  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white'; // store data

  const {
    data,
    cryptoData
  } = props; // console.log('herosection', data);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
      my: {
        base: '2',
        md: '8'
      },
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
        border: '1px solid ',
        px: 2,
        children: /*#__PURE__*/jsx_runtime.jsx(brand_list, {
          cryptoData: cryptoData
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      mb: "20",
      mt: '8',
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
        templateColumns: {
          md: '6fr 3fr 3fr',
          sm: 'repeat(1, 1fr)'
        },
        textColor: "white",
        gap: 3,
        children: [/*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
          children: /*#__PURE__*/jsx_runtime.jsx(react_multi_carousel["default"], {
            showDots: true,
            arrows: false,
            className: "bulletslider",
            responsive: responsive,
            infinite: true,
            autoPlay: true,
            transitionDuration: 500,
            autoPlaySpeed: 4000,
            children: data.edges && data.edges.slice(0, 5).map((item, index) => {
              var _item$node, _item$node$tags, _item$node$tags$edges, _item$node$tags$edges2;

              const tagName = item === null || item === void 0 ? void 0 : (_item$node = item.node) === null || _item$node === void 0 ? void 0 : (_item$node$tags = _item$node.tags) === null || _item$node$tags === void 0 ? void 0 : (_item$node$tags$edges = _item$node$tags.edges[0]) === null || _item$node$tags$edges === void 0 ? void 0 : (_item$node$tags$edges2 = _item$node$tags$edges.node) === null || _item$node$tags$edges2 === void 0 ? void 0 : _item$node$tags$edges2.name;
              {
                /* console.log('checktaghero', item); */
              }
              return /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                href: item.node.slug,
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                  cursor: "pointer",
                  style: {
                    position: 'relative'
                  },
                  children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                    w: 'full',
                    h: {
                      base: '250px',
                      md: '470px'
                    },
                    backgroundImage: item.node.featuredImage.node.sourceUrl,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                      w: 'full',
                      justify: 'center',
                      bgGradient: 'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e)',
                      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
                        maxW: '2xl',
                        align: 'flex-start',
                        spacing: 6,
                        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                          p: 4,
                          style: {
                            position: 'absolute',
                            left: 0,
                            top: '10px'
                          },
                          children: tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                            color: "white",
                            bg: "#03a9e7",
                            rounded: 'none',
                            size: "xs",
                            fontWeight: 'bold',
                            children: tagName
                          })
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                          p: 4,
                          w: "100%",
                          style: {
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            color: 'white'
                          },
                          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                            color: 'white',
                            as: "h4",
                            fontSize: {
                              base: 'sm',
                              md: '2xl'
                            },
                            noOfLines: 2,
                            lineHeight: "24px",
                            mb: {
                              base: '12px',
                              md: '37px'
                            },
                            children: item.node.title
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                            mt: "2",
                            alignItems: 'center',
                            children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                              as: index_esm/* FaRegClock */.fSQ,
                              color: 'white',
                              fontSize: "sm"
                            }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                              color: 'white',
                              ml: 2,
                              fontSize: "sm",
                              children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                            })]
                          })]
                        })]
                      })
                    })
                  })
                })
              }, index);
            })
          })
        }), data.edges && data.edges.slice(5, 6).map((item, index) => {
          var _item$node2, _item$node2$tags, _item$node2$tags$edge, _item$node2$tags$edge2;

          const tagName = item === null || item === void 0 ? void 0 : (_item$node2 = item.node) === null || _item$node2 === void 0 ? void 0 : (_item$node2$tags = _item$node2.tags) === null || _item$node2$tags === void 0 ? void 0 : (_item$node2$tags$edge = _item$node2$tags.edges[0]) === null || _item$node2$tags$edge === void 0 ? void 0 : (_item$node2$tags$edge2 = _item$node2$tags$edge.node) === null || _item$node2$tags$edge2 === void 0 ? void 0 : _item$node2$tags$edge2.name;
          return item && item.node && /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: item.node.slug,
            children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
              w: 'full',
              h: {
                base: '250px',
                md: '100%'
              },
              backgroundImage: item.node.featuredImage.node.sourceUrl,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                style: {
                  position: 'relative'
                },
                w: 'full',
                justify: 'center',
                bgGradient: 'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);',
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
                  maxW: '2xl',
                  align: 'flex-start',
                  spacing: 6,
                  children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                    p: 4,
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: '10px',
                      color: 'white'
                    },
                    children: tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                      bg: '#fb7c00',
                      color: "white",
                      rounded: 'none',
                      size: "xs",
                      fontWeight: 'bold',
                      children: tagName
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                    p: 4,
                    style: {
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      color: 'white'
                    },
                    children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                      color: 'white',
                      as: "h4",
                      fontSize: {
                        base: 'sm',
                        md: 'lg'
                      },
                      noOfLines: 2,
                      lineHeight: "22px",
                      mb: {
                        base: '12px',
                        md: '37px'
                      },
                      children: item.node.title
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                      mt: "2",
                      alignItems: 'center',
                      children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                        as: index_esm/* FaRegClock */.fSQ,
                        color: 'white',
                        fontSize: "sm"
                      }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                        color: 'white',
                        ml: 2,
                        fontSize: "sm",
                        children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                      })]
                    })]
                  })]
                })
              })
            })
          }, index);
        }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
          display: 'grid',
          children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
            templateColumns: {
              md: '12fr',
              sm: 'repeat(1, 1fr)'
            },
            textColor: "white",
            gap: 3,
            children: data.edges && data.edges.slice(6, 8).map((item, index) => {
              var _item$node3, _item$node3$tags, _item$node3$tags$edge, _item$node3$tags$edge2;

              const tagName = item === null || item === void 0 ? void 0 : (_item$node3 = item.node) === null || _item$node3 === void 0 ? void 0 : (_item$node3$tags = _item$node3.tags) === null || _item$node3$tags === void 0 ? void 0 : (_item$node3$tags$edge = _item$node3$tags.edges[0]) === null || _item$node3$tags$edge === void 0 ? void 0 : (_item$node3$tags$edge2 = _item$node3$tags$edge.node) === null || _item$node3$tags$edge2 === void 0 ? void 0 : _item$node3$tags$edge2.name; // console.log('checkiteem', item);

              return item && item.node && /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                href: item.node.slug,
                children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                  w: 'full',
                  h: {
                    base: '250px',
                    md: '100%'
                  },
                  backgroundImage: item.node.featuredImage.node.sourceUrl,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  children: /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                    style: {
                      position: 'relative'
                    },
                    w: 'full',
                    justify: 'center',
                    bgGradient: 'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);',
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
                      maxW: '2xl',
                      align: 'flex-start',
                      spacing: 6,
                      children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                        p: 4,
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          color: 'white'
                        },
                        children: tagName && /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                          bg: index == 0 ? "#dd03eb" : "#ecbd02",
                          color: "white",
                          rounded: 'none',
                          size: "xs",
                          fontWeight: 'bold',
                          children: tagName
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                        p: 4,
                        style: {
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          color: 'white'
                        },
                        children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                          color: 'white',
                          as: "h4",
                          fontSize: {
                            base: 'sm',
                            md: 'lg'
                          },
                          noOfLines: 2,
                          lineHeight: "22px",
                          mb: {
                            base: '12px',
                            md: '37px'
                          },
                          children: item.node.title
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                          mt: "2",
                          alignItems: 'center',
                          children: [/*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                            as: index_esm/* FaRegClock */.fSQ,
                            color: 'white',
                            fontSize: "sm"
                          }), /*#__PURE__*/jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                            color: 'white',
                            ml: 2,
                            fontSize: "sm",
                            children: (0,date_fns.format)(new Date(item.node.date), 'yyyy-MM-dd')
                          })]
                        })]
                      })]
                    })
                  })
                })
              }, index);
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const component_HeroSection = (HeroSection);
;// CONCATENATED MODULE: ./component/Home.js












 // import CategoryK from './categories/CategoryK';

 // import Brandlist from './slider/BrandList';
// import Bulletslider from './slider/BulletSlider';






const Home = props => {
  // theme
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white'; // data store

  const {
    post,
    cryptoData,
    heroSectionData,
    sideBarData,
    categoryAData,
    categoryBData,
    categoryCData,
    categoryDData,
    categoryEData,
    categoryFData,
    categoryGData,
    subCategoryData
  } = props; //console.log('crytodata', cryptoData);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(component_HeroSection, {
      data: heroSectionData,
      cryptoData: cryptoData
    }), /*#__PURE__*/jsx_runtime.jsx(categories_CategoryA, {
      data: categoryAData
    }), /*#__PURE__*/jsx_runtime.jsx(categories_CategoryB, {
      data: categoryBData
    }), /*#__PURE__*/jsx_runtime.jsx(categories_CategoryC, {
      data: categoryCData,
      subCategoryData: subCategoryData
    }), /*#__PURE__*/jsx_runtime.jsx(categories_CategoryD, {
      data: categoryDData
    }), /*#__PURE__*/jsx_runtime.jsx(categories_CategoryE, {
      data: categoryEData
    }), /*#__PURE__*/jsx_runtime.jsx(categories_CategoryF, {
      data: categoryFData
    }), /*#__PURE__*/jsx_runtime.jsx(categories_CategoryG, {
      data: categoryGData
    })]
  });
};

/* harmony default export */ const component_Home = (Home);
// EXTERNAL MODULE: ./component/menu/Navbar.js + 2 modules
var Navbar = __webpack_require__(55727);
;// CONCATENATED MODULE: ./pages/index.js




 // import Videoslider from '../component/slider/Video';









const Index = ({
  allPosts: {
    edges
  },
  preview,
  menu,
  cryptoData,
  heroSectionData,
  sideBarData,
  categoryAData,
  categoryBData,
  categoryCData,
  categoryDData,
  categoryEData,
  categoryFData,
  categoryGData,
  subCategoryData
}) => {
  var _edges$;

  // theme
  const {
    colorMode,
    toggleColorMode
  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white'; //  data store

  const heroPost = (_edges$ = edges[0]) === null || _edges$ === void 0 ? void 0 : _edges$.node;
  const morePosts = edges.slice(1); // console.log('checkdata', heroSectionData);

  const menuItems = menu; // console.log('menucheck=', menu);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head["default"], {
      children: [/*#__PURE__*/jsx_runtime.jsx("title", {
        "data-rh": "true",
        children: "Metadesk - get the latest blockchain news"
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "description",
        content: "Get the latest news for Bollywood, IPL, Sports and Other Social breaking news"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(component_Home, {
      post: edges,
      cryptoData: cryptoData,
      heroSectionData: heroSectionData,
      sideBarData: sideBarData,
      categoryAData: categoryAData,
      categoryBData: categoryBData,
      categoryCData: categoryCData,
      subCategoryData: subCategoryData,
      categoryDData: categoryDData,
      categoryEData: categoryEData,
      categoryFData: categoryFData,
      categoryGData: categoryGData
    })]
  });
};

/* harmony default export */ const pages = (Index);
async function getStaticProps({
  preview = false
}) {
  const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview);
  const menuData = await (0,api/* getHeaderMenuByName */.BV)("Main menu");
  const heroSectionData = await (0,api/* getAllPostsForHome */.DT)(preview); // await getCateogryRecentPostbyName(
  //   'categoryName',
  //   process.env.home.heroSection.NAME
  // );

  const sideBarData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.SIDEBAR.SIDEBAR_NAME);
  const cryptoData = await (0,api/* getCryptoStats */.Br)();
  const categoryAData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_A.NAME);
  const categoryBData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_B.NAME);
  const categoryCData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_C.NAME);
  const categoryDData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_D.NAME);
  const categoryEData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_E.NAME);
  const categoryFData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_F.NAME);
  const categoryGData = await (0,api/* getCateogryRecentPostbyName */.Yd)('categoryName', {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.CATEGORY_G.NAME);
  const subCategoryData = await (0,api/* getCategoryByName */.by)();
  return {
    props: {
      allPosts,
      preview,
      menu: menuData.menu,
      cryptoData: cryptoData,
      heroSectionData: heroSectionData,
      sideBarData: sideBarData,
      categoryAData: categoryAData,
      categoryBData: categoryBData,
      categoryCData: categoryCData,
      categoryDData: categoryDData,
      categoryEData: categoryEData,
      categoryFData: categoryFData,
      categoryGData: categoryGData,
      subCategoryData: subCategoryData
    },
    revalidate: 15 //10 minutes

  };
}

/***/ }),

/***/ 91573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(6324)

      const appMod = __webpack_require__(85623)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(8834)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89894),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,
        reactRoot: false,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/",
        buildId: "4TQV5Fm4vyzCmx3B0N_4K",
        escapedBuildId: "4TQV5Fm4vyzCmx3B0N_4K",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"0971420e6faa3af86dadf6ac2b6e4ae3",previewModeSigningKey:"3fe14e92223dc618eb4aad2f1547912e0247775d75e4485f08f52f58a44e0bd2",previewModeEncryptionKey:"0fdb7eeb12419ed7ea6e5f567ee35c61ccf265e337f201bc368fcd062901f819"}
      })
      
    

/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [848,292,529,102,482], () => (__webpack_exec__(91573)));
module.exports = __webpack_exports__;

})();