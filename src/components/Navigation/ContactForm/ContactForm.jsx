import Button from "../../Button/Button";
import styles from './ContactForm.module.css'
import {MdDisplaySettings, MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import {useState} from 'react'

const ContactForm = () => {
const [name,setname] = useState("nik");
const [email,setemail] = useState("d@gmail.com");
const [ text,settext] = useState("rrr");


  const onSubmit = (event)=>{
    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
        <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px' />}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize='24px' />}/>
        </div>
        
        <Button  isOutLine={true} text="VIA SUPPORT CHAT" icon={<IoIosMail fontSize='24px' />}/>

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"  />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
          <Button text="SUBMIT BUTTON"  />
          </div>
        </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/images/Service 24_7-pana 1.svg" alt="contact image" />
        </div>
        <div>
          {name + "  " + email + "  " + text}
        </div>
    </section>
  )
}

export default ContactForm;