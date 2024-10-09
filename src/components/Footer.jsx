import React from 'react';
import { Instagram } from 'lucide-react'; // Assuming you're using lucide-react for icons

const Footer = () => {
  return (
    <div className="bg-poppy text-white p-6 w-full h-auto">
      <div className="container mx-auto flex flex-wrap justify-between items-center max-w-screen-xl">
        
        {/* Middle Section: Navigation Links */}
        <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="mb-1 font-bold text-md md:text-lg font-sansCondensed">Stranice</h2>
          <nav className="flex flex-col md:flex-row text-center">
            <a href="/" className="px-2 md:px-4 font-taviraj hover:underline font-medium">Početna</a>
            <a href="/o-nama" className="px-2 md:px-4 font-taviraj hover:underline font-medium">O nama</a>
            <a href="/izlozba" className="px-2 md:px-4 font-taviraj hover:underline font-medium">Izložba</a>
            <a href="/kontakt" className="px-2 md:px-4 font-taviraj hover:underline font-medium">Kontakt</a>
          </nav>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="mb-1 font-bold text-md md:text-lg font-sansCondensed">Pratite nas</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/pokret_inkluzivno_studiranje/" target="_blank" rel="noopener noreferrer" className="hover:text-platinum">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Center Section: Copyright */}
      <div className="mt-6 text-center">
        <p className="text-sm md:text-md font-heebo">&copy; 2024 Pokret za inkluzivno studiranje. Sva prava zadržana.</p>
      </div>
    </div>
  );
};

export default Footer;
