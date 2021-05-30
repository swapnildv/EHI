import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { Contact } from "./components/Contact/Contact";
import { Create } from "./components/Contact/Create";
import "./custom.css";
import { Update } from "./components/Contact/Update";
import { Delete } from "./components/Contact/Delete";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/contacts" component={Contact} />
        <Route path="/update/:id" component={Update} />
        <Route path="/delete/:id" component={Delete} />

      </Layout>
    );
  }
}
