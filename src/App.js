import logo from './logo.svg';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className="App scrollable">
      <header>
        <p className='bold-word'>
          Welcome to Mary Ellen and Matt's wedding website!
        </p>
        <p>
          We have provided all our information below - if you have further questions, please send us a text at (425) 268-4119.
        </p>
        <p>
          <span className='bold-word'> RSVP </span><br/>
          <a href='https://forms.gle/6XRd2AD5ZWynJErCA' target='_blank'>
            Click here to RSVP!
          </a><br/>
          Please RSVP by <span className='bold-word'> April 20th, 2024 </span>, so we can prepare accordingly for seating, food, and drinks.
        </p>
        <p>
          <span className='bold-word'> Where </span><br/>
          The Barn on Wild Rose Prairie<br/>
          21920 N Felspar Road<br/>
          Deer Park, WA 99006<br/>
          <a href='https://maps.app.goo.gl/uXDUMzZSZwzPRnfh9' target='_blank'>
            The Barn on Wild Rose Prairie
          </a><br/>
          (Please note there is a gravel road the last half mile to the venue)
        </p>
        <p>
          <span className='bold-word'> When </span><br/>
          May 18th, 2024<br/>
          Ceremony starts at TBD<br/>
          Reception ends at 9:00PM
        </p>
        <p>
          <span className='bold-word'> Attire </span><br/>
          Casual but nice please 😊<br/>
          Our wedding venue is outdoors with covered spaces. Please check the weather and dress accordingly.<br/>
          Don’t forget a jacket, an umbrella, and girls if you decide to wear heels, wedges are recommended – lots of grass!
        </p>
        <p>
          <span className='bold-word'> Registry </span><br/>
          <a href='https://www.myregistry.com/wedding-registry/mary-ellen-martinsen-and-matthew-marelli-spokane-valley-wa/3959461' target='_blank'>
            M&M's Registry
          </a><br/>
          We already have everything we need but if you want to get us a gift, please check out our registry!
        </p>
        <p>
          <span className='bold-word'> Food & Drink </span><br/>
          This will be a completely GLUTEN FREE wedding!<br/>
          Food will be catered by a local restaurant chain - <a href='https://thaibamboorestaurant.com/' target='_blank'>Thai Bamboo</a>.<br/>
          Our drinks will include water, soda, cider, seltzers, and wine - no hard alcohol.
        </p>
        <p>
          <span className='bold-word'> Hotel Recommendations</span><br/>
          After the reception (9:00PM) the newlyweds will be heading to downtown Spokane to celebrate!<br/>
          Our plan is to hang around the southside of Riverfront Park.<br/>

          If you want to join, we recommend the hotels below:<br/>
          The Montvale Hotel: <a href='https://montvalespokane.com/' target='_blank'>https://montvalespokane.com/</a><br/>
          Hotel Ruby: <a href='https://www.hotelrubyspokane.com/' target='_blank'>https://www.hotelrubyspokane.com/</a><br/>
          (Make sure you account for the parking policies at these hotels.)<br/>
          <br/>
          If you don't plan to go out after the wedding, we recommend staying somewhere outside of the city to save money<br/>
          suggestions include Airway Heights or Spokane Valley.<br/>
          Can't wait to celebrate with you all on our special day!
        </p>
      </header>
    </div>
  );
}

export default App;
