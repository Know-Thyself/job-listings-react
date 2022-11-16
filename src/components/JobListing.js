import React, { useState } from 'react';
import jobs from '../data.json';
import FilterButtons from './FilterButtons';
import Catagories from './Catagories';

const JobListing = () => {
	const [jobList, setJobList] = useState(jobs);
	const [category, setCategory] = useState([]);
	jobList.sort((a, b) => a.id - b.id);

	return (
		<main className='main'>
			<Catagories
				jobs={jobs}
				category={category}
				setCategory={setCategory}
				setJobList={setJobList}
			/>
			{jobList.map((job) => {
				return (
					<div className='job-list-wrapper'>
						<div className='left'>
							<img src={job.logo} alt='logo' />
							<div className='description'>
								<div className='company-new-featured'>
									<h4 className='company'>{job.company}</h4>
									{job.new && <p className='new'>New!</p>}
									{job.featured && <p className='featured'>Featured!</p>}
								</div>
								<h3 className='position'>{job.position}</h3>
								<div className='details'>
									<p>{job.postedAt}</p>
									<p>{job.contract}</p>
									<p>{job.location}</p>
								</div>
							</div>
						</div>
						<FilterButtons
							job={job}
							jobList={jobList}
							setJobList={setJobList}
							setCategory={setCategory}
						/>
					</div>
				);
			})}
		</main>
	);
};

export default JobListing;
