import { useCallback, useRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

/**
 * Map of in-app routes → dynamic-import factories for the page they render.
 * Hovering / focusing a link to one of these paths triggers the dynamic
 * `import()` early, so by the time the user actually clicks, the JS chunk is
 * already parsed and the page renders instantly with no Suspense flash.
 *
 * Keep in sync with the `lazy()` factories in App.tsx.
 */
const ROUTE_LOADERS: Record<string, () => Promise<unknown>> = {
  '/lessons': () => import('../pages/LessonsPage'),
  '/pricing': () => import('../pages/PricingPage'),
  '/areas': () => import('../pages/AreasPage'),
  '/instructors': () => import('../pages/InstructorsPage'),
  '/resources': () => import('../pages/ResourcesPage'),
  '/faq': () => import('../pages/FAQPage'),
  '/contact': () => import('../pages/ContactPage'),
  '/about': () => import('../pages/AboutPage'),
  '/how-it-works': () => import('../pages/HowItWorksPage'),
  '/get-matched': () => import('../pages/GetMatchedPage'),
};

const SERVICE_DETAIL_LOADER = () => import('../pages/ServiceDetailPage');

function resolveLoader(to: string): (() => Promise<unknown>) | undefined {
  if (to.startsWith('/services/')) return SERVICE_DETAIL_LOADER;
  return ROUTE_LOADERS[to];
}

const prefetched = new Set<string>();

/**
 * Drop-in replacement for `<Link>` that prefetches the destination route's
 * chunk on the first pointer / focus interaction. No network change for
 * routes outside the registered map.
 */
export default function PrefetchLink({ to, onMouseEnter, onFocus, onTouchStart, ...rest }: LinkProps) {
  const target = typeof to === 'string' ? to : to.pathname ?? '';
  const prefetchedThisInstance = useRef(false);

  const prefetch = useCallback(() => {
    if (prefetchedThisInstance.current || prefetched.has(target)) return;
    prefetchedThisInstance.current = true;
    prefetched.add(target);
    const loader = resolveLoader(target);
    // Swallow errors — if the prefetch fails, the click will retry through React.lazy.
    loader?.().catch(() => prefetched.delete(target));
  }, [target]);

  return (
    <Link
      to={to}
      onMouseEnter={(e) => {
        prefetch();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        prefetch();
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        prefetch();
        onTouchStart?.(e);
      }}
      {...rest}
    />
  );
}
