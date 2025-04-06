
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"

export const ContactList = ({contacts, onDelete}) => {
  return (
      <div>
          <ul className={s.list}>
              {contacts.map(({ id, name, number }) => (
                 <Contact key={id} name={name} number={number} onDelete={() => onDelete(id)}/>
              ))}
          </ul>
    </div>
  )
}

export default ContactList;