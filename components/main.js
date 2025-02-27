import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Main() {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            
            // Pastikan tombol navigasi bisa digunakan
            setTimeout(() => {
                swiperInstance.params.navigation.prevEl = prevRef.current;
                swiperInstance.params.navigation.nextEl = nextRef.current;
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
            }, 100); // Tambahkan sedikit delay agar Swiper selesai inisialisasi
        }
    }, []);

    return (
        <>
            <div className="hero bg-[#f4e9cf] text-[#222222] min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    {/* Swiper Container */}
                    <div data-aos="fade-left" data-aos-duration="1000" className="relative max-w-sm hidden lg:block">

                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} // Pastikan ini ada
                            className="rounded-lg shadow-2xl"
                        >
                        <SwiperSlide>
                            <div className="w-full">
                                <img
                                    src="gambar1.png"
                                    alt="Image 1"
                                    className="w-full h-full object-cover object-center rounded-lg"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full">
                                <img
                                    src="gambar2.png"
                                    alt="Image 2"
                                    className="w-full h-full object-cover object-center rounded-lg"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full">
                                <img
                                    src="gambar3.png"
                                    alt="Image 3"
                                    className="w-full h-full object-cover object-center rounded-lg"/>
                            </div>
                        </SwiperSlide>
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <button 
                            ref={prevRef} 
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-black/20 transition z-50 flex items-center justify-center"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            ref={nextRef} 
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-black/20 transition z-50 flex items-center justify-center"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="max-w-96 mr-8">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-5xl font-bold">Hey I'm <br/><span>Fiqih Badrian</span></h1>
                        <p data-aos="fade-right" data-aos-duration="1000" className="py-6">
                            a web developer and designer
                        </p>
                        <div data-aos="zoom-out-up" data-aos-duration="1000"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Download CV</button></div>
                            <div className="flex space-x-4 mt-6">
                                <a
                                    href="https://github.com/fiqihbadrian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300">
                                    <Github size={20}/>
                                </a>
                                <a
                                    href="https://instagram.com/fiqihbadrian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300">
                                    <Instagram size={20}/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/fiqih-badrian-27b73b286/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300">
                                    <Linkedin size={20}/>
                                </a>
                            </div>
                    </div>
                </div>
            </div>

            {/* SVG Wave 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f4e9cf" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,128C672,117,768,75,864,58.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>
            */}
        </>
    );
}
