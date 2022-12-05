import React from 'react';

// images
import course1 from '../data/Icons/course-1.jpg';
import course2 from '../data/Icons/course-2.jpg';
import course3 from '../data/Icons/course-3.jpg';

// icons
import { BsPlayCircle } from 'react-icons/bs';
const courses = [
	{
		courseImg: course1,
		courseTitle: 'تحليل أداء متجرك',
	},
	{
		courseImg: course2,
		courseTitle: '  إرسال بريد للعملاء',
	},
	{
		courseImg: course3,
		courseTitle: '  شراء المنتجات المميزة',
	},
	{
		courseImg: course1,
		courseTitle: 'تحليل أداء متجرك',
	},
	{
		courseImg: course2,
		courseTitle: '  إرسال بريد للعملاء',
	},
	{
		courseImg: course3,
		courseTitle: '  شراء المنتجات المميزة',
	},
];
const Explain = () => {
	return (
		<div className='row'>
			{courses.map((course) => (
				<div className='col-4 mb-4'>
					<figure className='course-figure'>
						<img src={course.courseImg} className='figure-img img-fluid rounded' alt={course.courseTitle} />
						<div className='play-video-icon'>
							<BsPlayCircle />
						</div>
						<figcaption className='figure-caption'>{course.courseTitle} </figcaption>
					</figure>
				</div>
			))}
		</div>
	);
};

export default Explain;
