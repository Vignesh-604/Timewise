'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginCTA() {
    return (
        <section className="py-16 bg-amber-50">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-wide">
                        LOGIN FOR THE BEST EXPERIENCE
                    </h2>

                    <Link
                        href="/login"
                        className="inline-block px-12 py-3 bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors"
                    >
                        LOGIN NOW
                    </Link>

                    <div className="mt-6">
                        <Link
                            href="/register"
                            className="text-gray-700 underline hover:text-amber-600 transition-colors"
                        >
                            Create An Account
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
