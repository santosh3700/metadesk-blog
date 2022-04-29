"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

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

/***/ }),

/***/ 31349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
  res.status(200).json({
    name: 'John Doe'
  });
}

/***/ }),

/***/ 56573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_4TQV5Fm4vyzCmx3B0N_4K_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_220971420e6faa3af86dadf6ac2b6e4ae3_22_2C_22previewModeSigningKey_22_3A_223fe14e92223dc618eb4aad2f1547912e0247775d75e4485f08f52f58a44e0bd2_22_2C_22previewModeEncryptionKey_22_3A_220fdb7eeb12419ed7ea6e5f567ee35c61ccf265e337f201bc368fcd062901f819_22_7D_loadedEnvFiles_W10_3D_i18n_reactRoot_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fhello&absolutePagePath=private-next-pages%2Fapi%2Fhello.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=4TQV5Fm4vyzCmx3B0N_4K&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%220971420e6faa3af86dadf6ac2b6e4ae3%22%2C%22previewModeSigningKey%22%3A%223fe14e92223dc618eb4aad2f1547912e0247775d75e4485f08f52f58a44e0bd2%22%2C%22previewModeEncryptionKey%22%3A%220fdb7eeb12419ed7ea6e5f567ee35c61ccf265e337f201bc368fcd062901f819%22%7D&loadedEnvFiles=W10%3D&i18n=&reactRoot=!

        
      const { processEnv } = __webpack_require__(19936)
      processEnv([])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(31349),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/hello",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"0971420e6faa3af86dadf6ac2b6e4ae3",previewModeSigningKey:"3fe14e92223dc618eb4aad2f1547912e0247775d75e4485f08f52f58a44e0bd2",previewModeEncryptionKey:"0fdb7eeb12419ed7ea6e5f567ee35c61ccf265e337f201bc368fcd062901f819"}
        })
        /* harmony default export */ const next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_4TQV5Fm4vyzCmx3B0N_4K_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_220971420e6faa3af86dadf6ac2b6e4ae3_22_2C_22previewModeSigningKey_22_3A_223fe14e92223dc618eb4aad2f1547912e0247775d75e4485f08f52f58a44e0bd2_22_2C_22previewModeEncryptionKey_22_3A_220fdb7eeb12419ed7ea6e5f567ee35c61ccf265e337f201bc368fcd062901f819_22_7D_loadedEnvFiles_W10_3D_i18n_reactRoot_ = (apiHandler);
      

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458], () => (__webpack_exec__(56573)));
module.exports = __webpack_exports__;

})();