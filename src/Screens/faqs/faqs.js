import React,{useState} from 'react'
import './faqs.css'
import vector from './Vector 355.svg'
import Navigation from '../Navigations/navigation.js'
import Footer  from '../footer/footer.js'
import axios from 'axios'

function Faqs() {
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [answer, setAnswer] = useState('')
    const [email, setEmail] = React.useState('')
    const [question, setQuestion] = React.useState('')

    const visibleHandler1 = () => {
        setVisible1(!visible1)
    }
    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/user/faq', {
            question: question
        }).then((res) => {
            console.log(res)
        }
        ).catch((err) => {
            console.log(err)
    })
    }

  return (
    <>
    <Navigation />
    <div className='main_container' >
       <div className='faq_left_container'>
        <div className='title_faq' ><p>
        Frequently</p><p>asked questions</p></div>
            <div className='list_faqs'>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button onClick={setVisible1}>+</button>
                </div>
                <div className='faq-answer' >
                    {visible1 ? <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p> : null}
                </div>
                </div>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button onClick={setVisible2} >+</button>
                </div>
                <div className='faq-answer' >
                    {visible2 ? <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p> : null}
                </div>
                </div>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button  onClick={setVisible3} >+</button>
                </div>
                <div className='faq-answer' >
              {visible3 ? <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p> : null}
                </div>
                </div>
                <div className='faq'>
                <div className='faq-question' > 
                    <p>Six curiosity day assurance bed necessary?</p>
                    <button onClick={setVisible4} >+</button>
                </div>
                <div className='faq-answer' >
                   {visible4 ? <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p> : null}
                </div>
                </div>
             
            </div>
       </div>

       <div className='right_container' >
            <div className='right_container_1' >
                  <img  className='faq_image' src={vector} alt='' />
                  <p   className='right_container_1_p1' >Do you have more questions?</p>
                  <p   className='right_container_1_p2' >End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                  <form  onSubmit={submit} className='form' >
                  <input type='text' placeholder='Enter your question'/>
                  <button type='submit' >Submit</button>
                  </form>
            </div>
       </div>
    </div>
    <Footer />
    </>
  )
}

export default Faqs