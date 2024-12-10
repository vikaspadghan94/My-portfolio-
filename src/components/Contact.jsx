import { motion } from "framer-motion"
import "./contact.css"
import PhoneIcon from "./Phoneicon"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';



const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(' ', 'template_i5yf915', formRef.current, {
        publicKey: 'GzugADrhgOZlLRhEI',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          setSuccess(true)
          formRef.current.reset(); // Reset the form fields
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
        },
      );
  };

  return (
    <motion.div className='contact'>
      <motion.div className="textContainer" whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}>
        <motion.h1 variants={variants}>Lets work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>padghan826@gmail.com</span>
        </motion.div>
        <div className="item">
          <h2>Address:</h2>
          <span>Pune , Maharashtra , 411001</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+91 123456789</span>
        </div>
      </motion.div>

      <div className="formContainer">
        <motion.div className="phonesvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
          <PhoneIcon />
        </motion.div>
        <motion.form ref={formRef} onSubmit={sendEmail} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
          {/* <h1 className="pt-5 my-5 text-center text-4xl text-neutral-300">Get in Touch</h1> */}
          <input type="text" required placeholder="Enter your Name here" name="name"/>
          <input type="email" required placeholder="Enter your Email here" name="email"/>
          <textarea rows={8} placeholder="Message Here!" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact


