import React, { useState } from 'react';

import { Input, Button } from 'common';
import { SEARCH_BUTTON_TEXT, SEARCH_INPUT_PLACEHOLDER } from 'constant';

interface SearchBarProps {
	setSearch: (value: string) => void;
}

function SearchBar({ setSearch }: SearchBarProps) {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleButtonClick = () => {
		setSearch(inputValue);
	};

	return (
		<div className='flex space-x-3'>
			<Input
				placeholderText={SEARCH_INPUT_PLACEHOLDER}
				className='input-sm w-72'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<Button buttonText={SEARCH_BUTTON_TEXT} onClick={handleButtonClick} />
		</div>
	);
}

export default SearchBar;
