import React from 'react';
// import Login from './Login';
import { useParams } from 'react-router-dom';



function Dashboard(){
    const {fullName} = useParams();
    return(
        

        <main>
          
          <div className="sideMenu">
            {/* user */}
            <div className='user'>
                <div className='avatar'></div>
                <span className='usersName' >{fullName}</span>
            </div>

            {/* quick actions */}
            <div className='quickActions'>
                 <div className='action'>
                    <div className='icon'>
                        <img className='icon' src='/search.png' />
                    </div>
                    <span className='usersName'>Quick actions</span>
                </div>
                <div className='user'>
                    <div className='action'>
                        <img className='icon' src='/box.png' />
                    </div>
                    <span className='usersName'>Insight box</span>
                </div>

            </div>
           



            
          </div>

          <div className="contentSide">

          </div>
          
        </main>


    )
}

export default Dashboard;