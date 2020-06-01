import styles from '../styles/SearchResults.module.css'

function SearchResults(props) {
	if (props.results) {
		const titles = props.results.map(item => <h1>{item.title}</h1>)
		return (
			<div className={styles.wrapper}>
				{titles}
			</div>
		)
	} else {
		const loadingIndicator = <h1>loading...</h1>
		return loadingIndicator
	}
}

export default SearchResults