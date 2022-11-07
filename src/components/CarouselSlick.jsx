import React from 'react';
import Slider from 'react-slick';

export default function CarouselSlick({ imageSlide }) {
	const settings = {
		autoplay: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		cssEase: "linear",
		arrows: false
		// responsive: [
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			slidesToShow: 3,
		// 			slidesToScroll: 3,
		// 			infinite: true,
		// 			dots: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 			initialSlide: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1
		// 		}
		// 	}
		// ]
	};


	return (
		<Slider {...settings}>
			{imageSlide.map(item =>
				<img
					src={item.img}
					alt={item.name}
					key={item.key}
				/>)}
		</Slider>
	)
};