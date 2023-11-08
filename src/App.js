import logo from './logo.svg';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="fixed-to-top">
        <p>
          Welcome to Mary Ellen and Matt's wedding website!
        </p>
        <p>
          We have provided all our information below - if you have further questions, please send me a text at (425) 268-4119.
        </p>
        <p>
          <span className='bold-word'> RSVP </span>
        </p>
        <a href='https://forms.gle/6XRd2AD5ZWynJErCA' target='_blank'>
            Click here to RSVP!
        </a>
        <p>
          Please RSVP by <span className='bold-word'> April 20th, 2024 </span>, so we can prepare accordingly for seating, food, and drinks.
        </p>
        <p>
          <span className='bold-word'> Where </span>
        </p>
        <p>
          The Barn on Wild Rose Prairie<br/>
          21920 N Felspar Road<br/>
          Deer Park, WA 99006<br/>
          <a href='https://maps.app.goo.gl/uXDUMzZSZwzPRnfh9' target='_blank'>
            The Barn on Wild Rose Prairie
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
