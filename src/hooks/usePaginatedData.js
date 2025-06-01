import { useState, useRef, useEffect, useCallback } from "react";
import {
	collection,
	query,
	orderBy,
	startAfter,
	limit,
	getCountFromServer,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "@/lib/firebase/clientApp";

const PAGE_SIZE = 5;

const useFetchData = (collectionRef, cursor, per_page) => {
	const constraints = [orderBy("timestamp", "desc"), limit(per_page)];
	if (cursor) constraints.push(startAfter(cursor));
	const collectionQuery = query(collectionRef, ...constraints);

	return useCollectionData(collectionQuery, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});
};

/**
 * Custom hook to manage paginated data.
 *
 * This hook provides functionality to fetch and manage paginated data,
 * including metadata such as total count, total pages, current page, and
 * items per page. It also handles pagination state and provides methods
 * to navigate between pages.
 *
 * @returns An object containing:
 * - `meta`: Metadata about the pagination state, including total count, total pages, current page, and items per page.
 * - `data`: The current list of data for the current page.
 * - `error`: Any error data.
 * - `loading`: A boolean indicating whether the data are currently being loaded.
 * - `onPageChanged`: A callback function to change the current page.
 * - `canGoBack`: A boolean indicating whether the user can navigate to the previous page.
 * - `canGoNext`: A boolean indicating whether the user can navigate to the next page.
 */
const usePaginatedData = (collectionName) => {
	const collectionRef = collection(db, collectionName);
	const [meta, setMeta] = useState({
		total: 0,
		total_pages: 0,
		current_page: 1,
		per_page: PAGE_SIZE,
	});
	const cursors = useRef(new Map());
	const [data = [], loading, error, snapshot] = useFetchData(
		collectionRef,
		cursors.current.get(meta.current_page),
		meta.per_page
	);

	useEffect(() => {
		getCountFromServer(query(collectionRef)).then((result) => {
			const count = result.data().count;
			setMeta((meta) => ({
				...meta,
				total: count,
				total_pages: Math.ceil(count / meta.per_page),
			}));
		});
	}, []);

	const onPageChanged = useCallback(
		(nextPage) => {
			setMeta((meta) => {
				cursors.current.set(
					meta.current_page + 1,
					snapshot?.docs[snapshot.docs.length - 1] ?? {}
				);
				return { ...meta, current_page: nextPage };
			});
		},
		[snapshot]
	);

	const canGoBack = meta.current_page > 1;
	const canGoNext = meta.current_page < meta.total_pages;

	return { meta, data, loading, error, onPageChanged, canGoBack, canGoNext };
};

export { usePaginatedData };
