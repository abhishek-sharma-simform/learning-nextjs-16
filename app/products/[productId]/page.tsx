import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  console.log(params);
  const productId = (await params).productId;
  return (
    <div>
      <h3>Product details page {productId}</h3>
    </div>
  );
};

export default ProductDetails;
