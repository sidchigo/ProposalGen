import { auth } from "@/lib/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AuthCheck({ children, fallback }) {
	const [user] = useAuthState(auth);

	return user ? children : fallback;
}
