import {
	collection,
	onSnapshot,
	query,
	getDocs,
	doc,
	getDoc,
	updateDoc,
	orderBy,
	Timestamp,
	runTransaction,
	where,
	addDoc,
	getFirestore,
} from "firebase/firestore";
import { db } from "./clientApp";

export const getEvents = async () => {
	const eventsRef = query(collection(db, "events"));
	const q = query(eventsRef, orderBy("name", "asc"));
	const events = [];
	onSnapshot(q, (snapshot) => {
		snapshot.forEach((doc) => {
			const data = doc.data();
			events.push(data.name);
		});
	});
	return events;
};
