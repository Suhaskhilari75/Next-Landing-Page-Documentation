/** @type {import('next').NextConfig} */

const nextConfig = {
    // Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them.
    experimental:{
        ppr:'incremental'
    },
    eslint:{
        ignoreDuringBuilds:true
    }
};

export default nextConfig;
