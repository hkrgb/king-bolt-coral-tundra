import { o as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime, n as useQuery } from "./_libs/react+tanstack__react-query.mjs";
import { E as shareUrl, f as fileUrl } from "./_ssr/media.server-n7-WniYt.mjs";
import { d as Check, f as ArrowLeft, u as Copy } from "./_libs/lucide-react.mjs";
import { n as Route$2 } from "./_ssr/router-CswZ_EpJ.mjs";
import { n as fetchMediaMeta } from "./_ssr/media.functions-CcIXiIrF.mjs";
import { i as formatBytes, n as RgbMark, t as Button } from "./_ssr/rgb-mark-BpbTtWGb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-FpEzDiHd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FileView() {
	const { slug } = Route$2.useParams();
	const query = useQuery({
		queryKey: ["media-meta", slug],
		queryFn: () => fetchMediaMeta({ data: slug })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/80",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 text-fg no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RgbMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-tight",
						children: "RGB Workshop"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex h-10 items-center gap-2 rounded-[12px] px-3 text-sm text-muted no-underline hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "媒體庫"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-10 sm:px-6",
			children: query.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-80 animate-pulse rounded-[28px] bg-surface" }) : query.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewer, { item: query.data }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] border border-border bg-surface px-6 py-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "找不到這個檔案"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "連結可能已刪除或打錯。"
				})]
			})
		})]
	});
}
function Viewer({ item }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const src = fileUrl(item);
	async function copy() {
		const url = shareUrl(item, window.location.origin);
		await navigator.clipboard.writeText(url);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-[28px] border border-border bg-surface",
			children: item.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: item.filename,
				className: "mx-auto max-h-[70vh] w-full object-contain"
			}) : item.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				src,
				controls: true,
				className: "w-full bg-bg"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					src,
					controls: true,
					className: "w-full"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl tracking-tight",
					children: item.filename
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-sm text-muted",
					children: src
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm tabular-nums text-subtle",
					children: formatBytes(item.sizeBytes)
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				onClick: () => void copy(),
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "已複製" : "複製檔案連結"]
			})]
		})]
	});
}
//#endregion
export { FileView as component };
