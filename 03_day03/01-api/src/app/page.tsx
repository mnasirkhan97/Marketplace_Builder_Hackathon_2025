"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

interface Product {
  _id: string;
  title: string;
  price: number;
  dicountPercentage: number;
  imageUrl: string;
  description: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    fetch("https://template6-six.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const handleSortChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <main>
      {/* Header with gradient text and shadow */}
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 shadow-xl mt-12 mb-8">
        Welcome to My Store
      </h1>
      
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full sm:w-96 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sort Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleSortChange}
          className="p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </button>
      </div>

      {/* Product Grid */}
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
    // <main>
    //   <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 shadow-lg mt-12 mb-8">
    //     Welcome to My Store
    //   </h1>
      
    //   {/* Search Bar */}
    //   <div className="text-center mb-8 text-black">
    //     <input
    //       type="text"
    //       placeholder="Search Products..."
    //       className="p-2 border border-gray-300 rounded-md"
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //   </div>

    //   {/* Sort Button */}
    //   <div className="text-center mb-8">
    //     <button
    //       onClick={handleSortChange}
    //       className="p-2 bg-blue-500 text-white rounded-md"
    //     >
    //       Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
    //     </button>
    //   </div>

    //   {/* Product Grid */}
    //   <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    //       {sortedProducts.map((product) => (
    //         <ProductCard key={product._id} product={product} />
    //       ))}
    //     </div>
    //   </div>
    // </main>
  );
}



// "use client";


// import { useEffect, useState } from "react";
// import ProductCard from "./components/ProductCard"; 

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   description: string;
// }

// export default function Home() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("https://template6-six.vercel.app/api/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (

//     <main>
//   <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 shadow-lg mt-12 mb-8">
//     Welcome to My Store
//   </h1>
//   <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//     <div className="grid grid-cols-3 gap-6 p-4">
//       {products.map((product) => (
//         <ProductCard key={product._id} product={product} />
//       ))}
//     </div>
//   </div>
// </main>

// );
// }

// <main>
// <h1 className="text-4xl font-bold text-center justify-center text-blue-500">Welcome to My Store</h1>
// <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//   <div className="grid grid-cols-3 gap-6 p-4">
//     {products.map((product) => (
//       <ProductCard key={product._id} product={product} />
//     ))}
//   </div>
// </div>
// </main>




// import { useEffect, useState } from "react";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   description: string;
// }

// export default function Home() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("https://template6-six.vercel.app/api/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <h1 className="text-4xl font-bold text-center text-blue-500">Welcome to My Store</h1>
//       <div className="grid grid-cols-3 gap-6 p-4">
//         {products.map((product) => (
//           <div key={product._id} className="border rounded-lg p-4 shadow-lg">
//             <img src={product.imageUrl} alt={product.title} className="w-full h-60 object-cover rounded" />
//             <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
//             <p className="text-gray-600 mt-2">{product.description}</p>
//             <p className="text-xl font-bold mt-4">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//     <h1 className="text-4xl font-bold text-center text-blue-500">Welcome to My Store</h1>
//   </div>
//   );
// }
