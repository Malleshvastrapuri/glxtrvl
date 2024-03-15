import React, { useState } from "react";
const faq = () => {

    const data = [
        {
            question: "Question 1?",
            answers:
            "lorem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,"
        },
        {
            question: "Question 2?",
            answers:
            "lorem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,"
        },
        {
            question: "Question 3?",
            answers:
            "lorem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,"
        },
        {
            question: "Question 4?",
            answers:
            "lorem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,"

        },
        {
            question: "Question 5?",
            answers:
            "lorem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,orem ipsum doller site amit consecteture,"
        }
    ];

const [selected, setSelected] = useState(null);

const handleSelect = (i) => {
    if(selected ===i){
      return setSelected(null)
    }
  setSelected(i);
};

  return (
    <>
    <h1 className='heading'>FAQs</h1>

        <section className='faq'>
            <div className='item'>
                {data.map((item, i) => {
                    return(
                        <div className='wrapper' key={i} >
                           <div className='question' onClick={() => handleSelect(i)}> 
                                 <h3>{item.question}</h3>
                               <img src={require("../../../assets/up-arrow.png")} alt="" className={selected===i ? "reverse" : ""} />
                           </div>


                            <div className={selected===i ? "answers show" : "answers"} >
                                <p>{item.answers}</p>
                            </div>
                        
                        </div>
                    );
                })}
             
            </div>
        </section>
    </>
   
  );
};

export default faq