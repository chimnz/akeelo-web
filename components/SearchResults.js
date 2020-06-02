import styles from '../styles/SearchResults.module.css'
import linkIcon from '../assets/images/iconmonstr-link-2.svg'
import contributorsIcon from '../assets/images/iconmonstr-user-circle-thin.svg'
import typeIcon from '../assets/images/iconmonstr-document-thin.svg'
import sourceIcon from '../assets/images/iconmonstr-database-thin.svg'

function SearchResults(props) {
	if (props.results) {
		const results = props.results.map(item => (
			<div className={styles.result}>
				<div className={styles.info}>
					<div className={styles.title}>
						{item.title}
					</div>
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