import NextImage from 'next/image'

import styles from './HomeScreen.module.scss'

import { Heading } from '@/components/ui/Heading/Heading'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import Banner from '@/assets/images/banner.png'

export function HomeScreen() {
	return (
		<Wrapper>
			<Heading
				size={1}
				className={styles.Heading}
			>
				Проектная мастерская
			</Heading>
			<NextImage
				className={styles.Banner}
				priority
				src={Banner}
				alt={'Разные коттеджи'}
			/>
		</Wrapper>
	)
}
