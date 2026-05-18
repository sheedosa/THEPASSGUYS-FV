import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On every route change, scroll to the top of the page.
 *
 * If a hash is present in the URL (`#how-it-works`), defer to the browser's
 * default behaviour (after a tiny delay so the lazy chunk has mounted and the
 * target exists). Otherwise force a top scroll.
 *
 * Uses Lenis (exposed via window.__lenis) when available so the scroll
 * stays in the same animation loop as the rest of the site. Falls back to
 * native scrollTo for prefers-reduced-motion users.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Wait one frame so the new page's DOM has mounted before scrolling.
    const id = requestAnimationFrame(() => {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          if (window.__lenis) {
            window.__lenis.scrollTo(target as HTMLElement, { offset: -80 });
          } else {
            target.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }
        return;
      }

      if (window.__lenis) {
        // immediate: true → no animation, instant jump (feels right for new pages)
        window.__lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    });

    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
