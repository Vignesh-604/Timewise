'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

export function useTrackVisit() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    // Track the last visited path to prevent duplicate calls in React Strict Mode
    const lastTrackedPath = useRef('');

    useEffect(() => {
        // Construct unique ID for current page view
        const currentPath = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');

        // Prevent double tracking the exact same URL (React Strict Mode fix)
        if (lastTrackedPath.current === currentPath) return;
        lastTrackedPath.current = currentPath;

        // Don't track admin pages
        if (pathname.startsWith('/admin')) return;

        const trackVisit = async () => {
            try {
                // Get or create session ID
                let sessionId = sessionStorage.getItem('timewise_session');
                if (!sessionId) {
                    sessionId = 'sess_' + Math.random().toString(36).substring(2, 15);
                    sessionStorage.setItem('timewise_session', sessionId);
                }

                // Store UTM params in session for persistence across pages
                const storedUtm = JSON.parse(sessionStorage.getItem('timewise_utm') || '{}');

                // Check for new UTM params in URL
                const utm_source = searchParams.get('utm_source');
                const utm_medium = searchParams.get('utm_medium');
                const utm_campaign = searchParams.get('utm_campaign');
                const utm_content = searchParams.get('utm_content');
                const utm_term = searchParams.get('utm_term');

                // If URL has UTM params, update storage
                if (utm_source) {
                    const newUtm = { utm_source, utm_medium, utm_campaign, utm_content, utm_term };
                    sessionStorage.setItem('timewise_utm', JSON.stringify(newUtm));
                    Object.assign(storedUtm, newUtm);
                }

                // Send tracking data
                await fetch('/api/analytics/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        utm_source: storedUtm.utm_source || utm_source || 'direct',
                        utm_medium: storedUtm.utm_medium || utm_medium || 'none',
                        utm_campaign: storedUtm.utm_campaign || utm_campaign || 'none',
                        utm_content: storedUtm.utm_content || utm_content || '',
                        utm_term: storedUtm.utm_term || utm_term || '',
                        page: pathname,
                        referrer: document.referrer || '',
                        userAgent: navigator.userAgent,
                        sessionId: sessionId,
                    }),
                });
            } catch (error) {
                // Silently fail - don't break the site for analytics
                console.error('Analytics tracking failed:', error);
            }
        };

        trackVisit();
    }, [pathname, searchParams]);
}
