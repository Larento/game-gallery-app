"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ gameListParams),
/* harmony export */   "IV": () => (/* binding */ PAGE_SIZE),
/* harmony export */   "Lt": () => (/* binding */ gameScreenshotsURL),
/* harmony export */   "Xx": () => (/* binding */ gameListFromQuery),
/* harmony export */   "_i": () => (/* binding */ fetcher),
/* harmony export */   "bR": () => (/* binding */ platformListURL),
/* harmony export */   "g7": () => (/* binding */ gameInfoURL),
/* harmony export */   "nd": () => (/* binding */ gameListURL)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e1cf566180934e85ae91b6162fcda238"
    },
    withCredentials: false
});
const gameListURL = ()=>`/games`;
const gameInfoURL = (slug)=>`/games/${slug}`;
const gameScreenshotsURL = (slug)=>`${gameInfoURL(slug)}/screenshots`;
const platformListURL = ()=>`/platforms`;
const PAGE_SIZE = 40;
const gameListParams = (page, searchQuery, platforms, filter)=>({
        page,
        page_size: PAGE_SIZE,
        search: searchQuery,
        ordering: filter,
        platforms: platforms.length === 0 ? undefined : platforms.join(",")
    });
const gameListFromQuery = (query)=>{
    return {
        searchQuery: query.search,
        filter: query.ordering,
        platforms: query.platforms ? query.platforms?.split(",") : []
    };
};
function fetcher(url, params) {
    return axiosInstance.get(url, {
        params
    }).then((res)=>res.data).catch(()=>undefined);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;