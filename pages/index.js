import styles from '../styles/HomePage.module.css'
import { useRouter } from 'next/router'

function HomePage() {
	const router = useRouter()
	let formInput = React.createRef();

	function goToSearchPage() {
		router.push({
			pathname: '/search',
			query: {
				q: formInput.current.value
			}
		})
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>akeelo</div>
			<form
				className={styles.bigSearch}
				onSubmit={goToSearchPage}
			>
				<input
					className={styles.textInput}
					ref={formInput}
					type='text'
					placeholder='search for science'
				/>
			</form>
		</div>
	)
}

export default HomePage