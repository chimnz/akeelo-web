import styles from '../styles/HomePage.module.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import searchIcon from '../assets/images/iconmonstr-search-thin.svg'

import osfShareLogo from '../assets/images/osf-share-logo.png'
import githubIcon from '../assets/images/iconmonstr-github-1.svg'
import personalWebsiteLogo from '../assets/images/personal-website-icon.png'

const personalWebsiteUrl = 'https://hdqrs.co'
const githubUrl = 'https://github.com/chimnz/akeelo-web'
const apiDocsUrl = 'https://share-research.readthedocs.io'

function HomePage() {
	const router = useRouter()
	let formInput = React.createRef()

	function goToSearchPage(e) {
		e.preventDefault()
		router.push({
			pathname: '/search',
			query: {
				q: formInput.current.value
			}
		})
	}

	// autofocus the text input field
	useEffect(() => {
		formInput.current.focus()
	}, [])

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
					<div className={styles.searchOuter}>
						<div className={styles.search}>
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
						<div className={styles.attributionOuter}>
							<div className={styles.attribution}>
								powered by
								<a href={apiDocsUrl}>
									<img src={osfShareLogo} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default HomePage