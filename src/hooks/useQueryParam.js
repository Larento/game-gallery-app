import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';

export default function useQueryParam(name, value) {
	const router = useRouter();
	const prevValue = useRef(value);

	useEffect(() => {
		if (value !== prevValue.current) {
			const url = { query: { ...router.query } };
			url.query[name] = value;

			router.push(url, undefined, {
				shallow: true,
			});

			prevValue.current = value;
		}
	}, [value]);
}
