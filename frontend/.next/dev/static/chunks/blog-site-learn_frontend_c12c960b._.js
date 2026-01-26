(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/blog-site-learn/frontend/components/auth/ProtectedRoute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const ProtectedRoute = ({ children })=>{
    _s();
    const { user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    if (!user || isLoading) return null;
    const { username, email } = user;
    return children;
};
_s(ProtectedRoute, "ZW9eLUY+mtMtGtIMPege5LLrMzw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ProtectedRoute;
const __TURBOPACK__default__export__ = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/blog-site-learn/frontend/components/ui/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
const Button = ({ children, onClick, type = "button", variant = "primary", size = "md", className = "", href = "", disabled = false, ...props })=>{
    const base = "font-bold border-2";
    const variants = {
        primary: "bg-[#DC80C5]",
        secondary: "bg-[#EDAF1B]",
        light: "bg-[#E2D2DE]"
    };
    const sizes = {
        sm: "px-4 py-2 text-xs rounded-r-full rounded-l-full",
        md: "px-6 py-3 text-sm rounded-r-full rounded-l-full max-w-[240px]",
        lg: "px-8 py-4 text-base rounded-r-full rounded-l-full"
    };
    return type == "nav-icon" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shadow-[6px_6px_0px_0px_black]", "cursor-pointer", "active:shadow-[0px_0px_0px_0px_black]", "active:translate-x-1 active:translate-y-1", "transition-all duration-100 ease-in-out", sizes[size], variants[variant], className, disabled && "saturate-0 opacity-50 pointer-events-none ", base),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/blog-site-learn/frontend/components/ui/Button.js",
        lineNumber: 16,
        columnNumber: 27
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shadow-[6px_6px_0px_0px_black]", "cursor-pointer", "active:shadow-[0px_0px_0px_0px_black]", "active:translate-x-1 active:translate-y-1", "transition-all duration-100 ease-in-out", sizes[size], variants[variant], className, disabled && "saturate-0 opacity-50 pointer-events-none ", base),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/blog-site-learn/frontend/components/ui/Button.js",
        lineNumber: 29,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/blog-site-learn/frontend/components/ui/FileUpload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/Button.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const FileUpload = ({ onChange, fileName })=>{
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleClick = ()=>{
        inputRef.current.click();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center space-x-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: fileName
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/FileUpload.js",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: handleClick,
                children: "Chose"
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/FileUpload.js",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "file",
                className: "hidden",
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/FileUpload.js",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/blog-site-learn/frontend/components/ui/FileUpload.js",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FileUpload, "iD9XNNsNOlNDckBemnvlLS+aHYk=");
_c = FileUpload;
const __TURBOPACK__default__export__ = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/blog-site-learn/frontend/components/ui/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Input = ({ value = "", onChange, placeholder = "placeholder", variant = "primary", size = "md", label, type = "text", disabled })=>{
    _s();
    const base = "border-2 font-bold";
    const variants = {
        primary: "bg-[#EDAF1B]"
    };
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const sizes = {
        md: {
            label: "text-lg font-bold",
            input: "w-full px-4 py-2 text-base rounded-lg"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    id: id,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sizes[size].label),
                    children: label
                }, void 0, false, {
                    fileName: "[project]/blog-site-learn/frontend/components/ui/Input.js",
                    lineNumber: 19,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    disabled: disabled,
                    id: id,
                    onChange: onChange,
                    type: type,
                    value: value,
                    placeholder: placeholder,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(base, "shadow-[6px_6px_0px_0px_black]", variants[variant], disabled && "saturate-0 opacity-50", sizes[size].input)
                }, void 0, false, {
                    fileName: "[project]/blog-site-learn/frontend/components/ui/Input.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/blog-site-learn/frontend/components/ui/Input.js",
            lineNumber: 18,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(Input, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Input;
const __TURBOPACK__default__export__ = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/blog-site-learn/frontend/components/ui/PopupForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/Input.js [app-client] (ecmascript)");
;
;
;
;
const PopupForm = ({ children, size = "md", variant = "primary", title = "Title", onSubmit, className = "" })=>{
    const base = "shadow-[6px_6px_0px_0px_black] rounded-lg overflow-hidden relative";
    const sizes = {
        md: "lg:min-w-[450px] max-w-[500px] min-h-[300px] border "
    };
    const variants = {
        primary: {
            nav: "bg-[#DC80C5]",
            field: "px-2 py-2 bg-pink-100 pt-10 flex flex-col gap-2"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(base, sizes[size], variants[variant].field),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-full h-8 flex justify-start items-center px-2 gap-1 border-b-1 absolute left-0 top-0", variants[variant].nav),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "absolute left-[50%] -translate-x-[50%]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
                        lineNumber: 29,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 border-black border-1 rounded-full bg-[#DC80C5]"
                    }, void 0, false, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
                        lineNumber: 30,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 border-black border-1 rounded-full bg-[#FCC52E]"
                    }, void 0, false, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
                        lineNumber: 33,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 border-black border-1 rounded-full bg-pink-100"
                    }, void 0, false, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
                        lineNumber: 36,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-full h-full", className),
                onSubmit: onSubmit,
                children: children
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/blog-site-learn/frontend/components/ui/PopupForm.js",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PopupForm;
const __TURBOPACK__default__export__ = PopupForm;
var _c;
__turbopack_context__.k.register(_c, "PopupForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/blog-site-learn/frontend/components/ui/Polaroid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Polaroid = ({ data })=>{
    const { _id, title, imgUrl, caption, author, likeCount } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[300px] relative ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'w-full  h-[380px] bg-gray-150 border-2 rounded-lg bg-[url("@/public/assets/polaroid-style-1.png")] p-[10px] shadow-lg overflow-hidden',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[280px] bg-gray-50 rounded-lg border-2 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-full h-full object-cover",
                        src: imgUrl
                    }, void 0, false, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/Polaroid.js",
                        lineNumber: 10,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/blog-site-learn/frontend/components/ui/Polaroid.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/Polaroid.js",
                lineNumber: 8,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute px-2 py-2 rounded-lg border-2 bg-[var(--primary)] right-[-12px] bottom-[-18px]  text-sm -rotate-6 shadow-[4px_4px_0px_0px_black] ",
                children: author
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/Polaroid.js",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/blog-site-learn/frontend/components/ui/Polaroid.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Polaroid;
const __TURBOPACK__default__export__ = Polaroid;
var _c;
__turbopack_context__.k.register(_c, "Polaroid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/blog-site-learn/frontend/components/ui/Post.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Polaroid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/Polaroid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const flashCount = ()=>{};
const Post = ({ data, type = "post" })=>{
    const { title, caption, author, viewCount, likeCount } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[300px] flex flex-col justify-start items-center gap-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-wrap",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                        lineNumber: 15,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: caption
                    }, void 0, false, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                        lineNumber: 18,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Polaroid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: data
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            type === "post" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-start items-center gap-x-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "space-x-2 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdFlash"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                                lineNumber: 27,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: likeCount
                            }, void 0, false, {
                                fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                                lineNumber: 30,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                        lineNumber: 26,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "space-x-2 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdRemoveRedEye"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                                lineNumber: 36,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: viewCount
                            }, void 0, false, {
                                fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/blog-site-learn/frontend/components/ui/Post.js",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Post;
const __TURBOPACK__default__export__ = Post;
var _c;
__turbopack_context__.k.register(_c, "Post");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/blog-site-learn/frontend/app/post/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$auth$2f$ProtectedRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/auth/ProtectedRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$FileUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/FileUpload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$PopupForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/PopupForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Post$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/components/ui/Post.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$libs$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/libs/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blog-site-learn/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const page = ()=>{
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("What's on your Mind");
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imgUrl, setImgUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("/assets/UploadPlaceholder.png");
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("No image");
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const user = data?.user;
    console.log(user?.username);
    const handleFileChange = async (e)=>{
        const file = e.target.files[0];
        const compressedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file, {
            maxSizeMB: .5,
            maxWidthOrHeight: 1024,
            useWebWorker: true
        });
        setFileName(file.name);
        console.log(compressedFile);
        if (!compressedFile) return;
        try {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImgUrl(reader.result);
                console.log(reader.result);
            };
            reader.readAsDataURL(compressedFile);
        } catch  {
            console.log("file is too large");
        }
    };
    const handlePost = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$libs$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/create-post", {
                title,
                caption,
                imgUrl
            });
            console.log(posted);
        } catch (e) {
            console.log("failed to post");
        }
    };
    const dummy = {
        _id: "asfadf",
        title: "Sankari Today",
        imgUrl: "https://i.pinimg.com/736x/d5/a1/ee/d5a1eed890a8c1cfa4746368a5b1a06b.jpg",
        caption: "I look too cute today ;)",
        author: "Sankari",
        views: 45,
        likeCount: 678
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$auth$2f$ProtectedRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-full flex flex-col items-center justify-start mt-24 pb-4 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$PopupForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSubmit: handlePost,
                    className: "space-y-4 py-4 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Title",
                            placeholder: "title",
                            value: title,
                            onChange: (e)=>setTitle(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                            lineNumber: 71,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Caption",
                            placeholder: "caption",
                            value: caption,
                            onChange: (e)=>setCaption(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                            lineNumber: 77,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$FileUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fileName: fileName,
                            onChange: handleFileChange
                        }, void 0, false, {
                            fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                            lineNumber: 83,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[600px] flex flex-col items-center justify-center px-4 gap-y-8 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Post$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "preview",
                                    data: {
                                        title,
                                        caption,
                                        imgUrl,
                                        title,
                                        caption,
                                        _id: "preview",
                                        author: user ? user.username : "loading"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$components$2f$ui$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "submit",
                                    className: "w-full",
                                    children: "Post"
                                }, void 0, false, {
                                    fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                            lineNumber: 84,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                    lineNumber: 70,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
            lineNumber: 68,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/blog-site-learn/frontend/app/post/page.js",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(page, "c82wvPutu1c7ipbe6RbOuExThLQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$blog$2d$site$2d$learn$2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=blog-site-learn_frontend_c12c960b._.js.map