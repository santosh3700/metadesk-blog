"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 12157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23863);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25482);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89583);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47292);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);












const Search = props => {
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
  const {
    allPosts
  } = props;
  var {
    0: totalPost,
    1: setTotalPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(allPosts.edges); //console.log('serchpost', totalPost);
  // setTotalPost(allPosts);

  const searchString = searchValue => {
    if (searchValue != null) {}

    const filterData = totalPost.filter(post => {
      return post.node.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setTotalPost(filterData);

    if (searchValue === '') {
      reset();
    }
  };

  const reset = () => {
    setTotalPost(allPosts.edges);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
      px: {
        base: '4',
        lg: '24',
        xl: '58'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        textAlign: 'center',
        py: 10,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            my: '4',
            display: {
              base: 'block',
              md: 'flex'
            } // alignContent="center"
            ,
            alignItems: 'center',
            alignSelf: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
              w: {
                base: '80%',
                md: '50%'
              },
              h: "16",
              placeholder: "Search Post",
              mr: '4',
              rounded: 'lg' // bg="gray.300"
              ,
              onChange: e => searchString(e.target.value)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              as: react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaSearch */ .U41,
              boxSize: 6,
              m: '0'
            })]
          })
        })
      }), totalPost.slice(0, 10).map((item, index) => {
        var _item$node, _item$node$featuredIm;

        const author = item === null || item === void 0 ? void 0 : (_item$node = item.node) === null || _item$node === void 0 ? void 0 : _item$node.author.node;
        const imagePath = (_item$node$featuredIm = item.node.featuredImage) === null || _item$node$featuredIm === void 0 ? void 0 : _item$node$featuredIm.node.sourceUrl;
        return item && item.node && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: item.node.slug,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
            cursor: "pointer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              templateColumns: {
                md: '3fr 9fr',
                sm: 'repeat(2, 1fr)'
              } // textColor="white"
              ,
              gap: 6,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {
                  h: '100%',
                  objectFit: 'cover',
                  src: imagePath,
                  alt: item.node.title
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                  as: "h4",
                  size: 'md',
                  children: item.node.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                  mt: "2",
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    children: ["By ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("b", {
                      children: `${author.name} `
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    ml: 4,
                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(item.node.date), 'yyyy-MM-dd')
                  })]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              my: 6,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {})
            })]
          })
        }, index);
      })]
    })
  });
};

async function getStaticProps({
  preview = false
}) {
  const menuData = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getHeaderMenuByName */ .BV)("Main menu");
  const allPosts = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .getAllPostsForHome */ .DT)(preview);
  return {
    props: {
      allPosts: allPosts,
      menu: menuData.menu
    },
    revalidate: 15 //10 minutes

  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ 27556:
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

      const compMod = __webpack_require__(12157)

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
        page: "/search",
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
var __webpack_exports__ = __webpack_require__.X(0, [848,292,102,482], () => (__webpack_exec__(27556)));
module.exports = __webpack_exports__;

})();