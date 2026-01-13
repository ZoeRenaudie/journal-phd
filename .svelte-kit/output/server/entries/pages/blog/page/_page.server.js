import { redirect } from "@sveltejs/kit";
const load = () => {
  redirect(301, "/blog");
};
export {
  load
};
