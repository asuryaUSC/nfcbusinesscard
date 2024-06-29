// pages/index.js

import Head from 'next/head';
import ProfileCard from '../components/ProfileCard';

const profileData = {
  name: "Aaditya Surya",
  position: "Executive Intern",
  description: "Contributing to GENISYSapp's success through dedicated support and innovative solutions in tech consulting.",
  email: "aaditya.surya@gsysapp.com",
  phone: "+12137838000",
  whatsapp: "+12137838000",
  linkedin: "https://www.linkedin.com/in/aadityasurya/",
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
