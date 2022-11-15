const Catagories = ({ category, setCategory }) => {
	console.log(category);
	let uniqueCategories = category.filter((v, i, a) => a.indexOf(v) === i);
	const handleClose = (e) => {
		uniqueCategories = uniqueCategories.filter(
			(category) => category !== e.target.previousSibling.innerText
		);
		setCategory(uniqueCategories);
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
