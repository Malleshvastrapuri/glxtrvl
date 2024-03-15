import React from 'react'

const About = ({heading}) => {
  return (
 <>

   <h1 className="heading">{heading}</h1>
   <section className="about">
        <img src={require("../../../assets/aboutImg.jpg")} alt=""/>
        <div className="content">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque delectus doler culpa resusandae nihil placeat
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque delectus doler culpa resusandae nihil placeat
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque delectus doler culpa resusandae nihil placeat
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque delectus doler culpa resusandae nihil placeat
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque delectus doler culpa resusandae nihil placeat</p>
        </div>
    </section>

 </>
  )
}

export default About