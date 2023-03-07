"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilterDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-f496dc69-0"
})`
	color: gray;
	padding: 0.5rem 0.75rem;
`;
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-f496dc69-1"
})`
	position: absolute;
	display: flex;
	align-items: center;
	font-size: inherit;
	inset: 0;
	left: revert;
	font-size: 0.9rem;
	pointer-events: none;
`;
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-f496dc69-2"
})`
	position: relative;
	border-radius: 0.25rem;
	border: 1px solid #aaa;
	flex: 1;
	min-width: 25ch;
	background: #fefefe;

	&:hover ${Icon} {
		color: #333;
	}

	&:focus-within {
		outline: 2px solid #2684ff;
		outline-offset: -1px;
	}
`;
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-f496dc69-3"
})`
	display: flex;
	column-gap: 0.5rem;
`;
const StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_2___default().select.withConfig({
    componentId: "sc-f496dc69-4"
})`
	appearance: none;
	width: 100%;
	font-size: inherit;
	padding: 0.5rem;
	border: none;
	background: none;

	&:focus {
		outline: none;
	}
`;
const StyledSortBy = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
    componentId: "sc-f496dc69-5"
})`
	appearance: none;
	font-size: 0.9rem;
	background: #ddd;
	padding: 0.25em;
	border: none;
	border-radius: 0.25rem;
	min-width: 5ch;
	color: #222;
	flex: 0;
`;
function FilterDropdown({ dataArray , initialData , onChange  }) {
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((initialData ?? dataArray[0]).value);
    const [isAscending, setIsAscending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((initialData ?? dataArray[0]).defaultAscending);
    const prefix = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>isAscending ? "" : "-", [
        isAscending
    ]);
    const fullPrefix = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>`${prefix}${filter}`, [
        prefix,
        filter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChange?.(filter);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChange?.(fullPrefix);
    }, [
        fullPrefix
    ]);
    function handleChange(e) {
        const value = e.target.value;
        setIsAscending(dataArray.find((el)=>el.value === value).defaultAscending);
        setFilter(value);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledWrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSelect, {
                        defaultValue: initialData.value,
                        onChange: handleChange,
                        children: dataArray.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: data.value,
                                children: data.label
                            }, data.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconContainer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                            children: "▼"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSortBy, {
                onClick: ()=>{
                    return filter !== "" && setIsAscending((prevValue)=>!prevValue);
                },
                children: isAscending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "↗"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "↘"
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GameCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(945);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const Card = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-6f713311-0"
})`
	position: relative;
	border-radius: 0.5em;
	overflow: hidden;
	color: white;
	place-self: center stretch;

	@media (max-width: 500px) {
		border-radius: 0;
	}
`;
const PosterContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-6f713311-1"
})`
	isolation: isolate;
	position: relative;
	aspect-ratio: 3 / 2;
	width: 100%;

	background: #ddd;

	&::after {
		position: absolute;
		inset: 0;
		z-index: 20;
		display: block;
		content: '';
		background: radial-gradient(
			circle at bottom center,
			transparent,
			#0000000f
		);
	}
`;
const Poster = styled_components__WEBPACK_IMPORTED_MODULE_3___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
    componentId: "sc-6f713311-2"
})`
	top: 0;
	left: 0;

	overflow: hidden;
	display: block;
	object-fit: cover;
`;
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-6f713311-3"
})`
	padding: 1.5em 2em;
	background: #222;
`;
const GamePageLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default().a.withConfig({
    componentId: "sc-6f713311-4"
})`
	color: inherit;
	text-decoration: none;

	&:is(:hover, :active) {
		text-decoration: underline;
	}

	&:is(:visited, :active) {
		color: inherit;
	}
`;
function GameCard({ name , slug , rating , released , posterURL  }) {
    const releaseDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Date(released));
    const dateStr = releaseDate.current.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
    const [src, setSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posterURL);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PosterContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Poster, {
                    src: src ?? "/fallback.png",
                    alt: name,
                    fill: true,
                    onError: ()=>setSrc("/fallback.png"),
                    sizes: "(max-width: 768px) 100vw,      (max-width: 1200px) 50vw,      33vw"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GamePageLink, {
                            href: `/game/${slug}`,
                            children: name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Рейтинг:",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: rating === 0 ? "N/A" : rating
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
                                    children: dateStr
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchableDropdownMulti)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/hooks/useFocus.js

function useFocus() {
    const htmlElRef = (0,external_react_.useRef)(null);
    const setFocus = ()=>{
        htmlElRef.current && htmlElRef.current.focus();
    };
    return [
        htmlElRef,
        setFocus
    ];
}

;// CONCATENATED MODULE: ./src/components/SearchableDropdownMulti.jsx




const StyledButton = external_styled_components_default().button.withConfig({
    componentId: "sc-28b87c35-0"
})`
	appearance: none;
	background: none;
	border: none;
	height: 100%;
	padding: 0.5rem 0.75rem;
	font-size: 0.9rem;
	color: gray;
	flex: 0;

	&:hover {
		color: #333;
	}
`;
const StyledDropdownButton = external_styled_components_default()(StyledButton).withConfig({
    componentId: "sc-28b87c35-1"
})``;
const MultiWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-28b87c35-2"
})`
	position: relative;
	border: 1px solid #aaa;
	min-width: 30ch;

	align-items: center;
	background: #fefefe;
	border-radius: 0.25em;
`;
const StyledMulti = external_styled_components_default().div.withConfig({
    componentId: "sc-28b87c35-3"
})`
	display: flex;
	align-items: center;

	border-radius: inherit;
	${(props)=>props.isOpen && `outline: 2px solid #2684ff;
		outline-offset: -1px;`}

	&:focus-within ${StyledButton} {
		color: #333;
	}
`;
const StyledSelectedContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-28b87c35-4"
})`
	display: flex;
	padding: 0.25rem;
	align-items: center;
	gap: 0.25rem;
	flex-wrap: wrap;
	flex: 1;
`;
const StyledSelectedItem = external_styled_components_default().div.withConfig({
    componentId: "sc-28b87c35-5"
})`
	font-size: 0.7rem;
	padding: 0.25rem 0.5rem;
	background: #ddd;
	border-radius: 0.125rem;

	column-gap: 0.5rem;
	display: flex;
	align-items: center;

	span {
		width: max-content;
	}

	button {
		font-weight: inherit;
		font-size: inherit;
		color: inherit;
		appearance: none;
		background: none;
		border: none;
	}
`;
const StyledSearch = external_styled_components_default().input.withConfig({
    componentId: "sc-28b87c35-6"
})`
	display: block;
	flex: 1;
	padding: 0.25rem 0.5rem;
	border: none;
	font-size: 1rem;
	min-width: 10ch;

	&:focus {
		outline: none;
	}
`;
const Separator = external_styled_components_default().span.withConfig({
    componentId: "sc-28b87c35-7"
})`
	width: 1px;
	background: #aaa;
	color: transparent;
	flex: 0;
`;
const StyledList = external_styled_components_default().div.withConfig({
    componentId: "sc-28b87c35-8"
})`
	display: ${(props)=>props.isOpen ? "block" : "none"};
	position: absolute;
	z-index: 20;
	top: calc(100% + 10px);
	background: white;
	border: inherit;
	border-radius: inherit;
	width: 100%;
	padding: 0.25rem 0;
	box-shadow: 0 0 10px #0000000f;
	max-height: 300px;
	overflow-y: scroll;
`;
const ListElement = external_styled_components_default().div.withConfig({
    componentId: "sc-28b87c35-9"
})`
	padding: 0.5rem 0.5rem;
	user-select: none;

	&:hover {
		background: lightblue;
		cursor: pointer;
	}
`;
function SelectedItem({ onClick , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledSelectedItem, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onClick,
                children: "✕"
            })
        ]
    });
}
function SearchableDropdownMulti({ dataArray , onChange , initialData  }) {
    const [isFocused, setIsFocused] = (0,external_react_.useState)(false);
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [search, setSearch] = (0,external_react_.useState)("");
    const [selected, setSelected] = (0,external_react_.useState)(new Map(initialData.map((data)=>[
            data.value,
            data.label
        ]) ?? []));
    const [inputRef, setInputFocus] = useFocus();
    const filteredData = (0,external_react_.useMemo)(()=>{
        return dataArray.filter((data)=>data.label.toLowerCase().includes(search.toLowerCase()) && !selected.has(data.value));
    }, [
        search,
        selected
    ]);
    const hidden = (0,external_react_.useMemo)(()=>{
        return !isOpen || filteredData.length === 0;
    }, [
        isOpen,
        filteredData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isOpen === true) {
            setInputFocus();
        }
    }, [
        isOpen
    ]);
    (0,external_react_.useEffect)(()=>{
        onChange?.([
            ...selected.keys()
        ]);
    }, [
        selected
    ]);
    function addItem(value, label) {
        setSelected((prevValue)=>{
            prevValue.set(value, label);
            return new Map(prevValue);
        });
        setInputFocus();
    }
    function removeItem(value) {
        setSelected((prevValue)=>{
            prevValue.delete(value);
            return new Map(prevValue);
        });
        setInputFocus();
    }
    function handleClear(e) {
        setSelected((prevValue)=>{
            return new Map();
        });
        setInputFocus();
        setIsFocused(true);
        setIsOpen(true);
        e.stopPropagation();
    }
    function handleBlur(e) {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setSearch("");
            setIsFocused(false);
            setIsOpen(false);
        }
        e.stopPropagation();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MultiWrapper, {
        tabIndex: -1,
        onBlur: handleBlur,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledMulti, {
                isOpen: isFocused,
                onClick: (e)=>{
                    setIsFocused(true);
                    setIsOpen((prevValue)=>!prevValue);
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledSelectedContainer, {
                        children: [
                            [
                                ...selected.entries()
                            ].map(([value, label])=>/*#__PURE__*/ jsx_runtime_.jsx(SelectedItem, {
                                    onClick: (e)=>{
                                        removeItem(value);
                                        e.stopPropagation();
                                    },
                                    children: label
                                }, value)),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledSearch, {
                                ref: inputRef,
                                value: search,
                                onChange: (e)=>{
                                    setSearch(e.target.value);
                                    e.stopPropagation();
                                },
                                placeholder: "Поиск..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
                        onClick: handleClear,
                        children: "✕"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Separator, {
                        children: "0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledDropdownButton, {
                        children: "▼"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledList, {
                isOpen: isFocused && !hidden,
                children: filteredData.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(ListElement, {
                        onClick: ()=>addItem(data.value, data.label),
                        children: data.label
                    }, data.id))
            })
        ]
    });
}


/***/ }),

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value
    ]);
    return debouncedValue;
}


/***/ }),

/***/ 136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGameList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(448);
/* harmony import */ var _modules_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(362);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_infinite__WEBPACK_IMPORTED_MODULE_1__, _modules_fetcher__WEBPACK_IMPORTED_MODULE_2__]);
([swr_infinite__WEBPACK_IMPORTED_MODULE_1__, _modules_fetcher__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useGameList(searchQuery, platforms, filter) {
    const getKey = (pageIndex, previousPageData)=>[
            (0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .gameListURL */ .nd)(),
            (0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .gameListParams */ .Bd)(pageIndex + 1, searchQuery, platforms, filter)
        ];
    const { data , error , isLoading , isValidating , size , setSize  } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_1__["default"])(getKey, ([url, params])=>(0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i)(url, params));
    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        console.log("dfsds");
        setSize(1);
        setGames([]);
    }, [
        searchQuery,
        platforms,
        filter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (data?.at(-1)?.results === undefined) return;
        setGames((prevValue)=>{
            return [
                ...prevValue,
                ...data.at(-1).results
            ];
        });
    }, [
        data
    ]);
    function nextPage() {
        setSize((prevValue)=>prevValue + 1);
    }
    const isFinished = size * _modules_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .PAGE_SIZE */ .IV >= (data?.at(-1)?.count ?? 0);
    return {
        games,
        isLoading,
        isValidating,
        isFinished,
        error,
        currentPage: size,
        nextPage
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useQueryParam)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useQueryParam(name, value) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const prevValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (value !== prevValue.current) {
            const url = {
                query: {
                    ...router.query
                }
            };
            url.query[name] = value;
            router.push(url, undefined, {
                shallow: true
            });
            prevValue.current = value;
        }
    }, [
        value
    ]);
}


/***/ }),

/***/ 299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(945);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _hooks_useGameList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(136);
/* harmony import */ var _hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(378);
/* harmony import */ var _modules_fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(362);
/* harmony import */ var _components_SearchableDropdownMulti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(306);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_FilterDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(104);
/* harmony import */ var _components_GameCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(447);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__, _hooks_useGameList__WEBPACK_IMPORTED_MODULE_6__, _modules_fetcher__WEBPACK_IMPORTED_MODULE_8__]);
([react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__, _hooks_useGameList__WEBPACK_IMPORTED_MODULE_6__, _modules_fetcher__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














async function getServerSideProps(context) {
    const availablePlatforms = await (0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_8__/* .fetcher */ ._i)((0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_8__/* .platformListURL */ .bR)());
    if (availablePlatforms === undefined) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            availablePlatforms: availablePlatforms.results
        }
    };
}
const ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-32044f1b-0"
})`
	margin: auto;
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1em;
	max-width: 1280px;
`;
const ControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-32044f1b-1"
})`
	flex: 2;
`;
const ControlWrapperBigger = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(ControlWrapper).withConfig({
    componentId: "sc-32044f1b-2"
})`
	flex: 3;
`;
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-32044f1b-3"
})`
	width: 100%;
`;
const GameCardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-32044f1b-4"
})`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 1rem;
	padding: 1rem;
	max-width: 1920px;
	margin: auto;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		padding-inline: 0;
		gap: 0.5rem;
	}
`;
const LoadMore = styled_components__WEBPACK_IMPORTED_MODULE_10___default().button.withConfig({
    componentId: "sc-32044f1b-5"
})`
	appearence: none;
	display: block;
	padding: 0.5rem 1rem;
	background: #ddd;
	border: none;
	border-radius: 0.25rem;
	margin: auto;

	cursor: pointer;

	&:disabled {
		cursor: revert;
	}
`;
const LoadMoreContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-32044f1b-6"
})`
	padding-bottom: 1rem;
`;
const StyledSearch = styled_components__WEBPACK_IMPORTED_MODULE_10___default().input.withConfig({
    componentId: "sc-32044f1b-7"
})`
	display: block;
	flex: 1;
	width: 100%;
	padding: 0.5rem 0.75rem;
	border: 1px solid #aaa;
	border-radius: 0.25rem;
	font-size: 1rem;
	min-width: 10ch;
`;
const filtersData = [
    {
        id: 0,
        label: "По умолчанию",
        value: "",
        defaultAscending: true
    },
    {
        id: 1,
        label: "Рейтинг",
        value: "rating",
        defaultAscending: false
    },
    {
        id: 2,
        label: "Дата выхода",
        value: "released",
        defaultAscending: false
    }
];
function Home({ availablePlatforms  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { page , searchQuery , platforms , filter  } = (0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_8__/* .gameListFromQuery */ .Xx)(router.query);
    const [queryStr, setQueryStr] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(searchQuery ?? "");
    const debouncedQueryStr = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(queryStr, 600);
    (0,_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("search", debouncedQueryStr);
    const [currentFilter, setCurrentFilter] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(filter ?? "");
    const debouncedCurrentFilter = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(currentFilter, 300);
    (0,_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("ordering", debouncedCurrentFilter);
    const initialFilterData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const data = filtersData.find((data)=>currentFilter.includes(data.value));
        if (data === undefined) {
            return filtersData[0];
        }
        return {
            ...data,
            defaultAscending: data.value === currentFilter
        };
    }, [
        filtersData,
        filter
    ]);
    const [platformIDs, setPlatformIDs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(platforms ?? []);
    const debouncedPlatformIDs = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(platformIDs, 300);
    const debouncedPlatformStr = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        return debouncedPlatformIDs?.join(",");
    }, [
        debouncedPlatformIDs
    ]);
    (0,_hooks_useQueryParam__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("platforms", debouncedPlatformStr);
    const initialPlatformsData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const dataArray = [];
        if (platformIDs === undefined) {
            return dataArray;
        }
        for (const id of platformIDs){
            const platform = availablePlatforms.find((p)=>{
                return p.id === parseInt(id);
            });
            if (platform === undefined) continue;
            dataArray.push({
                id: platform.id,
                value: platform.id,
                label: platform.name
            });
        }
        return dataArray;
    }, [
        availablePlatforms,
        platformIDs
    ]);
    const { games , isLoading , isValidating , isFinished , error , currentPage , nextPage  } = (0,_hooks_useGameList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(debouncedQueryStr, debouncedPlatformIDs, debouncedCurrentFilter);
    const [loadMoreRef, reachedBottom, entry] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!isLoading && !isFinished && currentPage >= 1 && reachedBottom === true) {
            console.log("ads");
            nextPage();
        }
    }, [
        reachedBottom
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Game Gallery"
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ControlsContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ControlWrapper, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Фильтр"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilterDropdown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        onChange: setCurrentFilter,
                                        dataArray: filtersData,
                                        initialData: initialFilterData
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ControlWrapperBigger, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Платформы"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchableDropdownMulti__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        onChange: setPlatformIDs,
                                        initialData: initialPlatformsData,
                                        dataArray: availablePlatforms.map((platform)=>({
                                                id: platform.id,
                                                value: platform.id,
                                                label: platform.name
                                            }))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SearchWrapper, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Поиск"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSearch, {
                                        placeholder: "Поиск...",
                                        value: queryStr,
                                        onChange: (e)=>setQueryStr(e.target.value)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GameCardsContainer, {
                        children: !isLoading && games.map((game)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GameCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                name: game.name,
                                slug: game.slug,
                                rating: game.rating,
                                released: game.released,
                                posterURL: game.background_image
                            }, game.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadMoreContainer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadMore, {
                            ref: loadMoreRef,
                            disabled: isFinished || isValidating,
                            onClick: nextPage,
                            children: isValidating ? "Загрузка..." : "Больше"
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

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 9:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [626,945,362], () => (__webpack_exec__(299)));
module.exports = __webpack_exports__;

})();