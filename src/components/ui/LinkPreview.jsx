import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const KNOWN_BLOCKERS = ['linkedin.com', 'github.com', 'twitter.com', 'x.com', 'instagram.com', 'facebook.com', 'leetcode.com']

const LinkPreview = ({ url, title, description, icon: Icon, color }) => {
    const [status, setStatus] = useState('loading') // loading, success, error, fallback
    const [isBlocked, setIsBlocked] = useState(false)

    useEffect(() => {
        // Check for known blockers immediately
        const isKnownBlocker = KNOWN_BLOCKERS.some(domain => url.includes(domain))
        if (isKnownBlocker) {
            setStatus('fallback')
            setIsBlocked(true)
        } else {
            // For others, try loading (we can't easily detect X-Frame-Options client-side without proxy, 
            // so we rely on timeout or just optimistic loading. 
            // Realistically, most modern sites block iframes. 
            // We'll set a timeout to switch to fallback if it takes too long or if we want to be safe.)

            // For this demo, let's assume most are blocked and default to fallback for better UX 
            // unless explicitly whitelisted or if it's a known embeddable URL.
            // But per requirements, we try iframe.
            setStatus('loading')
        }
    }, [url])

    const handleIframeLoad = () => {
        if (!isBlocked) {
            setStatus('success')
        }
    }

    const handleIframeError = () => {
        setStatus('fallback')
    }

    // Fallback View
    if (status === 'fallback' || status === 'error') {
        return (
            <div className="w-full h-full bg-black/90 flex flex-col items-center justify-center p-6 text-center border border-white/10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/5 ${color}`}>
                    {Icon && <Icon size={32} />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">{description}</p>
                <div className="px-4 py-2 rounded-full border border-white/20 text-xs text-gray-300 uppercase tracking-wider">
                    Click to Visit
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-full relative bg-white">
            {/* Loading Skeleton */}
            {status === 'loading' && (
                <div className="absolute inset-0 bg-gray-900 z-10 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 border-2 border-neon-blue border-t-transparent rounded-full animate-spin mb-4"></div>
                    <div className="text-neon-blue text-xs tracking-widest animate-pulse">LOADING PREVIEW</div>
                </div>
            )}

            <iframe
                src={url}
                className={`w-full h-full transition-opacity duration-500 ${status === 'success' ? 'opacity-100' : 'opacity-0'}`}
                title={`Preview of ${title}`}
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
                referrerPolicy="no-referrer"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
            />
        </div>
    )
}

export default LinkPreview
