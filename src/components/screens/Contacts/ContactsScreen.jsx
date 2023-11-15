import NextImage from 'next/image'

import styles from './ContactsScreen.module.scss'

import { Heading } from '@/components/ui/Heading/Heading'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import Image from '@/assets/images/contacts.jpg'

export function ContactsScreen() {
	return (
		<Wrapper className={styles.Container}>
			<div className={styles.Text}>
				<Heading
					className={styles.Heading}
					size={1}
				>
					Наши контакты
				</Heading>
				<ul className={styles.LinksList}>
					<li>
						<a
							className={styles.Link}
							href='tel:+79268661070'
						>
							+7 926 866 1070
						</a>
					</li>
					<li>
						<a
							className={styles.Link}
							href='mailto:info@allin-house.ru'
						>
							info@allin-house.ru
						</a>
					</li>
					<li>
						<a
							className={styles.Link}
							href='https://yandex.ru/maps/-/CDaDyHm5'
							target='_blank'
						>
							г. Москва, ул. Гурьянова 30
						</a>
					</li>
				</ul>
				<h2 className={styles.Title}>Как добраться?</h2>
				<p className={styles.Subtitle}>
					Общественным транспортом от метро <span>Печатники</span> около 10
					минут
				</p>
				<ul className={styles.List}>
					<li className={styles.Item}>Вагон из центра</li>
					<li className={styles.Item}>
						Выход - <span>первый</span>
					</li>
					<li className={styles.Item}>
						Через стеклянные двери направо{' '}
						<span>120 метров до автобусной остановки</span>
					</li>
					<li className={styles.Item}>
						Далее автобусы: <span>292, 426</span>
					</li>
					<li className={styles.Item}>
						6 остановок до <span>«Улица Гурьянова 55»</span>
					</li>
					<li className={styles.Item}>
						Проходи в бизнес центра <span>«Сёрф Плаза»</span>
					</li>
				</ul>
			</div>
			<NextImage
				className={styles.Image}
				priority
				src={Image}
				alt={'Рисунок "Как добраться?"'}
				quality={'100'}
			/>
		</Wrapper>
	)
}
