(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 60)
            }["Navbar.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 900,
            padding: '0 40px',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'background 0.4s, border-color 0.4s',
            background: scrolled ? 'rgba(10,8,6,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(163,98,60,0.2)' : '1px solid transparent'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#hero",
                style: {
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'Oswald, sans-serif',
                            fontSize: '22px',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            color: '#F0E8D8',
                            textTransform: 'uppercase'
                        },
                        children: "Smokers BBQ"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '9px',
                            fontWeight: 700,
                            letterSpacing: '0.3em',
                            color: '#A3623C',
                            textTransform: 'uppercase'
                        },
                        children: "Carnes Defumadas"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '36px',
                    listStyle: 'none',
                    margin: 0
                },
                className: "nav-desktop",
                children: [
                    '#solucao',
                    '#produtos',
                    '#parceria',
                    '#sobre',
                    '#contato'
                ].map((href, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            onClick: ()=>setOpen(false),
                            style: {
                                fontFamily: 'Lato, sans-serif',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: '#B8AD9E',
                                textDecoration: 'none'
                            },
                            children: [
                                'Solução',
                                'Produtos',
                                'Parceria B2B',
                                'Sobre',
                                'Contato'
                            ][i]
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 31,
                            columnNumber: 23
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#contato",
                style: {
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#0A0806',
                    background: '#A3623C',
                    border: 'none',
                    padding: '10px 22px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)'
                },
                children: "Degustação"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Navbar, "jAm7jTHG65/J2yarYImCswCRH6E=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const fade = (delay = 0)=>({
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8,
            delay
        }
    });
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        style: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: '#0A0806',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '72px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(163,98,60,0.08) 0%, transparent 60%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                style: {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '55%',
                    height: '100%',
                    opacity: 0.06,
                    pointerEvents: 'none'
                },
                viewBox: "0 0 600 800",
                preserveAspectRatio: "xMidYMid slice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M100,800 Q120,600 80,400 Q60,200 100,0",
                        stroke: "#A3623C",
                        strokeWidth: "1",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M200,800 Q240,580 190,360 Q150,140 200,0",
                        stroke: "#A3623C",
                        strokeWidth: "0.5",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M320,800 Q350,600 300,380 Q260,160 320,0",
                        stroke: "#A37533",
                        strokeWidth: "0.8",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M430,800 Q460,620 420,400 Q380,180 430,0",
                        stroke: "#A3623C",
                        strokeWidth: "0.4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1160px',
                    margin: '0 auto',
                    padding: '0 40px',
                    position: 'relative',
                    zIndex: 2,
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fade(0),
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: '#A3623C',
                            border: '1px solid rgba(163,98,60,0.4)',
                            padding: '8px 18px',
                            marginBottom: '36px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: '#A3623C',
                                    display: 'inline-block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            "American BBQ Premium · São Paulo, Brasil"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        ...fade(0.2),
                        style: {
                            fontFamily: 'Oswald, sans-serif',
                            fontSize: 'clamp(42px, 6vw, 80px)',
                            fontWeight: 700,
                            lineHeight: 1.0,
                            textTransform: 'uppercase',
                            color: '#F0E8D8',
                            marginBottom: '28px'
                        },
                        children: [
                            "O Legítimo",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#A3623C'
                                },
                                children: "American BBQ."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 26,
                                columnNumber: 66
                            }, this),
                            "Sem Fumaça, Sem Caos,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 27,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#A3623C'
                                },
                                children: "Apenas Lucro."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        ...fade(0.4),
                        style: {
                            fontSize: '18px',
                            fontWeight: 300,
                            color: '#B8AD9E',
                            maxWidth: '580px',
                            marginBottom: '48px',
                            lineHeight: 1.8
                        },
                        children: "Proteínas premium defumadas por 12h, prontas para regenerar em 5 minutos. A solução de elite para o seu bar, restaurante ou evento."
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fade(0.6),
                        style: {
                            display: 'flex',
                            gap: '16px',
                            flexWrap: 'wrap',
                            marginBottom: '80px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contato",
                                style: {
                                    fontFamily: 'Oswald, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: '#0A0806',
                                    background: '#A3623C',
                                    padding: '16px 36px',
                                    textDecoration: 'none',
                                    clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)'
                                },
                                children: "Quero uma Degustação Técnica"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#parceria",
                                style: {
                                    fontFamily: 'Oswald, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: '#F0E8D8',
                                    background: 'transparent',
                                    border: '1px solid rgba(240,232,216,0.35)',
                                    padding: '16px 36px',
                                    textDecoration: 'none',
                                    clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)'
                                },
                                children: "Ver Parceria B2B"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fade(0.8),
                        style: {
                            display: 'flex',
                            gap: '48px'
                        },
                        children: [
                            [
                                '7+',
                                'Anos de Expertise'
                            ],
                            [
                                '12h',
                                'Defumação Lenta'
                            ],
                            [
                                '60%+',
                                'Margem Bruta'
                            ]
                        ].map(([num, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Oswald, sans-serif',
                                            fontSize: '36px',
                                            fontWeight: 700,
                                            color: '#A3623C',
                                            lineHeight: 1
                                        },
                                        children: num
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: '#B8AD9E',
                                            marginTop: '4px'
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Solucao.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Solucao
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const reveal = {
    initial: {
        opacity: 0,
        y: 40
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: true
    },
    transition: {
        duration: 0.7
    }
};
const cards = [
    {
        title: 'Desperdício Zero',
        text: 'Embalagem a vácuo individual. Você abre apenas o que vende — sem perdas no final do expediente e com controle total do CMV.',
        icon: '✓'
    },
    {
        title: 'Padronização Total',
        text: 'O mesmo sabor e suculência em todos os turnos. Acabe com a variação de qualidade que afasta clientes e complica a operação.',
        icon: '≡'
    },
    {
        title: 'Escalabilidade Garantida',
        text: 'Aumente o volume sem aumentar a equipe. Sem Pitmaster, sem equipamentos caros, sem 12h de monitoramento na sua cozinha.',
        icon: '↑'
    }
];
function Solucao() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solucao",
        style: {
            background: '#110E0B',
            padding: '112px 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '1160px',
                margin: '0 auto',
                padding: '0 40px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...reveal,
                    className: "section-label",
                    children: "O Problema do Mercado"
                }, void 0, false, {
                    fileName: "[project]/components/Solucao.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    ...reveal,
                    style: {
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(28px,4vw,48px)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        lineHeight: 1.1,
                        maxWidth: '780px',
                        marginBottom: '20px'
                    },
                    children: [
                        "Cozinha Lotada? Falta de ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: '#A3623C'
                            },
                            children: "Mão de Obra?"
                        }, void 0, false, {
                            fileName: "[project]/components/Solucao.tsx",
                            lineNumber: 18,
                            columnNumber: 36
                        }, this),
                        " Desperdício de Insumos?"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Solucao.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    ...reveal,
                    style: {
                        fontSize: '20px',
                        fontWeight: 300,
                        color: '#B8AD9E',
                        marginBottom: '64px',
                        maxWidth: '600px'
                    },
                    children: [
                        "Infelizmente o American BBQ não estava ao alcance de Bares e Restaurantes — pela complexidade de produção. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: '#A3623C',
                                fontWeight: 700
                            },
                            children: "A Smokers BBQ chega para resolver este problema."
                        }, void 0, false, {
                            fileName: "[project]/components/Solucao.tsx",
                            lineNumber: 21,
                            columnNumber: 118
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Solucao.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,1fr)',
                        gap: '2px',
                        marginBottom: '64px'
                    },
                    children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ...reveal,
                            transition: {
                                duration: 0.7,
                                delay: i * 0.15
                            },
                            style: {
                                background: '#1A1410',
                                padding: '44px 36px',
                                borderTop: '2px solid transparent',
                                transition: 'border-color 0.3s, background 0.3s',
                                cursor: 'default'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.borderColor = '#A3623C',
                            onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'transparent',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '32px',
                                        color: '#A3623C',
                                        marginBottom: '20px'
                                    },
                                    children: card.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/Solucao.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '20px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        marginBottom: '12px'
                                    },
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Solucao.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '15px',
                                        color: '#B8AD9E',
                                        lineHeight: 1.7
                                    },
                                    children: card.text
                                }, void 0, false, {
                                    fileName: "[project]/components/Solucao.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/Solucao.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Solucao.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...reveal,
                    style: {
                        background: 'linear-gradient(90deg,rgba(163,98,60,0.12),rgba(163,117,51,0.08))',
                        borderLeft: '3px solid #A3623C',
                        padding: '28px 36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '24px',
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: '20px',
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            },
                            children: [
                                "Nós cuidamos do fogo para que ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#A3623C'
                                    },
                                    children: "o seu caixa nunca esfrie."
                                }, void 0, false, {
                                    fileName: "[project]/components/Solucao.tsx",
                                    lineNumber: 38,
                                    columnNumber: 152
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Solucao.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contato",
                            style: {
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: '14px',
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#0A0806',
                                background: '#A3623C',
                                padding: '16px 36px',
                                textDecoration: 'none',
                                clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)',
                                whiteSpace: 'nowrap'
                            },
                            children: "Agendar Degustação"
                        }, void 0, false, {
                            fileName: "[project]/components/Solucao.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Solucao.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Solucao.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Solucao.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Solucao;
var _c;
__turbopack_context__.k.register(_c, "Solucao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Produtos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Produtos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const reveal = (delay = 0)=>({
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.7,
            delay
        }
    });
const produtos = [
    {
        num: '01',
        nome: 'Brisket',
        tag: 'Carro-chefe · Texas BBQ',
        desc: 'O ícone do Texas BBQ. Defumado 12h em lenha de macieira selecionada. Casca crocante, interior suculento com smoke ring perfeito.'
    },
    {
        num: '02',
        nome: 'Costelinha Suína',
        tag: 'Campeão de vendas',
        desc: 'O campeão de vendas. Macia, suculenta e irresistível. Cai do osso com textura que conquista qualquer cardápio de bar ou restaurante.'
    },
    {
        num: '03',
        nome: 'Cupim Defumado',
        tag: 'Toque brasileiro',
        desc: 'O toque brasileiro na técnica americana. Corte nobre com marmoreio natural, defumado até atingir maciez incomparável.'
    },
    {
        num: '04',
        nome: 'Costela Bovina',
        tag: 'Corte premium',
        desc: 'O corte premium de alto impacto. Imponente, saborosa e com alto valor percebido — justifica o preço premium no cardápio.'
    },
    {
        num: '05',
        nome: 'Frango Defumado',
        tag: 'Versátil · Acessível',
        desc: 'Opção acessível para pratos e sanduíches premium. Perfeito para diversificar o cardápio com alto giro e ótima margem.'
    },
    {
        num: '06',
        nome: 'Linguiça Artesanal',
        tag: 'Petisco perfeito',
        desc: 'Linguiça artesanal Smokers defumada. O petisco perfeito para bares e pubs. Fácil preparo, alto giro, clientes sempre pedindo mais.'
    }
];
const steps = [
    {
        n: '01',
        label: 'Seleção',
        desc: 'Carnes nobres selecionadas com rigor'
    },
    {
        n: '02',
        label: 'Defumação 12h',
        desc: 'Lenhas frutíferas, temperatura controlada'
    },
    {
        n: '03',
        label: 'Embalagem a Vácuo',
        desc: 'Sabor e qualidade preservados'
    },
    {
        n: '04',
        label: 'Heat & Eat',
        desc: '5 min no banho-maria. Pronto para servir.'
    }
];
function Produtos() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "produtos",
        style: {
            background: '#0A0806',
            padding: '112px 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '1160px',
                margin: '0 auto',
                padding: '0 40px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...reveal(),
                    className: "section-label",
                    children: "Cardápio de Elite"
                }, void 0, false, {
                    fileName: "[project]/components/Produtos.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    ...reveal(0.1),
                    style: {
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(32px,4vw,52px)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        lineHeight: 1.1,
                        marginBottom: '12px'
                    },
                    children: [
                        "Nosso Cardápio de ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: '#A3623C'
                            },
                            children: "Elite"
                        }, void 0, false, {
                            fileName: "[project]/components/Produtos.tsx",
                            lineNumber: 28,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Produtos.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    ...reveal(0.2),
                    style: {
                        fontSize: '17px',
                        color: '#B8AD9E',
                        marginBottom: '56px',
                        maxWidth: '560px'
                    },
                    children: "As melhores opções de defumados que se encaixam nos mais variados cardápios."
                }, void 0, false, {
                    fileName: "[project]/components/Produtos.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,1fr)',
                        gap: '2px',
                        marginBottom: '80px'
                    },
                    children: produtos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ...reveal(i * 0.1),
                            style: {
                                background: '#110E0B',
                                padding: '40px 32px',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'background 0.3s',
                                cursor: 'default'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = '#1A1410',
                            onMouseLeave: (e)=>e.currentTarget.style.background = '#110E0B',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '64px',
                                        fontWeight: 700,
                                        color: 'rgba(163,98,60,0.08)',
                                        lineHeight: 1,
                                        position: 'absolute',
                                        top: '16px',
                                        right: '24px'
                                    },
                                    children: p.num
                                }, void 0, false, {
                                    fileName: "[project]/components/Produtos.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        color: '#A3623C',
                                        marginBottom: '12px'
                                    },
                                    children: p.tag
                                }, void 0, false, {
                                    fileName: "[project]/components/Produtos.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: '#F0E8D8',
                                        marginBottom: '16px'
                                    },
                                    children: p.nome
                                }, void 0, false, {
                                    fileName: "[project]/components/Produtos.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '14px',
                                        color: '#B8AD9E',
                                        lineHeight: 1.7
                                    },
                                    children: p.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/Produtos.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/Produtos.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Produtos.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dotted-divider",
                    style: {
                        marginBottom: '64px'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Produtos.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    ...reveal(),
                    style: {
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#B8AD9E',
                        textAlign: 'center',
                        marginBottom: '40px'
                    },
                    children: "Nosso Processo de Produção Premium"
                }, void 0, false, {
                    fileName: "[project]/components/Produtos.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        gap: '0'
                    },
                    children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ...reveal(i * 0.1),
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '0 16px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '56px',
                                        height: '56px',
                                        background: '#1A1410',
                                        border: '1px solid rgba(163,98,60,0.4)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '18px',
                                        fontWeight: 700,
                                        color: '#A3623C',
                                        marginBottom: '20px'
                                    },
                                    children: s.n
                                }, void 0, false, {
                                    fileName: "[project]/components/Produtos.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: '#F0E8D8',
                                        marginBottom: '8px'
                                    },
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Produtos.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '13px',
                                        color: '#B8AD9E',
                                        lineHeight: 1.6
                                    },
                                    children: s.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/Produtos.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/Produtos.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Produtos.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Produtos.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Produtos.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Produtos;
var _c;
__turbopack_context__.k.register(_c, "Produtos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Parceria.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Parceria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const reveal = (delay = 0)=>({
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.7,
            delay
        }
    });
const metrics = [
    [
        '60%+',
        'Margem Bruta'
    ],
    [
        '5min',
        'Para Servir'
    ],
    [
        'R$0',
        'Em Equipamentos'
    ],
    [
        '100%',
        'Suporte Técnico'
    ]
];
const benefits = [
    {
        title: 'Eficiência Máxima',
        text: 'Proteínas seladas a vácuo e porcionadas. Do estoque ao prato em 5 minutos. Plug & Play.'
    },
    {
        title: 'Padronização Total',
        text: 'O mesmo sabor e suculência em todos os turnos. Sem variação, sem surpresas.'
    },
    {
        title: 'Desperdício Zero',
        text: 'Abra apenas o que vende. Controle total do CMV. Sem perdas no expediente.'
    },
    {
        title: 'Treinamento Técnico',
        text: 'Ensinamos sua equipe a regenerar e finalizar os pratos com maestria.'
    },
    {
        title: 'Apoio de Marketing',
        text: 'Fotos profissionais e materiais de PDV para turbinar seu Instagram.'
    }
];
function Parceria() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "parceria",
        style: {
            background: '#1A1410',
            padding: '112px 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '1160px',
                margin: '0 auto',
                padding: '0 40px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ...reveal(),
                                className: "section-label",
                                children: "Parceria B2B"
                            }, void 0, false, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                ...reveal(0.1),
                                style: {
                                    fontFamily: 'Oswald, sans-serif',
                                    fontSize: 'clamp(32px,4vw,52px)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    lineHeight: 1.1,
                                    marginBottom: '16px'
                                },
                                children: [
                                    "Transforme Seu Cardápio em um ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#A3623C'
                                        },
                                        children: "Destino Gastronômico."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 24,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                ...reveal(0.2),
                                style: {
                                    fontSize: '18px',
                                    color: '#B8AD9E',
                                    marginBottom: '40px'
                                },
                                children: "Sem fumaça, sem complicação."
                            }, void 0, false, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ...reveal(0.3),
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '2px',
                                    marginBottom: '32px'
                                },
                                children: metrics.map(([num, label], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#242018',
                                            padding: '28px 24px',
                                            borderTop: '2px solid rgba(163,98,60,0.2)',
                                            transition: 'border-color 0.3s',
                                            cursor: 'default'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.borderColor = '#A3623C',
                                        onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'rgba(163,98,60,0.2)',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Oswald, sans-serif',
                                                    fontSize: '40px',
                                                    fontWeight: 700,
                                                    color: '#A3623C',
                                                    lineHeight: 1,
                                                    marginBottom: '6px'
                                                },
                                                children: num
                                            }, void 0, false, {
                                                fileName: "[project]/components/Parceria.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    color: '#B8AD9E',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.05em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Parceria.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ...reveal(0.4),
                                style: {
                                    background: 'rgba(163,98,60,0.1)',
                                    border: '1px solid rgba(163,98,60,0.3)',
                                    padding: '20px 24px',
                                    marginBottom: '36px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '14px',
                                        fontStyle: 'italic',
                                        color: '#B8AD9E'
                                    },
                                    children: [
                                        "⚠ ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: '#A3623C',
                                                fontStyle: 'normal'
                                            },
                                            children: "Capacidade de produção limitada"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Parceria.tsx",
                                            lineNumber: 40,
                                            columnNumber: 88
                                        }, this),
                                        " para manter o padrão artesanal. Garanta sua cota de fornecimento."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Parceria.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ...reveal(0.5),
                                style: {
                                    display: 'flex',
                                    gap: '16px',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contato",
                                        style: {
                                            fontFamily: 'Oswald, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: '#0A0806',
                                            background: '#A3623C',
                                            padding: '16px 28px',
                                            textDecoration: 'none',
                                            clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)'
                                        },
                                        children: "Agendar Degustação Técnica"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contato",
                                        style: {
                                            fontFamily: 'Oswald, sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: '#F0E8D8',
                                            background: 'transparent',
                                            border: '1px solid rgba(240,232,216,0.35)',
                                            padding: '16px 28px',
                                            textDecoration: 'none',
                                            clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)'
                                        },
                                        children: "Baixar Catálogo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Parceria.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    listStyle: 'none',
                                    marginBottom: '40px',
                                    padding: 0
                                },
                                children: benefits.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        ...reveal(i * 0.1),
                                        style: {
                                            display: 'flex',
                                            gap: '16px',
                                            padding: '20px 0',
                                            borderBottom: '1px solid rgba(240,232,216,0.06)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '44px',
                                                    height: '44px',
                                                    flexShrink: 0,
                                                    background: 'rgba(163,98,60,0.1)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#A3623C',
                                                    fontSize: '18px'
                                                },
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Parceria.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            display: 'block',
                                                            fontFamily: 'Oswald, sans-serif',
                                                            fontSize: '16px',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.06em',
                                                            color: '#F0E8D8',
                                                            marginBottom: '4px'
                                                        },
                                                        children: b.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Parceria.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: '#B8AD9E'
                                                        },
                                                        children: b.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Parceria.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Parceria.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ...reveal(0.5),
                                style: {
                                    background: '#110E0B',
                                    border: '1px solid rgba(163,117,51,0.25)',
                                    padding: '32px',
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: 'linear-gradient(90deg,#A3623C,#A37533)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Oswald, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            color: '#C49040',
                                            marginBottom: '12px'
                                        },
                                        children: '✦ Selo "Meat by Smokers BBQ"'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '14px',
                                            color: '#B8AD9E',
                                            lineHeight: 1.7
                                        },
                                        children: "Ao se tornar parceiro, você agrega autoridade ao seu cardápio usando nossa marca como garantia de procedência premium. Um diferencial que o cliente percebe e paga mais por isso."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Parceria.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Parceria.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Parceria.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Parceria.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Parceria.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Parceria.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Parceria;
var _c;
__turbopack_context__.k.register(_c, "Parceria");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sobre.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sobre
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const reveal = (delay = 0)=>({
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.7,
            delay
        }
    });
function Sobre() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "sobre",
        style: {
            background: '#0A0806',
            padding: '112px 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '1160px',
                margin: '0 auto',
                padding: '0 40px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -40
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        style: {
                            position: 'relative',
                            height: '480px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: '60px',
                                    bottom: '60px',
                                    background: '#1A1410',
                                    border: '1px solid rgba(163,98,60,0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "64",
                                        height: "64",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#A3623C",
                                        strokeWidth: "0.8",
                                        opacity: "0.3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sobre.tsx",
                                                lineNumber: 15,
                                                columnNumber: 124
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 8v4l3 3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sobre.tsx",
                                                lineNumber: 15,
                                                columnNumber: 156
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sobre.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            fontWeight: 700,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: 'rgba(163,98,60,0.4)'
                                        },
                                        children: "Foto do Pit Smoker"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sobre.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: '200px',
                                    height: '200px',
                                    background: 'rgba(163,98,60,0.08)',
                                    border: '1px solid rgba(163,98,60,0.25)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '24px',
                                    textAlign: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'Georgia, serif',
                                        fontStyle: 'italic',
                                        fontSize: '15px',
                                        color: '#C07A4A',
                                        lineHeight: 1.5
                                    },
                                    children: '"A paciência do Low & Slow. A busca pela mordida perfeita."'
                                }, void 0, false, {
                                    fileName: "[project]/components/Sobre.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sobre.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ...reveal(),
                                className: "section-label",
                                children: "Nossa História"
                            }, void 0, false, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                ...reveal(0.1),
                                style: {
                                    fontFamily: 'Oswald, sans-serif',
                                    fontSize: 'clamp(28px,3.5vw,44px)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    lineHeight: 1.1,
                                    marginBottom: '28px'
                                },
                                children: [
                                    "Onde a Tradição do ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#A3623C'
                                        },
                                        children: "Texas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sobre.tsx",
                                        lineNumber: 26,
                                        columnNumber: 34
                                    }, this),
                                    " Encontra a Eficiência de ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#A3623C'
                                        },
                                        children: "São Paulo."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sobre.tsx",
                                        lineNumber: 26,
                                        columnNumber: 107
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                ...reveal(0.2),
                                style: {
                                    fontSize: '16px',
                                    color: '#B8AD9E',
                                    lineHeight: 1.85,
                                    marginBottom: '20px'
                                },
                                children: [
                                    "A Smokers BBQ não nasceu em um escritório, mas ao redor do fogo. Nossa história é movida por um fascínio quase obsessivo por duas coisas: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        style: {
                                            color: '#C07A4A'
                                        },
                                        children: "a paciência do Low & Slow"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sobre.tsx",
                                        lineNumber: 29,
                                        columnNumber: 153
                                    }, this),
                                    " e a busca pela mordida perfeita."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                ...reveal(0.3),
                                style: {
                                    fontSize: '16px',
                                    color: '#B8AD9E',
                                    lineHeight: 1.85,
                                    marginBottom: '20px'
                                },
                                children: "Tudo começou com a união de duas visões complementares. A expertise de Fernando Rezende em comunicação e estratégia, e o rigor técnico de Ricardo Bertoni — um apaixonado pela cultura do defumado que foi ao Texas aprender com os grandes Pitmasters."
                            }, void 0, false, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                ...reveal(0.4),
                                style: {
                                    fontSize: '16px',
                                    color: '#B8AD9E',
                                    lineHeight: 1.85,
                                    marginBottom: '48px'
                                },
                                children: "Unimos a bagagem técnica internacional à estrutura profissional da nossa produção em São Paulo, criando um ecossistema que preserva a alma artesanal da defumação em escala industrial."
                            }, void 0, false, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                ...reveal(0.5),
                                style: {
                                    display: 'flex',
                                    gap: '0',
                                    borderTop: '1px solid rgba(240,232,216,0.08)',
                                    paddingTop: '36px'
                                },
                                children: [
                                    [
                                        '7+',
                                        'Anos de expertise'
                                    ],
                                    [
                                        '12h',
                                        'Defumação por corte'
                                    ],
                                    [
                                        '60%+',
                                        'Margem parceiros'
                                    ]
                                ].map(([val, lbl], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            paddingRight: i < 2 ? '36px' : '0',
                                            paddingLeft: i > 0 ? '36px' : '0',
                                            borderRight: i < 2 ? '1px solid rgba(240,232,216,0.08)' : 'none'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Oswald, sans-serif',
                                                    fontSize: '42px',
                                                    fontWeight: 700,
                                                    color: '#A3623C',
                                                    lineHeight: 1,
                                                    marginBottom: '8px'
                                                },
                                                children: val
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sobre.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    color: '#B8AD9E'
                                                },
                                                children: lbl
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sobre.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/Sobre.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Sobre.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sobre.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sobre.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Sobre.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sobre.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Sobre;
var _c;
__turbopack_context__.k.register(_c, "Sobre");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contato.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contato
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const reveal = (delay = 0)=>({
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.7,
            delay
        }
    });
function Contato() {
    _s();
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contato",
        style: {
            background: '#110E0B',
            padding: '112px 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '1160px',
                margin: '0 auto',
                padding: '0 40px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        maxWidth: '640px',
                        margin: '0 auto 72px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ...reveal(),
                            className: "section-label",
                            style: {
                                justifyContent: 'center'
                            },
                            children: "Pronto para Começar?"
                        }, void 0, false, {
                            fileName: "[project]/components/Contato.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            ...reveal(0.1),
                            style: {
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: 'clamp(32px,4vw,52px)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                lineHeight: 1.1,
                                marginBottom: '16px'
                            },
                            children: [
                                "Pronto para Elevar o Nível do ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#A3623C'
                                    },
                                    children: "Seu Churrasco?"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contato.tsx",
                                    lineNumber: 16,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contato.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            ...reveal(0.2),
                            style: {
                                fontSize: '17px',
                                color: '#B8AD9E'
                            },
                            children: "Agende uma degustação técnica gratuita ou fale direto com nosso especialista."
                        }, void 0, false, {
                            fileName: "[project]/components/Contato.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contato.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px',
                        alignItems: 'start'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                    ...reveal(),
                                    style: {
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '24px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        marginBottom: '16px'
                                    },
                                    children: "Fale Diretamente"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contato.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    ...reveal(0.1),
                                    style: {
                                        fontSize: '16px',
                                        color: '#B8AD9E',
                                        marginBottom: '32px'
                                    },
                                    children: "Entre em contato pelo canal de sua preferência. Nossa equipe responde em até 2 horas em horário comercial."
                                }, void 0, false, {
                                    fileName: "[project]/components/Contato.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px'
                                    },
                                    children: [
                                        {
                                            href: 'https://wa.me/5511989460983',
                                            label: '(11) 98946-0983 — WhatsApp'
                                        },
                                        {
                                            href: 'mailto:vendas@smokersbbq.com.br',
                                            label: 'vendas@smokersbbq.com.br'
                                        },
                                        {
                                            href: 'https://instagram.com/smokersbbq_br',
                                            label: '@smokersbbq_br'
                                        },
                                        {
                                            href: 'https://smokersbbq.com.br',
                                            label: 'smokersbbq.com.br'
                                        }
                                    ].map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                            ...reveal(i * 0.1),
                                            href: link.href,
                                            target: "_blank",
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px',
                                                textDecoration: 'none',
                                                color: '#B8AD9E',
                                                fontSize: '15px',
                                                padding: '16px 20px',
                                                background: '#1A1410',
                                                borderLeft: '3px solid transparent',
                                                transition: 'all 0.2s'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = '#A3623C';
                                                e.currentTarget.style.color = '#F0E8D8';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = 'transparent';
                                                e.currentTarget.style.color = '#B8AD9E';
                                            },
                                            children: [
                                                "→ ",
                                                link.label
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/Contato.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Contato.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contato.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ...reveal(0.2),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: 'Oswald, sans-serif',
                                        fontSize: '24px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        marginBottom: '24px'
                                    },
                                    children: "Solicite uma Degustação"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contato.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#A3623C',
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        letterSpacing: '0.05em'
                                    },
                                    children: "✓ Mensagem enviada! Entraremos em contato em breve."
                                }, void 0, false, {
                                    fileName: "[project]/components/Contato.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        setSent(true);
                                    },
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'block',
                                                                fontSize: '11px',
                                                                fontWeight: 700,
                                                                letterSpacing: '0.2em',
                                                                textTransform: 'uppercase',
                                                                color: '#B8AD9E',
                                                                marginBottom: '8px'
                                                            },
                                                            children: "Nome *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            placeholder: "Seu nome",
                                                            style: {
                                                                width: '100%',
                                                                background: '#1A1410',
                                                                border: '1px solid rgba(240,232,216,0.1)',
                                                                color: '#F0E8D8',
                                                                fontFamily: 'Lato, sans-serif',
                                                                fontSize: '15px',
                                                                padding: '14px 18px',
                                                                outline: 'none'
                                                            },
                                                            onFocus: (e)=>e.target.style.borderColor = '#A3623C',
                                                            onBlur: (e)=>e.target.style.borderColor = 'rgba(240,232,216,0.1)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 200
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Contato.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'block',
                                                                fontSize: '11px',
                                                                fontWeight: 700,
                                                                letterSpacing: '0.2em',
                                                                textTransform: 'uppercase',
                                                                color: '#B8AD9E',
                                                                marginBottom: '8px'
                                                            },
                                                            children: "Empresa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "Bar ou restaurante",
                                                            style: {
                                                                width: '100%',
                                                                background: '#1A1410',
                                                                border: '1px solid rgba(240,232,216,0.1)',
                                                                color: '#F0E8D8',
                                                                fontFamily: 'Lato, sans-serif',
                                                                fontSize: '15px',
                                                                padding: '14px 18px',
                                                                outline: 'none'
                                                            },
                                                            onFocus: (e)=>e.target.style.borderColor = '#A3623C',
                                                            onBlur: (e)=>e.target.style.borderColor = 'rgba(240,232,216,0.1)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 201
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Contato.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contato.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'block',
                                                                fontSize: '11px',
                                                                fontWeight: 700,
                                                                letterSpacing: '0.2em',
                                                                textTransform: 'uppercase',
                                                                color: '#B8AD9E',
                                                                marginBottom: '8px'
                                                            },
                                                            children: "WhatsApp *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            placeholder: "(11) 99999-9999",
                                                            style: {
                                                                width: '100%',
                                                                background: '#1A1410',
                                                                border: '1px solid rgba(240,232,216,0.1)',
                                                                color: '#F0E8D8',
                                                                fontFamily: 'Lato, sans-serif',
                                                                fontSize: '15px',
                                                                padding: '14px 18px',
                                                                outline: 'none'
                                                            },
                                                            onFocus: (e)=>e.target.style.borderColor = '#A3623C',
                                                            onBlur: (e)=>e.target.style.borderColor = 'rgba(240,232,216,0.1)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 204
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Contato.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'block',
                                                                fontSize: '11px',
                                                                fontWeight: 700,
                                                                letterSpacing: '0.2em',
                                                                textTransform: 'uppercase',
                                                                color: '#B8AD9E',
                                                                marginBottom: '8px'
                                                            },
                                                            children: "Tipo de Negócio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            style: {
                                                                width: '100%',
                                                                background: '#1A1410',
                                                                border: '1px solid rgba(240,232,216,0.1)',
                                                                color: '#B8AD9E',
                                                                fontFamily: 'Lato, sans-serif',
                                                                fontSize: '15px',
                                                                padding: '14px 18px',
                                                                outline: 'none',
                                                                appearance: 'none',
                                                                cursor: 'pointer'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Selecione..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 56,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Bar / Pub"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Restaurante"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Hamburgueria"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 77
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Açougue Premium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 106
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Rock Bar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 138
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Evento / Buffet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 163
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Outro"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Contato.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 195
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Contato.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Contato.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contato.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '11px',
                                                        fontWeight: 700,
                                                        letterSpacing: '0.2em',
                                                        textTransform: 'uppercase',
                                                        color: '#B8AD9E',
                                                        marginBottom: '8px'
                                                    },
                                                    children: "Mensagem"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contato.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "Conte sobre seu negócio e interesse...",
                                                    rows: 4,
                                                    style: {
                                                        width: '100%',
                                                        background: '#1A1410',
                                                        border: '1px solid rgba(240,232,216,0.1)',
                                                        color: '#F0E8D8',
                                                        fontFamily: 'Lato, sans-serif',
                                                        fontSize: '15px',
                                                        padding: '14px 18px',
                                                        outline: 'none',
                                                        resize: 'vertical'
                                                    },
                                                    onFocus: (e)=>e.target.style.borderColor = '#A3623C',
                                                    onBlur: (e)=>e.target.style.borderColor = 'rgba(240,232,216,0.1)'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contato.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 200
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Contato.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            style: {
                                                fontFamily: 'Oswald, sans-serif',
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                color: '#0A0806',
                                                background: '#A3623C',
                                                border: 'none',
                                                padding: '18px',
                                                cursor: 'pointer',
                                                clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)'
                                            },
                                            children: "Quero Ser Parceiro Smokers BBQ"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contato.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contato.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contato.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contato.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Contato.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Contato.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Contato, "w1r8qcELTw7JaSiaZyfNUqRzIeA=");
_c = Contato;
var _c;
__turbopack_context__.k.register(_c, "Contato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_05dedfb2._.js.map