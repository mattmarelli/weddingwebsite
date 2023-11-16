import logo from './logo.svg';
import './App.css';
import './styles.css';
import photo_one from './photos/Picture1.jpg'
import photo_three from './photos/Picture3.jpg'
import photo_four from './photos/Picture4.jpg'
import photo_five from './photos/Picture5.jpg'
import photo_six from './photos/Picture6.jpg'
import photo_seven from './photos/Picture7.jpg'
import photo_eight from './photos/Picture8.jpg'
import photo_nine from './photos/Picture9.jpg'
import photo_ten from './photos/Picture10.jpg'
import photo_eleven from './photos/Picture11.jpg'
import photo_twelve from './photos/Picture12.jpg'
import photo_thirteen from './photos/Picture13.jpg'
import photo_fourteen from './photos/Picture14.jpg'
import photo_fifteen from './photos/Picture15.jpg'
import photo_sixteen from './photos/Picture16.jpg'
import photo_seventeen from './photos/Picture17.jpg'
import photo_nineteen from './photos/Picture19.jpg'
import photo_twenty_three from './photos/Picture23.jpg'
import photo_twenty_four from './photos/Picture24.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <p className='bold-word large-font no-margin-top'>
          Welcome to Mary Ellen and Matt's wedding website!
        </p>
        <p>
          We have provided all our information below - if you have further questions,<br/>
          please send us a text at (425) 268 - 4119.
        </p>
        <p>
          <br/>
          <span className='bold-word'> RSVP </span><br/>
          <a href='https://forms.gle/6XRd2AD5ZWynJErCA' target='_blank'>
            Click here to RSVP!
          </a><br/>
          Please RSVP by <span className='bold-word'> April 20th, 2024 </span>, so we can prepare accordingly for seating, food, and drinks.
        </p>
        <p>
          <br/>
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
          <br/>
          <span className='bold-word'> When </span><br/>
          May 18th, 2024<br/>
          Ceremony starts at <span className='bold-word'> 4:00pm </span><br/>
          Reception ends at 9:00PM
        </p>
        <p>
          <br/>
          <span className='bold-word'> Attire </span><br/>
          Casual but nice please 😊<br/>
          Our wedding venue is outdoors with covered spaces. Please check the weather<br/>
          and dress accordingly. Don't forget a jacket, an umbrella, and girls if you decide to<br/>
          wear heels, wedges are recommended - lots of grass!
        </p>
        <p>
          <br/>
          <span className='bold-word'> Registry </span><br/>
          <a href='https://www.myregistry.com/wedding-registry/mary-ellen-martinsen-and-matthew-marelli-spokane-valley-wa/3959461' target='_blank'>
            M&M's Registry
          </a><br/>
          We already have everything we need but if you want to get us a gift, please check out our registry!
        </p>
        <p>
          <br/>
          <span className='bold-word'> Food & Drink </span><br/>
          This will be a completely GLUTEN FREE wedding!<br/>
          Food will be catered by a local Thai restaurant<br/>
          Our drinks will include water, soda, cider, seltzers, and wine - no hard alcohol.
        </p>
        <p>
          <br/>
          <span className='bold-word'> Hotel Recommendations</span><br/>
          After the reception (9:00PM) the newlyweds will be heading to downtown Spokane to celebrate!<br/>
          Our plan is to hang around the southside of Riverfront Park.<br/>

          If you want to join, we recommend the hotels below:<br/>
          The Montvale Hotel: <a href='https://montvalespokane.com/' target='_blank'>https://montvalespokane.com/</a><br/>
          Hotel Ruby: <a href='https://www.hotelrubyspokane.com/' target='_blank'>https://www.hotelrubyspokane.com/</a><br/>
          (Make sure you account for the parking policies at these hotels.)<br/>
          <br/>
          If you don't plan to go out after the wedding, we recommend staying somewhere<br/>
          outside of the city to save money.<br/>
          Suggestions include Airway Heights or Spokane Valley.<br/>
          Can't wait to celebrate with you all on our special day!
        </p>
        <p>
          <span className='bold-word'> Photos </span><br/>
          *Too lazy to fix mobile just zoom out on your phone or look on desktop        
        </p>
        <img src={photo_twenty_four} alt='photo twenty four'/>
        <img src={photo_twenty_three} alt='photo twenty three'/>
        <img src={photo_nineteen} alt='photo nineteen'/>
        <img src={photo_seventeen} alt='photo seventeen'/>
        <img src={photo_sixteen} alt='photo sixteen'/>
        <img src={photo_fifteen} alt='photo fifteen'/>
        <img src={photo_fourteen} alt='photo fourteen'/>
        <img src={photo_thirteen} alt='photo thirteen'/>
        <img src={photo_twelve} alt='photo twelve'/>
        <img src={photo_eleven} alt='photo eleven'/>
        <img src={photo_ten} alt='photo ten'/>
        <img src={photo_nine} alt='photo nine'/>
        <img src={photo_eight} alt='photo eight'/>
        <img src={photo_seven} alt='photo seven'/>
        <img src={photo_six} alt='photo six'/>
        <img src={photo_five} alt='photo five'/>
        <img src={photo_four} alt='photo four'/>
        <img src={photo_three} alt='photo three'/>
        <img src={photo_one} alt='photo one'/>
      </header>
    </div>
  );
}

export default App;
