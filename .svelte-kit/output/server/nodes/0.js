import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CxKdpN4B.js","_app/immutable/chunks/9l8Gxslx.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C_5iC-Q3.js","_app/immutable/chunks/CKWCygOj.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/chunks/DEqlx5Hf.js","_app/immutable/chunks/swi0_rRH.js","_app/immutable/chunks/BJahvI2o.js","_app/immutable/chunks/DgAoW_6Q.js","_app/immutable/chunks/DDA8RsG3.js","_app/immutable/chunks/BPk7MwfJ.js","_app/immutable/chunks/CWe3DeTq.js","_app/immutable/chunks/Bu93Vllf.js","_app/immutable/chunks/B94_EYBA.js","_app/immutable/chunks/CUcU8hso.js","_app/immutable/chunks/DTC3uytc.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/CWmzcjye.js","_app/immutable/chunks/dlk27RKD.js","_app/immutable/chunks/5CdW8RWE.js","_app/immutable/chunks/DEQchbew.js","_app/immutable/chunks/BuNWiGHT.js","_app/immutable/chunks/vtTcElUi.js","_app/immutable/chunks/Bcn0EOyU.js","_app/immutable/chunks/mtsj_UHH.js"];
export const stylesheets = [];
export const fonts = [];
