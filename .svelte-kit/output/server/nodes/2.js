import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CwI4ML5p.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CKWCygOj.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DEqlx5Hf.js","_app/immutable/chunks/DWH6M6pG.js","_app/immutable/chunks/BJahvI2o.js","_app/immutable/chunks/BPk7MwfJ.js","_app/immutable/chunks/Bcn0EOyU.js"];
export const stylesheets = [];
export const fonts = [];
