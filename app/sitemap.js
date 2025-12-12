
import { allWatches, categories } from '@/data/watches';

export default function sitemap() {
    const baseUrl = 'https://timewise-store.vercel.app';

    // Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/login',
        '/register',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Category Routes
    const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}/category/${category.id}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    }));

    // Product Routes
    const productRoutes = allWatches.map((watch) => ({
        url: `${baseUrl}/watch/${watch.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
