using System;
using Xunit;
using EHI.Controllers;
using EHI.Data;
using Microsoft.AspNetCore.Mvc;

namespace EHI.Test
{
    public class ContactTest
    {
        ContactsController controller;
        public ContactTest()
        {

        }

        [Fact]
        public void GetReturnsAllContacts()
        {
            IContactService contactService = new ContactService();
            ContactsController controller = new ContactsController(contactService);
            var returnValue = controller.GetContacts();
            var okResult = returnValue as OkObjectResult;
            Assert.Equal(200, okResult.StatusCode);
        }
    }
}
