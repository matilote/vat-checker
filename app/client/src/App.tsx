import React, { Component } from "react";
import { Button, Input, Header, Grid, Icon } from "semantic-ui-react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import ListComponent from "./components/ListComponent";
import PreviousChecks from "./components/PreviousChecks";
import toastr from 'toastr'

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
    const response: Response = await fetch("/api/hello");
    const body: any = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(): JSX.Element {
    const { responseToPost, loading } = this.state;
    return (
      <Grid centered>
        <Grid.Column width={10}>
          <div className="App">
            <Header as="h2" icon textAlign="center">
              <Icon name="handshake" circular />
              <Header.Content>{this.state.response}</Header.Content>
            </Header>
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
              <div>
                <ListComponent result={responseToPost.result} />
                <PreviousChecks getData={this.getData()} />
              </div>
            )}
          </div>
        </Grid.Column>
      </Grid>
    );
  }

  private getData = (): any[] => {
    const retrievedObject: any = localStorage.getItem("vatData");
    const parsedObject = JSON.parse(retrievedObject);
    let arr: any[] = [];
    if (retrievedObject !== null) {
      for (let key in parsedObject.result) {
        let value = parsedObject.result[key];
        arr.push(value);
      }
    }
    return arr;
  };

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
    localStorage.setItem("vatData", JSON.stringify(this.state.responseToPost));
    toastr.options = {
      positionClass : 'toast-bottom-right',
      hideDuration: 200,
      timeOut: 3000
    }
    toastr.success('Good job!','Form has been sucessfully submitted.').css("width","500px")
  };

  private onClick = (): void => {
    this.setState({
      loading: true
    });
  };
}

export default App;
