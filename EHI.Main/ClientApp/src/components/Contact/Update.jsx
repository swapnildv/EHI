import React, { Component } from 'react'
import axios from 'axios'

export class Update extends Component {
  constructor(props) {
    super(props)

    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeStatusActive = this.onChangeStatusActive.bind(this)
    this.onChangeStatusInActive = this.onChangeStatusInActive.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onUpdateCancel = this.onUpdateCancel.bind(this);

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
        status: contact.status
      })
    })
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

  onUpdateCancel(){
    const {history} = this.props;
    history.push("/contacts");
  }
  onSubmit(e) {
    e.preventDefault()
    const { history } = this.props
    const {id} = this.props.match.params;

    let contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      status: this.state.status,
    }

    axios.put('api/Contacts/UpdateContact/'+id, contact).then((result) => {
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
              name="status"
              onChange={this.onChangeStatusActive}
              checked={this.state.status}
            />{' '}
            Active
            <input
              type="radio"
              name="status"
              onChange={this.onChangeStatusInActive}
              checked={!this.state.status}
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
            <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    )
  }
}
