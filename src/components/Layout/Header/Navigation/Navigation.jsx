'use client'

import clsx from 'clsx'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

import styles from './Navigation.module.scss'

import { useClickAway } from '@/hooks/useClickAway'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { links } from './Links'
import { MenuButton } from './MenuButton'

export function Navigation({ className, ...props }) {
	const pathname = usePathname()
	const isMobile = useMediaQuery('(max-width: 1200px)')
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const menuButtonRef = useRef(null)
	const menuRef = useClickAway(e => {
		if (isMenuOpened && !menuButtonRef.current.contains(e.target)) {
			setIsMenuOpened(false)
		}
	})

	useEffect(() => {
		!isMobile && setIsMenuOpened(false)
	}, [isMobile])

	return (
		<nav
			className={clsx(styles.Navigation, className)}
			{...props}
		>
			<ul
				className={clsx(styles.List, isMobile && isMenuOpened && styles.Show)}
				ref={menuRef}
			>
				{links.map(link => (
					<li
						key={link.href}
						onClick={() => setIsMenuOpened(false)}
					>
						<NextLink
							className={clsx(
								pathname == link.href && styles.Active,
								styles.Link
							)}
							href={link.href}
						>
							{link.label}
						</NextLink>
					</li>
				))}
			</ul>
			{isMobile && (
				<MenuButton
					isOpened={isMenuOpened}
					onClick={() => setIsMenuOpened(!isMenuOpened)}
					ref={menuButtonRef}
				/>
			)}
		</nav>
	)
}
