(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 65802:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-body_content__fqQS1"
};


/***/ }),

/***/ 91219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
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

      const documentModule = __webpack_require__(57081)

      const appMod = __webpack_require__(21482)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(33981)

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
        errorModule: __webpack_require__(97345),
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
        page: "/[...slug]",
        buildId: "F5CZ3xft7GQHQRHVY00do",
        escapedBuildId: "F5CZ3xft7GQHQRHVY00do",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"bfd6ecf45ea5b772e2d7f88e942cf9b7",previewModeSigningKey:"0aa6404d46125b8a04687bdda470bd954134c53d01bb5f09622039c3181ee0fb",previewModeEncryptionKey:"a577c9bbcc0da21309d1d9f2eac30df5a2389e0bb2007874c7173dcbb260e535"}
      })
      
    

/***/ }),

/***/ 33981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(23863);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./component/seo/ArchiveSeo.js



function ArchiveSeo({ data , pageType , pageName  }) {
    const seo = data.pageInfo.seo;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "robots",
                content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: `${pageType} : ${pageName}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: seo.schema.raw
                }
            })
        ]
    });
}
/* harmony default export */ const seo_ArchiveSeo = (ArchiveSeo);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./component/archives/PostItem.js





function PostItem({ post  }) {
    const postItem = post.node;
    const title = postItem.title;
    const imagePath = postItem.featuredImage.node.sourceUrl;
    const author = postItem.author.node.name;
    const date = new Date(postItem.date);
    const uri = postItem.uri;
    //const date = new Date()
    return /*#__PURE__*/ _jsx(Link, {
        href: uri,
        children: /*#__PURE__*/ _jsx("a", {
            children: /*#__PURE__*/ _jsxs(Box, {
                maxW: "lg",
                borderWidth: "1px",
                minHeight: "200px",
                overflow: "hidden",
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: imagePath,
                        width: 320,
                        height: 180,
                        layout: "responsive",
                        alt: title
                    }),
                    /*#__PURE__*/ _jsxs(Box, {
                        p: "4",
                        children: [
                            /*#__PURE__*/ _jsxs(Text, {
                                fontSize: "xs",
                                children: [
                                    "By ",
                                    /*#__PURE__*/ _jsx("b", {
                                        children: author
                                    }),
                                    "on ",
                                    /*#__PURE__*/ _jsx("b", {
                                        children: date.toDateString()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(Text, {
                                fontSize: "lg",
                                fontWeight: "semibold",
                                children: /*#__PURE__*/ _jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: title
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const archives_PostItem = ((/* unused pure expression or super */ null && (PostItem)));

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./component/archives/ArchiveHeroSection.js







const ArchiveHeroSection = (props)=>{
    const post = props.newsData;
    const router = useRouter();
    const pathName = router.asPath;
    const pathArr = router.asPath.split("/");
    const name1 = pathArr[pathArr.length - 1];
    const typeName = name1.split("-").join(" ").toUpperCase();
    const breadcrumb = router.asPath.split("/");
    //   console.log('checkherosection', breadcrumb);
    //   for(let i=0; i<pathArr.length;i++){
    //       if()
    //   }
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            " ",
            /*#__PURE__*/ _jsx(Box, {
                background: "linear-gradient(to right, #a55901 0%, #c77d00 50%, #f7b700 100%)",
                children: /*#__PURE__*/ _jsxs(Box, {
                    display: {
                        base: "block",
                        md: "flex"
                    },
                    px: "3%",
                    py: "6%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    //   background="url(https://akm-img-a-in.tosshub.com/aajtak/resource/img/lf-circel.png), url(https://akm-img-a-in.tosshub.com/aajtak/resource/img/rh-circel.png)"
                    backgroundRepeat: " no-repeat",
                    backgroundPosition: "center left, center right 15px",
                    backgroundSize: "auto",
                    position: "relative",
                    children: [
                        /*#__PURE__*/ _jsxs(Box, {
                            children: [
                                /*#__PURE__*/ _jsx(Text, {
                                    as: "h3",
                                    color: "white",
                                    children: breadcrumb.map((item, key)=>{
                                        // console.log("key and item", item)
                                        if (item === "") {
                                            var name = "Home";
                                        } else {
                                            var name = item.replace(/-/g, " ");
                                        }
                                        var firstLetter = name.slice(0, 1);
                                        var name = firstLetter.toUpperCase() + name.substring(1);
                                        return /*#__PURE__*/ _jsxs("span", {
                                            children: [
                                                name,
                                                key < breadcrumb.length - 1 ? /*#__PURE__*/ _jsx(ChevronRightIcon, {}) : null
                                            ]
                                        }, key);
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Flex, {
                                    alignItems: "center",
                                    mt: 5,
                                    children: /*#__PURE__*/ _jsx(Heading, {
                                        as: "h2",
                                        fontSize: "2xl",
                                        color: "white",
                                        fontWeight: "bold",
                                        children: typeName
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            my: "2"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                px: "3%",
                py: "4",
                bg: "#eeeeee",
                children: /*#__PURE__*/ _jsxs(Grid, {
                    templateColumns: {
                        md: "8fr 4fr",
                        sm: "repeat(2, 1fr)"
                    },
                    textColor: "white",
                    gap: 4,
                    mb: 4,
                    children: [
                        /*#__PURE__*/ _jsxs(Box, {
                            children: [
                                /*#__PURE__*/ _jsx(Grid, {
                                    templateColumns: {
                                        md: "6fr 6fr  ",
                                        sm: "repeat(2, 1fr)"
                                    },
                                    textColor: "white",
                                    gap: 4,
                                    children: post && post.slice(0, 2).map((item, key)=>{
                                        return item && item.node && /*#__PURE__*/ _jsx(Link, {
                                            href: item.node.uri,
                                            children: /*#__PURE__*/ _jsxs(Box, {
                                                mb: 5,
                                                mt: 0,
                                                cursor: "pointer",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Image, {
                                                        mb: "6",
                                                        h: "auto",
                                                        w: "100%",
                                                        src: item.node.featuredImage.node.sourceUrl,
                                                        alt: item.node.title
                                                    }),
                                                    /*#__PURE__*/ _jsx(Heading, {
                                                        as: "h2",
                                                        fontSize: "17px",
                                                        color: "#000",
                                                        lineHeight: "28px",
                                                        fontWeight: "600",
                                                        mb: "4",
                                                        children: item.node.title
                                                    })
                                                ]
                                            }, key)
                                        });
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Grid, {
                                    mt: 4,
                                    templateColumns: {
                                        md: "4fr 4fr 4fr ",
                                        sm: "repeat(3, 1fr)"
                                    },
                                    textColor: "white",
                                    gap: 4,
                                    children: post && post.slice(2, 5).map((item, key)=>{
                                        return item && item.node && /*#__PURE__*/ _jsx(Link, {
                                            href: item.node.uri,
                                            children: /*#__PURE__*/ _jsxs(Box, {
                                                textColor: "white",
                                                cursor: "pointer",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Image, {
                                                        h: "auto",
                                                        w: "100%",
                                                        src: item.node.featuredImage.node.sourceUrl,
                                                        alt: item.node.title
                                                    }),
                                                    /*#__PURE__*/ _jsx(Heading, {
                                                        pt: 2,
                                                        fontWeight: 700,
                                                        fontSize: "2xl",
                                                        noOfLines: 4,
                                                        children: item.node.title
                                                    })
                                                ]
                                            })
                                        });
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            children: post.slice(5, 12).map((item, key)=>{
                                return /*#__PURE__*/ _jsx(Box, {
                                    cursor: "pointer",
                                    mb: 4,
                                    borderBottom: "1px solid #964300 ",
                                    children: /*#__PURE__*/ _jsxs(Grid, {
                                        templateColumns: {
                                            md: "3fr 7fr",
                                            base: "3fr 7fr"
                                        },
                                        gap: "4",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ _jsx(Image, {
                                                mb: "2",
                                                h: "auto",
                                                w: "100%",
                                                src: item.node.featuredImage.node.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ _jsx(Box, {
                                                children: /*#__PURE__*/ _jsx(Text, {
                                                    textAlign: "justify",
                                                    noOfLines: 2,
                                                    fontWeight: "bold",
                                                    children: item.node.title
                                                })
                                            })
                                        ]
                                    })
                                });
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const archives_ArchiveHeroSection = ((/* unused pure expression or super */ null && (ArchiveHeroSection)));

// EXTERNAL MODULE: ./node_modules/date-fns/index.js
var date_fns = __webpack_require__(47292);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(89583);
;// CONCATENATED MODULE: ./component/archives/PostList.js











// import ReactPlayer from 'react-player';
function PostList({ urlType , urlName , data , slug , section  }) {
    // theming
    const { colorMode , toggleColorMode  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
    const isLightTheme = colorMode == "light" ? true : false;
    const primaryTextColor = isLightTheme ? "black" : "white";
    const secondaryTextColor = isLightTheme ? "white" : "black";
    const primaryBgColor = isLightTheme ? "white" : "black";
    const secondaryBgColor = isLightTheme ? "black" : "white";
    const tempArr = [
        1,
        2,
        3
    ];
    const tempArrTwo = [
        1,
        2,
        3,
        4
    ];
    //   console.log('chekcsulg', data.edges.length);
    const pageType = ucfirst(slug[0]);
    const pageName = ucfirst(slug[1].replace("-", " "));
    const router = (0,next_router.useRouter)();
    const pathName = router.asPath;
    const pathArr = router.asPath.split("/");
    const name = pathArr[pathArr.length - 1];
    const typeName = name.split("-").join(" ").toUpperCase();
    const breadcrumb = router.asPath.split("/");
    const { sectionAData , sectionBData , sectionCData  } = section;
    // console.log('checkcat', sectionAData);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(seo_ArchiveSeo, {
                data: data,
                pageType: pageType,
                pageName: pageName
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                my: 8,
                px: {
                    base: "4",
                    lg: "24",
                    xl: "58"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                        as: "h2",
                        size: "lg",
                        children: typeName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                        templateColumns: {
                            md: "8fr 4fr",
                            sm: "repeat(1, 1fr)"
                        },
                        textColor: "white",
                        gap: 3,
                        my: 6,
                        children: [
                            data.edges && data.edges.slice(0, 1).map((item, index)=>{
                                var ref, ref1, ref2, ref3;
                                const tagName = (ref2 = item === null || item === void 0 ? void 0 : (ref = item.node) === null || ref === void 0 ? void 0 : (ref1 = ref.tags) === null || ref1 === void 0 ? void 0 : ref1.edges[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.node) === null || ref3 === void 0 ? void 0 : ref3.name;
                                return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.node.slug,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                                        w: "full",
                                        h: {
                                            base: "250px",
                                            md: "500px"
                                        },
                                        backgroundImage: item.node.featuredImage.node.sourceUrl,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                                            style: {
                                                position: "relative"
                                            },
                                            w: "full",
                                            justify: "center",
                                            bgGradient: "linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
                                                maxW: "2xl",
                                                align: "flex-start",
                                                spacing: 6,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                        p: 4,
                                                        style: {
                                                            position: "absolute",
                                                            left: 0,
                                                            top: "10px",
                                                            color: "white"
                                                        },
                                                        children: tagName && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                                                            bg: "#fc4a00 ",
                                                            color: "white",
                                                            rounded: "none",
                                                            size: "xs",
                                                            fontWeight: "bold",
                                                            children: tagName
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                        p: 4,
                                                        style: {
                                                            position: "absolute",
                                                            left: 0,
                                                            bottom: 0,
                                                            color: "white"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                color: "white",
                                                                as: "h4",
                                                                fontSize: {
                                                                    base: "sm",
                                                                    md: "lg"
                                                                },
                                                                noOfLines: 2,
                                                                lineHeight: "22px",
                                                                mb: {
                                                                    base: "12px",
                                                                    md: "37px"
                                                                },
                                                                children: item.node.title
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                                mt: "2",
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                                                                        as: index_esm/* FaRegClock */.fSQ,
                                                                        color: "white",
                                                                        fontSize: "sm"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                        color: "white",
                                                                        ml: 2,
                                                                        fontSize: "sm",
                                                                        children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                display: "grid",
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                                    templateColumns: {
                                        md: "12fr",
                                        sm: "repeat(1, 1fr)"
                                    },
                                    textColor: "white",
                                    gap: 3,
                                    children: data.edges && data.edges.slice(1, 3).map((item, index)=>{
                                        var ref, ref4, ref5, ref6;
                                        const tagName = (ref5 = item === null || item === void 0 ? void 0 : (ref = item.node) === null || ref === void 0 ? void 0 : (ref4 = ref.tags) === null || ref4 === void 0 ? void 0 : ref4.edges[0]) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.node) === null || ref6 === void 0 ? void 0 : ref6.name;
                                        // console.log('checkiteem', item);
                                        return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.node.slug,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                                                w: "full",
                                                h: {
                                                    base: "250px",
                                                    md: "100%"
                                                },
                                                backgroundImage: item.node.featuredImage.node.sourceUrl,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center center",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    w: "full",
                                                    justify: "center",
                                                    bgGradient: "linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Stack, {
                                                        maxW: "2xl",
                                                        align: "flex-start",
                                                        spacing: 6,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                                p: 4,
                                                                style: {
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    top: "10px",
                                                                    color: "white"
                                                                },
                                                                children: tagName && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Button, {
                                                                    bg: "#fc4a00 ",
                                                                    color: "white",
                                                                    rounded: "none",
                                                                    size: "xs",
                                                                    fontWeight: "bold",
                                                                    children: tagName
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                                p: 4,
                                                                style: {
                                                                    position: "absolute",
                                                                    left: 0,
                                                                    bottom: 0,
                                                                    color: "white"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                        color: "white",
                                                                        as: "h4",
                                                                        fontSize: {
                                                                            base: "sm",
                                                                            md: "lg"
                                                                        },
                                                                        noOfLines: 2,
                                                                        lineHeight: "22px",
                                                                        mb: {
                                                                            base: "12px",
                                                                            md: "37px"
                                                                        },
                                                                        children: item.node.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                                        mt: "2",
                                                                        alignItems: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Icon, {
                                                                                as: index_esm/* FaRegClock */.fSQ,
                                                                                color: "white",
                                                                                fontSize: "sm"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                                color: "white",
                                                                                ml: 2,
                                                                                fontSize: "sm",
                                                                                children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }, index);
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                        templateColumns: {
                            md: "6fr 6fr",
                            sm: "repeat(1, 1fr)"
                        },
                        textColor: "white",
                        gap: 6,
                        my: 20,
                        children: [
                            data.edges.slice(3, 4).map((item, index)=>{
                                var ref, ref7;
                                // console.log('catmap', videoId);
                                const author = item === null || item === void 0 ? void 0 : (ref = item.node) === null || ref === void 0 ? void 0 : ref.author.node;
                                // const imagePath = item.node.featuredImage?.node.sourceUrl;
                                const videoId = item.node.youtube.videoId;
                                // const imagePath =
                                //   videoId !== null && videoId !== ''
                                //     ? `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`
                                //     : item.node.featuredImage?.node?.sourceUrl;
                                // const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                                return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.node.slug,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                        cursor: "pointer",
                                        children: [
                                            (item === null || item === void 0 ? void 0 : (ref7 = item.node) === null || ref7 === void 0 ? void 0 : ref7.featuredImage) && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                                                src: item.node.featuredImage.node.sourceUrl,
                                                alt: item.node.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                my: "2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                        as: "h2",
                                                        size: "lg",
                                                        color: primaryTextColor,
                                                        children: item.node.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                        mt: "2",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                                                color: primaryTextColor,
                                                                fontWeight: "bold",
                                                                children: [
                                                                    "By ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: `${author.name} `
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                color: primaryTextColor,
                                                                ml: 4,
                                                                children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                children: data.edges.slice(4, 7).map((item, index)=>{
                                    var ref, ref8, ref9;
                                    const author = item === null || item === void 0 ? void 0 : (ref = item.node) === null || ref === void 0 ? void 0 : ref.author.node;
                                    const imagePath = (ref8 = item.node.featuredImage) === null || ref8 === void 0 ? void 0 : ref8.node.sourceUrl;
                                    return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.slug,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            cursor: "pointer",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                                    templateColumns: {
                                                        md: "9fr 3fr",
                                                        sm: "repeat(1, 1fr)"
                                                    },
                                                    textColor: "white",
                                                    gap: 6,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                    as: "h4",
                                                                    size: "md",
                                                                    color: primaryTextColor,
                                                                    children: item.node.title
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                                    mt: "2",
                                                                    alignItems: "center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                                                            color: primaryTextColor,
                                                                            fontWeight: "bold",
                                                                            children: [
                                                                                "By ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                                    children: `${author.name} `
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                            color: primaryTextColor,
                                                                            ml: 4,
                                                                            children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                            children: (item === null || item === void 0 ? void 0 : (ref9 = item.node) === null || ref9 === void 0 ? void 0 : ref9.featuredImage) && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                                                                h: "100%",
                                                                objectFit: "cover",
                                                                src: item.node.featuredImage.node.sourceUrl,
                                                                alt: item.node.title
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                    my: 6,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {})
                                                })
                                            ]
                                        })
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                        py: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                as: "h2",
                                size: "lg",
                                color: primaryTextColor,
                                children: {"SECTION_A":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_B":{"NAME":"Opinion","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_C":{"NAME":"Features","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.SECTION_A.NAME
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                                templateColumns: {
                                    md: "6fr 6fr",
                                    sm: "repeat(1, 1fr)"
                                },
                                // textColor="white"
                                gap: 6,
                                my: 6,
                                children: sectionAData.edges.slice(0, 4).map((item, index)=>{
                                    var ref, ref10;
                                    const author = item === null || item === void 0 ? void 0 : (ref = item.node) === null || ref === void 0 ? void 0 : ref.author.node;
                                    const imagePath = (ref10 = item.node.featuredImage) === null || ref10 === void 0 ? void 0 : ref10.node.sourceUrl;
                                    return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.slug,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                            cursor: "pointer",
                                            templateColumns: {
                                                md: "9fr 3fr",
                                                sm: "repeat(1, 1fr)"
                                            },
                                            // textColor="white"
                                            gap: 2,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                        alignItems: "baseline",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                fontSize: "3xl",
                                                                fontWeight: "bold",
                                                                color: "blue",
                                                                mx: 2,
                                                                children: index + 1
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                        as: "h4",
                                                                        size: "md",
                                                                        children: item.node.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                                        mt: "2",
                                                                        alignItems: "center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                                                                children: [
                                                                                    "By ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                                        children: `${author.name} `
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                                ml: 4,
                                                                                children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                                                        h: "100%",
                                                        objectFit: "cover",
                                                        src: imagePath,
                                                        alt: item.node.title
                                                    })
                                                })
                                            ]
                                        })
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                        py: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                            templateColumns: {
                                md: "6fr 6fr",
                                sm: "repeat(1, 1fr)"
                            },
                            // textColor="white"
                            gap: 6,
                            my: 6,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                            as: "h2",
                                            size: "lg",
                                            textAlign: "start",
                                            mb: 6,
                                            children: {"SECTION_A":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_B":{"NAME":"Opinion","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_C":{"NAME":"Features","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.SECTION_B.NAME
                                        }),
                                        sectionBData.edges.slice(0, 3).map((item, index)=>{
                                            var ref, ref11;
                                            const author = item === null || item === void 0 ? void 0 : (ref = item.node) === null || ref === void 0 ? void 0 : ref.author.node;
                                            const imagePath = (ref11 = item.node.featuredImage) === null || ref11 === void 0 ? void 0 : ref11.node.sourceUrl;
                                            return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.node.slug,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                    cursor: "pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                                            templateColumns: {
                                                                md: "3fr 9fr",
                                                                sm: "repeat(1, 1fr)"
                                                            },
                                                            // textColor="white"
                                                            gap: 6,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                                                                        h: "100%",
                                                                        objectFit: "cover",
                                                                        src: imagePath,
                                                                        alt: item.node.title
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                                            as: "h4",
                                                                            size: "md",
                                                                            children: item.node.title
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                                            mt: "2",
                                                                            alignItems: "center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                                                                    children: [
                                                                                        "By ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                                            children: `${author.name} `
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                                    ml: 4,
                                                                                    children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                            my: 6,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Divider, {})
                                                        })
                                                    ]
                                                })
                                            }, index);
                                        })
                                    ]
                                }),
                                sectionCData.edges.slice(0, 1).map((item, index)=>{
                                    var ref, ref12;
                                    const author = item === null || item === void 0 ? void 0 : (ref = item.node) === null || ref === void 0 ? void 0 : ref.author.node;
                                    const imagePath = (ref12 = item.node.featuredImage) === null || ref12 === void 0 ? void 0 : ref12.node.sourceUrl;
                                    return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.node.slug,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                            cursor: "pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                    as: "h2",
                                                    size: "lg",
                                                    textAlign: "start",
                                                    mb: 6,
                                                    children: {"SECTION_A":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_B":{"NAME":"Opinion","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_C":{"NAME":"Features","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.SECTION_C.NAME
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                                                    src: imagePath,
                                                    alt: item.node.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                    my: "2",
                                                    textAlign: "start",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                            as: "h2",
                                                            size: "lg",
                                                            children: item.node.title
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                            mt: "2",
                                                            alignItems: "center",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                                                    children: [
                                                                        "By ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                            children: `${author.name} `
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                    ml: 4,
                                                                    children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index);
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function ucfirst(str) {
    var firstLetter = str.slice(0, 1);
    return firstLetter.toUpperCase() + str.substring(1);
}
/* harmony default export */ const archives_PostList = (PostList);

;// CONCATENATED MODULE: ./component/seo/PageSeo.js


function PageSeo({ data  }) {
    const seo = data.seo;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "robots",
                content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: seo.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: seo.metaDesc
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "canonical",
                href: seo.canonical
            }),
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: seo.schema.raw
                }
            })
        ]
    });
}
/* harmony default export */ const seo_PageSeo = (PageSeo);

;// CONCATENATED MODULE: ./component/page/PageData.js






function PageData({ data  }) {
    const date = new Date(data.date);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(seo_PageSeo, {
                data: data
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                overflow: "hidden",
                px: {
                    base: "4",
                    lg: "16"
                },
                my: "10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                        as: "h2",
                        size: "lg",
                        textAlign: "center",
                        mb: "4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: data.title
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        // className={`${ClassesPostBody.content} contentBody`}
                        dangerouslySetInnerHTML: {
                            __html: data.content
                        }
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const page_PageData = (PageData);

;// CONCATENATED MODULE: ./component/post/PostData.js




// import ClassesPostBody from '../../styles/post-body.module.css'
function PostData({ data  }) {
    var ref;
    const author = data.author.node;
    const date = new Date(data.date);
    const imagePath = (ref = data.featuredImage) === null || ref === void 0 ? void 0 : ref.node.sourceUrl;
    const tags = data.tags.edges;
    if (!imagePath) {
        return "not found";
    }
    return /*#__PURE__*/ _jsxs(Box, {
        overflow: "hidden",
        children: [
            /*#__PURE__*/ _jsx(Text, {
                fontSize: "lg",
                as: "h1",
                fontWeight: "semibold",
                align: "center",
                children: /*#__PURE__*/ _jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: data.title
                    }
                })
            }),
            /*#__PURE__*/ _jsxs(Text, {
                fontSize: "md",
                as: "p",
                align: "center",
                children: [
                    "By ",
                    /*#__PURE__*/ _jsx("b", {
                        children: `${author.firstName} ${author.lastName}`
                    }),
                    "on ",
                    /*#__PURE__*/ _jsx("b", {
                        children: date.toDateString()
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Image, {
                priority: true,
                src: imagePath,
                width: 320,
                height: 180,
                layout: "responsive",
                alt: data.title
            }),
            /*#__PURE__*/ _jsx("ins", {
                className: "adsbygoogle",
                style: {
                    display: "block"
                },
                "data-ad-client": "ca-pub-7076157039576041",
                "data-ad-slot": 3539306056,
                "data-ad-format": "auto",
                "data-full-width-responsive": "true"
            }),
            /*#__PURE__*/ _jsx("div", {
                //   className={`${ClassesPostBody.content} contentBody`}
                dangerouslySetInnerHTML: {
                    __html: data.content
                }
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tagContainer",
                children: tags ? tags.map((tag)=>{
                    //console.log(tag.node)
                    return /*#__PURE__*/ _jsx(Tag, {
                        className: "tagBox",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: tag.node.uri,
                            children: `#${tag.node.name}`
                        })
                    }, tag.node.name);
                }) : null
            }),
            /*#__PURE__*/ _jsx("ins", {
                className: "adsbygoogle",
                style: {
                    display: "block"
                },
                "data-ad-format": "autorelaxed",
                "data-ad-client": "ca-pub-7076157039576041",
                "data-ad-slot": 3184082831
            }),
            /*#__PURE__*/ _jsxs("script", {
                children: [
                    "(adsbygoogle = window.adsbygoogle || []).push(",
                    ");"
                ]
            })
        ]
    });
}
/* harmony default export */ const post_PostData = ((/* unused pure expression or super */ null && (PostData)));

// EXTERNAL MODULE: ./node_modules/react-share/lib/index.js
var lib = __webpack_require__(12484);
// EXTERNAL MODULE: ./node_modules/react-web-share/dist/react-web-share.cjs.production.min.js
var react_web_share_cjs_production_min = __webpack_require__(63027);
;// CONCATENATED MODULE: ./component/post/SocialShare.js







function SocialShare({ data  }) {
    const post_link = data.seo.canonical;
    const post_title = data.title;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                display: {
                    base: "none",
                    md: "block"
                },
                className: "desktopShareContainer",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                        fontSize: "md",
                        children: "Share"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.SimpleGrid, {
                        columns: 1,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(lib.FacebookShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.FacebookIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.TwitterShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.TwitterIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.TelegramShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.TelegramIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.WhatsappShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.WhatsappIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.LinkedinShareButton, {
                                edinShareButton: true,
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.LinkedinIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(lib.TumblrShareButton, {
                                url: post_link,
                                children: /*#__PURE__*/ jsx_runtime.jsx(lib.TumblrIcon, {
                                    size: 32,
                                    round: true
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Flex, {
                display: {
                    base: "block",
                    md: "none"
                },
                className: "mobileShareContainer",
                children: /*#__PURE__*/ jsx_runtime.jsx(react_web_share_cjs_production_min/* RWebShare */.u, {
                    data: {
                        text: post_title,
                        url: post_link,
                        title: "Share this news to"
                    },
                    onClick: ()=>console.log("shared successfully!")
                    ,
                    children: /*#__PURE__*/ jsx_runtime.jsx(index_esm/* FaShareAlt */.PPi, {
                        size: 30
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const post_SocialShare = (SocialShare);

// EXTERNAL MODULE: ./styles/post-body.module.css
var post_body_module = __webpack_require__(65802);
var post_body_module_default = /*#__PURE__*/__webpack_require__.n(post_body_module);
;// CONCATENATED MODULE: ./component/post/Trending.js











const Trending = ({ props  })=>{
    const listdata = [
        1,
        2,
        3,
        4,
        5,
        6
    ];
    const Trendinglist = [
        1,
        2,
        3,
        4
    ];
    // console.log('checktrending', props.trending);
    // store data
    const { trending  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
        py: 8,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                as: "h2",
                fontSize: "22px",
                children: {"TRENDING":{"DEMO_NAME":"TRENDING","NAME":"TRENDING","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.TRENDING.NAME
            }),
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Grid, {
                templateColumns: {
                    md: "6fr 6fr",
                    sm: "repeat(1, 1fr)"
                },
                // textColor="white"
                gap: 6,
                my: 6,
                children: trending.edges && trending.edges.map((item, index)=>{
                    var ref;
                    const author = item.node.author;
                    const imagePath = (ref = item.node.featuredImage) === null || ref === void 0 ? void 0 : ref.node.sourceUrl;
                    console.log("checktrending", item.node.slug);
                    if (!imagePath) {
                        return "not found";
                    }
                    return item && item.node && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: item.node.slug,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                            cursor: "pointer",
                            templateColumns: {
                                md: "9fr 3fr",
                                sm: "repeat(1, 1fr)"
                            },
                            // textColor="white"
                            gap: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                        alignItems: "flex-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                fontSize: "3xl",
                                                fontWeight: "bold",
                                                color: "green",
                                                mx: 2,
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                        color: "green",
                                                        fontWeight: "medium",
                                                        children: "Markets"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                        as: "h4",
                                                        size: "md",
                                                        lineHeight: "normal",
                                                        children: item.node.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                        mt: "2",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                                                children: [
                                                                    "By ",
                                                                    author.node.name,
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                ml: 4,
                                                                children: (0,date_fns.format)(new Date(item.node.date), "yyyy-MM-dd")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                                        h: "100%",
                                        objectFit: "cover",
                                        src: imagePath,
                                        alt: item.node.title
                                    })
                                })
                            ]
                        })
                    }, index);
                })
            })
        ]
    });
};
/* harmony default export */ const post_Trending = (Trending);

;// CONCATENATED MODULE: ./component/post/Post.js











// import ReactPlayer from 'react-player';
function Post({ props  }) {
    var ref;
    // theming
    const { colorMode , toggleColorMode  } = (0,chakra_ui_react_cjs_prod.useColorMode)();
    const isLightTheme = colorMode == "light" ? true : false;
    const primaryTextColor = isLightTheme ? "black" : "white";
    const secondaryTextColor = isLightTheme ? "white" : "black";
    const primaryBgColor = isLightTheme ? "white" : "black";
    const secondaryBgColor = isLightTheme ? "black" : "white";
    // store data
    const data = props.data.post;
    // const tags = data?.tags?.edges;
    const post = props.postList.edges;
    const author = props.data.post.author.node;
    const date = new Date(data.date);
    const imagePath = (ref = data.featuredImage) === null || ref === void 0 ? void 0 : ref.node.sourceUrl;
    const videoUrl = `https://www.youtube.com/watch?v=${data.youtube.videoId}`;
    const videoLink = `https://www.youtube.com/embed/${data.youtube.videoId}`;
    // console.log('checkpostdata', props);
    const listdata = [
        1,
        2,
        3,
        4,
        5,
        6
    ];
    // const Trending = [1, 2, 3, 4];
    //  const tags = data.tags.edges;
    if (!imagePath) {
        return "not found";
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(seo_PageSeo, {
                data: data
            }),
            data.youtube.videoId !== null && data.youtube.videoId !== undefined && data.youtube.videoId !== "" ? // <Box textAlign={'center'} my={10}>
            // <AspectRatio maxW="560px" ratio={1}>
            //   <ReactPlayer url={videoUrl} />
            // </AspectRatio>
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.AspectRatio, {
                    ratio: 16 / 9,
                    children: /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                        title: "naruto",
                        src: videoLink,
                        allowFullScreen: true
                    })
                })
            }) : // </Box>
            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Img, {
                objectFit: "cover",
                src: imagePath,
                w: "100%"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                my: 8,
                px: {
                    base: "4",
                    lg: "24",
                    xl: "58"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                        display: {
                            base: "block",
                            md: "none"
                        },
                        my: 6,
                        children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.HStack, {
                            position: "sticky",
                            top: "10px",
                            bottom: "10px",
                            children: /*#__PURE__*/ jsx_runtime.jsx(post_SocialShare, {
                                data: data
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                        templateColumns: {
                            md: "2fr 8fr 2fr",
                            sm: "repeat(1, 1fr)"
                        },
                        //   textColor="white"
                        gap: 6,
                        position: "relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                display: {
                                    base: "none",
                                    md: "block"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.VStack, {
                                    position: "sticky",
                                    top: "10px",
                                    bottom: "20px",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(post_SocialShare, {
                                        data: data
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                        className: "subheading",
                                        fontWeight: "medium",
                                        mb: 10,
                                        mx: 2,
                                        wordSpacing: "2px",
                                        lineHeight: "28px",
                                        wordBreak: "break-word",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                mb: "6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Heading, {
                                                        as: "h2",
                                                        size: "lg",
                                                        mb: 4,
                                                        children: data.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                        mt: "2",
                                                        flexDirection: {
                                                            base: "column",
                                                            md: "row"
                                                        },
                                                        justifyContent: "space-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Flex, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                        mr: 2,
                                                                        fontWeight: "bold",
                                                                        children: "By"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                                        children: `${author.firstName == null ? "" : author.firstName} ${author.lastName == null ? "" : author.lastName}`
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Text, {
                                                                children: [
                                                                    " ",
                                                                    date.toDateString()
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: `${(post_body_module_default()).content} contentBody`,
                                                dangerouslySetInnerHTML: {
                                                    __html: data.content
                                                }
                                            })
                                        ]
                                    }),
                                    author && /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                        p: "6",
                                        bg: isLightTheme ? "#ededed" : "black",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Grid, {
                                            templateColumns: {
                                                md: "2fr 10fr",
                                                sm: "repeat(1, 1fr)"
                                            },
                                            // textColor="white"
                                            gap: 2,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Box, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Avatar, {
                                                        size: "lg",
                                                        src: author.avatar
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(chakra_ui_react_cjs_prod.Box, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                            fontWeight: "bold",
                                                            children: author.firstName
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                            my: 2,
                                                            children: "Greg Ahlstrand is CoinDesks Asia News Editor. Greg has no significant crypto holdings."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.Text, {
                                                            color: "green",
                                                            children: "Follow @trisha on Twitter"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(post_Trending, {
                        props: props
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const post_Post = (Post);

// EXTERNAL MODULE: ./pages/error.js
var error = __webpack_require__(8805);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
;// CONCATENATED MODULE: ./pages/[...slug].js





// import PostList from '../components/archives/post-list';
// import Container from '../components/container';
// import Intro from '../components/intro';
// import Layout from '../components/layout';
// import Footer from '../components/layout/footer';
// import Header from '../components/layout/header';
// import PageData from '../components/page/page-data';
// import Post from '../components/post/post';





//import Post1st from '../component/post/PostSection/1stpost';
//import Post2nd from '../component/post/PostSection/post2nd';
// import VideoPost from '../component/post/VideoPost';
//export const config = { amp: 'hybrid' }
function OtherPages(props) {
    //console.log("original data = ", props)
    //console.log('checkslug', props);
    const router = (0,next_router.useRouter)();
    let componentToShow;
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime.jsx(error["default"], {});
    } else {
        //console.log(props)
        const urlType = props.urlType;
        const pageType = props.pageType;
        // console.log('checkpagetype', props);
        //if found any data
        if (props.data && props.data) {
            //check for category, tag, author
            if (pageType === "archive") {
                componentToShow = /*#__PURE__*/ jsx_runtime.jsx(archives_PostList, {
                    urlType: props.urlType,
                    urlName: props.urlName,
                    data: props.data,
                    slug: props.slug,
                    section: props.section
                });
            } else if (pageType === "page") {
                //it means it is a page
                componentToShow = // <h1>page data</h1>;
                /*#__PURE__*/ jsx_runtime.jsx(page_PageData, {
                    data: props.data
                });
            } else {
                //it means it is a post
                componentToShow = // <Post1st props={props} />
                // <Post2nd props={props} />
                /*#__PURE__*/ jsx_runtime.jsx(post_Post, {
                    props: props
                });
            }
        } else {
            componentToShow = "<h1>Not Found Page</h1>";
        }
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "mainContent",
                children: componentToShow
            })
        })
    });
}
async function getStaticProps(context) {
    const { params  } = context;
    const { slug  } = params;
    const urlType = slug[0];
    const postList = await (0,api/* getAllPostsForHome */.DT)();
    var trendingData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"TRENDING":{"DEMO_NAME":"TRENDING","NAME":"TRENDING","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.TRENDING.NAME);
    var sideBarData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"heroSection":{"NAME":"News","DESC":"The latest entertainment news in the world","SLUG":"/category/breaking-news"},"categoryList":{"SIDEBAR":{"SIDEBAR_NAME":"News","SIDEBAR_DESC":"The latest entertainment news in the world","SIDEBAR_SLUG":"/category/news"},"CATEGORY_A":{"NAME":"EDITORS PICK","DESC":"The latest entertainment news in the world","SLUG":"/category/editors-pick"},"CATEGORY_B":{"NAME":"PRESS RELEASES","DESC":"The latest entertainment news in the world","SLUG":"/category/press-releases"},"CATEGORY_C":{"NAME":"COINS","DESC":"The latest entertainment news in the world","SLUG":"/category/coins"},"CATEGORY_D":{"NAME":"Video","DESC":"The latest entertainment news in the world","SLUG":"/category/video"},"CATEGORY_E":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/top-news"},"CATEGORY_F":{"NAME":"ACADEMY","DESC":"The latest entertainment news in the world","SLUG":"/category/academy"},"CATEGORY_G":{"NAME":"REVIEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/reviews"}}}.categoryList.SIDEBAR.SIDEBAR_NAME);
    var sectionAData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"SECTION_A":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_B":{"NAME":"Opinion","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_C":{"NAME":"Features","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.SECTION_A.NAME);
    var sectionBData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"SECTION_A":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_B":{"NAME":"Opinion","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_C":{"NAME":"Features","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.SECTION_B.NAME);
    var sectionCData = await (0,api/* getCateogryRecentPostbyName */.Yd)("categoryName", {"SECTION_A":{"NAME":"TOP NEWS","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_B":{"NAME":"Opinion","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"},"SECTION_C":{"NAME":"Features","DESC":"The latest entertainment news in the world","SLUG":"/category/social-news"}}.SECTION_C.NAME);
    //get data
    let data;
    let pageType;
    if (urlType === "category" || urlType === "tag" || urlType === "author") {
        let typeName;
        if (urlType === "tag") {
            typeName = urlType;
        } else {
            typeName = urlType + "Name";
        }
        data = await (0,api/* getCateogryRecentPostbyName */.Yd)(typeName, slug[1]);
        pageType = "archive";
    } else if (urlType === "about-us" || urlType === "blog" || // urlType === 'contact-us' ||
    urlType === "disclaimer" || urlType === "home" || urlType === "tiehome" || urlType === "privacy-policy") {
        //it means is is a page
        const uri = slug[0];
        data = await (0,api/* getPageDetailsByUri */.cb)(uri);
        pageType = "page";
    } else {
        //it means it is a post
        const uri = params.slug.join("/");
        data = await (0,api/* getPostDetailsByUri */.N_)(uri);
        pageType = "post";
    }
    // menu data
    const menuData = await (0,api/* getHeaderMenuByName */.BV)("Main menu");
    //console.log('pagetype', pageType);
    return {
        props: {
            trending: trendingData,
            sideBarData: sideBarData,
            postList: postList,
            urlType: urlType,
            urlName: slug[0],
            data: data,
            menu: menuData.menu,
            pageType: pageType,
            slug: slug,
            section: {
                sectionAData,
                sectionBData,
                sectionCData
            }
        },
        revalidate: 30
    };
}
// export async function getStaticProps({ preview = false }) {
//   return { props: { postList: postList } };
// }
async function getStaticPaths() {
    const allPosts = await (0,api/* getAllPostsWithUri */.ST)();
    //const mostVisitedUri = ['/fantasy-cricket/dream11-investment-strategy-5-years-of-experience/']
    const categoryListUri = [
        "/category/coins",
        "/category/news",
        "/category/editors-pick",
        "/category/academy",
        "/category/reviews",
        "/category/top-news",
        "/category/video", 
    ];
    const postListUri = allPosts.edges.map(({ node  })=>`${node.uri}`
    );
    const allUri = [
        ...categoryListUri,
        ...postListUri
    ];
    return {
        paths: allUri,
        fallback: true
    };
}
/* harmony default export */ const _slug_ = (OtherPages);


/***/ }),

/***/ 1014:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,292,758,905,851,805], () => (__webpack_exec__(91219)));
module.exports = __webpack_exports__;

})();