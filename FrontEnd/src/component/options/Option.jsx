import React from 'react';
import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';
const Option = () => {
  return (
    <section id='features'>
      <div>
        <img src={iconChat} alt="logo which represents an exchange by message" />
        <h3>You are our #1 priority</h3>
        <p> Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.</p>
      </div>
      <div>
        <img src={iconMoney} alt="dollar bill logo" />
        <h3>More savings mean higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div>
        <img src={iconSecurity} alt="logo indicating secure data" />
        <h3>Security you can trust</h3>
        <p>We use top of the line encryption to make sure your data and money
          is always safe.</p>
      </div>
    </section>
  );
};
export default Option;