import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';



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

    return(
        <>
            {/* <div className="control--container">
                <video src="/videos/comm.mp4" autoPlay loop muted></video>
            </div> */}
            <div className="control--content">
                <p>here</p>
            </div>
            <div>
                <p>Temperatur: {data.temp}</p>
                <p>Humidity: {data.humidity}</p>
                <button onClick={() => exampleSend('Hello, Server!')}>Send Message</button>
               
            </div>
        </>

    )
}