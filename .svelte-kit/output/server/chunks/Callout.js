import "clsx";
function Callout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="callout">`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  Callout as C
};
