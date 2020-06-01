import styles from '../styles/SearchResults.module.css'

function SearchResults(props) {
	if (props.results) {
		const results = props.results.map(item => (
			<div className={styles.result}>
				<div className={styles.title}>
					{item.title}
				</div>
				<div>
					contributors: {item.contributors}
				</div>
				<div>
					type: {item.type}
				</div>
				<div>
					identifiers: <a href={item.identifiers[0]}>link</a>
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