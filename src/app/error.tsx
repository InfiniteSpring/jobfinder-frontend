'use client';

import Link from 'next/link';
import React, { use } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  return (
    <div className="fixed left-0 top-0 w-screen h-screen flex flex-col justify-center items-center m-0 p-0 text-3xl">
        <span className="text-6xl font-bold">500</span>
        <span className="m-10">Упс, что-то пошло не так</span>
        <button className='btn btn-primary text-white'>
          <Link href="/">Вернуться на главную</Link>
        </button>
    </div>
  );
}

export default ErrorPage;



