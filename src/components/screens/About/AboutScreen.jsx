'use client'

import styles from './AboutScreen.module.scss'

import { Heading } from '@/components/ui/Heading/Heading'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

export function AboutScreen() {
	return (
		<Wrapper className={styles.Container}>
			<div className={styles.TextContainer}>
				<Heading
					className={styles.Heading}
					size={2}
				>
					О КОМПАНИИ
				</Heading>
				<div className={styles.Text}>
					<p>
						<strong>Архитектурное бюро</strong> <strong>AllinHouse</strong> было
						основано в 2021г и разрабатывает проекты по всей России. В нашем
						портфолио <strong>более 40 проектов</strong> частных домов разного
						класса и стиля.
					</p>
					<p>
						Команда <strong>AllinHouse</strong> насчитывает{' '}
						<strong>15 специалистов,</strong> что позволяет нам выполнять как
						отдельные разделы так и проекты под ключ. Все{' '}
						<strong>
							наши специалисты имеют соответствующее образование и богатый опыт
							проектирования.
						</strong>
					</p>
					<p>
						Каждый заказчик обращается в бюро с разными целями и задачами, не
						все они лежат на поверхности. На первый план выходит наше{' '}
						<strong>умение услышать, понять эти цели</strong> и создать
						архитектурный объект таким образом, чтобы он помог решить задачи,
						которые приведут проект к успеху.
					</p>
				</div>
			</div>
		</Wrapper>
	)
}
