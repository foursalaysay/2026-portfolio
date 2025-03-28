import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111]">
      {/* Content */}
      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row justify-between items-center p-6 bg-black border-b border-gray-800 space-y-4 md:space-y-0">
          <div className="text-2xl font-bold text-white">kael</div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300 text-white"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-gray-300 text-white"><FaLinkedin size={20} /></Link>
            <Link href="#" className="hover:text-gray-300 text-white"><FaFacebook size={20} /></Link>
            <Link href="#" className="hover:text-gray-300 text-white"><FaInstagram size={20} /></Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[80vh] bg-[#111] px-4 py-8 md:px-8 lg:px-20">
          <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0 lg:absolute lg:left-20 lg:top-1/2 lg:-translate-y-1/2 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">designer</h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
              Product designer specializing in UI design and design systems.
            </p>
          </div>
          
          {/* Center Image */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] z-20">
            <Image
              src="/pic-portfolio.png"
              alt="Portfolio Image"
              fill
              className="object-cover"
              priority
            />
            {/* Left side overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-transparent to-transparent opacity-40"></div>
            {/* Right side overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#111] via-transparent to-transparent opacity-40"></div>
            {/* Color splashes */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/30 to-transparent mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent mix-blend-color"></div>
            {/* Edge enhancement */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-10"></div>
          </div>

          <div className="w-full lg:w-1/3 text-center lg:text-right mt-8 lg:mt-0 lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">&lt;coder /&gt;</h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Front end developer who writes<br className="hidden lg:block" />clean, elegant and efficient code.
            </p>
            <div className="font-mono text-sm text-gray-500 mt-4 inline-block text-left lg:text-right">
              &lt;script&gt;<br />
              const code = true;<br />
              if(code) {'{'}<br />
              &nbsp;&nbsp;console.log(&apos;grind more!&apos;);<br />
              {'}'}<br />
              &lt;/script&gt;
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="px-4 md:px-8 lg:px-20 py-16 bg-black">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">SOME OF MY LATEST WORK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">Creating a design system</h3>
              <p className="text-gray-400">Design system</p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">Interior design news feed</h3>
              <p className="text-gray-400">Side project</p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">Qantas map search</h3>
              <p className="text-gray-400">Product design</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


