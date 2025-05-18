import {
	GoogleAuthProvider,
	signInWithPhoneNumber,
	onAuthStateChanged as _onAuthStateChanged,
	getAuth,
	RecaptchaVerifier,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase/clientApp";

const appVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
	size: "invisible",
});

export function onAuthStateChanged(cb) {
	return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
	try {
		const confirmationResult = await signInWithPhoneNumber(
			auth,
			phoneNumber,
			appVerifier
		);
	} catch (error) {
		console.error("Error sending SMS", error);
	}
}

export async function verifyOTP(code) {
	try {
		await confirmationResult.confirm(code);
	} catch (error) {
		console.error("Verification failed", error);
	}
}

export async function signOut() {
	try {
		return auth.signOut();
	} catch (error) {
		console.error("Error signing out with Google", error);
	}
}
