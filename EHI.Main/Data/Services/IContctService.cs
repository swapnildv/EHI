using System;
using System.Collections.Generic;

namespace EHI.Data
{
    public interface IContactService
    {
        List<Contact> getAllContacts();
        Contact GetContactById(Guid id);
        void UpdateContact(Guid id, Contact contact);
        void DeleteContact(Guid id);
        void AddContact(Contact contact);
    }
}