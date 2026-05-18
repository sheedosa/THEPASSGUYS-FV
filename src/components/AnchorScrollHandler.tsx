import { useEffect } from 'react';

/**
 * Intercepts in-page anchor clicks (`<a href="#how-it-works">`) and routes
 * them through Lenis so the scroll matches the rest of the site's easing
 * curve. Without this, native hash navigation jumps instantly and feels
 * disconnected from the smooth-scrolled page.
 *
 * Lives outside of any component so the listener is registered once.
 */
export default function AnchorScrollHandler() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Only handle plain left-clicks (no modifier keys, no middle-click etc.)
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      // Find the anchor in the click path
      const anchor = (e.target as Element | null)?.closest?.('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      // Same-page hash link → use Lenis if available
      e.preventDefault();
      const offset = -80; // account for the fixed navbar height
      if (window.__lenis) {
        window.__lenis.scrollTo(target as HTMLElement, { offset, duration: 1.1 });
      } else {
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // Keep URL in sync so the user can share the link
      history.replaceState(null, '', href);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
