import { redirect } from "@sveltejs/kit";
const load = async () => {
  redirect(301, `/blog/category`);
};
export {
  load
};
