import { ArrowBigRight } from "lucide-react"


function CtaSection() {
    return (
        <section className="container mx-auto px-4 py-20 relative bg-black">
            {/* Bg : Image */}
            <div className="absolute inset-0 opacity-40" 
            style={{backgroundImage: 'url("/crack.png")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }} />
                <div className="bg-[#0a0a0a]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl mb-4 clash-display">
                        Ready to start trading?
                    </h2>

                    <p className="text-lg mb-8 max-w-2xl mx-auto text-zinc-300/80">
                        Join thousands of traders who have already discovered the power of our platform.
                    </p>

                    <button className="centered-row mx-auto text-lg text-zinc-50 bg-gradient-to-r from-indigo-400 to-indigo-600
                                        clash-display hover:translate-y-1 transition2 py-3 px-3 cursor-pointer rounded-full">
                        Create Account 
                        <ArrowBigRight className="ml-2 w-4 h-4"/> 
                    </button>
                </div>
        </section>
    )
}

export default CtaSection