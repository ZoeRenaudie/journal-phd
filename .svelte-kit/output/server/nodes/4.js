import * as universal from '../entries/pages/bibliographie/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bibliographie/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/bibliographie/+page.js";
export const imports = ["_app/immutable/nodes/4.CoIZiYLc.js","_app/immutable/chunks/BZlDtOhG.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BpB-t60W.js","_app/immutable/chunks/BxuMwSg9.js","_app/immutable/chunks/Dmn4sNRq.js","_app/immutable/chunks/CTUzTMup.js","_app/immutable/chunks/CPahENzI.js","_app/immutable/chunks/DudYO0AY.js","_app/immutable/chunks/DXXTakIy.js","_app/immutable/chunks/DpVrXM5N.js","_app/immutable/chunks/CaVfWH2Q.js","_app/immutable/chunks/CJ9r07CR.js"];
export const stylesheets = [];
export const fonts = [];
