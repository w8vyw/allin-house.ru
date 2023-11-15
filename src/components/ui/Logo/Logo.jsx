import clsx from 'clsx'
import Link from 'next/link'

import styles from './Logo.module.scss'

export function Logo({ className, ...props }) {
	return (
		<Link
			href={'/'}
			className={clsx(styles.Link, className)}
			{...props}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 170 33'
				width='170'
				height='33'
			>
				<path
					d='M26.4445 33C26.4232 33 26.4012 32.9988 26.3799 32.9964L0.552204 30.3048C0.213528 30.2697 -0.0319475 29.9687 0.00338197 29.6326C0.0387115 29.2966 0.341448 29.0518 0.680734 29.088L26.414 31.7694L38.1026 29.4096C38.4358 29.3425 38.7617 29.5559 38.8299 29.8871C38.8975 30.2183 38.6825 30.5411 38.3487 30.6088L26.5669 32.9873C26.5273 32.9958 26.4859 33 26.4445 33Z'
					fill='#2D3F4F'
				/>
				<path
					d='M38.8391 6.11627C38.8391 6.11446 38.8391 6.11204 38.8385 6.11023C38.836 6.08847 38.8324 6.06731 38.8275 6.04616C38.8263 6.04193 38.8251 6.03769 38.8239 6.03346C38.8196 6.01714 38.8153 6.00143 38.8098 5.98511C38.8074 5.97786 38.8044 5.9706 38.8019 5.96395C38.7971 5.95126 38.7922 5.93856 38.7867 5.92648C38.783 5.91922 38.7794 5.91136 38.7757 5.90411C38.7696 5.89263 38.7636 5.88054 38.7569 5.86966C38.7526 5.86301 38.7483 5.85576 38.7441 5.84911C38.7367 5.83762 38.7282 5.82614 38.7197 5.81465C38.7154 5.80861 38.7112 5.80317 38.7069 5.79773C38.6972 5.78503 38.6862 5.77355 38.6752 5.76207C38.6716 5.75844 38.6679 5.75421 38.6643 5.74998C38.649 5.73487 38.6332 5.72036 38.6168 5.70646C38.6168 5.70646 38.6168 5.70646 38.6161 5.70586C38.5985 5.69195 38.5802 5.67865 38.5613 5.66596C38.5589 5.66415 38.5558 5.66294 38.5534 5.66112C38.5376 5.65145 38.5217 5.64239 38.5053 5.63393C38.498 5.6303 38.4907 5.62727 38.4834 5.62425C38.4736 5.62002 38.4639 5.61458 38.4535 5.61096L24.3412 0.0434083C24.2297 -0.000716243 24.1073 -0.0115969 23.9891 0.012581L12.1281 2.43157C11.7943 2.49987 11.5799 2.82325 11.6482 3.15388C11.717 3.48512 12.0429 3.69789 12.3761 3.63019L24.0567 1.24807L36.0688 5.98753L26.3221 7.93868C26.034 7.9961 25.8269 8.24815 25.8275 8.5395L25.8719 29.4104C25.8725 29.5942 25.956 29.7682 26.0997 29.8837C26.2106 29.9731 26.3483 30.0209 26.4884 30.0209C26.5298 30.0209 26.5718 30.0167 26.6132 30.0082L38.3506 27.6049C38.6369 27.5463 38.8427 27.296 38.8427 27.0059V6.17913C38.8427 6.17792 38.8427 6.17611 38.8427 6.1749C38.8421 6.15556 38.8415 6.13561 38.8391 6.11627ZM37.6099 26.5066L27.1042 28.6579L27.0622 9.03817L37.6099 6.92683V26.5066Z'
					fill='#2D3F4F'
				/>
				<path
					d='M6.93277 28.3232C6.91145 28.3232 6.88953 28.3219 6.8676 28.3195L0.611228 27.6625C0.297526 27.6293 0.0593567 27.3669 0.0593567 27.0532L0.0776298 10.1082C0.0776298 9.90026 0.184228 9.70683 0.360267 9.59441L4.60407 6.88226C4.89036 6.69911 5.27168 6.78132 5.45624 7.06541C5.64081 7.3495 5.55797 7.72788 5.27168 7.91103L1.3099 10.4424L1.29284 26.5032L6.31512 27.0302V22.9242C6.31512 22.5864 6.59105 22.3126 6.93156 22.3126C7.27206 22.3126 7.54799 22.5864 7.54799 22.9242V27.7102C7.54799 27.8837 7.47368 28.0487 7.34393 28.1648C7.23185 28.2675 7.08444 28.3232 6.93277 28.3232Z'
					fill='#F1592A'
				/>
				<path
					d='M15.7001 29.0981C15.6794 29.0981 15.6586 29.0969 15.6373 29.0951L9.01 28.432C8.67133 28.3982 8.42402 28.0984 8.45813 27.7617C8.49224 27.4256 8.79437 27.1802 9.13365 27.2141L15.761 27.8771C16.0997 27.911 16.347 28.2108 16.3129 28.5475C16.2812 28.863 16.0132 29.0981 15.7001 29.0981Z'
					fill='#F1592A'
				/>
				<path
					d='M7.15264 13.3799C6.93213 13.3799 6.71833 13.262 6.60746 13.0547C6.44787 12.7561 6.56178 12.3862 6.86269 12.2272L11.9629 9.53923C12.1256 9.4534 12.3187 9.44433 12.4892 9.51505L18.3015 11.9183C18.6158 12.0483 18.7645 12.4067 18.6335 12.7186C18.5025 13.0305 18.1413 13.178 17.827 13.048L12.2839 10.756L7.44075 13.3079C7.34938 13.3569 7.2501 13.3799 7.15264 13.3799Z'
					fill='#F1592A'
				/>
				<path
					d='M18.0403 21.7869C17.9483 21.7869 17.8564 21.7664 17.7705 21.7253L12.2341 19.053L7.26604 21.3904C7.07538 21.4799 6.85183 21.4672 6.67336 21.3554C6.49488 21.2441 6.38645 21.0495 6.38523 20.8404L6.35722 15.132C6.35539 14.7941 6.63011 14.5191 6.97061 14.5173C7.31172 14.5155 7.58827 14.7881 7.59009 15.1259L7.61385 19.8721L11.9734 17.8206C12.1427 17.7408 12.3389 17.742 12.507 17.823L17.4269 20.1978L17.4428 14.9077C17.444 14.5705 17.7199 14.2979 18.0592 14.2979C18.0598 14.2979 18.0604 14.2979 18.061 14.2979C18.4015 14.2991 18.6769 14.5735 18.6756 14.9114L18.6574 21.1764C18.6568 21.3868 18.5471 21.5826 18.3668 21.6938C18.2669 21.7561 18.1536 21.7869 18.0403 21.7869Z'
					fill='#F1592A'
				/>
				<path
					d='M26.489 30.0203C26.4701 30.0203 26.4512 30.0197 26.4317 30.0178L18.0075 29.2417C17.6938 29.2127 17.4519 28.9534 17.4483 28.6409L17.3788 23.4203C17.3746 23.0824 17.6468 22.805 17.9874 22.8008C18.3279 22.7971 18.6074 23.0667 18.6117 23.4046L18.6738 28.0745L25.8713 28.7376L25.8293 8.95169L20.2235 6.70739C19.9079 6.58106 19.755 6.22444 19.8824 5.91133C20.0097 5.59823 20.369 5.44652 20.6846 5.57284L26.6754 7.97128C26.908 8.06437 27.0609 8.28801 27.0609 8.53705L27.1054 29.408C27.106 29.5802 27.0329 29.7446 26.9044 29.8607C26.7905 29.9634 26.6425 30.0203 26.489 30.0203Z'
					fill='#F1592A'
				/>
				<path
					d='M7.15272 6.83128C6.94805 6.83128 6.74765 6.73034 6.6307 6.54538C6.44918 6.25948 6.53567 5.8817 6.82379 5.70158L11.924 2.51312C12.0909 2.40916 12.2974 2.38982 12.4802 2.46235L18.2925 4.7538C18.6086 4.87832 18.7633 5.23434 18.6379 5.54804C18.5124 5.86175 18.1536 6.01528 17.8375 5.89077L12.3163 3.71416L7.48104 6.73699C7.3787 6.80046 7.26541 6.83128 7.15272 6.83128Z'
					fill='#F1592A'
				/>
				<path
					d='M49.3566 9.66504H54.4275L59.8969 24.2081H55.7475L54.7211 21.3413H49.0835L48.0571 24.2081H43.8872L49.3566 9.66504ZM53.82 18.8272L51.8916 13.6747L49.9631 18.8272H53.82Z'
					fill='#F1592A'
				/>
				<path
					d='M61.071 24.2073V9.35303H64.8219V24.2073H61.071Z'
					fill='#F1592A'
				/>
				<path
					d='M67.1899 24.2073V9.35303H70.9408V24.2073H67.1899Z'
					fill='#F1592A'
				/>
				<path
					d='M73.6237 9.47796C74.0283 9.15966 74.5522 9 75.1954 9C75.8375 9 76.3614 9.16269 76.7671 9.48807C77.1718 9.81345 77.3746 10.2257 77.3746 10.7239C77.3746 11.2221 77.1718 11.6384 76.7671 11.9709C76.3614 12.3033 75.8375 12.469 75.1954 12.469C74.5522 12.469 74.0283 12.3033 73.6237 11.9709C73.218 11.6384 73.0162 11.2231 73.0162 10.7239C73.0162 10.2267 73.218 9.81042 73.6237 9.47796ZM77.0607 13.7999V24.209H73.3097V13.7999H77.0607Z'
					fill='#F1592A'
				/>
				<path
					d='M79.4281 13.7998H82.9487C83.0608 14.1737 83.1372 14.6446 83.179 15.2125C84.0454 14.0767 85.3093 13.5088 86.9717 13.5088C88.3131 13.5088 89.3507 13.8897 90.0836 14.6517C90.8175 15.4136 91.1834 16.4796 91.1834 17.8509V24.2079H87.4325V18.245C87.4325 17.6084 87.2653 17.1021 86.93 16.7282C86.5946 16.3543 86.1196 16.1674 85.505 16.1674C84.499 16.1674 83.7233 16.6595 83.179 17.6427V24.2079H79.4281V13.7998Z'
					fill='#F1592A'
				/>
				<path
					d='M97.4499 9.66504V15.3157H103.318V9.66504H107.446V24.2081H103.318V18.4735H97.4499V24.2081H93.3218V9.66504H97.4499Z'
					fill='#2D3F4F'
				/>
				<path
					d='M111.512 11.348C112.937 10.0323 114.809 9.37451 117.128 9.37451C119.447 9.37451 121.319 10.0364 122.744 11.3591C124.169 12.6819 124.882 14.5341 124.882 16.9169C124.882 19.2996 124.169 21.1549 122.744 22.4847C121.319 23.8287 119.447 24.4996 117.128 24.4996C114.809 24.4996 112.937 23.8317 111.512 22.4948C110.087 21.1579 109.375 19.2986 109.375 16.9169C109.375 14.5331 110.087 12.6778 111.512 11.348ZM113.586 16.9158C113.586 18.3427 113.9 19.4229 114.529 20.1565C115.158 20.8911 116.024 21.258 117.127 21.258C118.217 21.258 119.079 20.8871 119.715 20.1464C120.351 19.4057 120.668 18.3285 120.668 16.9158C120.668 15.5173 120.35 14.4502 119.715 13.7166C119.079 12.983 118.217 12.6152 117.127 12.6152C116.023 12.6152 115.157 12.982 114.529 13.7166C113.901 14.4502 113.586 15.5173 113.586 16.9158Z'
					fill='#2D3F4F'
				/>
				<path
					d='M126.747 9.66504H130.855V18.329C130.855 19.2708 131.099 20.0186 131.589 20.5733C132.078 21.1271 132.776 21.404 133.684 21.404C134.593 21.404 135.291 21.1271 135.78 20.5733C136.269 20.0196 136.514 19.2718 136.514 18.329V9.66504H140.642V18.516C140.642 20.441 140.02 21.9203 138.777 22.9521C137.533 23.9838 135.836 24.5001 133.684 24.5001C131.505 24.5001 129.804 23.9807 128.582 22.942C127.359 21.9032 126.748 20.4278 126.748 18.517V9.66504H126.747Z'
					fill='#2D3F4F'
				/>
				<path
					d='M142.506 20.011C143.331 20.4677 144.308 20.8416 145.44 21.1326C146.571 21.4237 147.695 21.5692 148.813 21.5692C149.638 21.5692 150.287 21.4651 150.762 21.258C151.237 21.0498 151.475 20.7527 151.475 20.3647C151.475 20.2535 151.45 20.1434 151.401 20.0322C151.352 19.9211 151.276 19.818 151.171 19.721C151.066 19.624 150.958 19.534 150.846 19.4512C150.734 19.3683 150.58 19.2814 150.385 19.1915C150.189 19.1016 150.018 19.0248 149.871 18.9631C149.725 18.9005 149.522 18.8247 149.264 18.7347C149.005 18.6448 148.799 18.5761 148.645 18.5266C148.491 18.4781 148.268 18.4053 147.975 18.3083C147.681 18.2113 147.458 18.1426 147.304 18.1001C146.591 17.8788 145.99 17.6636 145.502 17.4565C145.013 17.2483 144.51 16.9714 143.993 16.6258C143.477 16.2792 143.085 15.8609 142.82 15.3688C142.554 14.8777 142.422 14.3128 142.422 13.6752C142.422 12.3595 143.005 11.3137 144.172 10.5376C145.338 9.76254 146.941 9.37451 148.982 9.37451C151.063 9.37451 152.914 9.70696 154.535 10.3719L154.493 13.5085C153.878 13.1629 153.071 12.8749 152.072 12.6465C151.073 12.4181 150.113 12.3039 149.191 12.3039C148.366 12.3039 147.706 12.411 147.21 12.6263C146.714 12.8415 146.466 13.1497 146.466 13.5509C146.466 13.662 146.487 13.7692 146.529 13.8732C146.571 13.9773 146.644 14.0774 146.749 14.1744C146.854 14.2714 146.962 14.3583 147.075 14.4341C147.187 14.5109 147.337 14.5897 147.525 14.6725C147.714 14.7554 147.882 14.8282 148.028 14.8908C148.174 14.9535 148.373 15.0262 148.625 15.1091C148.877 15.1919 149.086 15.2576 149.254 15.3061C149.421 15.3546 149.655 15.4203 149.956 15.5032C150.257 15.586 150.49 15.6558 150.658 15.7113C151.398 15.9468 152.013 16.165 152.502 16.3661C152.991 16.5672 153.494 16.837 154.011 17.1766C154.528 17.5161 154.915 17.9284 155.174 18.4124C155.432 18.8974 155.561 19.4583 155.561 20.0949C155.561 21.4944 154.96 22.5777 153.759 23.3467C152.557 24.1156 150.993 24.4996 149.065 24.4996C148.003 24.4996 146.816 24.3854 145.503 24.1571C144.189 23.9287 143.135 23.6548 142.338 23.3365L142.506 20.011Z'
					fill='#2D3F4F'
				/>
				<path
					d='M169.581 9.66504V12.8228H161.471V15.5441H168.303V18.0168H161.471V21.0291H170V24.2081H157.384V9.66504H169.581Z'
					fill='#2D3F4F'
				/>
				<path
					d='M77.3664 9.00098H73.0162V12.47H77.3664V9.00098Z'
					fill='#2D3F4F'
				/>
			</svg>
		</Link>
	)
}