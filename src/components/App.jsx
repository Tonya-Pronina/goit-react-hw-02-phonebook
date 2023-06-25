import React from "react"
import ContactForm from "./ContactForm/ContactForm"
import { nanoid } from 'nanoid';
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "components/App.module.css";



export default class App extends React.Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
   ],
  filter: '',
 };

   handleAddContact = userData => {
        const newUser = { ...userData, id: nanoid() };

        this.setState(prevstate => {
        return { contacts: [...prevstate.contacts, newUser] };
      });
    };

    removeContact = id => {
        this.setState(prevstate => {
        return { contacts: prevstate.contacts.filter(user => user.id !== id) };
      });
    };

    handleFilter = ({ target: { value } }) => {
       this.setState({
         filter: value,
       });
    };


render() {
  const {contacts, name, number, filter} = this.state;
  const contactsArr = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
  

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm
      onAddContact={this.handleAddContact}
      contacts={contacts}
      />

      <h2 className={css.title}>Contacts</h2>

      <Filter
      handleFilter={this.handleFilter}
      filterValue={filter}
      />

      <ContactList
      contactsArr={contactsArr}
      removeContact={this.removeContact}
      />
     
    </div>
  )
}

};
