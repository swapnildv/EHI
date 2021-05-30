using System;
using EHI.Data;
using Microsoft.AspNetCore.Mvc;

namespace EHI.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private IContactService _contactService;
        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet("[action]")]
        public IActionResult GetContacts()
        {
            try
            {
                var getAllContacts = _contactService.getAllContacts();
                return Ok(getAllContacts);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("SingleContact/{id}")]
        public IActionResult GetContactById(Guid id)
        {
            var contact = _contactService.GetContactById(id);
            return Ok(contact);
        }

        [HttpPost("AddContact")]
        public IActionResult AddContact([FromBody] Contact contact)
        {
            if (contact != null)
            {
                _contactService.AddContact(contact);
            }
            return Ok();
        }

        [HttpPut("UpdateContact/{id}")]
        public IActionResult UpdateContact(Guid id, [FromBody] Contact contact)
        {
            _contactService.UpdateContact(id, contact);
            return Ok();
        }

        [HttpDelete("DeleteContact/{id}")]

        public IActionResult DeleteContact(Guid id)
        {
            _contactService.DeleteContact(id);
            return Ok();
        }
    }
}