'use client';

import { useEffect } from 'react';

export default function ConsoleSuppressor() {
    useEffect(() => {
        // Backup original functions
        const originalWarn = console.warn;
        const originalError = console.error;

        // Suppress specific messages
        console.warn = (...args) => {
            if (args[0] && typeof args[0] === 'string' && args[0].includes('Skipping auto-scroll behavior')) {
                return;
            }
            originalWarn.apply(console, args);
        };

        // Suppress other potential noise if needed (e.g. key props which we fixed but just in case)
        // console.error is usually more critical so we be careful
        console.error = (...args) => {
            // Example if we wanted to suppress duplicate keys (we fixed this proper but example)
            // if (args[0] && args[0].includes('Encountered two children with the same key')) return;
            originalError.apply(console, args);
        };

        return () => {
            console.warn = originalWarn;
            console.error = originalError;
        };
    }, []);

    return null;
}
