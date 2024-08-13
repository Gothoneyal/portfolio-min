import React, { useState } from 'react';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import './SignupSignIn.css';

const SignUpSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isPhoneAuth, setIsPhoneAuth] = useState(false);

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

  const handlePhoneAuth = async () => {
    const appVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      window.confirmationResult = confirmationResult;
      alert('Verification code sent to your phone');
    } catch (error) {
      alert(error.message);
    }
  };

  const verifyCode = async () => {
    try {
      await window.confirmationResult.confirm(verificationCode);
      alert('Phone Sign-Up/Sign-In Successful');
    } catch (error) {
      alert('Incorrect verification code. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      {!isPhoneAuth ? (
        <>
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
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </>
      ) : (
        <>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
          <button onClick={handlePhoneAuth}>
            {isSignUp ? 'Sign Up with Phone' : 'Sign In with Phone'}
          </button>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Verification Code"
          />
          <button onClick={verifyCode}>Verify Code</button>
        </>
      )}
      <button
        className="switch-auth"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>
      <button
        className="switch-auth"
        onClick={() => setIsPhoneAuth(!isPhoneAuth)}
      >
        {isPhoneAuth ? 'Use Email/Password' : 'Use Phone Number'}
      </button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default SignUpSignIn;
