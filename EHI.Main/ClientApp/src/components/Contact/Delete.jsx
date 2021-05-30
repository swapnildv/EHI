import React, { Component } from 'react'
import axios from 'axios'

export class Delete extends Component {
  constructor(props) {
    super(props)
    this.onCancel = this.onCancel.bind(this)
    this.onDelete = this.onDelete.bind(this)

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      status: false,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params

    axios.get('api/Contacts/SingleContact/' + id).then((response) => {
      const contact = response.data

      this.setState({
        firstName: contact.firstName,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
        status: contact.status,
      })
    })
  }

  onCancel(e) {
    const { history } = this.props
    history.push('/contacts')
  }

  onDelete(e) {
    debugger
    const { id } = this.props.match.params;
    const { history } = this.props

    axios.delete('api/contacts/DeleteContact/' + id).then((response) => {
      history.push('/contacts')
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Delete contact confirmation</h2>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title"> {this.state.firstName} </h4>
            {/* <p class="card-text"> +++description here+++ </p> */}
            <button onClick={this.onCancel} className="btn btn-default">
              Cancel
            </button>
            <button onClick={this.onDelete} className="btn btn-danger">
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  }
}
