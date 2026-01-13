import { a as attr, b as store_get, u as unsubscribe_stores, c as attr_class, e as ensure_array_like, d as escape_html, f as stringify, h as head } from "../../chunks/index2.js";
import { r as run } from "../../chunks/legacy-server.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { w as writable } from "../../chunks/index.js";
import "clsx";
import { n as navItems, s as siteTitle, d as siteAuthor } from "../../chunks/config.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "../../chunks/state.svelte.js";
const currentPage = writable("");
const isMenuOpen = writable(false);
function HamburgerSVG($$renderer) {
  $$renderer.push(`<svg viewBox="0 0 128 128" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><rect x="0" y="12.48" width="128" height="18.688"></rect></g><g><rect x="0" y="96.832" width="128" height="18.688"></rect></g><g><rect x="0" y="54.656" width="128" height="18.688"></rect></g></svg>`);
}
function XSVG($$renderer) {
  $$renderer.push(`<svg viewBox="0 0 128 128" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M64,48.496l-48.496,-48.496l-15.504,15.504l48.496,48.496l-48.496,48.496l15.504,15.504l48.496,-48.496l48.496,48.496l15.504,-15.504l-48.496,-48.496l48.496,-48.496l-15.504,-15.504l-48.496,48.496Z"></path></svg>`);
}
function HamburgerMenuButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { closeOnly = false } = $$props;
    $$renderer2.push(`<button${attr("aria-pressed", store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen))} class="menu-button"${attr("tabindex", store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen) || !closeOnly ? "0" : "-1")}><span class="sr-only">Toggle hamburger menu</span> `);
    if (closeOnly) {
      $$renderer2.push("<!--[-->");
      XSVG($$renderer2);
    } else {
      $$renderer2.push("<!--[!-->");
      HamburgerSVG($$renderer2);
    }
    $$renderer2.push(`<!--]--></button>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function NavItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { href, children } = $$props;
    let fullHref = `${base}${href}`;
    let isCurrentPage = store_get($$store_subs ??= {}, "$currentPage", currentPage).startsWith(fullHref);
    $$renderer2.push(`<li><a${attr("href", fullHref)}${attr("aria-current", isCurrentPage ? "page" : false)}${attr_class("", void 0, { "active": isCurrentPage })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></a></li>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function NavItems($$renderer) {
  $$renderer.push(`<ul><!--[-->`);
  const each_array = ensure_array_like(navItems);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    NavItem($$renderer, {
      href: page.route,
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->${escape_html(page.title)}`);
      }
    });
  }
  $$renderer.push(`<!--]--></ul>`);
}
function MainNav($$renderer) {
  var $$store_subs;
  $$renderer.push(`<nav${attr_class("main-nav", void 0, {
    "open": store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen)
  })}>`);
  NavItems($$renderer);
  $$renderer.push(`<!----> `);
  HamburgerMenuButton($$renderer, { closeOnly: "true" });
  $$renderer.push(`<!----></nav>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header><a class="skip-to-content-link" href="#main">Skip to main content</a> <a${attr("href", `${stringify(base)}/`)} class="site-title">${escape_html(siteTitle)}</a> `);
    HamburgerMenuButton($$renderer2, {});
    $$renderer2.push(`<!----> `);
    MainNav($$renderer2);
    $$renderer2.push(`<!----></header>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer><nav><ul><li><a${attr("href", `${stringify(base)}/api/rss.xml`)} data-sveltekit-reload="">RSS</a></li> <li><a${attr("href", `${stringify(base)}/`)}>Home</a></li></ul></nav> <nav>`);
    NavItems($$renderer2);
    $$renderer2.push(`<!----></nav> <p>©${escape_html((/* @__PURE__ */ new Date()).getFullYear())} ${escape_html(siteAuthor)}</p></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, children } = $$props;
    run(() => {
      currentPage.set(data.path);
    });
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="stylesheet"${attr("href", `${stringify(base)}/css/vars.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/root.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/fonts.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/typography.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/layout.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/components.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/header-and-footer.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/forms.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/animation.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/utilities.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/code.css`)}/> <link rel="stylesheet"${attr("href", `${stringify(base)}/css/prism.css`)}/> <link rel="alternate" type="application/rss+xml"${attr("title", siteTitle)}${attr("href", `${stringify(base)}/api/rss.xml`)}/>`);
    });
    $$renderer2.push(`<div${attr_class("layout", void 0, {
      "open": store_get($$store_subs ??= {}, "$isMenuOpen", isMenuOpen)
    })}>`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <!---->`);
    {
      $$renderer2.push(`<main id="main" tabindex="-1">`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></main>`);
    }
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
