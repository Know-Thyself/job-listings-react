import React, { useState } from 'react';
const Catagories = ({ category, setCategory, jobs, setJobList }) => {
	const [reset, setReset] = useState([]);
	console.log(category);
	let uniqueCategories = category.filter((v, i, a) => a.indexOf(v) === i);
	const handleClose = (e) => {
		uniqueCategories = uniqueCategories.filter(
			(category) => category !== e.target.previousSibling.innerText
		);
		setCategory(uniqueCategories);

		const restored = jobs.filter((job) => {
			for (let i = 0; i < uniqueCategories.length; i++) {
				if (
					job.role.includes(uniqueCategories[i]) ||
					job.level.includes(uniqueCategories[i]) ||
					job.languages.includes(uniqueCategories[i])
				) {
					return job;
				}
			}
		});
		setJobList(restored);
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
