/** @type {import('next').NextConfig} */

const nextConfig = {
    // Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them.
    experimental:{
        // ppr:'incremental',
        missingSuspenseWithCSRBailout: false,
    },
    eslint:{
        ignoreDuringBuilds:true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
