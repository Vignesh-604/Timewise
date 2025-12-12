
import { getWatchById } from '@/data/watches';
import WatchDetailClient from '@/components/WatchDetailClient';

export async function generateMetadata({ params }) {
    const watch = getWatchById(params.id);

    if (!watch) {
        return {
            title: 'Watch Not Found',
        };
    }

    return {
        title: watch.name,
        description: watch.description,
        openGraph: {
            title: `${watch.name} | Timewise`,
            description: watch.description,
            images: [
                {
                    url: watch.image,
                    width: 800,
                    height: 600,
                    alt: watch.name,
                },
            ],
            type: 'website',
        },
    };
}

export default function WatchPage({ params }) {
    const watch = getWatchById(params.id);

    const jsonLd = watch ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: watch.name,
        image: watch.image, // Ideally absolute URL, but relative often works if base is set
        description: watch.description,
        brand: {
            '@type': 'Brand',
            name: watch.brand
        },
        offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: watch.price,
            availability: 'https://schema.org/InStock'
        }
    } : null;

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <WatchDetailClient id={params.id} />
        </>
    );
}
