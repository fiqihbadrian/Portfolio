import React from 'react';

export default function BlogCard({ title, description, imageUrl, Linkurl }) {
    return (
        <div data-aos="zoom-in" className="card bg-white rounded-lg shadow-md p-4 mx-2 my-4">
            <img src={imageUrl} alt={title} className="w-64 h-40 object-cover rounded-lg" />

            <h2 className="text-lg font-bold mt-3">{title}</h2>

            <p className="text-sm text-gray-600 mt-2">{description}</p>

            <a target='blank' href={Linkurl}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">Read More</button></a>
        </div>
    );
}
