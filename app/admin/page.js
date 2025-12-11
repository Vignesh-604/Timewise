'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/admin/Sidebar';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import UTMGenerator from '@/components/admin/UTMGenerator';
import SessionsTab from '@/components/admin/SessionsTab';
import UsersTab from '@/components/admin/UsersTab';
import SalesTab from '@/components/admin/SalesTab';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('analytics');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            {/* Main Content */}
            <div className="flex-1 md:ml-64 transition-all duration-300">
                {/* Mobile Header */}
                <div className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4 justify-between sticky top-0 z-30">
                    <div className="font-bold text-gray-900">Admin Panel</div>
                    <button onClick={() => setIsMobileOpen(true)}>
                        <Menu className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Content Area */}
                <main className="p-6 md:p-8 max-w-7xl mx-auto">
                    {activeTab === 'analytics' && <AnalyticsDashboard />}
                    {activeTab === 'sales' && <SalesTab />}
                    {activeTab === 'sessions' && <SessionsTab />}
                    {activeTab === 'users' && <UsersTab />}
                    {activeTab === 'utm-generator' && <UTMGenerator />}
                </main>
            </div>
        </div>
    );
}
