"use client"

import Image from "next/image";

const stats = [
    { value: "30K", label: "Students" },
    { value: "180", label: "Courses" },
    { value: "100k", label: "Sold Art" },
];

const brands = [
    { id: "glimmerea", icon: "/glimmerea.svg", label: "glimmerea" },
    { id: "handicraft", icon: "/handicraft.svg", label: "Handicraft" },
    { id: "scissors", icon: "/scissors.svg", label: "" },
    { id: "avase", icon: "/avase.svg", label: "Avase" },
];

export default function HeroSection() {
    return (
        <section className="w-full rounded-3xl px-6 md:px-10 py-10 md:py-16 lg:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* LEFT COLUMN */}
                <div className="space-y-6 md:space-y-8">
                    <h1

                        className="text-4xl font-ibm-plex-serif md:text-6xl lg:text-[64px] font-bold text-[#272727]"
                    >
                        Sell and Learn<br />Handcraft
                    </h1>

                    <p className="text-xl font-poppins text-[#272727] leading-relaxed max-w-2xl">
                        Sell a craft on our market place or select desired courses from online
                        or on-site categories.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-10">
                        <button
                            style={{ boxShadow: "5px 5px 4px 0px #00000040" }}
                            className="px-6 py-3 rounded-lg text-2xl font-medium text-white bg-[#C4928F] hover:opacity-85 transition-opacity"
                        >
                            Buy Handcraft
                        </button>
                        <button
                            className="px-6 py-3 rounded-lg text-2xl font-medium text-white bg-[#517A77] hover:opacity-85 transition-opacity"
                            style={{ boxShadow: "5px 5px 4px 0px #00000040" }}
                        >
                            Sell Handcraft
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-20 mt-15">
                        {stats.map(({ value, label }) => (
                            <div key={label}>
                                <div className="text-2xl font-ibm-plex-serif md:text-[40px] font-bold text-[#D6B3B1]">
                                    {value}
                                </div>
                                <div className="font-poppins text-xs md:text-xl text-black mt-0.5">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col justify-start items-ceter space-y-6">
                    {/* Image with decorative star */}

                    <div className="flex items-start h-auto w-125">
                        <Image
                            src="/hero-image.png"
                            alt="Handcraft instructor"
                            width={500} height={500}
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>

                </div>
            </div>

            <div className="flex w-full items-center gap-4 my-3">
                <div>
                    <p className="text-lg lg:text-xl font-poppins text-[#272727]">
                        Learn from Top handcraft instructors and course providers
                    </p>
                </div>
                {/* Brand logos */}
                <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                    {brands.map(({ id, icon, label }) => (
                        <div key={id} className="flex flex-col items-center gap-1 opacity-75">
                            <Image
                                src={icon}
                                alt={label || id}
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind animation for the star */}
            <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.5; transform: scale(0.9) rotate(-5deg); }
          100% { opacity: 1; transform: scale(1.1) rotate(5deg); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite alternate;
        }
      `}</style>
        </section>
    );
}