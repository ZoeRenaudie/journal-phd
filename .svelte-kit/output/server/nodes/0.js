import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.MWNkQtGE.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BVGtCwCS.js","_app/immutable/chunks/BAkzhmWV.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/chunks/CA4olaDf.js","_app/immutable/chunks/dOb5_Gy6.js","_app/immutable/chunks/DDPabs_Q.js","_app/immutable/chunks/By6jzof1.js","_app/immutable/chunks/D8v4aw1E.js","_app/immutable/chunks/DdU7-swG.js","_app/immutable/chunks/BBScer5L.js","_app/immutable/chunks/Bu93Vllf.js","_app/immutable/chunks/BmVkqB8C.js","_app/immutable/chunks/Bira8TSU.js","_app/immutable/chunks/eQk9XeUl.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/CWmzcjye.js","_app/immutable/chunks/DGoYsJtD.js","_app/immutable/chunks/jnr2Sag3.js","_app/immutable/chunks/B-BPV3Ng.js","_app/immutable/chunks/DJeGj2OJ.js","_app/immutable/chunks/BupUUY9A.js","_app/immutable/chunks/Bcn0EOyU.js","_app/immutable/chunks/BKrxyNGg.js"];
export const stylesheets = [];
export const fonts = [];
