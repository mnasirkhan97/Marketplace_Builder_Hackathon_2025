// import Link from "next/link";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
// //   dicountPercentage: number;
//   imageUrl: string;
//   description: string;
// }

// const ProductCard = ({ product }: { product: Product }) => {
//   return (
//     <Link href={`/product/${product._id}`}>
//       <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">{product.title}</h2>
//         <img
//           src={product.imageUrl}
//           alt={product.title}
//           className="w-full h-60 object-cover rounded mb-4"
//         />
//         <p className="text-xl font-bold text-gray-800">${product.price}</p>
//         {/* <p className="text-xl font-bold text-gray-800">${product.dicountPercentage}</p> */}
//         <p className="text-gray-600 mt-2">{product.description}</p>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;



interface Product {
    _id: string;
    title: string;
    price: number;
    dicountPercentage: number;
    imageUrl: string;
    description: string;
  }
  
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{product.title}</h2>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-60 object-cover rounded mb-4"
        />
        <p className="text-xl font-bold text-gray-800"> Price: ${ product.price}</p>
        <p className="text-xl font-bold text-gray-800"> Discount: { product.dicountPercentage} %</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
    );
  };
  
  export default ProductCard;
  



// interface Product {
//     _id: string;
//     title: string;
//     price: number;
//     imageUrl: string;
//     description: string;
//   }
  
//   const ProductCard = ({ product }: { product: Product }) => {
//     return (
//       <div className="border rounded-lg p-4 shadow-lg">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">{product.title}</h2>
//         <img src={product.imageUrl} alt={product.title} className="w-full h-60 object-cover rounded" />
//         <p className="text-xl font-bold mt-4 text-gray-800">${product.price}</p>
//         <p className="text-gray-600 mt-2">{product.description}</p>
//       </div>
//     );
//   };
  
//   export default ProductCard;
  