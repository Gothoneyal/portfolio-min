import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const SignUpSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Sign Up Successful');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Sign In Successful');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Google Sign-In Successful');
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePhoneSignIn = async () => {
    const phoneNumber = prompt('Enter your phone number');
    const appVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      const verificationCode = prompt('Enter the verification code sent to your phone');
      await confirmationResult.confirm(verificationCode);
      alert('Phone Sign-In Successful');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleAuth}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handlePhoneSignIn}>Sign In with Phone</button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default SignUpSignIn;
