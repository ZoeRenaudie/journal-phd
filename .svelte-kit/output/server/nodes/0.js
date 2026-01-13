import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.sMAqTnQE.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Ceg_lTpE.js","_app/immutable/chunks/BZAZ7dM3.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/chunks/Cy9CnXI-.js","_app/immutable/chunks/2xx1Uduz.js","_app/immutable/chunks/DMWexucu.js","_app/immutable/chunks/DDbQTaBC.js","_app/immutable/chunks/6NTK1Tgg.js","_app/immutable/chunks/tnWICftC.js","_app/immutable/chunks/B-sR2xmj.js","_app/immutable/chunks/Bu93Vllf.js","_app/immutable/chunks/BmHO_4mE.js","_app/immutable/chunks/BEDWnk4e.js","_app/immutable/chunks/r94AeSdQ.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/CWmzcjye.js","_app/immutable/chunks/XRmtL34K.js","_app/immutable/chunks/DdIrJmQh.js","_app/immutable/chunks/DajKFarX.js","_app/immutable/chunks/qxT9Qhpq.js","_app/immutable/chunks/uszsPkPh.js","_app/immutable/chunks/DY-uMXiN.js"];
export const stylesheets = [];
export const fonts = [];
