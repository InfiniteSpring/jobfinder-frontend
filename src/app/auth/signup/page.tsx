'use client';

import Link from 'next/link';

import { useState } from "react";

import { MdOutlineMail } from "react-icons/md";
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
		<div className='absolute z-40 w-screen h-screen top-0 left-0 flex overflow-hidden bg-gray-950'>
			<div className='flex-1 hidden lg:flex flex-col items-center justify-center'>
				<div className="upper flex">
                	<GiMeshNetwork className='w-20 h-20 fill-white' />
					<span className="upper text-3xl font-bold text-white m-auto ml-10">
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
			</div>
			<div className='flex-1 flex flex-col justify-center items-center'>
				<form className='lg:w-2/3  mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={() => console.log('something')}>
                    <GiMeshNetwork className='w-20 lg:hidden fill-white' />
					<h1 className='text-4xl font-extrabold text-white mb-5'>Регистрируйся сейчас</h1>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdOutlineMail />
						<input
							type='email'
							className='bg-gray-900'
							placeholder='Email'
							name='email'
							onChange={(e) => setFormData({
								...formData,
								email: e.target.value
							  })}
							value={formData.email}
						/>
					</label>
					<div className='flex gap-4 flex-wrap'>
						<label className='input input-bordered rounded flex items-center gap-2 flex-1'>
							<FaUser />
							<input
								type='text'
								className='bg-gray-900'
								placeholder='Username'
								name='username'
								onChange={(e) => setFormData({
									...formData,
									username: e.target.value
								  })}
								value={formData.username}
							/>
						</label>
						<label className='input input-bordered rounded flex items-center gap-2 flex-1'>
							<MdDriveFileRenameOutline />
							<input
								type='text'
								className='bg-gray-900'
								placeholder='Full Name'
								name='fullName'
								onChange={(e) => setFormData({
									...formData,
									fullName: e.target.value
								  })}
								value={formData.fullName}
							/>
						</label>
					</div>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdPassword />
						<input
							type='password'
							className='bg-gray-900'
							placeholder='Password'
							name='password'
							onChange={(e) => setFormData({
								...formData,
								password: e.target.value
							  })}
							value={formData.password}
						/>
					</label>
					<button className='btn rounded-md btn-primary text-white'>Зарегистрироваться</button>
					{isError && <p className='text-red-500'>Что-то пошло не так</p>}
				</form>
				<div className='flex flex-col lg:w-2/3 gap-2 mt-10'>
					<p className='text-white text-lg px-20 text-center'>Уже есть аккаунт?</p>
					<Link href='/auth/login'>
						<button className='btn rounded-md btn-primary text-white btn-outline w-full px-20'>Войти в аккаунт</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SignUpPage;