import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { exitLogin } from '../redux/authenticationSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  // recuperation du token
  const token = useSelector((state) => state.authentication.token)
  // recuperation utilisateur
  const use = useSelector((state) => state.authentication.user);



  // console.log(userData);
  const dispatch = useDispatch()
  const nav = useNavigate()

  // fonction qui me permet la deconnexion avec une redirection vers la page acceuil
  const signOut = () => {
    dispatch(exitLogin())
    nav('/')
    console.log('deconnexion');
  }

  const interfaceUse = () => {
    nav('/user')
  }

  return (
    <header>
      <nav className="nav_bar">
        <NavLink to="/">
          <img id="logo" src={Logo} alt="money bank logo" />
          <h1>Argent Bank</h1>
        </NavLink>
        {token ? (
          <ul>
            {/* <li><i className="fa fa-user-circle"></i></li> */}
            <li><i className="fa fa-user-circle" onClick={interfaceUse}></i>{use?.userName}</li>
            <li onClick={signOut}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </li>
            <li>Sign out</li>
          </ul>
        ) : (
          <NavLink to="/login">
            <ul>
              <li>
                <i className="fa fa-user-circle"></i>
              </li>
              <li>Sign In</li>
            </ul>
          </NavLink>
        )}
      </nav>
    </header>
  );
};
export default Header;
