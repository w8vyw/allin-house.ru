import clsx from 'clsx'

import styles from './Heading.module.scss'

export function Heading({ children, className, size, ...props }) {
	return (
		<h1
			className={clsx(
				styles.Heading,
				size == 1 && styles.Size1,
				size == 2 && styles.Size2,
				size == 3 && styles.Size3,
				className
			)}
			{...props}
		>
			{children}
		</h1>
	)
}
