
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { increment, decrement } from "../store/counterSlice";
import OrdersList from "../components/server/OrdersList";

export default function Home() {
  // const count = useAppSelector((state) => state.counter.value);
  // const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <OrdersList />
    </div>
  );
}

// <div className="flex flex-col items-center justify-center">
//   <h1 className="text-2xl font-bold">Counter: {count}</h1>
//   <div className="mt-4">
//     <div className="container flex justify-around p-10">
//       <button onClick={() => dispatch(increment())} className="btn btn-primary mx-2">
//         Increment
//       </button>
//       <button onClick={() => dispatch(decrement())} className="btn btn-secondary mx-2">
//         Decrement
//       </button>
//     </div>
//   </div>
// </div>