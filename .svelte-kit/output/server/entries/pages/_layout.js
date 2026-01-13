import { error } from "@sveltejs/kit";
const prerender = true;
const csr = true;
const load = async ({ url }) => {
  try {
    return {
      path: url.pathname
    };
  } catch (err) {
    error(500, err);
  }
};
export {
  csr,
  load,
  prerender
};
