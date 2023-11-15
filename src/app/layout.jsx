import '@/assets/styles/main.scss'

import { Layout } from '@/components/Layout/Layout'

export const metadata = {
	applicationName: 'AllinHouse',

	metadataBase: new URL('https://allin-house.ru'),

	alternates: {
		canonical: '/'
	},

	verification: {
		yandex: '1d5683737d941015',
		google: '4TVURUTT2qrKPSjrSM6CrEZ55pJ_Dmy-ue4yPEy6-JI'
	},

	title: 'AllinHouse',

	description:
		'Архитектурное бюро AllinHouse было основано в 2021г и разрабатывает проекты повсей России. В нашем портфолио более 40 проектов частных домов разного класса и стиля.',

	openGraph: {
		title: 'AllinHouse',
		description:
			'Архитектурное бюро AllinHouse было основано в 2021г и разрабатывает проекты повсей России. В нашем портфолио более 40 проектов частных домов разного класса и стиля.',
		url: 'https://allin-house.ru',
		siteName: 'AllinHouse',
		locale: 'ru_RU',
		type: 'website'
	},

	robots: {
		index: true,
		follow: true
	},

	referrer: 'no-referrer-when-downgrade'
}

export default function RootLayout({ children }) {
	return <Layout>{children}</Layout>
}
