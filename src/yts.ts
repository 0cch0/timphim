function get(imdb_id) {
	const url = 'https://yts.mx/api/v2/movie_details.json'
	return fetch(`${url}?imdb_id=${imdb_id}`).then(res => res.text())
}

export default { get }
