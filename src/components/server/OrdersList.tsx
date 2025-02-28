import React, { Suspense } from 'react';
import OrderCard from './Order';

async function OrdersList() {
  return (
    <div className="orderList py-[1vh] px-[2vw] w-[100%] overflow-hidden">
      <Suspense fallback={<div>Loading products...</div>}>
        <OrderCard productId="111" />
        <OrderCard productId="222" />
        <OrderCard productId="333" />
        <OrderCard productId="444" />
        <OrderCard productId="111" />
        <OrderCard productId="222" />
        <OrderCard productId="333" />
        <OrderCard productId="444" />
        <OrderCard productId="111" />
        <OrderCard productId="222" />
        <OrderCard productId="333" />
        <OrderCard productId="444" />
        <OrderCard productId="111" />
        <OrderCard productId="222" />
        <OrderCard productId="333" />
        <OrderCard productId="444" />
      </Suspense>
    </div>
  );
}

export default OrdersList;
