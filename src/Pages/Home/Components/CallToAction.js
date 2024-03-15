import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modals from './Modals';

const CallToAction = () => {
  const [modal, setModal] = useState(false);

  const handelClick = () => {
    setModal(!modal);
  };
  return (
 <>
  <section className="call-to-action">
    <h2>Hurry up Book your Tickets!</h2>

    <button onClick={handelClick}>
      Know More!
      </button>
  </section>
  {modal && <Modals handelClick={handelClick} />}

 </>
    )
}

export default CallToAction