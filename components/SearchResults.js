import styles from '../styles/SearchResults.module.css'
import linkIcon from '../assets/images/iconmonstr-link-2.svg'
import contributorsIcon from '../assets/images/iconmonstr-user-circle-thin.svg'
import typeIcon from '../assets/images/iconmonstr-document-thin.svg'
import sourcesIcon from '../assets/images/iconmonstr-database-thin.svg'
import dateIcon from '../assets/images/iconmonstr-pencil-thin.svg'
import publishersIcon from '../assets/images/iconmonstr-folder-thin.svg'

import LoadingIndicator from '../components/LoadingIndicator'

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
						{item.contributors}
					</div>
					<div className={styles.type}>
						<img className='inline-icon' src={typeIcon} />
						{item.type}
					</div>
					<div className={styles.sources}>
						<img className='inline-icon' src={sourcesIcon} />
						{item.sources}
					</div>
					<div className={styles.publishers}>
						<img className='inline-icon' src={publishersIcon} />
						{item.publishers}
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
		return <LoadingIndicator />
	}
}

export default SearchResults