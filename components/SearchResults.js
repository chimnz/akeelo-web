import styles from '../styles/SearchResults.module.css'
import linkIcon from '../assets/images/iconmonstr-link-2.svg'
import contributorsIcon from '../assets/images/iconmonstr-user-circle-thin.svg'

function SearchResults(props) {
	if (props.results) {
		const results = props.results.map(item => (
			<div className={styles.result}>
				<div className={styles.info}>
					<div className={styles.title}>
						{item.title}
					</div>
					<div className={styles.contributors}>
						<img src={contributorsIcon} />
						{item.contributors[0]}
					</div>
					<div>
						type: {item.type}
					</div>
					<div>
						sources: {item.sources}
					</div>
					<div>
						date_updated: {item.date_updated}
					</div>
					<div>
						date_published: {item.date_published}
					</div>
				</div>
				<div className={styles.link}>
					<a
						target='_blank'
						href={item.identifiers[0]}
					>
						<div className={styles.innerLink}>
							<img
								className={styles.linkIcon}
								src={linkIcon}
							/>
						</div>
					</a>
				</div>
			</div>
		))
		return (
			<div className={styles.wrapper}>
				{results}
			</div>
		)
	} else {
		const loadingIndicator = <h1>loading...</h1>
		return loadingIndicator
	}
}

export default SearchResults