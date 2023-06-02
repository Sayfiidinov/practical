import logo from './fon_rasim.jpg';
import './App.css';

function App() {
  return (
    <div >
      <header className="my-header">
        <div className='my-menu'>
          <h1><span><a href="#">K.Griffith</a></span></h1>

          <ul>
            <li><a href="#">APPEARANCES</a></li>
            <li><a href="#">BOOKS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
            
          </ul>
          
          </div>
           <hr />
         <div className='about'>
           <div className='about-name'>
          <h1>Kayla GRiffith</h1>
          </div>
           <div className='about-job'>
          <h3>Award Wining Aouthor</h3>
          </div>
          


          </div>
          
         
           
      </header>


      

      <section className="home-parent">
      
        <div className="home-child">
             <div id="picture">
              <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_298,h_329,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt="Kayla Driffith" />
   
           </div>
      
          <div className="hometext">

              <div className='text'>
                <h4>New Release</h4>
              <h3>The Swan Isle</h3>
              <h3>(2035)</h3>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <h3>Order Now</h3>
              </div>
                
             
             <ul>
              <li><a href="#">Amazon</a></li>
              <li><a href="#">Google</a></li>
              <li><a href="#">iBook</a></li>
             </ul>
            <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_481,h_679,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt="" />
          </div>
        </div>
      </section>

      <footer>
        <div className='footerText'> 
        <p>&copy;2035 K.Griffith. Powered and secured by Wix</p>
        </div>
      </footer>

      </div>
      
  );
}

export default App;
