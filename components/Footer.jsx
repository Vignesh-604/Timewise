'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="relative w-32 h-16">
                                <Image
                                    src="/logo-bg.jpeg"
                                    alt="Timewise Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Premium watches for every occasion. Discover timeless elegance and precision craftsmanship.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                            <li><Link href="#bestsellers" className="hover:text-amber-400 transition-colors">Bestsellers</Link></li>
                            <li><Link href="#new-arrivals" className="hover:text-amber-400 transition-colors">New Arrivals</Link></li>
                            <li><Link href="#automatic" className="hover:text-amber-400 transition-colors">Automatic</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Now merged with relevant parts or just taking up the space */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                1800-123-4567
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                official.timewise.co@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Mumbai, India
                            </li>
                        </ul>
                        {/* Social Links */}
                        <div className="flex gap-3 mt-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/timewise.official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="https://youtube.com/@timewise-y9j" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
                        <p>© 2024 Timewise. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
