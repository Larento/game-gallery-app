import { useState, useEffect, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';

import {
	PAGE_SIZE,
	fetcher,
	gameListParams,
	gameListURL,
} from '@/modules/fetcher';

export default function useGameList(searchQuery, platforms, filter) {
	const getKey = (pageIndex, previousPageData) => [
		gameListURL(),
		gameListParams(pageIndex + 1, searchQuery, platforms, filter),
	];

	const { data, error, isLoading, isValidating, size, setSize } =
		useSWRInfinite(getKey, ([url, params]) =>
			fetcher(url, params)
		);

	const [games, setGames] = useState([]);

	useEffect(() => {
		console.log('dfsds');
		setSize(1);
		setGames([]);
	}, [searchQuery, platforms, filter]);

	useEffect(() => {
		if (data?.at(-1)?.results === undefined) return;

		setGames((prevValue) => {
			return [...prevValue, ...data.at(-1).results];
		});
	}, [data]);

	function nextPage() {
		setSize((prevValue) => prevValue + 1);
	}

	const isFinished = size * PAGE_SIZE >= (data?.at(-1)?.count ?? 0);

	return {
		games,
		isLoading,
		isValidating,
		isFinished,
		error,
		currentPage: size,
		nextPage,
	};
}
