/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uhsaxmtcflukdxpgqowo.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins/**",
        search: "",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
