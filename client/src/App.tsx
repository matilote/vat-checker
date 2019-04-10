import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

interface IApplicationState {
  response: string;
  post: string;
  loading: boolean;
  responseToPost: {
    result: {
      countryCode: string;
      vatNumber: string;
      valid: string;
      name: string;
      address: string;
    };
  };
}
class App extends Component<{}, IApplicationState> {
  constructor(props: any) {
    super(props);
    this.state = {
      response: "",
      post: "",
      loading: false,
      responseToPost: {
        result: {
          countryCode: "",
          vatNumber: "",
          valid: "",
          name: "",
          address: ""
        }
      }
    };
  }

  public componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  private callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
