const Catagories = ({ jobs, category, setCategory, setJobList }) => {
	let uniqueCategories = category.filter((v, i, a) => a.indexOf(v) === i);

	const handleClose = (e) => {
		let value = e.target.previousSibling.innerText;
		uniqueCategories = uniqueCategories.filter(
			(category) => category !== value
		);
		setCategory(uniqueCategories);
		let toBeRestored = jobs.filter((job) => {
			let arr = [...job.languages];
			arr.push(job.role, job.level);
			return uniqueCategories.every((el) => arr.indexOf(el) !== -1);
		});
		setJobList(toBeRestored);
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
