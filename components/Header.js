import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

function Header(props) {
	const router = useRouter()
	let formInput = React.createRef()

	function goToSearchPage() {
		router.push({
			pathname: '/search',
			query: {
				q: formInput.current.value
			}
		})
	}

	const [inputValue, setInputValue] = useState(props.urlQueryParams.q)

	return (
		<header className={styles.wrapper}>
			<Link href='/'>
				<a><div className={styles.logo}>akeelo</div></a>
			</Link>
			<form
				className={styles.form}
				onSubmit={goToSearchPage}
			>
				<input
					className={styles.textInput}
					ref={formInput}
					type='text'
					placeholder='search for science'
					onChange={() => {setInputValue(formInput.current.value)}}
					value={inputValue}
				/>
			</form>
		</header>
	)
}

export default Header