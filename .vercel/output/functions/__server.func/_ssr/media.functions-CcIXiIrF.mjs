import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-mziLagb2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media.functions-CcIXiIrF.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listMyMedia = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("f47ce756bd1f13fe63c26f0b8f37083e163382b8b3bb9364773cb277258896dc"));
var removeMedia = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("3945f671611c6e2a9708aa2bfa127f322e3827719e5771bfeec47c4c65a82285"));
var fetchMediaMeta = createServerFn({ method: "GET" }).validator((slug) => slug.trim()).handler(createSsrRpc("08e6670725f4e7c1d69e653f15ad23ef81d7d1b2e26555d85ed6cc58ee9dc304"));
var getGithubStatus = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("661efbc0d6c38d5aeea5dafce9666da6c8b47e7c864395b679b04319d00c2546"));
var connectGithub = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((token) => token.trim()).handler(createSsrRpc("60ba8bb85d6974f1ed368785b9ef06d7d4cdcffc342ddc0eba47468667639521"));
//#endregion
export { removeMedia as a, listMyMedia as i, fetchMediaMeta as n, getGithubStatus as r, connectGithub as t };
