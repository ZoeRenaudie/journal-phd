import { a8 as getContext, d as escape_html, a as attr, b as store_get, u as unsubscribe_stores, f as stringify } from "../../chunks/index2.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<h2>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h2> <p class="subhead">${escape_html(store_get($$store_subs ??= {}, "$page", page).error.message)}</p> <p><strong>Sorry!</strong> Maybe try one of these links?</p> <ul><li><a${attr("href", `${stringify(base)}/`)}>Home</a></li></ul>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _error as default
};
