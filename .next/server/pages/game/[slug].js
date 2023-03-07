"use strict";
(() => {
var exports = {};
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GamePage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(945);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(905);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(955);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(941);
/* harmony import */ var _modules_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(362);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_6__, _modules_fetcher__WEBPACK_IMPORTED_MODULE_7__]);
([html_react_parser__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_6__, _modules_fetcher__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getServerSideProps(context) {
    const { slug  } = context.query;
    const gameInfo = await (0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .fetcher */ ._i)((0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .gameInfoURL */ .g7)(slug));
    if (gameInfo === undefined) {
        return {
            notFound: true
        };
    }
    try {
        const descriptionRoot = (0,node_html_parser__WEBPACK_IMPORTED_MODULE_4__.parse)(gameInfo.description);
        const hasSeveralParagraphs = descriptionRoot.childNodes.length > 1;
        for (const topNode of descriptionRoot.childNodes){
            for (const childNode of topNode.childNodes){
                if (childNode.tagName?.toLowerCase() === "br") {
                    if (!hasSeveralParagraphs) {
                        const newParagraph = (0,node_html_parser__WEBPACK_IMPORTED_MODULE_4__.parse)("<p></p>").childNodes[0];
                        newParagraph.set_content(childNode.nextSibling?.rawText ?? "");
                        descriptionRoot.appendChild(newParagraph);
                        childNode.nextSibling?.remove();
                    }
                    childNode.remove();
                }
            }
        }
        gameInfo.description = descriptionRoot.outerHTML;
    } catch (e) {
        console.log(e);
    }
    return {
        props: {
            gameInfo: {
                ...gameInfo,
                released: getFormattedDateStr(gameInfo.released)
            }
        }
    };
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-d1df4c7c-0"
})`
	position: relative;
	z-index: 2;
	padding: 2rem 1rem;
	margin: auto;
	max-width: 60ch;
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-d1df4c7c-1"
})`
	padding: 0.75rem 1rem;
	background: whitesmoke;
	border-radius: 0.25rem;
	box-shadow: 0 2px 6px #0000000f;
	color: #222;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-d1df4c7c-2"
})`
	margin-top: 1em;
`;
const Slider = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-d1df4c7c-3"
})`
	z-index: 3;

	width: 100%;
	min-height: clamp(300px, 30vw, 500px);
	max-height: clamp(300px, 30vw, 500px);
	box-shadow: 0 5px 50px #00000f;
`;
const BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-d1df4c7c-4"
})`
	position: relative;
	background-image: url('${(props)=>props.src}');
	background-size: cover;
	flex: 1;

	&::before {
		z-index: 1;
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, #111, #222222df);
	}
`;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-d1df4c7c-5"
})`
	height: 100%;
	display: flex;
	flex-direction: column;
	color: white;
`;
const SlidesContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-d1df4c7c-6"
})`
	display: flex;
	height: 100%;
	column-gap: 2rem;
	background: #222;
	overflow-x: scroll;
`;
function getFormattedDateStr(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}
function GamePage({ gameInfo  }) {
    const { data: screenshotsData , isLoading , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .gameScreenshotsURL */ .Lt)(gameInfo.slug), _modules_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .fetcher */ ._i);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: gameInfo.name_original
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Main, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SlidesContainer, {
                            children: !isLoading && screenshotsData.results.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    style: {
                                        display: "block",
                                        width: "auto",
                                        height: "100%"
                                    },
                                    alt: "",
                                    src: s.image,
                                    width: s.width,
                                    height: s.height
                                }, s.id))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackgroundImage, {
                        src: gameInfo.background_image,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: gameInfo.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Info, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "Рейтинг:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: gameInfo.rating === 0 ? "N/A" : gameInfo.rating
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "Дата выхода:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: gameInfo.released
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "Web-сайт:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: gameInfo.website !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: gameInfo.website,
                                                            children: gameInfo.website
                                                        }) : "N/A"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(gameInfo.description)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 438:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 955:
/***/ ((module) => {

module.exports = require("node-html-parser");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ }),

/***/ 941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [626,945,362], () => (__webpack_exec__(711)));
module.exports = __webpack_exports__;

})();