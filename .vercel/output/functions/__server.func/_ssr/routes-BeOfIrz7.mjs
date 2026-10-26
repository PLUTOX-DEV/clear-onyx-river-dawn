import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Lightbulb, c as Compass, i as Menu, l as Check, o as Globe, r as Palette, s as Copy, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BeOfIrz7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CA = "ErvP5HMiy5Hbt7oHYWmyrvZVXHNm5TcubZnMuyBUpump";
var PAIR = "FKXiBnodFHGgwqY7sv6qt8arhLDWf47qZUvhLgbR71Pu";
var CHART = `https://dexscreener.com/solana/${PAIR}?embed=1&loadChartSettings=0&trades=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15`;
var NAV = [
	{
		href: "#story",
		label: "Story"
	},
	{
		href: "#vision",
		label: "Vision"
	},
	{
		href: "#pillars",
		label: "Pillars"
	},
	{
		href: "#chart",
		label: "Chart"
	},
	{
		href: "#join",
		label: "Join"
	}
];
var SOCIALS = [
	{
		href: "https://x.com/fableonanalos",
		label: "X"
	},
	{
		href: "https://www.tiktok.com/@fableonanalos",
		label: "TikTok"
	},
	{
		href: "https://www.instagram.com/fableonanalos",
		label: "Instagram"
	}
];
var STEPS = [
	{
		n: "01",
		title: "Ideas",
		text: "Every project begins with a concept. Creativity deserves room to become something meaningful.",
		icon: Lightbulb
	},
	{
		n: "02",
		title: "Identity",
		text: "A clear identity helps people understand what a project represents, and what it refuses to be.",
		icon: Palette
	},
	{
		n: "03",
		title: "Strategy",
		text: "Direction beats noise. Thoughtful planning makes purpose easier to communicate and grow.",
		icon: Compass
	},
	{
		n: "04",
		title: "Community",
		text: "People bring a project to life through consistent conversation, collaboration, and shared purpose.",
		icon: Globe
	}
];
var ENCOURAGE = [
	["Project identity", "Recognizable branding and communication that says what the work actually is."],
	["Creative thinking", "Space to explore ideas before they are flattened into a launch."],
	["Strategic development", "Positioning, messaging, and growth approached with intent."],
	["Community building", "Participation that is real, not a spike of attention."],
	["Collaboration", "Creators exchanging ideas and learning from one another’s journeys."]
];
var AUDIENCE = [
	["New creators", "People developing an idea and looking for a recognizable identity."],
	["Project builders", "Creators strengthening what they have already started."],
	["Community builders", "People gathering others around a shared vision."],
	["ANALOS creators", "Builders contributing inside the ecosystem where FABLE begins."],
	["Creators beyond ANALOS", "Anyone, in any ecosystem, who cares about identity, strategy, and community."]
];
var PRINCIPLES = [
	["Creativity", "Fresh ideas and original thinking are welcome here."],
	["Clarity", "A project should be able to say what it is for."],
	["Consistency", "Continued effort matters more than a single announcement."],
	["Collaboration", "Creators learn faster when they build in the open, together."],
	["Community", "Meaningful connections form around a shared vision."],
	["Growth", "Learning, adaptation, and progress are part of the work."]
];
function money(value, digits = 2) {
	if (value == null || !Number.isFinite(value)) return "—";
	if (value >= 1e6) return `$${(value / 1e6).toFixed(digits)}M`;
	if (value >= 1e3) return `$${(value / 1e3).toFixed(digits)}K`;
	if (value >= 1) return `$${value.toFixed(digits)}`;
	return `$${value.toPrecision(3)}`;
}
function price(value) {
	if (value == null || !Number.isFinite(value)) return "—";
	if (value >= 1) return `$${value.toFixed(4)}`;
	return `$${value.toPrecision(4)}`;
}
function FablePage() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [market, setMarket] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let alive = true;
		async function load() {
			try {
				const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CA}`);
				if (!response.ok) return;
				const pair = (await response.json()).pairs?.[0];
				if (!pair || !alive) return;
				const nextPrice = pair.priceUsd ? Number(pair.priceUsd) : null;
				setMarket({
					priceUsd: nextPrice != null && Number.isFinite(nextPrice) ? nextPrice : null,
					marketCap: pair.marketCap ?? pair.fdv ?? null,
					volume: pair.volume?.h24 ?? null,
					change: pair.priceChange?.h24 ?? null
				});
			} catch {}
		}
		load();
		const timer = window.setInterval(() => void load(), 2e4);
		return () => {
			alive = false;
			window.clearInterval(timer);
		};
	}, []);
	async function copyCa() {
		try {
			await navigator.clipboard.writeText(CA);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	}
	const change = market?.change ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "nav",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nav-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "brand",
						href: "#top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/mark.png",
							alt: ""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "wordmark",
							children: "FABLE"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "nav-links",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "btn btn-primary only-desk",
						href: "#chart",
						children: "Live chart"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "nav-toggle",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((value) => !value),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "nav-panel",
				"aria-label": "Mobile",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					children: item.label
				}, item.href))
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-frame",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "hero-img",
						src: "/brand/hero.png",
						alt: "FABLE banner: a hooded figure before an open book, floating islands, and the line Build Beyond the Launch"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section",
					id: "story",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap rise",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Fable on Analos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display",
								children: "Every idea deserves the chance to become something greater."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "path",
								"aria-label": "Ideas to identity to strategy to community",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ideas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "→"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Identity" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "→"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Strategy" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "→"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Community" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lede",
								children: "FABLE is a creator-focused project for people turning a spark into a recognizable identity, a clearer strategy, and a community that grows with the vision. Rooted in the ANALOS ecosystem. Open to ideas everywhere."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-primary",
									href: "#vision",
									children: "Read the vision"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-ghost",
									href: "#chart",
									children: "View the chart"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "cells",
							children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "cell",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
										size: 18,
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text })
								]
							}, step.n))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section section-follow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap split",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "01 — About"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "h2",
							children: "A launch introduces an idea. Building is what follows."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stack",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every great project starts with an idea, but a recognizable one takes more than inspiration. It takes identity, strategy, consistency, and people who believe in the vision." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "FABLE encourages creators to develop concepts, establish identities, improve how they communicate, and connect with others who share the ambition. The foundation is ANALOS. The same challenges show up far beyond it." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We believe in building with purpose, creating with vision, and growing together." })
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "vision",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap split",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "02 — Vision"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "h2",
								children: "More ideas. Stronger identities. Smarter strategies. Growing communities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A world where creators can turn ideas into recognizable projects, say clearly what they stand for, and gather people around the work. Roots in ANALOS. Not limited to one ecosystem." })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "03 — Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "h2",
								children: "Encourage the culture, not only the beginning."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Building is more than launching a token or catching attention. It needs a purpose, consistent communication, thoughtful planning, and people who connect with it. FABLE exists to push better ideas, clearer identities, stronger strategies, and more connected communities — inside ANALOS and past its edges." })
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "pillars",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "04 — What Fable stands for"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "h2",
								children: "Four principles. One journey."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lede",
								children: "Ideas create possibilities. Identity creates recognition. Strategy provides direction. Community brings people together."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rows",
								children: ENCOURAGE.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })]
								}, title))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "roots",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Built on Analos, beyond boundaries"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "quote",
								children: "Our roots are in ANALOS. Our mindset is built around creativity. Our vision reaches beyond boundaries."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lede",
								children: "ANALOS is where FABLE begins, and it stays part of the identity. Creativity is not confined to one chain of conversations. Creators everywhere are naming themselves, sharpening strategy, and growing communities. FABLE holds both: the ecosystem it comes from, and the wider habit of building with intention."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Who it is for"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "h2",
								children: "Different ideas. Different journeys. One spirit of building."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rows",
								children: AUDIENCE.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })]
								}, title))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap split",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "The philosophy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "h2",
							children: "Launching a project and building one are not the same thing."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stack",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A name identifies a project. A clear identity helps people understand it. Visibility attracts attention. Meaningful communication helps people connect with the purpose." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That is why FABLE focuses on the journey after the beginning. Think about what you are building, why, and how to develop it with more clarity." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Build with intention. Communicate with clarity. Develop with strategy. Grow with purpose." })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "principles",
							children: PRINCIPLES.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "principle",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })]
							}, title))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap split",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "The road ahead"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "h2",
							children: "One step at a time, from the beginning of the journey."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stack",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Identities develop. Strategies evolve. Communities grow through consistent effort. As FABLE grows, the aim is creative initiatives, collaboration, and conversations about how projects actually develop." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One idea can begin a project. A clear identity can make it recognizable. A thoughtful strategy can guide it. A community can help it grow." })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "chart",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "$FABLE · Solana"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "h2",
								children: "Live chart"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lede",
								children: "Contract address for FABLE on ANALOS. Confirm it before you trade."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel chart-block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "stats",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "stat",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Price" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: price(market?.priceUsd ?? null) })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "stat",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Market cap" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(market?.marketCap ?? null) })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "stat",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "24h volume" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(market?.volume ?? null) })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "stat",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "24h change" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: change == null ? void 0 : change >= 0 ? "up" : "down",
													children: change == null ? "—" : `${change > 0 ? "+" : ""}${change.toFixed(2)}%`
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										className: "chart-frame",
										title: "FABLE live chart on DexScreener",
										src: CHART,
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "ca",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: CA }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "btn btn-ghost",
											onClick: () => void copyCa(),
											children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 }), copied ? "Copied" : "Copy CA"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "sr-only",
								"aria-live": "polite",
								children: copied ? "Contract address copied" : ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "btn btn-primary",
										href: `https://pump.fun/coin/${CA}`,
										target: "_blank",
										rel: "noreferrer",
										children: "Pump.fun"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "btn btn-ghost",
										href: `https://dexscreener.com/solana/${PAIR}`,
										target: "_blank",
										rel: "noreferrer",
										children: "DexScreener"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "btn btn-ghost",
										href: `https://solscan.io/token/${CA}`,
										target: "_blank",
										rel: "noreferrer",
										children: "Solscan"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "note",
								children: "Market figures refresh from DexScreener. Not financial advice."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "join",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap rise rise-late",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Join the journey"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display",
								children: "Build with purpose. Grow together."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lede",
								children: "Every creator starts somewhere — a name, an idea, a vision waiting to be developed. Follow FABLE, meet the community, and stay with a culture that values creativity, identity, strategy, and growth. Whether you are building inside ANALOS or somewhere else."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "socials",
								children: SOCIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-ghost",
									href: item.href,
									target: "_blank",
									rel: "noreferrer",
									children: item.label
								}, item.label))
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "foot",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "wordmark",
					children: "FABLE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "foot-line",
					children: "Ideas → Identity → Strategy → Community"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "foot-line flat",
					children: "Built on ANALOS. Open to ideas everywhere."
				})]
			})
		})
	] });
}
var SplitComponent = FablePage;
//#endregion
export { SplitComponent as component };
