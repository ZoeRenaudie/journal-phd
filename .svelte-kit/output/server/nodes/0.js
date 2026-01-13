import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CoqHIic-.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BBLx7_-_.js","_app/immutable/chunks/BpB-t60W.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BxuMwSg9.js","_app/immutable/chunks/ZtoVuuxL.js","_app/immutable/chunks/DgwE4fI-.js","_app/immutable/chunks/MCBYmbQs.js","_app/immutable/chunks/Dmn4sNRq.js","_app/immutable/chunks/GOuaY6q3.js","_app/immutable/chunks/DudYO0AY.js","_app/immutable/chunks/Bu93Vllf.js","_app/immutable/chunks/DpVrXM5N.js","_app/immutable/chunks/CaVfWH2Q.js","_app/immutable/chunks/d2T7YLdN.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DXXTakIy.js","_app/immutable/chunks/Dz0CJNLZ.js","_app/immutable/chunks/C3hIohKA.js","_app/immutable/chunks/CDCPyqYr.js","_app/immutable/chunks/CTUzTMup.js","_app/immutable/chunks/Cs95cUYA.js","_app/immutable/chunks/CbBAWNR5.js"];
export const stylesheets = [];
export const fonts = [];
