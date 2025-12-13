import Navbar from '@/components/Navbar';
import SaleBanner from '@/components/SaleBanner';
import Hero from '@/components/Hero';
import CategoryBar from '@/components/CategoryBar';
import ProductSection from '@/components/ProductSection';
import CollectionGrid from '@/components/CollectionGrid';
import MovementSection from '@/components/MovementSection';
import Testimonials from '@/components/Testimonials';
import FeaturesBar from '@/components/FeaturesBar';
import LoginCTA from '@/components/LoginCTA';
import Footer from '@/components/Footer';
import { bestsellers, newArrivals, automaticWatches } from '@/data/watches';

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <SaleBanner />
            <Hero />
            <CategoryBar />

            {/* Bestsellers Section */}
            <div id="bestsellers">
                <ProductSection
                    title="Bestsellers"
                    subtitle="Our most loved timepieces"
                    products={bestsellers}
                    viewAllLink="/category/bestsellers"
                    bgColor="bg-white"
                />
            </div>

            {/* New Arrivals Section */}
            <div id="new-arrivals">
                <ProductSection
                    title="New Arrivals"
                    subtitle="Fresh styles just landed"
                    products={newArrivals}
                    viewAllLink="/category/new-arrivals"
                    bgColor="bg-gray-50"
                />
            </div>

            {/* Movement in Time Section */}
            <MovementSection />

            {/* Collection Grid */}
            <CollectionGrid />

            {/* Automatic Watches Section */}
            <div id="automatic">
                <ProductSection
                    title="Automatic Watches"
                    subtitle="Precision engineering at its finest"
                    products={automaticWatches}
                    viewAllLink="/category/automatic"
                    bgColor="bg-white"
                />
            </div>



            {/* Testimonials */}
            <Testimonials />

            {/* Features Bar - 100% Original, 7 Day Return, Free Shipping */}
            <FeaturesBar />

            {/* Login CTA */}
            <LoginCTA />

            <Footer />
        </main>
    );
}
