import React, { useState } from 'react';
const Catagories = ({
	category,
	setCategory,
	jobList,
	setJobList,
	jobListReset,
}) => {
	let uniqueCategories = category.filter((v, i, a) => a.indexOf(v) === i);
	const handleClose = (e) => {
		let value = e.target.previousSibling.innerText;
		uniqueCategories = uniqueCategories.filter(
			(category) => category !== value
		);
		setCategory(uniqueCategories);
		let toBeRestored = jobListReset.filter((list) =>
			Object.keys(list).includes(value)
		);
		let newArr = [...jobList, ...toBeRestored[0][value]];
		setJobList(newArr);
		if (!uniqueCategories.length) {
			e.target.parentElement.parentElement.style.display = 'none';
		}
	};
	return (
		<div className='categories'>
			{uniqueCategories.map((category) => (
				<div>
					<p className='category'>{category}</p>
					<button onClick={handleClose} className='close'>
						X
					</button>
				</div>
			))}
		</div>
	);
};

export default Catagories;
