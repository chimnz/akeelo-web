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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

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

	const queryExamples = [
		'celiac disease', 'protein folding', 'turbulent flow',
		'quantum gravity', 'astrophysical jets', 'ball lightning',
		'coriolis effect', 'enzyme kinetics', 'butterfly migration',
		'opaque forest', 'gall wasp', 'lactose intolerance'
	]
	const i = getRandomInt(0, queryExamples.length)
	const placeholder = `search for science (eg. ${queryExamples[i]})`

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
								<div className={styles.formInner}>
									<input
										className={styles.textInput}
										ref={formInput}
										type='text'
										placeholder={placeholder}
									/>
									<button
										className={styles.submitButton}
									>
										<img src={searchIcon} />
									</button>
								</div>
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