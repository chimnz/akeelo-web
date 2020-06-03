import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import searchIcon from '../assets/images/iconmonstr-search-thin.svg'

function Header(props) {
	let formInput = React.createRef()

	const [inputValue, setInputValue] = useState(props.params.q)

	return (
		<header className={styles.wrapper}>
			<Link href='/'>
				<a><div className={styles.logo}>akeelo</div></a>
			</Link>
			<form
				className={styles.form}
				onSubmit={(event) => {
					event.preventDefault()  // prevent page refresh
					props.setResults([])  // clear previous search results
					const newParams = {q: inputValue}
					props.setParams(newParams)
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