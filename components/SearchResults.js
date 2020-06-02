import styles from '../styles/SearchResults.module.css'
import linkIcon from '../assets/images/iconmonstr-link-2.svg'
import contributorsIcon from '../assets/images/iconmonstr-user-circle-thin.svg'
import typeIcon from '../assets/images/iconmonstr-document-thin.svg'
import sourceIcon from '../assets/images/iconmonstr-database-thin.svg'
import dateIcon from '../assets/images/iconmonstr-pencil-thin.svg'

function SearchResults(props) {
	if (props.results) {
		const results = props.results.map(item => (
			<div className={styles.result}>
				<div className={styles.info}>
					<a
						target='_blank'
						href={item.identifiers[0]}
					>
						<div className={styles.title}>
							{item.title}
						</div>
					</a>
					<div className={styles.contributors}>
						<img className='inline-icon' src={contributorsIcon} />
						{item.contributors[0]}
					</div>
					<div className={styles.type}>
						<img className='inline-icon' src={typeIcon} />
						{item.type}
					</div>
					<div className={styles.source}>
						<img className='inline-icon' src={sourceIcon} />
						{item.sources}
					</div>
					<div className={styles.date}>
						<img className='inline-icon' src={dateIcon} />
						{item.date_updated}
					</div>
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