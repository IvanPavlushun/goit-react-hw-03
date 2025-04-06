
import s from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export const Contact = ({name, number, onDelete}) => {
  return (
      <div className={s.box}>
          <ul className={s.list}>
              <li className={s.listItem}><FaUser/>{name}</li>
              <li className={s.listItem}><FaPhoneAlt/>{number}</li>
          </ul>
          <button className={s.button} onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Contact;
