import React from 'react';


function Home() {
    return (
        <div className='mainWholeDiv'>
      <div className="maindiv">
        <div className='maintext'>
            <h1>New Era of Rank Tracking</h1>
            <p className='mainP'>Find out what's working and what's not to get more search traffic.
             Like an SEO consultant who can analyze millions of data.</p>
       
       <div className='trydemo'> 
            <div className='tryInput'>
                <input type='text' placeholder='Enter your Domain'/>
                <button className='demobtn'>Try Demo</button>
            </div>

            <div className='trial'>
                <p>No credit card required</p>
                <img src='/SVG.png'/>
                <p>14-days free trial</p>
            </div>

       </div>
        </div>
      </div>   
      <div className='imgDiv'>    
            <img src='/div.hero.png' className='mainimg'/>
    </div> 
</div>
    );
  }
  
  
  
  
  export default Home;
  