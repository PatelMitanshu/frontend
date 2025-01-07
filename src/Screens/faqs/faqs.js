import React from 'react'
import './faqs.css'
import vector from './Vector 355.svg'
function Faqs() {
  return (
    <>
    <div className='main_container' >
       <div className='faq_left_container'>
        <div className='title_faq' ><p>
        Frequently</p><p>asked questions</p></div>
            <div className='list_faqs'>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button>+</button>
                </div>
                <div className='faq-answer' >
                    <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                </div>
                </div>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button>+</button>
                </div>
                <div className='faq-answer' >
                    <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                </div>
                </div>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button>+</button>
                </div>
                <div className='faq-answer' >
                    <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                </div>
                </div>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button>+</button>
                </div>
                <div className='faq-answer' >
                    <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                </div>
                </div>
             
            </div>
       </div>

       <div className='right_container' >
            <div className='right_container_1' >
                  <img  className='faq_image' src={vector} alt='' />
                  <p   className='right_container_1_p1' >Do you have more questions?</p>
                  <p   className='right_container_1_p2' >End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                  <form className='form' >
                  <input type='text' placeholder='Enter your question' />
                  </form>
            </div>
       </div>
    </div>
    </>
  )
}

export default Faqs