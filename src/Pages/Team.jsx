
import data from "../data/team.json";

export default function Team(){
    return (
    <>
        <div className="team-container">
           <img src='/images/Anna.jpg' alt='Anna' />
           <h>Meet Our Teams</h>
           <p>Disney Adults</p>
        </div>
            <section className="teams--section" >
            <div className="teams--section--container">
                {data?.teams?.map((item, index) => (
                    <div key={index} className="teams--section--card">
                        <img src={item.src} alt="team"/>
                        {/* <div className="teams--section--img">
                            <img src={item.src} alt="team" />
                        </div> */}
                        <div className="teams--section--card--content">
                            <h3 className="teams--section--title">{item.name}</h3>
                            <p className="teams--section--major">{item.major}</p>
                           
                        </div>
                    </div>
                ))}
            </div>
            </section>

        
    
    </>
    )
}