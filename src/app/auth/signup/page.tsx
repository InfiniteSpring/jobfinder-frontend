'use client';

import Link from 'next/link';

import { useState } from "react";

// import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GiMeshNetwork } from "react-icons/gi";


const SignUpPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		fullName: "",
		password: "",
	});

	const isError = false;

	return (
		<div className='absolute z-50 w-screen h-screen top-0 left-0 flex overflow-hidden bg-mainBackground justify-center'>
			{/* <div className='flex-1 hidden lg:flex flex-col items-center justify-center'>
				<div className="upper flex">
                	<GiMeshNetwork className='w-20 h-20 fill-foreground' />
					<span className="upper text-3xl font-bold text-foreground m-auto ml-10">
						Offline freelance platform
					</span>
				</div>
				<div className="description">
					<div className="upper w-full p-20 text-xl">
						Наша платформа предоставляет сервис для быстрого нахождения работы для исполнителей и заказчиков для клиентов.
					</div>
				</div>
				<div className="bottom">
					<div className="about">
						<button className='btn btn-outline btn-secondary'>Узнай больше о нас</button> 
					</div>
				</div>
			</div> */}
			<div className='flex-1 max-w-full flex flex-col justify-center items-center bg-mainBackground'>
				<form className='mx-auto md:mx-20 flex gap-4 flex-col max-w-full p-10 rounded-xl border border-foreground' onSubmit={() => console.log('something')}>
                    <GiMeshNetwork className='w-20 lg:hidden fill-foreground' />
					<h1 className='text-3xl my-5 font-extrabold text-foreground mb-5'>Регистрируйся сейчас</h1>
					<label className='input input-bordered border-b-px rounded flex items-center gap-2'>
						<MdDriveFileRenameOutline className="h-6 w-6 mr-3" />
						<input
							type='email'
							className='bg-mainBackground my-3 text-xl h-16 w-full'
							placeholder='Номер телефона'
							name='email'
							onChange={(e) => setFormData({
								...formData,
								email: e.target.value
							  })}
							value={formData.email}
						/>
					</label>
					<div className='md:flex gap-4 md:flex-wrap'>
						<label className='input input-bordered border-b-px rounded flex items-center gap-2 flex-1'>
							<FaUser className="h-6 w-6 mr-3" />
							<input
								type='text'
								className='bg-mainBackground my-3 text-xl h-16'
								placeholder='Имя Фамилия'
								name='username'
								onChange={(e) => setFormData({
									...formData,
									username: e.target.value
								  })}
								value={formData.username}
							/>
						</label>
						{/* <label className='input input-bordered border-b-px rounded flex items-center gap-2 flex-1'>
							<MdDriveFileRenameOutline className="h-6 w-6 mr-3" />
							<input
								type='text'
								className='bg-mainBackground my-3 text-xl h-16'
								placeholder='Full Name'
								name='fullName'
								onChange={(e) => setFormData({
									...formData,
									fullName: e.target.value
								  })}
								value={formData.fullName}
							/>
						</label> */}
					</div>
					<label className='input input-bordered border-b-px rounded flex items-center gap-2'>
						<MdPassword className="h-6 w-6 mr-3" />
						<input
							type='password'
							className='bg-mainBackground my-3 text-xl h-16 w-full'
							placeholder='Пароль'
							name='password'
							onChange={(e) => setFormData({
								...formData,
								password: e.target.value
							  })}
							value={formData.password}
						/>
					</label>
					<button className='btn rounded-md bg-primary border-primary text-xl text-foreground mt-4'>Зарегистрироваться</button>
					{isError && <p className='text-red-500'>Что-то пошло не так</p>}
				</form>
				<div className='flex lg:w-2/3 gap-2 mt-10 items-center'>
					<p className='text-foreground text-lg px-20 text-center mr-3'>Уже есть аккаунт?</p>
					<Link href='/auth/login'>
						<button className='btn rounded-md text-foreground text-xl btn-outline border-primary w-full px-20 hover:bg-secondary'>Войти в аккаунт</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SignUpPage;