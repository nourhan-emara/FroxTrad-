import { Command } from "lucide-react";
import { useState, useEffect } from "react";


function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    //Scroll Effect On NavBar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <header
            className={`fixed cursor-pointer top-3.5 z-50 transition-all duration-300 rounded-full
                left-3 right-3 w-auto
                md:left-1/2 md:right-auto md:-translate-x-1/2
                ${
                    isScrolled
                        ? "h-14 bg-[#1b1b1b]/20 backdrop-blur-xl border border-white/10 scale-95 md:w-[90%] md:max-w-2xl"
                        : "h-14 bg-[#1b1b1b] md:w-[95%] md:max-w-3xl"
                }
            `}
        >

            <div className='mx-auto h-full px-6'>

                <nav className='centered-row justify-between h-full'>
                    {/* Logo */}
                    <div className='centered-row gap-2 hover:-translate-y-1 duration-200 transition-all ease-out'>
                        <Command className="w-5 h-5 text-indigo-400"/>

                        <span className="font-bold text-base clash-display">
                            ForexTrade
                        </span>
                    </div>

                    {/* Desktop Navigation */}

                    <div className="hidden md:flex md:items-center md:gap-6">
                        {["Features", "Prices", "Testimonials"].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="inline-block text-sm text-zinc-300/90 hover:text-indigo-300 hover:-translate-y-1 transition-all duration-300 pr-5"
                                >
                                    {item}
                                </a>
                        ))}

                        <button className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer
                        hover:-translate-y-0.5 duration-200 transition-all ease-out hover:shadow-xl hover:shadow-indigo-900">
                        Start Trading
                        </button>
                    </div>

                    {/* Mobile Navigation */}

                    <div className="md:hidden glass p-1 rounded-md">
                        <img src="/menu.svg" alt="menu-icon" className="w-8"/>
                    </div>

                </nav>
            </div>

        </header>
    )
}

export default NavBar