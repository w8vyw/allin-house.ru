import styles from './Footer.module.scss'

import { Logo } from '@/components/ui/Logo/Logo'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

import { Links } from './Links/Links'

export function Footer() {
	return (
		<footer className={styles.Footer}>
			<Wrapper className={styles.Container}>
				<Logo className={styles.Logo} />
				<Links />
				<p className={styles.Authors}>
					designed by <span>Chernyaev</span>
					<br />
					<a
						href='https://t.me/w8vyw'
						target='_blank'
					>
						powered by <span>w8</span>
					</a>
				</p>
			</Wrapper>
		</footer>
	)
}
