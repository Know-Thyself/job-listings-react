import React, { useState } from 'react';
const Buttons = ({ job, jobList, setJobList, setCategory }) => {
	const handleFilter = (e) => {
    e.preventDefault();
		let value = e.target.innerText;
		let filtered = jobList.filter(
			(job) =>
				job.role.includes(value) ||
				job.level.includes(value) ||
				job.languages.includes(value)
		);
		const multiSelect = [...filtered];
		setJobList(multiSelect);
    setCategory((category) => category.concat(value));
    const categories = document.querySelector('.categories');
    categories.style.display = 'flex';
	};
	return (
		<div className='right'>
			<button onClick={handleFilter} className='role'>
				{job.role}
			</button>
			<button onClick={handleFilter} className='level'>
				{job.level}
			</button>
			{job.languages.map((language) => (
				<button onClick={handleFilter} className='language'>
					{language}
				</button>
			))}
		</div>
	);
};

export default Buttons;
