import React,{Component} from 'react';

const AppContext = React.createContext();

export class AppProvider extends Component{
  state = { 
    isSignedIn: false, 
    userID : null,
    userObject : null,
    setUserObject :(userObject) => {
      if(this.state.userObject == null && userObject) {
        this.setState({ userObject : userObject });
        console.log("UserId set at the AppContext level");
        console.log(userObject);
      }
    }
  }
  render () {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}


// export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;