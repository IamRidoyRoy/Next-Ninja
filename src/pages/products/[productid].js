import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is product details page {router.query.productid}</h1>
    </div>
  );
};

export default ProductDetails;
