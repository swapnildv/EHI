import React, { Component } from 'react'
import axios from 'axios'

export class Contact extends Component {
  constructor(props) {
    super(props)

    this.onContactUpdate = this.onContactUpdate.bind(this)
    this.onContactDelete = this.onContactDelete.bind(this)
    this.state = {
      contacts: [],
      loading: true,
      failed: false,
      error: '',
    }
  }

  componentDidMount() {
    this.populateContactsData()
  }

  populateContactsData() {
    axios
      .get('api/Contacts/GetContacts')
      .then((result) => {
        const response = result.data
        this.setState({
          contacts: response,
          loading: false,
          failed: false,
          error: '',
        })
      })
      .catch((error) => {
        this.setState({
          contacts: [],
          loading: false,
          failed: true,
          error: 'Contacts could not be loaded',
        })
      })
  }

  onContactUpdate(id) {
    const { history } = this.props
    history.push('/update/' + id)
  }

  onContactDelete(id) {
    const { history } = this.props
    history.push('/delete/' + id)
  }

  renderAllContacts(contacts) {
    console.log(contacts)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>{contact.status ? 'Active' : 'InActive'}</td>
                <td>
                  <div className="form-group">
                    <button
                      onClick={() => this.onContactUpdate(contact.id)}
                      className="btn btn-success"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => this.onContactDelete(contact.id)}
                      className="btn btn-danger left-margin"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  render() {
    let content = this.state.loading ? (
      <p>
        <em>Loading..</em>
      </p>
    ) : this.state.failed ? (
      <div className="text-danger">
        <em>{this.state.error}</em>
      </div>
    ) : (
      this.renderAllContacts(this.state.contacts)
    )
    return (
      <div>
        <h1>All Contacts</h1>
        <p>Here you can see all contacts</p>
        {content}
      </div>
    )
  }
}
