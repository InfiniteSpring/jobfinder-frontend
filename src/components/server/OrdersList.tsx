import React, { Suspense } from 'react';
import OrderCard from './Order';

async function OrdersList() {
  return (
    <div className="orderList py-4 px-6 w-full overflow-hidden">
      <Suspense fallback={<div>Loading products...</div>}>
        <OrderCard productId="111" />
        <OrderCard productId="222" />
        <OrderCard productId="333" />
        <OrderCard productId="444" />
        <OrderCard productId="555" />
        <OrderCard productId="666" />
        <OrderCard productId="777" />
        <OrderCard productId="888" />
        <OrderCard productId="111" />
        <OrderCard productId="222" />
        <OrderCard productId="333" />
        <OrderCard productId="444" />
        <OrderCard productId="555" />
        <OrderCard productId="666" />
        <OrderCard productId="777" />
        <OrderCard productId="888" />
      </Suspense>
    </div>
  );
}

export default OrdersList;
