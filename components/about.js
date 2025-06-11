import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
    return (
        <>
        <div className="hero bg-[#0a0a0a] min-h-screen">
            
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    data-aos="fade-right" 
                    data-aos-duration="1000"
                    src="/foto.png" 
                    alt="Gambar dari Public" 
                    width={200} 
                    height={300} 
                    className="rounded-lg"/>
                <div className="w-full max-w-md">

                    <h1 data-aos="fade-down" data-aos-duration="1000" className="text-3xl md:text-5xl font-bold">About Me!</h1>

                    <p data-aos="fade-left" data-aos-duration="1000" className="py-4">
                    Fiqih Badrian is my full name, domiciled in Bogor, Indonesia. I am a graduate of SMK Boash 1 Bogor with expertise in building applications using the latest technologies such as Next.js, Express, Laravel, MongoDB, MySQL, Tailwind CSS, Bootstrap and others.</p>
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <a target="blank" href="mailto:fiqihbadrian@gmail.com"><button className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg mt-5">Contact Me!</button></a>
                    </div>
                </div>
            </div>
        </div>

        {/* SVG 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
            fill="#0a0a0a"
            fill-opacity="1"
            d="M0,192L120,165.3C240,139,480,85,720,96C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
        */}
        </>
    )
}
