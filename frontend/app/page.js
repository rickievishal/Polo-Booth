"use client"
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Polaroid from "@/components/ui/Polaroid";
import PopupForm from "@/components/ui/PopupForm";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  const {user,isLoading} = useAuth();
  console.log(user,isLoading)
  const dummy = {
        _id : "asfadf",
        title : "Sankari Today",
        imgUrl : "https://i.pinimg.com/736x/d5/a1/ee/d5a1eed890a8c1cfa4746368a5b1a06b.jpg",
        caption : "I look too cute today ;)",
        author : "Sankari",
        views : 45,
        likeCount : 678
    }
    const wigglyAnimation1 = {
      animate:{
        
          x: [0,.5,1,1.5,2,2.5, 2,1.5 ,1, 0.5,0,-0.5,-1,-1.5,-2,-1.5,-1,-0.5,0],
          y:[0,-.5,-1,-1.5,-2,-1.5,-1,-0.5,0,-0.5,-1,-1.5,-1,-0.5,0]
      },
      transition:{
        ease: "easeIn",
        duration:2,
        repeat:Infinity, 
        repeatDelay:0
      }
    }
    const wigglyAnimation2 = {
      animate:{
        
          x: [0, .3, .6, .9, 1.2, .9, .6, .3, 0, -.3, -.6, -.9, -1.2, -.9, -.6, -.3, 0],
  y: [0, -.3, -.6, -.9, -1.2, -.9, -.6, -.3, 0, -.3, -.6, -.9, -.6, -.3, 0],
      },
      transition:{
        ease: "easeIn",
        duration:2,
        repeat:Infinity, 
        repeatDelay:0
      }
    }
    const wigglyAnimation3 = {
      animate:{
        
          x: [0, 1, 2, 1, 0, -1, -2, -1, 0],
  y: [0, -1, 0, 1, 2, 1, 0, -1, 0]
      },
      transition:{
        ease: "easeIn",
        duration:2,
        repeat:Infinity, 
        repeatDelay:0
      }
    }
  return (
    <div className="h-screen w-screen flex flex-col min-h-screen font-sans pt-24">
          <section className="relative max-w-6xl mx-auto px-6 pt-40 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Your camera roll, <br />
              <span className="inline-block bg-[var(--primary)] px-3 py-1 border-4 border-black shadow-[6px_6px_0px_0px_black]">
                but social
              </span>
            </h1>

            <p className="text-lg font-medium max-w-md">
              A cozy place to post moments like polaroids.
              No pressure. Just memories.
            </p>

            <div className="flex gap-4">
              <Button size="lg">
                Start posting
              </Button>
              <Button variant="secondary" size="lg">
                Explore
              </Button>
            </div>
          </div>

          {/* Polaroid Stack */}
          <div className="relative h-[420px] hidden md:block">
            <div className="absolute left-0 top-12 rotate-[-8deg]">
              <Polaroid data={{author : "new",imgUrl:"https://i.pinimg.com/736x/d5/a1/ee/d5a1eed890a8c1cfa4746368a5b1a06b.jpg"}}/>
            </div>
            <div className="absolute left-36 top-0 rotate-[4deg]">
              <Polaroid data={{author : "new",imgUrl:"https://i.pinimg.com/736x/d5/a1/ee/d5a1eed890a8c1cfa4746368a5b1a06b.jpg"}}/>
            </div>
            <div className="absolute left-64 top-20 rotate-[-2deg]">
              <Polaroid data={{author : "new",imgUrl:"https://i.pinimg.com/736x/d5/a1/ee/d5a1eed890a8c1cfa4746368a5b1a06b.jpg"}}/>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Snap a moment",
            "Post it as a polaroid",
            "Let memories stack up",
          ].map((text, i) => (
            <div
              key={i}
              className="border-4 border-black rounded-xl p-6 bg-white shadow-[6px_6px_0px_0px_black] hover:-translate-y-1 transition"
            >
              <span className="text-3xl font-black">{i + 1}</span>
              <p className="mt-4 font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE POLAROIDS */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-black mb-16">
          Feels like memories.
        </h2>

        <div className="  h-[500px]">
          <div className="w-full h-[500px] relative">
            {/* <motion.div {...wigglyAnimation1} className="absolute top-0 left-0 rotate-[-6deg]">
              <Polaroid data={dummy} />
            </motion.div>
            <motion.div {...wigglyAnimation2}  className="absoulte top-0 left-0 rotate-[3deg]">
              <Polaroid data={dummy} />
            </motion.div>
            <motion.div {...wigglyAnimation2}  className="absoulte top-0 left-0 rotate-[3deg]">
              <Polaroid data={dummy} />
            </motion.div> */}
            <div className="absolute top-0 right-1/2 translate-x-1/2">
              <motion.div {...wigglyAnimation1} className="absolute top-0 left-0 rotate-[6deg]">
                <Polaroid data={dummy} />
              </motion.div>
            </div>
            <div className="absolute top-0 right-1/2 translate-x-1/4 ">
              <motion.div {...wigglyAnimation2}  className="absoulte top-0 left-0 rotate-[0deg]">
                <Polaroid data={dummy} />
              </motion.div>
            </div>
            <div className="absolute top-0 right-1/2 -translate-x-1/2">
              <motion.div {...wigglyAnimation2}  className="absoulte top-0 left-0 rotate-[-6deg]">
                <Polaroid data={dummy} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="border-4 border-black rounded-2xl p-12 bg-[var(--primary)] shadow-[6px_6px_0px_0px_black]">
          <h3 className="text-3xl font-black mb-6">
            Start where memories matter.
          </h3>
          <Button size="lg">
            Join Polo-Booth
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm font-medium opacity-70">
        © {new Date().getFullYear()} Polo-Booth · Built for memories
      </footer>
    </div>
  );
}

