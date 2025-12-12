'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Eye, Heart, Award, Clock, Users } from 'lucide-react';

const stats = [
    { label: 'Years of Excellence', value: '2+' },
    { label: 'Watches Sold', value: '1.5k+' },
    { label: 'Happy Customers', value: '1.2k+' },
    { label: 'Countries Served', value: '5+' },
];

const values = [
    {
        icon: Clock,
        title: 'Precision',
        description: 'Every second counts. We ensure the highest accuracy in every timepiece we curate and create.'
    },
    {
        icon: Award,
        title: 'Quality',
        description: 'Compromise is not in our vocabulary. We use only premium materials standard in the luxury industry.'
    },
    {
        icon: Heart,
        title: 'Passion',
        description: 'Born from a love for horology, we bring that enthusiasm to every customer interaction.'
    },
    {
        icon: Users,
        title: 'Community',
        description: 'We are building more than a brand; we are building a community of watch enthusiasts.'
    }
];

// Team structure
const leadership = { name: 'Vignesh Hebbar', role: 'Chief Executive Officer' };

// Support roles (displayed side by side below CEO)
const supportRoles = [
    { name: 'Sahil Shisode', role: 'CMO - Strategist & Analyst' },
    { name: 'Gokul Dixit', role: 'HR Manager' }
];

// Main departments (displayed in bottom row)
const departments = [
    {
        name: 'Development',
        people: ['Prashant Tiwari', 'Suheb Ahmad']
    },
    {
        name: 'Creative',
        people: ['Anurag Yadav', 'Pradeep Bidare']
    },
    {
        name: 'Marketing',
        people: ['Darain Hussain', 'Rehan Bagwan', 'Anurag Sharma']
    },
    {
        name: 'Social Media',
        people: ['Shreya Bhandari', 'Varun Sonar']
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=2000&auto=format&fit=crop"
                        alt="Watchmaker background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 text-sm font-semibold mb-4 backdrop-blur-sm"
                    >
                        EST. 2023
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Crafting Legacies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200 font-light"
                    >
                        More than just telling time, we tell your story.
                    </motion.p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Redefining the Art of Timekeeping</h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                At Timewise, we believe that a watch is not merely an instrument to measure time, but a companion that witnesses your life's most defining moments. Founded in a small workshop with a big dream, we have grown into a destination for watch enthusiasts.
                            </p>
                            <p>
                                We bridge the gap between traditional craftsmanship and modern aesthetics. Our curated collection spans from rugged sports watches to elegant dress pieces, ensuring there is a perfect match for every wrist and every occasion.
                            </p>
                            <div className="pt-6 border-l-4 border-amber-500 pl-6 my-6 italic text-gray-800 text-lg">
                                "Time is the only true luxury. Spend it wisely, wear it beautifully."
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-100"
                    >
                        <Image
                            src="/luxary-gold-mens.jpeg"
                            alt="Luxury watch detail"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base text-gray-400 uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 text-amber-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To democratize luxury by providing high-quality, beautifully designed timepieces that are accessible to everyone, without compromising on craftsmanship or style.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To become the global standard for modern horology, inspiring a new generation to appreciate the art of watchmaking and the value of time itself.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-2">Our Values</h2>
                        <h3 className="text-3xl font-bold text-gray-900">What Drives Us Forward</h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-gray-900 mb-6">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - Improved Org Chart */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">The Team</h2>
                        <h3 className="text-3xl font-bold text-white">The People Behind Timewise</h3>
                    </div>

                    {/* CEO - Top Center */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-6"
                    >
                        <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-5 rounded-xl shadow-lg shadow-amber-500/20">
                            <p className="text-xl font-bold">{leadership.name}</p>
                            <p className="text-amber-100 text-sm">{leadership.role}</p>
                        </div>
                    </motion.div>

                    {/* Connecting Line */}
                    <div className="flex justify-center mb-6">
                        <div className="w-px h-10 bg-gray-600"></div>
                    </div>

                    {/* Support Roles - Strategist (Left) & HR (Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center gap-8 md:gap-24 mb-8"
                    >
                        {supportRoles.map((person, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10 hover:border-amber-500/50 transition-colors text-center min-w-[160px]"
                            >
                                <h4 className="text-amber-400 font-bold text-xs mb-2 uppercase tracking-wide">{person.role.split(' - ')[0]}</h4>
                                <p className="text-white font-semibold">{person.name}</p>
                                <p className="text-gray-400 text-xs mt-1">{person.role.includes(' - ') ? person.role.split(' - ')[1] : ''}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Connecting Line */}
                    <div className="flex justify-center mb-8">
                        <div className="w-3/4 h-px bg-gray-600"></div>
                    </div>

                    {/* Departments Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {departments.map((dept, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10 hover:border-amber-500/50 transition-colors">
                                <h4 className="text-amber-400 font-bold text-sm mb-3 text-center uppercase tracking-wide">{dept.name}</h4>
                                <div className="space-y-2">
                                    {dept.people.map((person, pIndex) => (
                                        <p key={pIndex} className="text-white text-sm text-center">{person}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
