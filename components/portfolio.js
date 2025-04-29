import { useState, useEffect } from "react";
import BlogCard from './BlogCard';

export default function Portfolio({ searchQuery }) {
    const [filteredBlogCards, setFilteredBlogCards] = useState([]);

    /*useEffect(() => {
        // Logic to filter BlogCards based on searchQuery
        const allBlogCards = [
            // Example BlogCard data, replace with actual data source
            { title: "Blog 1", description: "Description 1", imageUrl: "url1", Linkurl: "link1" },
            { title: "Blog 2", description: "Description 2", imageUrl: "url2", Linkurl: "link2" },
            // Add more BlogCards as needed
        ];

        const filtered = allBlogCards.filter(card => {
            const titleMatch = card.title ? card.title.toLowerCase().includes(searchQuery.toLowerCase()) : false;
            const descriptionMatch = card.description ? card.description.toLowerCase().includes(searchQuery.toLowerCase()) : false;
            return titleMatch || descriptionMatch;


        });


        setFilteredBlogCards(filtered);
    }, [searchQuery]);*/

    return (
        <>
        <div className="hero bg-[#f4e9cf] text-[#222222] min-h-screen">
            {/*filteredBlogCards.map((card, index) => (
                <BlogCard 
                    key={index} 
                    title={card.title} 
                    description={card.description} 
                    imageUrl={card.imageUrl} 
                    Linkurl={card.Linkurl} 
                />
            ))*/}

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="max-w mx-8">

                    <h1 data-aos="fade-down" className="text-5xl font-bold mt-24 text-center ">My Project</h1> {/* Added margin-top */}

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <BlogCard 
                            title="Azxchat" 
                            description="chat web using nextjs and socket.io"   
                            imageUrl="https://github.com/user-attachments/assets/3c14da69-ed14-4a4e-8460-929e44d400e5"
                            Linkurl="https://github.com/fiqihbadrian/Azxchat"
                        />
                        <BlogCard 
                            title="Sistem Manajemen Printer" 
                            description="Sistem Manajemen Printer berbasis PHP untuk mengelola data printer yang diservis." 
                            imageUrl="https://github.com/user-attachments/assets/5f42e914-b101-4600-9efe-a515289dd9f2"
                            Linkurl="https://github.com/fiqihbadrian/sistem-manajemen-printer" 
                        />
                        <BlogCard 
                            title="Brixite Society" 
                            description="Brixite Society is all about bringing bold, stylish streetwear that speaks to your authentic vibe. Created as an independent fashion project, Brixite focuses on original designs with strong character, made for youth who want to stand out with confidence." 
                            imageUrl="https://raw.githubusercontent.com/fiqihbadrian/brixite/refs/heads/main/public/image.png"
                            Linkurl="https://www.brixite.biz.id" 
                        />
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
