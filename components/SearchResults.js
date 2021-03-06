import styles from '../styles/SearchResults.module.css'
import linkIcon from '../assets/images/iconmonstr-link-2.svg'
import contributorsIcon from '../assets/images/iconmonstr-user-circle-thin.svg'
import typeIcon from '../assets/images/iconmonstr-document-thin.svg'
import sourcesIcon from '../assets/images/iconmonstr-database-thin.svg'
import dateIcon from '../assets/images/iconmonstr-pencil-thin.svg'
import publishersIcon from '../assets/images/iconmonstr-folder-thin.svg'

import LoadMoreButton from '../components/LoadMoreButton'

function SearchResults(props) {
	let keyNum = 0
	const resultsDivs = props.results.map(item => {
		const defaultText = 'n/a'
		const dateText = item.date_updated ? new Date(item.date_updated).toDateString() : defaultText
		let contributorsText
		if (item.contributors) {
			const joinedContributors = item.contributors.slice(0, 5).join(', ')  // maximum of five names before ellipsis
			contributorsText = item.contributors.length > 5 ? joinedContributors + ' et al.' : joinedContributors
		} else {
			contributorsText = defaultText
		}

		return (
		<div className={styles.result} key={keyNum++}>
			<a
				target='_blank'
				href={item.identifiers[0]}
			>
				<span className={styles.title}>{item.title}</span>
			</a>
			<div className={styles.info}>
				<div>
					<img className='inline-icon' src={contributorsIcon} />
					{contributorsText}
				</div>
				<div>
					<img className='inline-icon' src={typeIcon} />
					{item.type}
				</div>
				<div>
					<img className='inline-icon' src={sourcesIcon} />
					{item.sources}
				</div>
				<div>
					<img className='inline-icon' src={publishersIcon} />
					{item.publishers ? item.publishers : defaultText}
				</div>
				<div>
					<img className='inline-icon' src={dateIcon} />
					{dateText}
				</div>
			</div>
		</div>
		)
	})
	return (
		<div className={styles.wrapper}>
			<div className={styles.resultsWrapper}>
				{resultsDivs}
				<LoadMoreButton
					results={props.results}
					params={props.params}
					setParams={props.setParams}
				/>
			</div>
		</div>
	)
}

export default SearchResults