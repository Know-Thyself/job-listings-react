import React, { useState } from 'react';
import jobs from '../data.json';
const JobListing = () => {
	const [jobList, setJobList] = useState(jobs);
	return (
		<main className='main'>
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
						<div className='right'>
							<p className='role'>{job.role}</p>
							<p className='level'>{job.level}</p>
							{job.languages.map((language) => (
								<p className='language'>{language}</p>
							))}
						</div>
					</div>
				);
			})}
		</main>
	);
};

export default JobListing;
