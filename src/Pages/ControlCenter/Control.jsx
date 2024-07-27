import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll'


const socket = io('http://localhost:8000'); 

export default function ControlCenter(){
    
    const [data, setData] = useState({"temp":10,"humidity":10}); 
    useEffect(() => {
        // Listen for updates on the 'example_topic'
        socket.on('temp&&humidity', (data) => {
          setData(JSON.parse(data)); // Update the state with the received data
        });
    
        // Clean up the effect by removing the event listener when the component unmounts
        return () => {
          socket.off('temp&&humidity');
        };
      }, []);
      const exampleSend = (message) => {
        // Send a message through the socket to the 'example_topic'
        socket.emit('example_topic', message);
      };


      //arrow handle start

      const roverUp=()=>{
        socket.emit('send-direction','forward');
      }
      const roverDown=()=>{
        socket.emit('send-direction','backward');
      }
      const roverLeft=()=>{
        socket.emit('send-direction','left');
      }
      const roverRight=()=>{
        socket.emit('send-direction','right');
      }
      const roverStop=()=>{
        socket.emit('send-direction','stop');
      }
      //arrow handle end


    return(
        <>
            <div className="control--container">
                <video src="/videos/comm.mp4" autoPlay loop muted></video>
            
              <div className="control--main--container">
                <div className="data-display-box">
                  <h>Live Data On Mars:</h>
                  <p>Temperatur: {data.temp}</p>
                  <p>Humidity: {data.humidity}</p>
                </div>
                <div className="control--robotics--container">
        
                  <p style={{color:'#8e93d4',fontSize:'25px'}}>Control Options</p>
                  <Link 
                  className="rover"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Rover"
                   >
                    <i style={{color:'#ffffff', fontSize: '30px',marginRight:'50px',marginLeft:'20px'}} class="fa-solid fa-car"></i>
                    <span style={{color:'#849dab',fontSize:'30px',fontFamily:'fantasy'}}>
                      Rover
                    </span>
                  </Link>

                  <Link className="arm"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Rover"
                  
                  >
                    <i style={{color:'#ffffff', fontSize: '30px',marginRight:'50px'}} class="fa-solid fa-dharmachakra"></i>
                    <span style={{color:'#849dab',fontSize:'30px',fontFamily:'fantasy'}}>
                      Arm
                    </span>
                  </Link>
                  
                </div>
              </div>
            </div>

            <div id="Rover">
              <p style={{color:'#ffffff'}}>Rover</p>
              
              <div className="arrow--container">
                <div className='rover--firstrow'>
                  <a onClick={roverUp()} className="arrow">⬆️</a>
                </div>
                <div>
                  <a onClick={roverLeft()} className="arrow">⬅️</a>
                  <a onClick={roverStop()} className="circle">🔵</a>
                  <a onClick={roverRight()} className="arrow">➡️</a>
                </div>
                <div className='rover--thirdrow'>
                  <a onClick={roverDown()} className="arrow">⬇️</a>
                </div>
              </div>
               
            </div>
            {/* 
            <div>
                
                <button onClick={() => exampleSend('Hello, Server!')}>Send Message</button>
               
            </div> */}
        </>

    )
}