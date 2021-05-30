import React, { Component } from 'react'
import axios from 'axios'

export class Create extends Component {
  constructor(props) {
    super(props)

    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeStatusActive = this.onChangeStatusActive.bind(this)
    this.onChangeStatusInActive = this.onChangeStatusInActive.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      status: false,
    }
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    })
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    })
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onChangeStatusActive(e) {
    this.setState({
      status: true,
    })
  }

  onChangeStatusInActive(e) {
    this.setState({
      status: false,
    })
  }

  

  onSubmit(e) {
    e.preventDefault()
    const { history } = this.props

    let contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      status: this.state.status,
    }

    axios.post('api/Contacts/AddContact', contact).then((result) => {
      history.push('/contacts')
    })
  }

  render() {
    return (
      <div className="contact-form">
        <h3>Add new contact</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            {/* <textarea type="text" className="form-control" /> */}
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            {/* <textarea type="text" className="form-control" /> */}
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phoneNumber}
              onChange={this.onChangePhoneNumber}
            />
          </div>
          <div className="form-group">
            <input
              type="radio"
              value={this.state.status}
              name="status"
              onChange={this.onChangeStatusActive}
            />{' '}
            Active
            <input
              type="radio"
              value={this.state.status}
              name="status"
              onChange={this.onChangeStatusInActive}
            />{' '}
            Inactive
          </div>
          {/* <div className="row">
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label>Date of start: </label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label>Date of completion: </label>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div> */}

          <div className="form-group">
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}
