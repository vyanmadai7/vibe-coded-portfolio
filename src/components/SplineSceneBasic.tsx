'use client'

import { SplineScene } from "@/src/components/ui/splite";
import { Card } from "@/src/components/ui/card"
import { Spotlight } from "@/src/components/ui/spotlight"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Creative Builder",
  "Tech Enthusiast"
]

export function SplineSceneBasic() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden border-none rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 sm:p-12 md:p-16 lg:p-24 relative z-20 flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.4em] text-cyan-500 uppercase mb-4">
                Available for Hire
              </span>
              <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-6">
                Vyan <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600">
                  Madai
                </span>
              </h1>
              
              <div className="h-12 sm:h-20 md:h-24 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-400"
                  >
                    {roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-6 sm:mt-12 flex flex-wrap gap-3 sm:gap-6"
              >
                <a 
                  href="#contact" 
                  className="px-5 py-2.5 sm:px-8 sm:py-4 bg-white text-black rounded-full font-bold text-xs sm:text-base hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10"
                >
                  Get in Touch
                </a>
                <a 
                  href="#skills" 
                  className="px-5 py-2.5 sm:px-8 sm:py-4 border border-white/10 text-white rounded-full font-bold text-xs sm:text-base hover:bg-white/5 active:scale-95 transition-all backdrop-blur-sm"
                >
                  View Skills
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right content - Spline Scene */}
        <div className="flex-1 relative h-[40vh] sm:h-[50vh] md:h-full z-10 overflow-hidden">
          {/* Mobile Overlay to ensure text readability if Spline overlaps */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent z-20 pointer-events-none" />
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full scale-110 md:scale-100"
          />
        </div>
      </div>
    </Card>
  )
}
