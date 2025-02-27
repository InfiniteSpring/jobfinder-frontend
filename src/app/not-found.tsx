import Link from 'next/link';
import { FaRegSadTear } from "react-icons/fa";

function NotFoundHandle() {

  return (
    <div className="fixed z-50 left-0 top-0 w-screen h-screen flex flex-col justify-center 
    items-center m-0 p-0 bg-mainBackground text-foreground">
      <FaRegSadTear className='h-32 w-32 text-primary' />
      <div className="text-6xl font-bold text-foreground mt-64">404</div>
      <div className="m-10 flex text-2xl">Упс, страница не найдена {'((('}</div>
      <button className='btn btn-outline border-primary text-foreground text-lg'>
        <Link href="/">Вернуться на главную</Link>
      </button>
    </div>
  )
}

export default NotFoundHandle