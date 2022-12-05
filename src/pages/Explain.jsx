import React from 'react';

// images
import course1 from '../data/Icons/course-1.jpg';
import course2 from '../data/Icons/course-2.jpg';
import course3 from '../data/Icons/course-3.jpg';

// icons
import { BsPlayCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/slices/VideoModal-slice';
import CourseVideoModal from '../components/CourseVideoModal';
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
	const dispatch = useDispatch(false);
	return (
		<div className='row'>
			{courses.map((course) => (
				<div className='col-lg-4 col-md-6 col-sm-6 col-sm-12 mb-4'>
					<figure className='course-figure'>
						<div className='course-prev-image'>
							<img src={course.courseImg} className='figure-img img-fluid rounded' alt={course.courseTitle} />
						</div>

						<div className='play-video-icon'>
							<BsPlayCircle onClick={() => dispatch(openModal())} />
						</div>
						<figcaption className='figure-caption'>{course.courseTitle} </figcaption>
					</figure>
				</div>
			))}

			{/** CourseVideoModal */}
			<CourseVideoModal />
		</div>
	);
};

export default Explain;
