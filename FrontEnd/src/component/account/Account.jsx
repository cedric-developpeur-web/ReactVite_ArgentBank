import React from 'react';
import ButtonAccount from '../btnAccount/ButtonAccount';

const Account = () => {
  return (
    <>
      <section className='account'>
        <div className='content'>
          <h2>Argent Bank Checking (x8349)</h2>
          <p className='prize'>$2,082.79</p>
          <p className='description'>Available Balance</p>
        </div>
        <ButtonAccount />
      </section>
      <section className='account'>
        <div className='content'>
          <h2>Argent Bank Savings (x6712)</h2>
          <p className='prize'>$10,928.42</p>
          <p className='description'>Available Balance</p>
        </div>
        <ButtonAccount />
      </section>
      <section className='account'>
        <div className='content'>
          <h2>Argent Bank Credit Card (x8349)</h2>
          <p className='prize'>$184.30</p>
          <p className='description'>Curent Balance</p>
        </div>
        <ButtonAccount />
      </section>
    </>
  );
};

export default Account;