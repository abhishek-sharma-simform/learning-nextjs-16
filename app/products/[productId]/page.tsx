import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = (await params).productId;

  return {
    title: `product - ${productId}`,
    description: `Product description of ${productId}`,
  };
}

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
