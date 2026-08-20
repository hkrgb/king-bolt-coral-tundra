import { b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as isAllowedEmail, n as ALLOWED_EMAIL, o as GROK_PROVIDERS } from "./media.server-n7-WniYt.mjs";
import { n as RgbMark, t as Button } from "./rgb-mark-BpbTtWGb.mjs";
import { i as signIn } from "./client-DhSpiK8Y.mjs";
import { n as useCurrentUserState, t as SiteHeader } from "./site-header-ConttUoM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DRiAddPc.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { user, isPending } = useCurrentUserState();
	if (!isPending && user && isAllowedEmail(user.primaryEmail)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	const google = GROK_PROVIDERS.find((p) => p.idp === "google");
	const blocked = Boolean(user && !isAllowedEmail(user.primaryEmail));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "grid flex-1 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hidden flex-col justify-between border-r border-border px-12 py-16 lg:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RgbMark, { className: "mb-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-md font-display text-5xl leading-[1.08] tracking-tight",
						children: "工作室的私人媒體庫"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-sm leading-relaxed text-muted",
						children: "上載相片、MP4 與 MP3，檔案會放到 GitHub 公開庫，即時得到像 xxxxx.jpg 咁嘅直接檔案網址。之後貼去簡報、網站或訊息都用得着。"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.16em] text-subtle uppercase",
					children: "RGB Workshop"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "flex items-center justify-center px-5 py-16 sm:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RgbMark, { className: "mb-6 lg:hidden" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-subtle",
							children: "Sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl tracking-tight",
							children: "用 Google 登入"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: [
								"此空間只限",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: ALLOWED_EMAIL
								}),
								" 使用。"
							]
						}),
						blocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 rounded-[16px] border border-border bg-raised px-4 py-3 text-sm leading-relaxed text-danger",
							children: [
								"這個 Google 帳戶沒有權限。請改用 ",
								ALLOWED_EMAIL,
								" 再試。"
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-3",
							children: google ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "lg",
								className: "w-full",
								onClick: () => void signIn(google.providerId, { callbackURL: "/" }),
								children: "繼續使用 Google"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "登入功能暫時關閉。"
							})
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { Login as component };
