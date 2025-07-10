import React from "react";
import author1 from "../../assets/author1.jpg";
import author2 from "../../assets/author2.jpeg";
import author3 from "../../assets/author3.jpeg";
import author4 from "../../assets/author4.jpeg";
import author5 from "../../assets/author5.jpeg";
import author6 from "../../assets/author6.jpeg";
const authors = [
  {
    name: "Elena Petrova",
    role: "Lifestyle & Wellness",
    img: author1,
  },
  {
    name: "Ethan Walker",
    role: "Art, Culture & History",
    img: author2,
  },
  {
    name: "Lina Andersson",
    role: "Technology & Productivity",
    img: author3,
  },
  {
    name: "Omar Al-Farouq",
    role: "Book Reviews & Literary Commentary",
    img: author4,
  },
  {
    name: "Lucas Moreira",
    role: "Travel & Photography",
    img: author5,
  },
  {
    name: "Sofia González",
    role: "Food, Culture & Lifestyle",
    img: author6,
  },
];

const TopAuthors = () => {
  return (
    <div className="w-3/4 mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Top Authors</h2>
      <div className="grid gap-8 md:grid-cols-3 text-center">
        {authors.map((author, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:shadow-violet-300">
            <img
              src={author.img}
              alt={author.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-600">{author.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAuthors;
