'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, Link2, Share2, Mail, MessageCircle, Info } from 'lucide-react';

const sources = [
    { id: 'whatsapp', name: 'WhatsApp', icon: MessageCircle, color: 'bg-green-500' },
    { id: 'instagram', name: 'Instagram', icon: Share2, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'facebook', name: 'Facebook', icon: Share2, color: 'bg-blue-600' },
    { id: 'email', name: 'Email', icon: Mail, color: 'bg-gray-600' },
    { id: 'twitter', name: 'Twitter/X', icon: Share2, color: 'bg-black' },
    { id: 'other', name: 'Other', icon: Link2, color: 'bg-amber-500' },
];

const mediums = {
    whatsapp: ['social', 'broadcast', 'group', 'direct'],
    instagram: ['bio', 'story', 'post', 'dm', 'reel'],
    facebook: ['post', 'ad', 'group', 'messenger'],
    email: ['newsletter', 'promo', 'welcome', 'transactional'],
    twitter: ['tweet', 'dm', 'profile'],
    other: ['referral', 'qr_code', 'print', 'other'],
};

export default function UTMGenerator() {
    const [baseUrl, setBaseUrl] = useState('');
    const [source, setSource] = useState('whatsapp');
    const [medium, setMedium] = useState('social');
    const [campaign, setCampaign] = useState('');
    const [content, setContent] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setBaseUrl(window.location.origin);
        }
    }, []);

    useEffect(() => {
        generateUrl();
    }, [baseUrl, source, medium, campaign, content]);

    const generateUrl = () => {
        if (!baseUrl) return;

        let url = baseUrl;
        const params = new URLSearchParams();

        if (source) params.append('utm_source', source);
        if (medium) params.append('utm_medium', medium);
        if (campaign) params.append('utm_campaign', campaign.toLowerCase().replace(/\s+/g, '_'));
        if (content) params.append('utm_content', content.toLowerCase().replace(/\s+/g, '_'));

        const queryString = params.toString();
        if (queryString) {
            url += '?' + queryString;
        }

        setGeneratedUrl(url);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generatedUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleSourceChange = (newSource) => {
        setSource(newSource);
        setMedium(mediums[newSource][0]);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold text-gray-900">UTM Link Generator</h2>
                <p className="text-sm text-gray-500">
                    Create trackable marketing links for your campaigns
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Inputs */}
                    <div className="space-y-6">
                        {/* Base URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Base URL
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="url"
                                    value={baseUrl}
                                    onChange={(e) => setBaseUrl(e.target.value)}
                                    placeholder="https://yourdomain.com"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                                />
                                <button
                                    onClick={() => setBaseUrl('https://timewise-watches.vercel.app')}
                                    className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
                                    title="Use Production URL"
                                >
                                    Use Production
                                </button>
                                <button
                                    onClick={() => typeof window !== 'undefined' && setBaseUrl(window.location.origin)}
                                    className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
                                    title="Use Current URL"
                                >
                                    Use Current
                                </button>
                            </div>
                        </div>

                        {/* Source Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Traffic Source
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {sources.map((s) => {
                                    const Icon = s.icon;
                                    return (
                                        <button
                                            key={s.id}
                                            onClick={() => handleSourceChange(s.id)}
                                            className={`flex flex-col items-center gap-1 p-2 rounded-lg border-2 transition-all ${source === s.id
                                                ? 'border-amber-500 bg-amber-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 rounded-full ${s.color} flex items-center justify-center`}>
                                                <Icon className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-700">{s.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Medium Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Medium
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {mediums[source].map((m) => (
                                    <button
                                        key={m}
                                        onClick={() => setMedium(m)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${medium === m
                                            ? 'bg-amber-500 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {m.replace('_', ' ')}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Campaign & Content */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Campaign Name
                                </label>
                                <input
                                    type="text"
                                    value={campaign}
                                    onChange={(e) => setCampaign(e.target.value)}
                                    placeholder="e.g., winter_sale"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Content <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="e.g., hero_banner"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Preview & Action */}
                    <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                                <Link2 className="w-4 h-4 text-amber-500" />
                                Generated Link
                            </h3>
                            <div className="bg-white border border-gray-200 rounded-lg p-4 break-all text-sm font-mono text-gray-600 mb-4 h-24 overflow-y-auto">
                                {generatedUrl}
                            </div>
                            <button
                                onClick={copyToClipboard}
                                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${copied
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Copied to Clipboard
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        Copy Link
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                            <div className="flex gap-2">
                                <Info className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-amber-800 mb-1">Trackable Link</p>
                                    <p className="text-xs text-amber-700 leading-relaxed">
                                        Share this link instead of your regular URL. When users click it, their visit source ("{source}") and campaign will be automatically tracked in your Analytics dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
