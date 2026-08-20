import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime, i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { E as shareUrl, _ as isAllowedEmail, f as fileUrl, h as githubRepoUrl, s as MAX_FILE_BYTES, t as ACCEPT_ATTR, v as isAllowedFile } from "./media.server-n7-WniYt.mjs";
import { a as Music, c as Film, d as Check, i as Search, l as ExternalLink, o as ImagePlus, r as Trash2, s as Github, t as Upload, u as Copy } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as removeMedia, i as listMyMedia, r as getGithubStatus, t as connectGithub } from "./media.functions-CcIXiIrF.mjs";
import { a as formatStamp, i as formatBytes, r as cn, t as Button } from "./rgb-mark-BpbTtWGb.mjs";
import { r as getBearerToken } from "./client-DhSpiK8Y.mjs";
import { n as useCurrentUserState, t as SiteHeader } from "./site-header-ConttUoM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BX6SfB5s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Auth state components — plain wrappers around `useCurrentUserState()`.
*
* Auth is ON by default (including the sandbox live preview, which does real
* sign-in). Visitors are signed out until they authenticate. The shared dev
* user only appears when auth is explicitly disabled (`VITE_AUTH_ENABLED=false`).
* While the session is still resolving, gates that care about signed-out state
* render nothing so there's no signed-out flash on hard reload.
*/
/** Where `RedirectToSignIn` sends signed-out visitors. Create this route. */
var SIGN_IN_PATH = "/login";
/**
* Client-side redirect to the sign-in route (TanStack `<Navigate>` — NOT a full
* `window.location` reload). A hard navigation re-bootstraps the SPA and re-runs
* session loading, which feels like a second "Loading…" on /login.
*
* Guard routes by waiting out `isPending` first (see `use-current-user`), then
* render this.
*/
function RedirectToSignIn({ to = SIGN_IN_PATH }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to });
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-[12px] border border-border bg-raised px-3 text-sm text-fg placeholder:text-subtle", "transition-[border-color,box-shadow] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70", "disabled:cursor-not-allowed disabled:opacity-40", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function GithubStatus() {
	const queryClient = useQueryClient();
	const [token, setToken] = (0, import_react.useState)("");
	const status = useQuery({
		queryKey: ["github-status"],
		queryFn: () => getGithubStatus()
	});
	const save = useMutation({
		mutationFn: (value) => connectGithub({ data: value }),
		onSuccess: () => {
			setToken("");
			toast.success("GitHub 已接駁");
			queryClient.invalidateQueries({ queryKey: ["github-status"] });
		},
		onError: (err) => {
			toast.error(err instanceof Error ? err.message : "接駁失敗");
		}
	});
	const data = status.data;
	const configured = Boolean(data?.configured);
	const repoHref = githubRepoUrl();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "rounded-[24px] border border-border bg-surface px-5 py-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-10 shrink-0 place-items-center rounded-[12px] bg-raised text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
					className: "size-4",
					strokeWidth: 1.6
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-fg",
					children: configured ? "檔案會公開放到 GitHub" : "尚未接駁 GitHub"
				}), configured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: [
						"上載後會得到一條公開直連，結尾係 .jpg / .mp4 / .mp3，任何人打開都係檔案本身。存放喺",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: repoHref,
							target: "_blank",
							rel: "noreferrer",
							className: "text-fg underline decoration-border underline-offset-4",
							children: [
								data?.owner,
								"/",
								data?.repo
							]
						}),
						"。"
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "預覽環境的連結出到外面用唔到。接駁 GitHub 之後，檔案會放到公開庫，複製到的網址可以隨時用。"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex flex-col gap-2 sm:flex-row",
						onSubmit: (e) => {
							e.preventDefault();
							if (!token.trim()) return;
							save.mutate(token.trim());
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							autoComplete: "off",
							placeholder: "GitHub token（Contents 寫入）",
							value: token,
							onChange: (e) => setToken(e.target.value)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: save.isPending || !token.trim(),
							children: save.isPending ? "接駁中…" : "接駁"
						})]
					})]
				})]
			})]
		})
	});
}
function UploadZone({ onUploaded }) {
	const inputRef = (0, import_react.useRef)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(null);
	async function uploadOne(file) {
		const headers = {};
		const token = getBearerToken();
		if (token) headers.Authorization = `Bearer ${token}`;
		const body = new FormData();
		body.append("file", file);
		const res = await fetch("/api/upload", {
			method: "POST",
			body,
			headers
		});
		if (!res.ok) {
			const text = (await res.text()).trim();
			throw new Error(text || `上載失敗（${res.status}）`);
		}
		return await res.json();
	}
	async function handleFiles(list) {
		const files = Array.from(list);
		if (!files.length) return;
		setBusy(true);
		let ok = 0;
		for (let i = 0; i < files.length; i += 1) {
			const file = files[i];
			setProgress(`${i + 1} / ${files.length} · ${file.name}`);
			if (!isAllowedFile(file.type, file.name)) {
				toast.error(`不支援：${file.name}`);
				continue;
			}
			if (file.size > 12582912) {
				toast.error(`${file.name} 超過 12 MB`);
				continue;
			}
			try {
				const item = await uploadOne(file);
				onUploaded(item);
				ok += 1;
				if (files.length === 1) {
					const url = shareUrl(item, window.location.origin);
					try {
						await navigator.clipboard.writeText(url);
						toast.success("已複製公開檔案連結");
					} catch {
						toast.success(`已上載 ${item.slug}`);
					}
				}
			} catch (err) {
				toast.error(err instanceof Error ? err.message : `無法上載 ${file.name}`);
			}
		}
		setBusy(false);
		setProgress(null);
		if (ok > 1) toast.success(`已上載 ${ok} 個檔案`);
		if (inputRef.current) inputRef.current.value = "";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onDragEnter: (e) => {
			e.preventDefault();
			setDragging(true);
		},
		onDragOver: (e) => {
			e.preventDefault();
			setDragging(true);
		},
		onDragLeave: (e) => {
			e.preventDefault();
			if (e.currentTarget.contains(e.relatedTarget)) return;
			setDragging(false);
		},
		onDrop: (e) => {
			e.preventDefault();
			setDragging(false);
			if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
		},
		className: cn("rounded-[28px] border border-dashed border-border bg-surface p-5 transition-[border-color,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8", dragging && "border-accent bg-raised"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 shrink-0 place-items-center rounded-[16px] bg-raised text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
							className: "size-5",
							strokeWidth: 1.6
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tracking-tight text-fg",
						children: "上載相片、MP4、MP3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 max-w-md text-sm leading-relaxed text-muted",
						children: [
							"拖入檔案，或從電腦選擇。每個檔案最多 ",
							formatBytes(MAX_FILE_BYTES),
							"。 上載後會即時產生公開直連，例如 xxxxx.jpg。"
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: busy,
					onClick: () => inputRef.current?.click(),
					className: "inline-flex h-12 min-w-[9.5rem] items-center justify-center gap-2 rounded-[14px] bg-accent px-5 text-[15px] font-medium text-accent-fg transition-opacity duration-150 hover:opacity-90 disabled:opacity-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), busy ? "上載中…" : "選擇檔案"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					type: "file",
					accept: ACCEPT_ATTR,
					multiple: true,
					className: "sr-only",
					onChange: (e) => {
						if (e.target.files) handleFiles(e.target.files);
					}
				})
			]
		}), progress ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-xs tabular-nums text-subtle",
			children: progress
		}) : null]
	});
}
function kindLabel(kind) {
	if (kind === "image") return "相片";
	if (kind === "video") return "影片";
	return "音訊";
}
async function copyText(text) {
	await navigator.clipboard.writeText(text);
}
function MediaGrid({ items, onDelete }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[28px] border border-border bg-surface px-6 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl tracking-tight",
			children: "尚未有檔案"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted",
			children: "上載後會得到一條公開的直接檔案網址，例如 xxxxx.jpg，貼去邊度都用得着。"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaCard, {
			item,
			onDelete
		}) }, item.id))
	});
}
function MediaCard({ item, onDelete }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [removing, setRemoving] = (0, import_react.useState)(false);
	const path = fileUrl(item);
	const direct = typeof window === "undefined" ? shareUrl(item) : shareUrl(item, window.location.origin);
	async function copy() {
		await copyText(direct);
		setCopied(true);
		toast.success("已複製檔案連結");
		window.setTimeout(() => setCopied(false), 1600);
	}
	async function remove() {
		setRemoving(true);
		try {
			await onDelete(item.id);
			toast.success("已刪除");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "刪除失敗");
			setRemoving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-[24px] border border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[16/10] bg-raised",
			children: item.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: path,
				alt: item.filename,
				className: "size-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex size-full flex-col items-center justify-center gap-2 text-muted",
				children: [item.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {
					className: "size-8",
					strokeWidth: 1.4
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {
					className: "size-8",
					strokeWidth: 1.4
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.14em]",
					children: kindLabel(item.kind)
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "truncate text-sm font-medium text-fg",
					title: item.filename,
					children: item.filename
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 truncate font-mono text-xs text-muted",
					title: direct,
					children: path
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs tabular-nums text-subtle",
					children: [
						kindLabel(item.kind),
						" · ",
						formatBytes(item.sizeBytes),
						" ·",
						" ",
						formatStamp(item.createdAt)
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						onClick: () => void copy(),
						className: "flex-1",
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), "複製連結"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: path,
						target: "_blank",
						rel: "noreferrer",
						className: cn("inline-flex size-11 items-center justify-center rounded-[12px] border border-border bg-raised text-fg transition-opacity hover:opacity-80"),
						title: "開啟檔案",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "icon",
						variant: "ghost",
						className: "size-11 text-muted hover:text-danger",
						disabled: removing,
						onClick: () => void remove(),
						title: "刪除",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					})
				]
			})]
		})]
	});
}
var FILTERS = [
	{
		id: "all",
		label: "全部"
	},
	{
		id: "image",
		label: "相片"
	},
	{
		id: "video",
		label: "影片"
	},
	{
		id: "audio",
		label: "音訊"
	}
];
function LibraryPage() {
	const queryClient = useQueryClient();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const listQuery = useQuery({
		queryKey: ["media"],
		queryFn: () => listMyMedia()
	});
	const del = useMutation({
		mutationFn: (id) => removeMedia({ data: id }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["media"] })
	});
	const items = listQuery.data ?? [];
	const visible = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return items.filter((item) => {
			if (filter !== "all" && item.kind !== filter) return false;
			if (needle && !item.filename.toLowerCase().includes(needle)) return false;
			return true;
		});
	}, [
		items,
		filter,
		q
	]);
	function onUploaded(item) {
		queryClient.setQueryData(["media"], (prev) => {
			return [item, ...(prev ?? []).filter((row) => row.id !== item.id)];
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-subtle",
						children: "Private vault"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl tracking-tight sm:text-5xl",
						children: "媒體庫"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-sm leading-relaxed text-muted",
						children: "只限 RGB Workshop。上載相片、MP4、MP3 之後，檔案會放到 GitHub，得到一條公開直連（例如 xxxxx.jpg），之後嵌入或分享都用得着。"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubStatus, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadZone, { onUploaded }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(item.id),
						className: cn("h-10 rounded-full px-4 text-sm transition-colors duration-150", filter === item.id ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg"),
						children: item.label
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative block w-full sm:max-w-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "搜尋檔名",
						className: "pl-9"
					})]
				})]
			}),
			listQuery.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-[24px] bg-surface" }, i))
			}) : listQuery.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: "無法載入媒體庫，請重新整理。"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaGrid, {
				items: visible,
				onDelete: async (id) => {
					await del.mutateAsync(id);
				}
			})
		]
	});
}
function Home() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-48 animate-pulse rounded-[12px] bg-surface" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-[28px] bg-surface" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-56 animate-pulse rounded-[24px] bg-surface" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-56 animate-pulse rounded-[24px] bg-surface" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-56 animate-pulse rounded-[24px] bg-surface" })
					]
				})
			]
		})]
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	if (!isAllowedEmail(user.primaryEmail)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/login" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryPage, {})
		})]
	});
}
//#endregion
export { Home as component };
