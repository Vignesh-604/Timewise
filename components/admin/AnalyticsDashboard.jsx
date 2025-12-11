'use client';

import { useState, useEffect } from 'react';
import {
    BarChart3,
    Users,
    Globe,
    Smartphone,
    Monitor,
    Tablet,
    TrendingUp,
    Calendar,
    RefreshCw,
    MessageCircle,
    Mail,
    Share2,
    Clock,
    Eye
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sourceIcons = {
    whatsapp: { icon: MessageCircle, color: 'bg-green-500' },
    instagram: { icon: Share2, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    facebook: { icon: Share2, color: 'bg-blue-600' },
    email: { icon: Mail, color: 'bg-gray-600' },
    twitter: { icon: Share2, color: 'bg-black' },
    direct: { icon: Globe, color: 'bg-amber-500' },
};

const deviceIcons = {
    desktop: Monitor,
    mobile: Smartphone,
    tablet: Tablet,
    unknown: Globe,
};

export default function AnalyticsDashboard() {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('7d');
    const [error, setError] = useState(null);

    const fetchAnalytics = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/analytics?period=${period}`);
            const data = await res.json();
            if (data.success) {
                setAnalytics(data.data);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Failed to fetch analytics');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalytics();
    }, [period]);

    const StatCard = ({ title, value, subtext, icon: Icon, color = 'bg-amber-500' }) => (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 mb-1">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
                </div>
                <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );

    const SourceBar = ({ source, count, total, compact }) => {
        const percentage = total > 0 ? (count / total) * 100 : 0;
        const sourceInfo = sourceIcons[source.toLowerCase()] || sourceIcons.direct;
        const Icon = sourceInfo.icon;

        return (
            <div className={`flex items-center gap-3 ${compact ? '' : 'mb-3'}`}>
                <div className={`w-8 h-8 rounded-lg ${sourceInfo.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 capitalize truncate mr-2">{source}</span>
                        <span className="text-sm text-gray-500 whitespace-nowrap">{count} <span className="text-xs">({percentage.toFixed(0)}%)</span></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                            className={`h-1.5 rounded-full ${sourceInfo.color}`}
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="h-96 flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <RefreshCw className="w-6 h-6 text-amber-500 animate-spin" />
                    <span className="text-gray-600">Loading analytics...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500 mb-4">{error}</p>
                    <button
                        onClick={fetchAnalytics}
                        className="px-4 py-2 bg-amber-500 text-white rounded-lg"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Dashboard Overview</h2>
                    <p className="text-sm text-gray-500">
                        Stats based on unique sessions (visits)
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Period Selector */}
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        {['7d', '30d', 'all'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${period === p
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {p === '7d' ? '7 Days' : p === '30d' ? '30 Days' : 'All'}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={fetchAnalytics}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                        title="Refresh Data"
                    >
                        <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid md:grid-cols-4 gap-6">
                <StatCard
                    title="Total Sessions"
                    value={analytics?.totalVisits || 0}
                    subtext="Unique visits"
                    icon={Users}
                    color="bg-blue-500"
                />
                <StatCard
                    title="Total Page Views"
                    value={analytics?.totalPageViews || 0}
                    subtext="Pages browsed"
                    icon={Eye}
                    color="bg-indigo-500"
                />
                <StatCard
                    title="Avg. Pages/Session"
                    value={analytics?.totalVisits ? (analytics.totalPageViews / analytics.totalVisits).toFixed(1) : '0'}
                    subtext="Engagement depth"
                    icon={BarChart3}
                    color="bg-emerald-500"
                />
                <StatCard
                    title="Campaigns"
                    value={analytics?.byCampaign?.filter(c => c.campaign !== 'none')?.length || 0}
                    subtext="Active sources"
                    icon={TrendingUp}
                    color="bg-purple-500"
                />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Traffic Sources */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-amber-500" />
                        Traffic Sources
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {analytics?.bySource?.length > 0 ? (
                            analytics.bySource.slice(0, 15).map((item) => (
                                <div key={item.source} className="bg-gray-50 rounded-lg p-3">
                                    <SourceBar
                                        source={item.source}
                                        count={item.count}
                                        total={analytics.totalVisits}
                                        compact={true}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="col-span-3 text-gray-500 text-center py-8 text-sm">No data yet</p>
                        )}
                    </div>
                </div>

                {/* Top Landing Pages (Simulated from campaigns/direct for now, or use pages) */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        Most Viewed Pages
                    </h3>
                    {analytics?.byPage?.length > 0 ? (
                        <div className="grid grid-cols-1 gap-3">
                            {analytics.byPage.slice(0, 15).map((item, idx) => (
                                <div key={item.page} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                                    <span className="w-5 h-5 bg-white rounded text-center text-[10px] font-bold text-gray-400 leading-5 shadow-sm shrink-0">
                                        {idx + 1}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-xs font-medium text-gray-700 truncate mr-2" title={item.page}>
                                                {item.page}
                                            </p>
                                            <span className="text-xs text-gray-900 font-bold">{item.count}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1">
                                            <div
                                                className="h-1 rounded-full bg-green-500"
                                                style={{ width: `${(item.count / (analytics.byPage[0]?.count || 1)) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-8 text-sm">No page data yet</p>
                    )}
                </div>
            </div>

            {/* Recent Sessions Table */}
            {/* Daily Sessions Trend Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-semibold text-gray-900 mb-6">Session Trend (Last {period})</h3>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={analytics?.dailySessions || []}>
                            <defs>
                                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                </linearGradient>
                            </defs>
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
                            />
                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke="#f59e0b"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorVisits)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
