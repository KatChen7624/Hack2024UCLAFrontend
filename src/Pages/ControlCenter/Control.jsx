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
                  <div><h>Live Data On Mars:</h></div>
                  <br/>
                  <p>Temperatur: {data.temp}</p>
                  <p>Humidity: {data.humidity}</p>
                </div>
                <div className="control--robotics--container">
        
                  <p style={{color:'#e4a3c5',fontSize:'50px',fontFamily: "monospace"}}>Control Options</p>
                  <Link 
                  className="rover"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Rover"
                   >
                    <div>
                      <i style={{color:'#ffffff', fontSize: '30px',marginRight:'50px'}} class="fa-solid fa-car"></i>
                      <span style={{color:'#849dab',fontSize:'30px',fontFamily:'fantasy'}}>
                        Rover
                      </span>
                    </div>
                    
                    <div>
                      <i style={{color:'#ffffff', fontSize: '30px',marginRight:'50px'}} class="fa-solid fa-dharmachakra"></i>
                      <span style={{color:'#849dab',fontSize:'30px',fontFamily:'fantasy'}}>
                        Arm
                      </span>
                    </div>
                    
                  </Link>


                   
                  
                </div>
              </div>
            </div>

            <div id="Rover">
              <p style={{color:'#ffffff'}}>Rover</p>
              
              <div className="arrow--container">
                <div className='rover--firstrow'>
                  <a onClick={roverUp} className="arrow">⬆️</a>
                </div>
                <div>
                  <a onClick={roverLeft} className="arrow">⬅️</a>
                  <a onClick={roverStop} className="circle">🔵</a>
                  <a onClick={roverRight} className="arrow">➡️</a>
                </div>
                <div className='rover--thirdrow'>
                  <a onClick={roverDown} className="arrow">⬇️</a>
                </div>
              </div>

              <div className="arrow--container">
                <div className='rover--firstrow'>
                  <a  className="arm--arrow">⮝</a>
                </div>
                <div>
                  <a  className="arm--arrow">⯇</a>
                  <a className="circle">🟢</a>
                  <a  className="arm--arrow">⯈</a>
                </div>
                <div className='rover--thirdrow'>
                  <a  className="arm--arrow">⮟</a>
                </div>
              </div>
            </div>

            <div>
              <img src="http://10.0.0.73" alt="Cam 1"/>
            </div>
            {/* 
            <div>
                
                <button onClick={() => exampleSend('Hello, Server!')}>Send Message</button>
               
            </div> */}
        </>

    )
}