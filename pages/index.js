import styles from '../styles/HomePage.module.css'
import { useRouter } from 'next/router'
import searchIcon from '../assets/images/iconmonstr-search-thin.svg'

import osfShareLogo from '../assets/images/osf-share-logo.png'
import githubIcon from '../assets/images/iconmonstr-github-1.svg'
import personalWebsiteLogo from '../assets/images/personal-website-icon.png'

const apiDocsUrl = 'https://share-research.readthedocs.io'
const githubUrl = 'https://github.com/chimnz/akeelo-web'
const personalWebsiteUrl = 'https://hdqrs.co'

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
		<>
			<nav className={styles.nav}>
				<div>
					<div className={styles.linkWrapper}>
						<a href={personalWebsiteUrl}>
							<img src={personalWebsiteLogo} />
						</a>
						<a href={githubUrl}>
							<img src={githubIcon} />
						</a>
					</div>
				</div>
			</nav>
			<main className={styles.main}>
				<div className='main-inner'>
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
						<div className={styles.attribution}>
							powered by
							<a href={apiDocsUrl}>
								<img src={osfShareLogo} />
							</a>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default HomePage