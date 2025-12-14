'use client';

import { useState, useEffect } from 'react';
import { RefreshCw, User as UserIcon, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function UsersTab() {
    const [users, setUsers] = useState([]);
    const [dailySignups, setDailySignups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('7d');

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/users?period=${period}`);
            const data = await res.json();
            if (data.success) {
                setUsers(data.data.users);
                setDailySignups(data.data.dailySignups);
            }
        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [period]);

    if (loading) {
        return (
            <div className="h-96 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-amber-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Registered Users</h2>
                    <p className="text-sm text-gray-500">Total Users: {users.length}</p>
                </div>
                <button
                    onClick={fetchUsers}
                    className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            {/* Signup Trend Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base font-semibold text-gray-900">User Signups (Last {period})</h3>
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        {['7d', '30d'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${period === p
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {p === '7d' ? '7 Days' : '30 Days'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dailySignups}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickFormatter={(str) => new Date(str).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                allowDecimals={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                cursor={{ fill: '#f3f4f6' }}
                            />
                            <Bar dataKey="count" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">User</th>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Contact</th>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Location</th>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Joined</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <tr
                                    key={user._id}
                                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                                    onClick={() => window.location.href = `/admin/users/${user._id}`}
                                >
                                    <td className="py-3 md:py-4 px-3 md:px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-bold shrink-0">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="text-xs md:text-sm font-medium text-gray-900">{user.name}</p>
                                                <p className="text-[10px] md:text-xs text-gray-500">Age: {user.age}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 md:py-4 px-3 md:px-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                                <Mail className="w-3 h-3 text-gray-400" />
                                                <span className="truncate max-w-[100px] md:max-w-none">{user.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                                <Phone className="w-3 h-3 text-gray-400" />
                                                {user.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 md:py-4 px-3 md:px-6">
                                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                                            <MapPin className="w-3 h-3 text-gray-400" />
                                            {user.city}
                                        </div>
                                    </td>
                                    <td className="py-3 md:py-4 px-3 md:px-6 text-[10px] md:text-xs text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-gray-400" />
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
