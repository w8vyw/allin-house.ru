import NextImage from 'next/image'

import styles from './PortfolioScreen.module.scss'

import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import Image1 from '@/assets/images/portfolio/1.jpg'
import Image2 from '@/assets/images/portfolio/2.jpg'
import Image3 from '@/assets/images/portfolio/3.jpg'
import Image4 from '@/assets/images/portfolio/4.jpg'
import Image5 from '@/assets/images/portfolio/5.jpg'
import Image6 from '@/assets/images/portfolio/6.jpg'
import Image7 from '@/assets/images/portfolio/7.jpg'
import Image8 from '@/assets/images/portfolio/8.jpg'
import Image9 from '@/assets/images/portfolio/9.jpg'
import Image10 from '@/assets/images/portfolio/10.jpg'

export function PortfolioScreen() {
	return (
		<Wrapper className={styles.Container}>
			<NextImage
				className={styles.Image}
				priority
				src={Image1}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				priority
				src={Image2}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image3}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image4}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image5}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image6}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image7}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image8}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image9}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
			<NextImage
				className={styles.Image}
				src={Image10}
				alt='Коттедж'
				quality={'90'}
				placeholder='blur'
			></NextImage>
		</Wrapper>
	)
}
