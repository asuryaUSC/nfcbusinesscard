// components/ProfileCard.js

import { FiMail, FiPhone, FiLinkedin, FiGlobe, FiDownload } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProfileCard = ({ profileData }) => {
  const [formattedProfileData, setFormattedProfileData] = useState(profileData);

  useEffect(() => {
    setFormattedProfileData({
      ...profileData,
      linkedin: formatLink(profileData.linkedin),
      website: formatLink(profileData.website),
    });
  }, [profileData]);

  const downloadContactCard = () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${profileData.name}
TEL:${profileData.phone}
EMAIL:${profileData.email}
URL:${profileData.website}
END:VCARD
    `;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profileData.name.replace(/\s+/g, '_')}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatLink = (link) => link.replace(/^https?:\/\//, '');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-white text-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-xs mx-auto border border-gray-200"
    >
      <div className="absolute top-4 right-4 w-12 h-12">
        <img src={profileData.companyLogo} alt="Company Logo" className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border-4 border-gray-300 overflow-hidden w-28 h-28">
          <img src={profileData.headshot} alt={profileData.name} className="object-cover w-full h-full" />
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold">{profileData.name}</h2>
          <p className="text-gray-600 font-medium">{profileData.position}</p>
          <p className="text-gray-500 text-sm">{profileData.description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3">
          <FiMail className="w-5 h-5 text-[#C74634]" />
          <a href={`mailto:${profileData.email}`} className="text-gray-500 hover:text-[#C74634]">
            {profileData.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FiPhone className="w-5 h-5 text-[#C74634]" />
          <a href={`tel:${profileData.phone}`} className="text-gray-500 hover:text-[#C74634]">
            {profileData.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FiPhone className="w-5 h-5 text-[#C74634]" />
          <a href={`https://wa.me/${profileData.whatsapp}`} className="text-gray-500 hover:text-[#C74634]">
            WhatsApp: {profileData.whatsapp}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FiLinkedin className="w-5 h-5 text-[#C74634]" />
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C74634]">
            {formattedProfileData.linkedin}
          </a>
        </div>
        <div className="flex items-center gap-3 pb-4">
          <FiGlobe className="w-5 h-5 text-[#C74634]" />
          <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C74634]">
            {formattedProfileData.website}
          </a>
        </div>
        <button
          className="flex items-center justify-center w-full py-2 mt-4 text-[#FAFAFA] bg-[#C74634] rounded hover:bg-[#A53928]"
          onClick={downloadContactCard}
        >
          <FiDownload className="w-4 h-4 mr-2" />
          Download Contact Card
        </button>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
