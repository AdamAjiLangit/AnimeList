/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com'
            },
            {
                protocol: 'https',
                hostname: 'images.justwatch.com'
            },
            {
                protocol: 'https',
                hostname: 'media.kitsu.io'
            }
        ],
    },
};

export default nextConfig;
