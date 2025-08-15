import { useState, useEffect } from 'react';

// Generic hook for API data fetching with loading and error states
export function useApi<T>(apiFunction: () => Promise<T>, dependencies: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction();
        
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
          console.error('API Error:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading, error };
}

// Specific hooks for each API endpoint
export function useFAQs() {
  const { getFAQs } = require('@/lib/api');
  return useApi(getFAQs);
}

export function usePrivacyPolicy() {
  const { getPrivacyPolicy } = require('@/lib/api');
  return useApi(getPrivacyPolicy);
}

export function useTermsOfService() {
  const { getTermsOfService } = require('@/lib/api');
  return useApi(getTermsOfService);
}

export function useMobileApps() {
  const { getMobileApps } = require('@/lib/api');
  return useApi(getMobileApps);
}

export function useCookiePolicy() {
  const { getCookiePolicy } = require('@/lib/api');
  return useApi(getCookiePolicy);
}