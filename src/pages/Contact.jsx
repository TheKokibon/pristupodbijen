import React from 'react';
import Header from '../components/Header';
import QRInstagram from "../assets/QRInstagram.png";
import { Instagram, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sansCondensed text-center mt-4 md:mt-6 lg:mt-8">Kontakt</h1>
        <div className='p-4 m-4 flex-col md:flex-row flex'>
          <div className='flex flex-col animate-slideLeft'>
            <h2 className='text-2xl italic font-taviraj text-center text-blueCrayola'>Podelite sa nama vaša iskustva</h2>
            <img src={QRInstagram} alt="" className='w-96 h-96' />
          </div>
          <div className='my-auto mx-auto text-center animate-slideRight'>
            <h2 className='text-2xl p-4 font-semibold font-taviraj text-center text-blueCrayola'>Ili direktno</h2>
            <div className='flex flex-row justify-center gap-8'>
              <div className='flex flex-col text-center items-center text-blueCrayola hover:text-black'>
                <a href="https://www.instagram.com/pokret_inkluzivno_studiranje/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <Instagram className='w-12 h-12 text-blueCrayola hover:text-black' />
                  <h3>@pokret_inkluzivno_studiranje</h3>
                </a>
              </div>
              <div className='flex flex-col text-center items-center text-blueCrayola hover:text-black'>
                <Mail className='w-12 h-12 text-blueCrayola hover:text-black' />
                <h3>pokret@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
