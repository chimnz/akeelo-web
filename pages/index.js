import styles from '../styles/HomePage.module.css'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import searchIcon from '../assets/images/iconmonstr-search-thin.svg'

import osfShareLogo from '../assets/images/osf-share-logo.png'
import githubIcon from '../assets/images/iconmonstr-github-1.svg'
import personalWebsiteLogo from '../assets/images/personal-website-icon.png'

const personalWebsiteUrl = 'https://hdqrs.co'
const githubUrl = 'https://github.com/chimnz/akeelo-web'
const apiDocsUrl = 'https://share-research.readthedocs.io'

const queryExamples = [
	'protein folding', 'turbulent flow', 'quantum gravity',
	'solar flare', 'celiac disease', 'dark matter',
	'coriolis effect', 'air pollution', 'butterfly migration',
	'quark-gluon plasma', 'ball lightning', 'brinicle',
	'ion propulsion'
]
function getRandomInt(min, max) {
	// https://stackoverflow.com/a/1527834
	return Math.floor(Math.random() * (max - min + 1)) + min
}
function randomQueryExample() {
	const idx = getRandomInt(0, queryExamples.length-1)
	console.log(idx)
	return queryExamples[idx]
}

function HomePage() {
	const router = useRouter()
	const formInput = React.createRef()
	const [placeholder, setPlaceholder] = useState()

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
	// set search input placeholder text
	useEffect(() => {
		let msg = 'search for science'
		if (window.innerWidth >=  550) {
			const q = randomQueryExample()
			msg = `${msg} (eg. ${q})`
		}
		setPlaceholder(msg)
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