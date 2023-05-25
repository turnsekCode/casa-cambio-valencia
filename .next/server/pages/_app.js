(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-gtm-module"
const external_react_gtm_module_namespaceObject = require("react-gtm-module");
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.js




function App({ Component , pageProps  }) {
    const gtmId = "GTM-MBQXFCS" || 0;
    const tagManagerArgs = {
        gtmId
    };
    (0,external_react_.useEffect)(()=>{
        external_react_gtm_module_default().initialize(tagManagerArgs);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7823));
module.exports = __webpack_exports__;

})();