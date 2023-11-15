import { Montserrat } from 'next/font/google'
import Script from 'next/script'

import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic']
})

export function Layout({ children }) {
	return (
		<html lang='ru'>
			<head>
				{/* <Script>
				(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
				for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

				ym(95532550, "init", {
							clickmap:true,
							trackLinks:true,
							accurateTrackBounce:true,
							webvisor:true
				});
			</Script> */}
				{/* <noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/95532550'
							style='position:absolute; left:-9999px;'
							alt='Yandex Metrika'
						/>
					</div>
				</noscript> */}
			</head>
			<body className={montserrat.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
