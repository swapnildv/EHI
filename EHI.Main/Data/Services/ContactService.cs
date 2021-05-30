using System;
using System.Collections.Generic;
using System.Linq;

namespace EHI.Data
{
    public class ContactService : IContactService
    {
        public void AddContact(Contact contact)
        {
            if (contact.Id == Guid.Empty)
                contact.Id = Guid.NewGuid();
            Data.Contacts.Add(contact);
        }

        public void DeleteContact(Guid id)
        {
            var contact = Data.Contacts.FirstOrDefault(a => a.Id == id);
            if (contact != null)
            {
                Data.Contacts.Remove(contact);
            }
        }

        public List<Contact> getAllContacts()
        {
            return Data.Contacts.ToList();
        }

        public Contact GetContactById(Guid id) => Data.Contacts.FirstOrDefault(n => n.Id == id);

        public void UpdateContact(Guid id, Contact contact)
        {
            var oldContact = Data.Contacts.FirstOrDefault(a => a.Id == id);
            if (oldContact != null)
            {
                oldContact.FirstName = contact.FirstName;
                oldContact.LastName = contact.LastName;
                oldContact.Email = contact.Email;
                oldContact.PhoneNumber = contact.PhoneNumber;
                oldContact.Status = contact.Status;
            }
        }
    }
}