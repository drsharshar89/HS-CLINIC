import { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanityClient';

/* ================================================================
   useSanityQuery — generic GROQ query hook
   ================================================================ */

interface SanityQueryState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Fetch data from Sanity using a GROQ query.
 *
 * @example
 * const { data, loading } = useSanityQuery<SanityService[]>(
 *   `*[_type == "service"] | order(order asc)`
 * );
 */
export function useSanityQuery<T = unknown>(
  query: string,
  params?: Record<string, unknown>
): SanityQueryState<T> {
  const [state, setState] = useState<SanityQueryState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // Stringify params for stable dependency
  const paramsKey = params ? JSON.stringify(params) : '';

  useEffect(() => {
    let cancelled = false;

    const parsedParams = paramsKey ? JSON.parse(paramsKey) : {};

    sanityClient
      .fetch<T>(query, parsedParams)
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ data: null, loading: false, error: err });
        console.error('[Sanity] Query failed:', err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [query, paramsKey]);

  return state;
}

/* ================================================================
   useSanityImage — image URL helper hook
   ================================================================ */

/**
 * Convert a Sanity image reference to an optimised URL string.
 *
 * @param source  Sanity image reference object
 * @param width   Optional width constraint
 * @returns       URL string or empty string if source is falsy
 *
 * @example
 * const url = useSanityImage(hero.backgroundImage, 1200);
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSanityImage(source: any, width?: number): string {
  if (!source) return '';

  let img = urlFor(source).auto('format');
  if (width) img = img.width(width);
  return img.url();
}
