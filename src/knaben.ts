function post(query: Record<string, string | number>) {
	const url = 'https://api.knaben.org/v1'

	return fetch(url, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(query)
	})
}

export default {
	post
}
