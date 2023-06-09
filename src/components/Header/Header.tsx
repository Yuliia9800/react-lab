import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'common';
import { LOGOUT_BUTTON_TEXT } from 'constant';
import { logout } from 'store/user';
import { AppDispatch, RootState } from 'store';
import Logo from './components/Logo/Logo';

function Header() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.user.token);
	const name = useSelector((state: RootState) => state.user.name);

	const handleButtonClick = () => {
		dispatch(logout())
			.unwrap()
			.then(() => {
				navigate('/login');
			});
	};

	return (
		<>
			<div className='primary-content navbar px-5'>
				<div className='flex-1'>
					<Logo />
				</div>
				<div className='flex-none gap-6'>
					{token ? (
						<>
							<p className='font-bold'>{name}</p>
							<Button
								buttonText={LOGOUT_BUTTON_TEXT}
								className='btn-ghost'
								onClick={handleButtonClick}
							/>
						</>
					) : null}
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Header;
