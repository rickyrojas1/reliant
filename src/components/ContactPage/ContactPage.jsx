import React, { useState } from 'react';

const ContactPage = () => {
  const [counter, setCounter] = useState(1);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      CONTACT PAGE
      <button type="button" onClick={updateCounter}>Click to add one</button>
      {counter}
    </div>
  );
};

export default ContactPage;
