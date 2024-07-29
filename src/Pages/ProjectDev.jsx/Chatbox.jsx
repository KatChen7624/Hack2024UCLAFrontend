import React from 'react'
import Sidebar from './Sidebar'
function Chatbox() {
  return (
    <>
    <div className="chatbox--container">
        {/* chatbox container */}
        <Sidebar/>
        <div id="general">
            <div className="dev--section--picture1--container">
                {/* img1 */}
                <img src="/images/mechanics.jpg" alt="anna"/>
            </div>
            <div className="dev--section--picture2--container">
                {/* img2 */}
                <img src="/images/chatbox.jpg"/>
            </div>
        </div>
    </div>
    <div>
        placeholder
    </div>
    </>
  )
}

export default Chatbox
