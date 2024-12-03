import React,{useState} from 'react'


function Navbar(){
    
    const [show, setshow] = useState()
    function click(){
    setshow(!show)

    }
    return(
        <>
          <nav className="header">
            <div className="logo">
                <h4>logo</h4>
            </div>
            <nav className={show ? "phone" : "web"}>
           
                <ul>
                    <li className="active"><a  href="#">home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">service</a></li>
                    <li><a href="#">contect</a></li>
                </ul >
            </nav>
            <div className="icon" >
            <i class="fa-solid fa-list-check" onClick={click}></i> 
            </div>
           
          </nav>
         
        </>
    )
}
export default Navbar
