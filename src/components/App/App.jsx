import React from 'react';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        header
      </header>

      <div className="content">
        <div className="img" />
        <div className="selling-points">
          <div className="point">

            <h1>Installation</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium
              perferendis laborum, quae soluta rem itaque hic. Ex eligendi, consequatur mollitia
              nihil enim consequuntur a repellat sunt obcaecati voluptatem quasi.
            </p>
          </div>
          <div className="point">
            <h1>Monthly Inspections</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium
              perferendis laborum, quae soluta rem itaque hic. Ex eligendi, consequatur mollitia
              nihil enim consequuntur a repellat sunt obcaecati voluptatem quasi.
            </p>
          </div>
          <div className="point">
            <h1>24 hour Customer Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium
              perferendis laborum, quae soluta rem itaque hic. Ex eligendi, consequatur mollitia
              nihil enim consequuntur a repellat sunt obcaecati voluptatem quasi.
            </p>
          </div>
        </div>
      </div>
      {console.log('hi')}
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
