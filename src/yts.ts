function get(imdb_id) {
	const url = 'https://yts.lt/api/v2/movie_details.json'
	return fetch(`${url}?imdb_id=${imdb_id}`).then(res => res.text()).then(text => JSON.parse(text))
}

export default { get }
