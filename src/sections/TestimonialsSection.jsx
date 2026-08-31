
import { useRef } from 'react'
import { testimonials } from '../assets/data'

function TestimonialsSection() {
    const marqueeRef = useRef(null);

    //Pause Marquee on Hover
    const handleMouseEnter = () => {
        if(marqueeRef.current) {
            marqueeRef.current.style.setProperty("--marquee-play-state", "paused")
        }
    };


    //Resume Marquee on Leave
    const handleMouseLeave = () => {
        if(marqueeRef.current) {
            marqueeRef.current.style.setProperty("--marquee-play-state", "running")
        }
    };




    return (
        <section className="py-24 overflow-hidden">
            <div className="px-4 container mx-auto">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-normal mb-4 clash-display">
                        Trusted by Traders
                    </h2>

                    <p className="text-zinc-400/90 text-lg">
                        Join thousands of satisfied traders on ForexTrade
                    </p>
                </div>

                {/* MARQUEE */}
                <div className="relative flex flex-col antialiased ">
                    {/* Container */}
                    <div ref={marqueeRef} className="relative flex overflow-hidden py-4">
                        {/* Moving Part */}
                        <div className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8"
                        style={{
                            animationPlayState: "var(--marquee-play-state)"
                        }}>
                            {
                                testimonials.map((testimonial, index) => (
                                    <div
                                    key={index} 
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl 
                                    border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl">
                                        {/* Image & Name */}
                                        <div className="centered-row gap-4 mb-6">
                                            {/* Img */}
                                            <div className="w-12 h-12 overflow-clip rounded-full text-xl flex items-center justify-center text-center bg-pink-500">
                                                {!testimonial.image ? (testimonial.name[0]) : <img src={testimonial.image} alt="image" />}
                                            </div>

                                            {/* Name & Role */}
                                            <div>
                                                <h4 className="font-medium text-lg text-white/90 clash-display">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-sm text-white/60">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            {testimonial.content}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>

                        {/* Duplicate Moving Part : For Marquee Effect  */}
                        <div className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8"
                        style={{
                            animationPlayState: "var(--marquee-play-state)"
                        }}>
                            {
                                testimonials.map((testimonial, index) => (
                                    <div 
                                    key={index} 
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl 
                                    border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl">
                                        {/* Image & Name */}
                                        <div className="centered-row gap-4 mb-6">
                                            {/* Img */}
                                            <div className="w-12 h-12 overflow-clip rounded-full text-xl flex items-center justify-center text-center bg-pink-500">
                                                {!testimonial.image ? (testimonial.name[0]) : <img src={testimonial.image} alt="image" />}
                                            </div>

                                            {/* Name & Role */}
                                            <div>
                                                <h4 className="font-medium text-lg text-white/90 clash-display">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-sm text-white/60">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            {testimonial.content}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Decor : Smooth Edges */}
                    <div className="absolute h-full w-20 md:w-50 -left-1 bg-gradient-to-r from-black to-transparent"></div>
                    <div className="absolute h-full w-20 md:w-50 -right-1 bg-gradient-to-l from-black to-transparent"></div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection