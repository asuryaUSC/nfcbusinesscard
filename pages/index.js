// pages/index.js

import Head from 'next/head';
import ProfileCard from '../components/ProfileCard';

const profileData = {
  name: "Sushil Srivastava",
  position: "Co-Founder and Vice President of Genisys App",
  description: "Leading GENISYSapp to deliver cutting-edge tech solutions and transforming businesses with innovative strategies.",
  email: "sushil.srivastava@gsysapp.com",
  phone: "+12243258388",
  whatsapp: "+12243258388",
  linkedin: "https://www.linkedin.com/in/sushil-srivastava/",
  website: "https://www.gsysapp.com",
  companyLogo: "/companylogo.png", // Ensure this path is correct
  headshot: "/profile.png"
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{profileData.name} Business Card</title>
        <meta name="description" content="NFC Business Card landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <ProfileCard profileData={profileData} />
      </main>
    </div>
  );
}
