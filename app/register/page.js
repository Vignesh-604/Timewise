'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const maharashtraCities = [
    'Mumbai',
    'Pune',
    'Nagpur',
    'Nashik',
    'Aurangabad',
    'Solapur',
    'Thane',
    'Kalyan',
    'Vasai-Virar',
    'Navi Mumbai',
    'Sangli',
    'Jalgaon',
    'Akola',
    'Latur',
    'Dhule',
    'Ahmednagar',
    'Ichalkaranji',
    'Parbhani',
    'Panvel',
    'Yavatmal',
    'Satara',
    'Beed',
    'Kamptee',
    'Gondia',
    'Barshi',
    'Achalpur',
    'Osmanabad',
    'Nandurbar',
    'Wardha',
    'Udgir',
    'Hinganghat',
];

import { useNavigation } from '@/contexts/NavigationContext';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        city: '',
        phone: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { user, isAuthLoading } = useNavigation();

    useEffect(() => {
        if (!isAuthLoading && user) {
            router.push('/');
        }
    }, [user, isAuthLoading, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Validation
        const age = parseInt(formData.age);
        if (age < 18 || age > 24) {
            setError('Age must be between 18 and 24');
            setLoading(false);
            return;
        }

        if (!formData.city) {
            setError('Please select a city');
            setLoading(false);
            return;
        }

        if (!formData.phone || formData.phone.length < 10) {
            setError('Please enter a valid phone number');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Registration failed');
                toast.error(data.message || 'Registration failed');
                setLoading(false);
                return;
            }

            // Auto-login after registration
            try {
                const loginRes = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                const loginData = await loginRes.json();

                if (loginRes.ok) {
                    // Show welcome toast
                    toast.success(`Welcome to Timewise, ${formData.name}! 🎉`, {
                        duration: 4000,
                    });

                    // Navigate to home page
                    router.push('/');
                    router.refresh();
                } else {
                    // Registration successful but auto-login failed
                    toast.success('Registration successful! Please login.');
                    router.push('/login');
                }
            } catch (loginErr) {
                // Registration successful but auto-login failed
                toast.success('Registration successful! Please login.');
                router.push('/login');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-md w-full"
                >
                    <Link href="/" className="flex items-center justify-center mb-8">
                        <div className="relative w-48 h-24">
                            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                    </Link>

                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                    <p className="text-gray-500 mb-8">Join us to explore premium watches</p>

                    {error && (
                        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Row 1: Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 2: Age, City, Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                                <input
                                    type="number"
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                    placeholder="ex. 21"
                                    min="18"
                                    max="24"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <select
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white"
                                    required
                                >
                                    <option value="">Select city</option>
                                    {maharashtraCities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                    placeholder="9876543210"
                                    pattern="[0-9]{10}"
                                    required
                                />
                                <p className="text-xs text-gray-500 mt-1">10 digits</p>
                            </div>
                        </div>

                        {/* Row 3: Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                placeholder="••••••••"
                                required
                                minLength={6}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                'Register'
                            )}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-gray-500">
                        Already have an account?{' '}
                        <Link href="/login" className="text-amber-600 hover:text-amber-700 font-medium">
                            Login here
                        </Link>
                    </p>
                </motion.div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block flex-1 relative bg-gray-900">
                <Image
                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200"
                    alt="Watch"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">Time is Precious</h2>
                        <p className="text-xl text-gray-300">Discover premium watches</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
