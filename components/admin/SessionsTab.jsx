'use client';

import { useState, useEffect } from 'react';
import { Clock, Smartphone, Monitor, Tablet, RefreshCw } from 'lucide-react';

export default function SessionsTab() {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSessions = async () => {
        setLoading(true);
        try {
            // Re-using the analytics API but we could make a dedicated one for pagination later
            const res = await fetch('/api/analytics?period=30d');
            const data = await res.json();
            if (data.success) {
                setSessions(data.data.recentVisits || []);
            }
        } catch (error) {
            console.error('Failed to fetch sessions:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSessions();
    }, []);

    if (loading) {
        return (
            <div className="h-96 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-amber-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Recent Sessions</h2>
                    <p className="text-sm text-gray-500">Log of recent user visits and activity</p>
                </div>
                <button
                    onClick={fetchSessions}
                    className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Source / Campaign</th>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Landing Page</th>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Device</th>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Pages</th>
                                <th className="text-left py-3 px-3 md:px-6 text-[10px] md:text-xs font-medium text-gray-500 uppercase">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sessions.map((visit, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-3 md:py-4 px-3 md:px-6">
                                        <div className="flex items-center gap-2">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] md:text-xs font-medium capitalize 
                                                ${visit.utm_source === 'direct' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-700'}`}>
                                                {visit.utm_source}
                                            </span>
                                            {visit.utm_campaign !== 'none' && (
                                                <span className="text-[10px] md:text-xs text-gray-500 capitalize" title="Campaign">
                                                    • {visit.utm_campaign.replace(/_/g, ' ')}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-3 md:py-4 px-3 md:px-6 text-xs md:text-sm text-gray-600 font-mono">
                                        {visit.page}
                                    </td>
                                    <td className="py-3 md:py-4 px-3 md:px-6">
                                        <span className="text-xs md:text-sm text-gray-600 capitalize flex items-center gap-1">
                                            {visit.device === 'mobile' && <Smartphone className="w-3 h-3" />}
                                            {visit.device === 'desktop' && <Monitor className="w-3 h-3" />}
                                            {visit.device === 'tablet' && <Tablet className="w-3 h-3" />}
                                            {visit.device}
                                        </span>
                                    </td>
                                    <td className="py-3 md:py-4 px-3 md:px-6">
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs md:text-sm font-medium text-gray-900">{visit.pagesViewed}</span>
                                            <span className="text-[10px] md:text-xs text-gray-400">pgs</span>
                                        </div>
                                    </td>
                                    <td className="py-3 md:py-4 px-3 md:px-6 text-[10px] md:text-xs text-gray-500">
                                        {new Date(visit.visitedAt).toLocaleString('en-IN', {
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </td>
                                </tr>
                            ))}
                            {sessions.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="py-8 text-center text-sm text-gray-500">
                                        No recent sessions found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
