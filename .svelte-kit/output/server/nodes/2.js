import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DrQHhKeZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BAkzhmWV.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CA4olaDf.js","_app/immutable/chunks/k8l0Vrc1.js","_app/immutable/chunks/DDPabs_Q.js","_app/immutable/chunks/DdU7-swG.js","_app/immutable/chunks/Bcn0EOyU.js"];
export const stylesheets = [];
export const fonts = [];
