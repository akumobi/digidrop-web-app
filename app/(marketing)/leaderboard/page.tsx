import Footer from '@/components/common/footer';
import React from 'react';

const LeaderboardHeader = () => {
  return (
    <>
    
    <section className="w-full min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-gradient-to-r from-[#122134] via-[#0F1C2B7A] via-30% via-[#1F406B3D] via-50% via-[#122134B5] via-70% to-[#122134]">
      <div className="max-w-7xl w-full flex flex-col items-center md:items-start">
        
        <button className="bg-transparent border border-[#7C8CA0] text-white px-4 py-2 rounded-md mb-8 uppercase text-sm tracking-wider">
          Season 1
        </button>

        <h1 className="font-bold text-white text-4xl md:text-5xl font-['Chakra_Petch'] leading-[1.2] text-center md:text-left">
          LEADERBOARD
        </h1>

       <p className="text-white mt-4">Your Position: 9169/219814</p>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default LeaderboardHeader;
