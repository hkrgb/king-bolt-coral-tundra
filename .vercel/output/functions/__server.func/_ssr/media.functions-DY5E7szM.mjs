import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { C as saveGithubToken, a as GITHUB_REPO, b as listMedia, d as deleteMedia, g as githubTokenFromEnv, i as GITHUB_OWNER, l as assertWorkshopUser, m as githubIsConfigured, p as getMediaMeta } from "./media.server-n7-WniYt.mjs";
import { t as authMiddleware } from "./middleware-mziLagb2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media.functions-DY5E7szM.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listMyMedia_createServerFn_handler = createServerRpc({
	id: "f47ce756bd1f13fe63c26f0b8f37083e163382b8b3bb9364773cb277258896dc",
	name: "listMyMedia",
	filename: "src/lib/media.functions.ts"
}, (opts) => listMyMedia.__executeServer(opts));
var listMyMedia = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listMyMedia_createServerFn_handler, async ({ context }) => {
	await assertWorkshopUser(context.userId);
	return listMedia(context.userId);
});
var removeMedia_createServerFn_handler = createServerRpc({
	id: "3945f671611c6e2a9708aa2bfa127f322e3827719e5771bfeec47c4c65a82285",
	name: "removeMedia",
	filename: "src/lib/media.functions.ts"
}, (opts) => removeMedia.__executeServer(opts));
var removeMedia = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(removeMedia_createServerFn_handler, async ({ context, data: id }) => {
	await assertWorkshopUser(context.userId);
	if (!await deleteMedia(context.userId, id)) throw new Error("File not found");
	return { ok: true };
});
var fetchMediaMeta_createServerFn_handler = createServerRpc({
	id: "08e6670725f4e7c1d69e653f15ad23ef81d7d1b2e26555d85ed6cc58ee9dc304",
	name: "fetchMediaMeta",
	filename: "src/lib/media.functions.ts"
}, (opts) => fetchMediaMeta.__executeServer(opts));
var fetchMediaMeta = createServerFn({ method: "GET" }).validator((slug) => slug.trim()).handler(fetchMediaMeta_createServerFn_handler, async ({ data: slug }) => {
	if (!slug) return null;
	return getMediaMeta(slug);
});
var getGithubStatus_createServerFn_handler = createServerRpc({
	id: "661efbc0d6c38d5aeea5dafce9666da6c8b47e7c864395b679b04319d00c2546",
	name: "getGithubStatus",
	filename: "src/lib/media.functions.ts"
}, (opts) => getGithubStatus.__executeServer(opts));
var getGithubStatus = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getGithubStatus_createServerFn_handler, async ({ context }) => {
	await assertWorkshopUser(context.userId);
	return {
		configured: await githubIsConfigured(),
		fromEnv: githubTokenFromEnv(),
		owner: GITHUB_OWNER,
		repo: GITHUB_REPO
	};
});
var connectGithub_createServerFn_handler = createServerRpc({
	id: "60ba8bb85d6974f1ed368785b9ef06d7d4cdcffc342ddc0eba47468667639521",
	name: "connectGithub",
	filename: "src/lib/media.functions.ts"
}, (opts) => connectGithub.__executeServer(opts));
var connectGithub = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((token) => token.trim()).handler(connectGithub_createServerFn_handler, async ({ context, data: token }) => {
	await assertWorkshopUser(context.userId);
	if (!token) throw new Error("Token is empty");
	await saveGithubToken(token);
	return { configured: true };
});
//#endregion
export { connectGithub_createServerFn_handler, fetchMediaMeta_createServerFn_handler, getGithubStatus_createServerFn_handler, listMyMedia_createServerFn_handler, removeMedia_createServerFn_handler };
