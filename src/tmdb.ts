function get(path: string, query?: Record<string, string | number>) {
	const baseUrl = 'https://api.themoviedb.org/3'
	const _path = path[0] == '/' ? path : '/' + path
	const url = new URL(`${baseUrl}${_path}`)

	url.search = new URLSearchParams({
	api_key: '5fc32caa702eec5a5336f8aa37f064c7',
		//language: 'vi',
		...query,
	}).toString()

	return fetch(url.href)
}

export default { get }
