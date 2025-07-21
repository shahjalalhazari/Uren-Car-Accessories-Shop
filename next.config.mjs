/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**', // allow all image paths
        }, ],
    },
};

export default nextConfig;