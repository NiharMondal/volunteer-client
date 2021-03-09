import React, { useContext } from 'react';
import firebase from 'firebase/app';
import "firebase/auth"
import firebaseConfig from './config';
import './Auth.css'
import gLogo from './Google_logo.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Auth = () => {
  const history = useHistory();
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(UserContext);
 
  //google login
  const handleGLogin = () => {
    const gProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(gProvider)
      .then((result) => {
        setUser({ ...user, email: result.user.email, name: result.user.displayName });
        history.replace(from)

  }).catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  return (
    <section className="auth_section">
      <div className="border border-success rounded p-5">
        <h3 className="text-center py-3">Login with</h3>
        <h5 onClick={handleGLogin} className="g_Login border border-primary px-3 px-2"><img className="g_logo" src={gLogo} alt="" /> Continue with Google</h5>
        <p>Don't have an account? <span>Create an account</span></p>
      </div>
    </section>
  );
};

export default Auth;