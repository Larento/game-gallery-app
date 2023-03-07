import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL,
	params: { key: process.env.API_KEY },
	withCredentials: false,
});

export const gameListURL = () => `/games`;
export const gameInfoURL = (slug) => `/games/${slug}`;
export const gameScreenshotsURL = (slug) =>
	`${gameInfoURL(slug)}/screenshots`;
export const platformListURL = () => `/platforms`;

export const PAGE_SIZE = 40;
export const gameListParams = (
	page,
	searchQuery,
	platforms,
	filter
) => ({
	page,
	page_size: PAGE_SIZE,
	search: searchQuery,
	ordering: filter,
	platforms:
		platforms.length === 0 ? undefined : platforms.join(','),
});

export const gameListFromQuery = (query) => {
	return {
		searchQuery: query.search,
		filter: query.ordering,
		platforms: query.platforms ? query.platforms?.split(',') : [],
	};
};

export function fetcher(url, params) {
	return axiosInstance
		.get(url, { params })
		.then((res) => res.data)
		.catch(() => undefined);
}
