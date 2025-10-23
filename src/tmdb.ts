export function fetchTMDB(path: string, query?: Record<string, string | number>) {
	const baseUrl = 'https://api.themoviedb.org/3'
	const url = new URL(`${baseUrl}${path}`)

	url.search = new URLSearchParams({
	api_key: '5fc32caa702eec5a5336f8aa37f064c7',
		...query,
	}).toString()

	return fetch(url.href)
}
