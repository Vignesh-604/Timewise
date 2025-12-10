'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNavigation } from '@/contexts/NavigationContext';

export default function NavigationLink({ href, children, className, ...props }) {
    const { startNavigation } = useNavigation();
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        startNavigation(href);
        // Small delay to show loader, then navigate
        setTimeout(() => {
            router.push(href);
        }, 500);
    };

    return (
        <Link href={href} onClick={handleClick} className={className} {...props}>
            {children}
        </Link>
    );
}

