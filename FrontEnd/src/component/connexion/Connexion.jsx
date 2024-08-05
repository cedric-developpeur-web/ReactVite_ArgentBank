import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, goodLogin, badLogin, } from '../redux/authenticationSlice';

const Connexion = () => {

  // etat donnee utilisateur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("false");
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fonction mise a jour email
  const updateEmail = (e) => {
    setEmail(e.target.value);
  }
  // fonction mise a jour password
  const updatePassword = (e) => {
    setPassword(e.target.value);
  }
  // fontion qui recupere les donnees des champs avec recupereation du token
  async function tokenAuth(e) {
    e.preventDefault();
    dispatch(login());

    const reponse = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (reponse.ok) {
      console.log('connecter');
      const data = await reponse.json();
      dispatch(goodLogin(data.body.token));
      navigate('/User')
    } else {
      dispatch(badLogin());
      setError('Login failed, please check your credentials')
    }
  }

  return (
    <main id='background_dark'>
      <section className='content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h2>Sign In</h2>
        <form onSubmit={tokenAuth}>
          <div className='input_wrapper'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' name='username' value={email} onChange={updateEmail} />
          </div>
          <div className='input_wrapper'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={password} onChange={updatePassword} />
          </div>
          <span id='error'>{error}</span>
          <div className='input_remember'>
            <input type="checkbox" name="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type='submit'>Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default Connexion;