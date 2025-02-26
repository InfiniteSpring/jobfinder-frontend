import Link from 'next/link';

function NotFoundHandle() {
  return (
    <div className="fixed z-0 left-0 top-0 w-screen h-screen flex flex-col justify-center items-center m-0 p-0">
        <span className="text-6xl font-bold">404</span>
        <span className="m-10">Вы заблели на страницу, которой не существует или перешли по недействительной ссылке</span>
        <button className='btn btn-outline btn-primary text-white'>
          <Link href="/">Вернуться на главную</Link>
        </button>
    </div>
  )
}

export default NotFoundHandle