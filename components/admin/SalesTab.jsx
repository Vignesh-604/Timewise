'use client';

import { useState, useEffect } from 'react';
import { formatPrice } from '@/data/watches';
import { TrendingUp, Package, DollarSign } from 'lucide-react';

export default function SalesTab() {
    const [sales, setSales] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const res = await fetch('/api/analytics/sales');
                const data = await res.json();
                if (data.success) {
                    setSales(data.sales);
                }
            } catch (error) {
                console.error('Failed to load sales data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSales();
    }, []);

    const totalRevenue = sales.reduce((sum, item) => sum + item.revenue, 0);
    const totalUnitsCallback = sales.reduce((sum, item) => sum + item.totalSold, 0);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Sales Analytics</h2>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Potential Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-900">{formatPrice(totalRevenue)}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Units Demanded</p>
                            <h3 className="text-2xl font-bold text-gray-900">{totalUnitsCallback}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Top Performing Product</p>
                            <h3 className="text-lg font-bold text-gray-900 truncate max-w-[200px]">
                                {sales.length > 0 ? sales[0].name : 'N/A'}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bestsellers Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900">Bestselling Watches (Pre-orders)</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                            <tr>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Units Sold</th>
                                <th className="px-6 py-4">Revenue Generated</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {isLoading ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-8 text-center text-gray-500">Loading sales data...</td>
                                </tr>
                            ) : sales.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-8 text-center text-gray-500">No sales recorded yet.</td>
                                </tr>
                            ) : (
                                sales.map((item) => (
                                    <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{item.totalSold}</td>
                                        <td className="px-6 py-4 font-medium text-green-600">{formatPrice(item.revenue)}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
