import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import ListComponent from "./components/ListComponent";

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
class App extends Component<any, IApplicationState> {
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
    const response: Response = await fetch('/api/hello');
    const body: any = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(): JSX.Element {
    const { responseToPost, loading } = this.state;
    return (
      <div className="App">
        <h2>{this.state.response}</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            action={
              <Button type="submit" onClick={this.onClick}>
                Fetch data
              </Button>
            }
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
            placeholder={"Input VAT number here..."}
            icon={"search"}
            iconPosition={"left"}
          />
        </form>
        <br />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ListComponent result={responseToPost.result} />
        )}
      </div>
    );
  }

  private handleSubmit = async (e: any) => {
    e.preventDefault();
    const response: Response = await fetch(`/api/check/${this.state.post}`);
    const body: string = await response.text();
    const obj: any = JSON.parse(body);
    this.setState({
      ...this.state,
      responseToPost: obj,
      loading: false
    });
  };

  private onClick = (): void => {
    this.setState({
      loading: true
    });
  };
}

export default App;
