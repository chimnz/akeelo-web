import Link from 'next/link'
import styles from '../styles/Header.module.css'

function Header() {
	return (
		<header className={styles.wrapper}>
			<Link href='/'>
				<a><div className={styles.logo}>akeelo</div></a>
			</Link>
		</header>
	)
}

export default Header