import { ArrowRight, Command } from 'lucide-react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function HeroSection() {
    const textRef = useRef(null);
    const cardRef = useRef(null);

    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        
        //  Text animation
        gsap.fromTo(
            textRef.current.children,
            {
                y: 40,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 3,
                stagger: 0.1,
                ease: "power3.out",
            }
        );

        //Animation Image on Scroll
        gsap.fromTo(
            cardRef.current,
            {
                rotateX: 50,
                y:-25,
            },
            {
                rotateX: 0, 
                y:0,
                ease: "none",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 70%",
                    end: "top 20%",
                    scrub: true, 
                },
            }
        );
    }, []);



    return (
        <section className='relative container mx-auto pt-40 pb-20'>

            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full z-0" />

            {/* Hero Text */}
            <div ref={textRef} className="max-w-4xl relative z-10">
                {/* Decorative : Sub-Title */}
                <div className="flex w-fit py-2 px-4 mb-4 cursor-pointer rounded-full glass">
                    <span className="text-sm font-medium text-zinc-300">
                        <Command className='w-4 h-4 inline-block mr-2'/>
                        Next-gen forex trading platform
                    </span>
                </div>
                {/* Heading */}
                <h1 className="text-5xl md:text-7xl mb-4 tracking-tight text-left">
                    <span className="clash-display grad1">
                        Trade forex with
                    </span>
                    <br/>
                    <span className="clash-display text-zinc-50 font-medium">
                        confidence & security 
                    </span>
                </h1>

                {/* Para */}
                <p className="text-xl text-zinc-300/80 text-left mb-8 max-w-2xl">
                    Experience seamless forex trading with advanced features, real-time analytics, and institutional-grade security.
                    <span className="text-zinc-200">
                        Start trading in minutes.
                    </span>
                </p>

                {/* Buttons */}
                <div className="col sm:flex-row gap-4 items-start">
                    <button className="clash-display bg-indigo-500 text-base px-4 py-3 rounded-full 
                                        cursor-pointer transition2 hover:-translate-y-1 hover:bg-indigo-500/20">
                        Start Trading Now
                    </button>

                    <button className="text-zinc-50 text-base clash-display px-4 py-3 gap-2 centered-row glass
                                        cursor-pointer rounded-full transition2 hover:-translate-y-1 hover:bg-indigo-500/20">
                        View Markets <ArrowRight className=''/>
                    </button>
                </div>
            </div>

            {/* Hero Image : UI Image */}
            <div  className="relative mx-auto max-w-5xl mt-20">
                <div className="glass rounded-xl overflow-hidden"
                style={{ transformPerspective: 1300 }} ref={cardRef} 
                >
                    <img  src="/chart2.png" alt="hero-image" className='w-full h-auto' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection