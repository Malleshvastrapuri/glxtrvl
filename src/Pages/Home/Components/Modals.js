import { FaTimes } from "react-icons/fa"


const Modals = ({handelClick}) => { /*  model undeyie i can remove*/
  return (
    <div className="overlay">
        <div className="model">
        <div className="cross">
        <FaTimes style={{ color: "white" }} size={25} onClick={handelClick}/>
       </div>

            <h2>Lorem ipsum doller site lorem ipsum doller site lorem ipsum doller site
            Lorem ipsum 
            </h2>
        </div>
        </div>
  )
}

export default Modals;