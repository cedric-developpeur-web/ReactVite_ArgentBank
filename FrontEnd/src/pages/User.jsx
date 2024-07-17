import { useEffect } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import EditName from '../component/editName/EditName';
// import redux 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isUser } from '../component/redux/authenticationSlice';


const User = () => {
  // recuperation du token
  const token = useSelector((state) => state.authentication.token);
  // recuperation authentication du profile
  const connect = useSelector((state) => state.authentication.connected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // utilisateur non connecter ou pas token redirection page acceuil
  useEffect(() => {
    if (!connect || !token) {
      navigate('/')
    }
    // fonction qui recupere les donnée utilisateur et qui recuperer le token
    async function dataUser() {
      const reponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // si la connection et reusit je vient executer le state redux isUser pour le mettre a jour
      if (reponse.ok) {
        const data = await reponse.json();
        dispatch(isUser(data.body));
      } else {
        console.log('error');
      }
    }
    dataUser()
  }, [token, connect, navigate, dispatch])

  return (
    <>
      <Header />
      <EditName />
      <Footer />
    </>
  );
};

export default User;