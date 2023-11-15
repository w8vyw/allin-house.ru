import styles from './Links.module.scss'

export function Links() {
	return (
		<ul className={styles.List}>
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
					className={styles.Address}
					href='https://yandex.ru/maps/-/CDaDyHm5'
					target='_blank'
				>
					г. Москва, ул. Гурьянова 30
				</a>
			</li>
		</ul>
	)
}
