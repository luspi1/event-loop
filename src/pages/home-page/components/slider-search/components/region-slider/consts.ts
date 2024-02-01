import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

import slide1 from 'src/assets/img/region-slide-1.png'
import slide2 from 'src/assets/img/region-slide-2.png'
import slide3 from 'src/assets/img/region-slide-3.png'
import slide4 from 'src/assets/img/region-slide-4.png'
import slide5 from 'src/assets/img/region-slide-5.png'
import slide6 from 'src/assets/img/region-slide-6.png'
import slide7 from 'src/assets/img/region-slide-7.png'
import slide8 from 'src/assets/img/region-slide-8.png'
import slide9 from 'src/assets/img/region-slide-9.png'

export const regionSliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 38,
	loop: true,
	grabCursor: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerGroup: 2,
			slidesPerView: 6,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerGroup: 3,
			slidesPerView: 9,
		},
	},
}

export const RegionSliderItems = [
	{
		title: 'Татарстан',
		img: slide1,
	},
	{
		title: 'Московская область',
		img: slide2,
	},
	{
		title: 'Ростов',
		img: slide3,
	},
	{
		title: 'Мурманская область',
		img: slide4,
	},
	{
		title: 'Оренбургская область',
		img: slide5,
	},
	{
		title: 'Санкт- Петербург',
		img: slide6,
	},
	{
		title: 'Тамбовская область',
		img: slide7,
	},
	{
		title: 'Ярославская область',
		img: slide8,
	},
	{
		title: 'Пермь',
		img: slide9,
	},
	{
		title: 'Татарстан',
		img: slide1,
	},
	{
		title: 'Московская область',
		img: slide2,
	},
	{
		title: 'Ростов',
		img: slide3,
	},
	{
		title: 'Татарстан',
		img: slide1,
	},
	{
		title: 'Московская область',
		img: slide2,
	},
	{
		title: 'Ростов',
		img: slide3,
	},
	{
		title: 'Татарстан',
		img: slide1,
	},
	{
		title: 'Московская область',
		img: slide2,
	},
	{
		title: 'Ростов',
		img: slide3,
	},
	{
		title: 'Мурманская область',
		img: slide4,
	},
	{
		title: 'Оренбургская область',
		img: slide5,
	},
	{
		title: 'Санкт- Петербург',
		img: slide6,
	},
	{
		title: 'Тамбовская область',
		img: slide7,
	},
	{
		title: 'Ярославская область',
		img: slide8,
	},
	{
		title: 'Пермь',
		img: slide9,
	},
	{
		title: 'Татарстан',
		img: slide1,
	},
	{
		title: 'Московская область',
		img: slide2,
	},
	{
		title: 'Ростов',
		img: slide3,
	},
	{
		title: 'Татарстан',
		img: slide1,
	},
	{
		title: 'Московская область',
		img: slide2,
	},
	{
		title: 'Ростов',
		img: slide3,
	},
]
