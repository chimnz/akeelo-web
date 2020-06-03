import Header from '../components/Header'
import SearchStats from '../components/SearchStats'
import SearchResults from '../components/SearchResults'
import { useState, useEffect } from 'react'

export async function getServerSideProps(context) {
	const urlQueryParams = context.query
	return {
		props: {urlQueryParams: urlQueryParams} // will be passed to the page component as props
	}
}

async function doSearch(urlQueryParams) {
	const {q, offset} = urlQueryParams
	const endpoint = 'https://share.osf.io/api/v2/search/creativeworks/_search'
	const payload = {
		'query': {
			'bool': {
				'must': {
					'query_string': {
						'query': q
					},
				},
				'filter': [
					{
						'terms': {
							'type': [
								'article',
								'conference paper',
								'dissertation',
								'preprint',
								'publication',
								'registration',
								'report',
								'thesis'
							]
						}
					},
				],
			}
		},
		'from': offset
	}
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
	const data = await response.json()
	return data
}

function SearchPage(props) {
	const [ totalResults, setTotalResults ] = useState()  // TOTAL number of hits
	const [ results, setResults ] = useState()

	useEffect(() => {
		// if no query parameters, do nothing, else, doSearch then render
		// prevent page from breaking
		if (Object.getOwnPropertyNames(props.urlQueryParams).length === 0) {
			null
		} else {
			doSearch(props.urlQueryParams)
				.then(data => {
					setTotalResults(data.hits.total.toLocaleString())
					return data.hits.hits.map(item => item._source)
				})
				.then(results => setResults(results))
		}
	}, [])

	return (
		<>
			<Header
				urlQueryParams={props.urlQueryParams}
				doSearch={doSearch}
				setResults={setResults}
				setTotalResults={setTotalResults}
			/>
			<SearchStats totalResults={totalResults} />
			<SearchResults results={results} />
		</>
	)
}

export default SearchPage