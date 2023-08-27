import react, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Head from "next/head";
import laptop from "../public/laptop.jpg";


export default function Home() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <Head>
        <title>Envision Data Finance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Nav */}
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
          <h1 className="w-full text-2xl font-bold text-green-300">ENVISION.</h1>
          <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose  size={20} />}
          </div>
          <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className="w-full text-2xl font-bold text-green-300 m-4">ENVISION.</h1>
            <ul className="uppercase p-4">
              <li className="p-4 border-b border-gray-600">Home</li>
              <li className="p-4 border-b border-gray-600">Company</li>
              <li className="p-4 border-b border-gray-600">Resources</li>
              <li className="p-4 border-b border-gray-600">About</li>
              <li className="p-4">Contact</li>
            </ul>
          </div>
        </div>
        {/* Hero */}
        <div className="text-white">
          <div className="maxw-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible, financing for BTB, BTC and SASS.</p>
       
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
          </div>
        </div>
        {/* Analytics Dashboard */}
        <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image  alt="laptop" src={laptop} className='w-[500px] mx-auto my-4'   />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Manage Data Analytics Centrally</h1>
          <p className="text-black">
          Rich datasets and unmatched AI technology are employed to power the accuracy of our scalable, real-time credit decisioning systems.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}
