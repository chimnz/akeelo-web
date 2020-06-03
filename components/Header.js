import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import searchIcon from '../assets/images/iconmonstr-search-thin.svg'

function Header(props) {
	const router = useRouter()
	let formInput = React.createRef()

	const [inputValue, setInputValue] = useState(props.urlQueryParams.q)

	return (
		<header className={styles.wrapper}>
			<Link href='/'>
				<a><div className={styles.logo}>akeelo</div></a>
			</Link>
			<form
				className={styles.form}
				onSubmit={(event) => {
					event.preventDefault()  // prevent page refresh
					props.doSearch({
						q: inputValue,
					})
						.then(data => data.hits.hits.map(item => item._source))
						.then(results => props.setResults(results))
				}}
			>
				<input
					className={styles.textInput}
					ref={formInput}
					type='text'
					placeholder='search for science'
					onChange={() => {setInputValue(formInput.current.value)}}
					value={inputValue}
				/>
				<button
					className={styles.submitButton}
				>
					<img src={searchIcon} />
				</button>
			</form>
		</header>
	)
}

export default Header