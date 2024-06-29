// pages/index.js

import Head from 'next/head';
import ProfileCard from '../components/ProfileCard';

const profileData = {
  name: "Shilpa Srivastava",
  position: "Founder and President",
  description: "Guiding GENISYSapp's vision and strategy, fostering innovation and excellence in tech consulting.",
  email: "shilpa.srivastava@gsysapp.com",
  phone: "+12243258388",
  whatsapp: "+12243258388",
  linkedin: "https://www.linkedin.com/in/shilpa-srivastava-03165017b/",
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
