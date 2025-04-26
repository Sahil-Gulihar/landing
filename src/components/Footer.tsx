import { LocateIcon } from 'lucide-react';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiDiscordFill, RiTwitterXFill } from "react-icons/ri"
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-sm flex gap-3 items-center text-gray-600">
               <LocateIcon className=' text-orange-600 animate-pulse' size={19}/> Built with love. From Assam, for Bharat.
              </p>
            </div>

            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Terms & Conditions
              </a>
            </nav>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} Navdyut AI and Research Labs
            </p>
          <div className='flex gap-4 items-center'>
          <a href="https://x.com/navdyut_ai" className='hover:text-orange-600 hover:-translate-y-1 duration-150'><RiTwitterXFill size={26} /></a>
          <a href='https://discord.gg/DqCQsnWgG6' className=' hover:text-orange-600 hover:-translate-y-1 duration-150'><RiDiscordFill size={28} /></a> 
          <a href="https://www.linkedin.com/company/navdyut" className='hover:text-orange-600 hover:-translate-y-1 duration-150'><AiFillLinkedin size={26} /></a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;