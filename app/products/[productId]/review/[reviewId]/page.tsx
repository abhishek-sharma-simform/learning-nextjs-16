import React from "react";

const ReviewPage = async ({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) => {
  console.log(params);
  const { reviewId, productId } = await params;
  return (
    <div>
      ReviewPage
      <h3>
        Product {productId} and review {reviewId}
      </h3>
    </div>
  );
};

export default ReviewPage;
