import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DrYWFHXI.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BZAZ7dM3.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Cy9CnXI-.js","_app/immutable/chunks/BKQYGS6Q.js","_app/immutable/chunks/DMWexucu.js","_app/immutable/chunks/tnWICftC.js","_app/immutable/chunks/uszsPkPh.js"];
export const stylesheets = [];
export const fonts = [];
