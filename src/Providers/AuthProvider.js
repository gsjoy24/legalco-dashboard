'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	sendEmailVerification
} from 'firebase/auth';
import { app } from '@/Firebase/Firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// create a new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in user with google
	const continueWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// sign in user with github
	const continueWithGithub = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};

	// login user with email and password
	const loginWithEmail = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// logout the user
	const logOutUser = () => {
		return signOut(auth);
	};

	// update the user profile with name and photo
	const updateUserName = (name) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name
		});
	};

	// sent reset password email.
	const resetPass = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	// verify user email address
	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};

	// observing the user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		continueWithGoogle,
		continueWithGithub,
		updateUserName,
		loginWithEmail,
		logOutUser,
		resetPass,
		verifyEmail
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
