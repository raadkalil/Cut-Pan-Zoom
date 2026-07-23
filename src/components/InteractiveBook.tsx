import React, { useState } from "react";
import { motion } from "motion/react";
import ThreeDBookModal from "./ThreeDBookModal";

interface InteractiveBookProps {
  coverImagePath: string;
  className?: string;
}

export default function InteractiveBook({ coverImagePath, className = "" }: InteractiveBookProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      
      {/* Wrapper container */}
      <div 
        className="relative select-none group"
      >
        
        {/* Floating State with soft shadows */}
        <motion.div
          animate={{ 
            y: [-6, 6, -6],
            rotateZ: [-0.5, 0.5, -0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-[280px] sm:w-[320px] aspect-[2/3]"
        >
          {/* Soft floating shadows layered behind the book */}
          <div className="absolute -inset-1 rounded-lg bg-black/10 blur-xl pointer-events-none -z-20 transition-all duration-500 group-hover:bg-deep-burgundy/20" />
          <div className="absolute inset-6 top-12 rounded-lg bg-black/25 blur-2xl pointer-events-none -z-20 transition-all duration-500" />
          
          {/* Main book cover container */}
          <div className="w-full h-full rounded-lg overflow-hidden bg-dark-gray border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col justify-between relative transition-transform duration-300 group-hover:scale-[1.02]">
            
            {/* Realistic generated cover image */}
            <img
              src={coverImagePath}
              alt="Cut, Pan, Zoom Book Cover Mockup"
              className="absolute inset-0 h-full w-full object-cover select-none"
              referrerPolicy="no-referrer"
              id="book-cover-img"
            />

            {/* Spine shadow overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/25 via-transparent to-transparent pointer-events-none" />
            
            {/* Highlight glare overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none mix-blend-overlay" />
          </div>
        </motion.div>

      </div>

      {/* 3D Embed Popup Modal */}
      <ThreeDBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        coverImagePath={coverImagePath}
      />

    </div>
  );
}
