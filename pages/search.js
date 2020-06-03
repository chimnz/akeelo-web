import { useRouter } from 'next/router'
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

function getEncodedParams(params) {
	let encoded = {}
	Object.keys(params).forEach(k => encoded[k] = encodeURI(params[k]))
	return encoded
}

function SearchPage(props) {
	const [ params, setParams ] = useState(props.urlQueryParams)
	const [ totalResults, setTotalResults ] = useState()  // TOTAL number of hits
	const [ results, setResults ] = useState([])

	const router = useRouter()

	function updatePage() {
		doSearch(params)
			.then(data => {
				setTotalResults(data.hits.total.toLocaleString())  // update results stats
				return data.hits.hits.map(item => item._source)  // return search results
			})
			.then(newResults => setResults([...results, ...newResults]))  // update search results

		const encodedParams = getEncodedParams(params)
		router.push({pathname: '/search', query: encodedParams})
	}

	useEffect(() => {
		// if no query parameters, do nothing, else, perform search then render
		// prevent page from breaking
		if (Object.getOwnPropertyNames(params).length === 0) {
			return
		} else {
			updatePage()
		}
	}, [params])

	return (
		<>
			<Header
				params={params}
				setParams={setParams}
				setResults={setResults}
			/>
			<SearchStats totalResults={totalResults} />
			<SearchResults
				results={results}
				params={params}
				setParams={setParams}
			/>
		</>
	)
}

export default SearchPage