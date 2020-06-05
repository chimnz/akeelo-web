import styles from '../styles/HomePage.module.css'
import { useRouter } from 'next/router'
import searchIcon from '../assets/images/iconmonstr-search-thin.svg'

function HomePage() {
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

	return (
		<main>
			<div className='main-inner'>
				<div className={styles.spacer}></div>
				<div className={styles.contentWrapper}>
					<div className={styles.searchWrapper}>
						<div className={styles.logo}>akeelo</div>
						<form
							className={styles.form}
							onSubmit={goToSearchPage}
						>
							<input
								className={styles.textInput}
								ref={formInput}
								type='text'
								placeholder='search for science'
							/>
							<button
								className={styles.submitButton}
							>
								<img src={searchIcon} />
							</button>
						</form>
					</div>
					<div className='extra'>
						powered by
					</div>
				</div>
			</div>
		</main>
	)
}

export default HomePage