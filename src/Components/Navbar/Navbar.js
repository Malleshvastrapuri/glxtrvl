import { Link } from "react-router-dom";
import "./Navbar.css"; //create
import { FaTimes, FaBars } from "react-icons/fa" //create
import { useState } from "react";

const Navbar = () => {

    const[click, setClick] = useState(false)        //step 1 create state                 
       
    const handelClick =()=>{
        setClick(!click) // true anie untey only one time work avutundie  so !click anie estey repetead gaa run avutundie
    };

    const[color, setColor] = useState(false)

    const handleColor = () =>{
        if(window.scrollY >=200){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", handleColor)

    return (
        <nav className={color ? "color" : ""}>
            <div className="Logo">
                <h1>GLX TRVL</h1>
            </div>

            <div className={click ? "menu active" : "menu"}> 
                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/training">Training</Link>
                <Link to="/contact">Contact</Link>
            </div>


            <div className="hamburger" onClick={handelClick}>   
               {click ? (
                 <FaTimes style={{ color: "white" }} size={25} />
               ) :(
                <FaBars style={{ color: "white" }} size={25} />
              ) }
            </div>  

        </nav>
    )
}

export default Navbar