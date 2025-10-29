function get(imdb_id) {
	const url = 'https://eztvx.to/api/get-torrents'
	return fetch(`${url}?imdb_id=${imdb_id.replace('tt', '')}&limit=100`).then(res => res.json())
}

export default { get }
