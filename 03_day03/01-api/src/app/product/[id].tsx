import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query; // Get the product id from the URL

  useEffect(() => {
    if (id) {
      fetch(`https://template6-six.vercel.app/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-80 object-cover rounded mb-4"
        />
        <p className="text-xl font-bold text-gray-800">${product.price}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
