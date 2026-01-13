<script>
  import { base } from '$app/paths';
  import { currentPage, isMenuOpen } from '../assets/js/store';
  
  let { href, children } = $props();
  let fullHref = $derived(`${base}${href}`);  // ← Ajoute base ici
  let isCurrentPage = $derived($currentPage.startsWith(fullHref));
  
  const maybeCloseMenu = () => {
    if (fullHref != $currentPage) {
      isMenuOpen.set(false);
    }
  };
</script>

<li>
  
    href={fullHref}
    onclick={maybeCloseMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  <a>
    {@render children?.()}
  </a>
</li>