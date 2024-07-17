import React, { useEffect, useState } from 'react';
import Account from '../account/Account';
import { useDispatch, useSelector } from 'react-redux';
import { isUser } from '../redux/authenticationSlice';

const EditName = () => {

  // recuperation du token et donnée utilisateur
  const tok = useSelector((state) => state.authentication.token);
  const use = useSelector((state) => state.authentication.user);


  // state qui vient mettre a jour l'etat des champs du formulaire
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  const dispatch = useDispatch()

  // fonction qui vient mettre à jour les information userName firstName lastName si le token et les donnée utilisateur sont recuperer
  useEffect(() => {
    if (!tok || !use) {
      return
    }
    if (use) {
      setUserName(use.userName || '');
      setFirstName(use.firstName || '');
      setLastName(use.lastName || '');
    }
  }, [use, tok])

  // fonction qui me permet de modifier les champs du formulaire
  async function submitForm(e) {
    e.preventDefault();
    const formData = {
      userName,
      firstName,
      lastName,
    };
    const reponse = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tok}`,
      },
      body: JSON.stringify(formData),
    })
    if (reponse.ok) {
      const data = await reponse.json();
      console.log('valided', data);
      dispatch(isUser({ userName, firstName, lastName }));
    } else {
      console.log('fail');
    }
  };

  // state pour l'affichage du formualaire etat initiale a false
  const [visible, setVisible] = useState(false);

  // fonction qui met a jour le state pour l'affichage du formulaire
  const openChanged = () => {
    setVisible(!visible);
  }

  return (
    <main id='background'>
      <section>
        {/* <h1>Welcome back <br />!</h1> */}
        <h1>Welcome back <br />{use.firstName}&nbsp;{use.lastName}!</h1>
        <button onClick={openChanged}>Edit Name</button>
        <div>
          <form id='changed' style={{ display: visible ? 'block' : 'none' }} onSubmit={submitForm}>
            <label htmlFor="changedName">
              User Name:
            </label>
            <input type="text" id='changedName' name='changedName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label htmlFor="firstName">
              First Name:
            </label>
            <input type="text" id='firstName' name='firstName' value={firstName} />
            <label htmlFor="lastName">
              Last Name:
            </label>
            <input type="text" id='lastName' name='lastName' value={lastName} />
          </form>
        </div>
      </section>
      <Account />

    </main>
  );
};

export default EditName;