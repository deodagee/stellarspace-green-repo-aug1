"use strict";
exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 2935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pg: () => (/* binding */ GridItemStyle)
/* harmony export */ });
/* unused harmony exports GridItem, WorkGridItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const GridItem = ({ children, href, title, thumbnail })=>/*#__PURE__*/ _jsx(Box, {
        w: "100%",
        textAlign: "center",
        children: /*#__PURE__*/ _jsxs(LinkBox, {
            cursor: "pointer",
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: thumbnail,
                    alt: title,
                    className: "grid-item-thumbnail",
                    placeholder: "blur",
                    loading: "lazy",
                    quality: 50
                }),
                /*#__PURE__*/ _jsx(LinkOverlay, {
                    href: href,
                    target: "_blank",
                    children: /*#__PURE__*/ _jsx(Text, {
                        mt: 2,
                        children: title
                    })
                }),
                /*#__PURE__*/ _jsx(Text, {
                    fontSize: 14,
                    children: children
                })
            ]
        })
    });
const WorkGridItem = ({ children, id, title, thumbnail })=>/*#__PURE__*/ _jsx(Box, {
        w: "100%",
        textAlign: "center",
        children: /*#__PURE__*/ _jsxs(LinkBox, {
            as: NextLink,
            href: `/services/${id}`,
            scroll: false,
            cursor: "pointer",
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: thumbnail,
                    alt: title,
                    className: "grid-item-thumbnail",
                    placeholder: "blur",
                    quality: 50
                }),
                /*#__PURE__*/ _jsx(LinkOverlay, {
                    as: "div",
                    href: `/works/${id}`,
                    children: /*#__PURE__*/ _jsx(Text, {
                        mt: 2,
                        fontSize: 20,
                        children: title
                    })
                }),
                /*#__PURE__*/ _jsx(Text, {
                    fontSize: 14,
                    children: children
                })
            ]
        })
    });
const GridItemStyle = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {
        styles: `
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grid_item2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2935);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _grid_item2__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _grid_item2__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const variants = {
    hidden: {
        opacity: 0,
        x: 0,
        y: 20
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0
    },
    exit: {
        opacity: 0,
        x: -0,
        y: 20
    }
};
const Layout = ({ children, title })=>{
    const t = `${title} - Deodatus Singiza`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.article, {
        initial: "hidden",
        animate: "enter",
        exit: "exit",
        variants: variants,
        transition: {
            duration: 0.4,
            type: "easeInOut"
        },
        style: {
            position: "relative"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: t
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:title",
                            content: t
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: t
                        })
                    ]
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_grid_item2__WEBPACK_IMPORTED_MODULE_3__/* .GridItemStyle */ .Pg, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;