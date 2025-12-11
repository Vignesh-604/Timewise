'use client';

import {
    LayoutDashboard,
    Link as LinkIcon,
    LogOut,
    Menu,
    X,
    Clock,
    Users,
    TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
    const navItems = [
        { id: 'analytics', label: 'Analytics', icon: LayoutDashboard },
        { id: 'sales', label: 'Sales', icon: TrendingUp },
        { id: 'sessions', label: 'Sessions', icon: Clock },
        { id: 'users', label: 'Users', icon: Users },
        { id: 'utm-generator', label: 'UTM Generator', icon: LinkIcon },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 md:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col items-center justify-center py-6 border-b border-gray-200 relative">
                        <Link href="/" className="relative w-32 h-12 mb-2 block transition-transform hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Timewise"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Admin Panel</p>

                        <button
                            className="absolute top-4 right-4 md:hidden"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex-1 p-4 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        setIsMobileOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === item.id
                                        ? 'bg-amber-50 text-amber-700'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 ${activeTab === item.id ? 'text-amber-500' : 'text-gray-400'}`} />
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center gap-3 px-4 py-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <span className="font-medium text-xs text-gray-600">AD</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                                <p className="text-xs text-gray-500 truncate">admin@timewise.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside >
        </>
    );
}
