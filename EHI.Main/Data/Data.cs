using System;
using System.Collections.Generic;

namespace EHI.Data
{
    public static class Data
    {
        public static List<Contact> Contacts => allContacts;

        static List<Contact> allContacts = new List<Contact>()
        {
            new Contact(){
                Id = Guid.NewGuid(),
                FirstName="Swapnil",
                LastName="Vengurlekar",
                Email="sv@abc.com",
                PhoneNumber="119988776655",
                Status = true
            },
            new Contact(){
                 Id = Guid.NewGuid(),
                FirstName="Dan",
                LastName="Brown",
                Email="db@abc.com",
                PhoneNumber="119988776655",
                Status = false
            },
            new Contact(){
                 Id = Guid.NewGuid(),
                FirstName="Elon",
                LastName="Musk",
                Email="em@abc.com",
                PhoneNumber="119988776655",
                Status = true
            }

        };
    }
}