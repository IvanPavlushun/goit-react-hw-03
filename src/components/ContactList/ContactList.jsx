
import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import { resetContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);  
  const filter = useSelector(state => state.filter.name);
  const dispatch = useDispatch();

  const filteredData = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  const handleResetContacts = () => {
    dispatch(resetContacts());
  };

  return (
      <div>
          <ul className={s.list}>
              {filteredData.map(({ id, name, number }) => (
                 <Contact key={id} id={id}name={name} number={number}/>
              ))}
          </ul>
          <div className={s.resetButtonContainer}>
  <button onClick={handleResetContacts} className={s.resetButton}>
    Reset Contacts
  </button>
</div>
    </div>
  )
}

export default ContactList;