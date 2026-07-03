import React, { ReactNode } from "react";

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <h4>This is product layout</h4>
    </div>
  );
};

export default ProductLayout;
