import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome to contacts manager</h1>
        <p>Use this manager to manage contacts, by:</p>
        <ul>
          <li>Add a new contact</li>
          <li>update a contact</li>
          <li>Delete a contact</li>
          <li>Show all contacts</li>
        </ul>
        
      </div>
    );
  }
}
