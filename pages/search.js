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
			'query_string': {
				'query': q
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
	const [ results, setResults ] = useState(<h1>loading...</h1>)

	useEffect(() => {
		doSearch(props.urlQueryParams)
			.then(data => data.hits.hits.map(item => item._source))
			.then(results => results.map(item => <h1>{item.title}</h1>))
			.then(titles => setResults(titles))
	}, [])

	return <SearchResults results={results}/>
}

export default SearchPage