'use client';

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Tanmay',
        date: '15 Nov 2024',
        rating: 5,
        text: "I'm so happy with the way the issue was handled. The technician examined the problem and fixed it step by step. He didn't rush and made sure everything remained intact. Thank you to the team for such good support and quick response.",
    },
    {
        id: 2,
        name: 'Gurusevak',
        date: '12 Dec 2024',
        rating: 4.5,
        text: "I was facing this issue for a long time but finally it got resolved smoothly. The technician identified the root cause in just a few minutes. He handled the job carefully and resolved what went wrong. I really appreciate his effort and dedication.",
    },
    {
        id: 3,
        name: 'Pratik',
        date: '20 Nov 2024',
        rating: 4.5,
        text: "Excellent service! The watch was delivered on time and the packaging was premium. Very satisfied with my purchase. Will definitely recommend Timewise to my friends and family.",
    },
    {
        id: 4,
        name: 'Vaibhav',
        date: '18 Dec 2024',
        rating: 5,
        text: "Amazing quality watches! The build quality is exceptional and the design is exactly as shown. Fast shipping and great customer service. Highly recommend!",
    },
    {
        id: 5,
        name: 'Tanmay',
        date: '10 Dec 2024',
        rating: 4.5,
        text: "Good value for money. The watch looks premium and feels solid. Only minor issue was the strap adjustment, but customer service helped me resolve it quickly.",
    },
    {
        id: 6,
        name: 'Gurusevak',
        date: '5 Dec 2024',
        rating: 5,
        text: "Perfect watch for daily wear. Comfortable, stylish, and durable. The automatic movement is smooth and accurate. Very happy with this purchase!",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 2;
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - Math.ceil(rating);
        return (
            <div className="flex items-center gap-0.5">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                {hasHalfStar && (
                    <div className="relative w-3 h-3">
                        <Star className="w-3 h-3 text-gray-300" />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        </div>
                    </div>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`empty-${i}`} className="w-3 h-3 fill-gray-300 text-gray-300" />
                ))}
            </div>
        );
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Testimonials
                    </h2>
                    <div className="w-16 h-1 bg-amber-500 mt-3"></div>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div 
                            className="flex gap-8 transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 2}rem))`
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0"
                                    style={{ 
                                        width: `calc(${100 / itemsPerView}% - 1rem)`,
                                        minWidth: `calc(${100 / itemsPerView}% - 1rem)`
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gray-50 rounded-xl p-6 relative h-full"
                                    >
                                        {/* Quote Mark */}
                                        <div className="absolute -top-3 left-6 text-6xl text-amber-400 opacity-50 font-serif">
                                            "
                                        </div>

                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4 pt-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500">{testimonial.date}</p>
                                            </div>
                                            <div className="flex items-center gap-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                                                {renderStars(testimonial.rating)}
                                                <span className="ml-1">{testimonial.rating}</span>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {testimonial.text}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    {currentIndex > 0 && (
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border-2 border-gray-900 z-10"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                    )}
                    {currentIndex < maxIndex && (
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border-2 border-gray-900 z-10"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
