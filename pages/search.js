import { useEffect } from 'react'

export async function getServerSideProps(context) {
	return {
		props: {q: context.query.q}, // will be passed to the page component as props
	}
}

async function doSearch(q, offset=0) {
	const endpoint = 'https://share.osf.io/api/v2/search/creativeworks/_search'
	const payload = {
		'query': {
			'query_string': {
				'query': q,
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
	useEffect(() => {
		doSearch(props.q).then(data => console.log(data))
		console.log(props.q)
	}, [])

	return (
		<div>
			This is a search page. The query: {props.q}.
		</div>
	)
}

export default SearchPage