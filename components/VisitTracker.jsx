'use client';

import { Suspense } from 'react';
import { useTrackVisit } from '@/lib/useTrackVisit';

function VisitTrackerInner() {
    useTrackVisit();
    return null;
}

export default function VisitTracker() {
    return (
        <Suspense fallback={null}>
            <VisitTrackerInner />
        </Suspense>
    );
}
