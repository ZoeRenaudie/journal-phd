import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BtU8ukWp.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BpB-t60W.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BxuMwSg9.js","_app/immutable/chunks/D1E98oy7.js","_app/immutable/chunks/DgwE4fI-.js","_app/immutable/chunks/GOuaY6q3.js","_app/immutable/chunks/Cs95cUYA.js"];
export const stylesheets = [];
export const fonts = [];
