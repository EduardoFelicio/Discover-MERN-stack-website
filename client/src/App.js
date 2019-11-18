import React,{Component} from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Switch,Link}  from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

var loggedIn=0;
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  loggedIn = 1;
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}



class App extends Component {
  constructor(){
    super();
    this.state = {logout: false};
    this.Logout = this.Logout.bind(this);
    this.Greeting = this.Greeting.bind(this);
  }


  Logout(){
      if(this.state.logout){
        this.setState({logout: false});
        loggedIn = 0;
        store.dispatch(logoutUser());
        this.forceUpdate();
    }
  }

  Greeting(props){
    if(props.isLoggedIn)
      return <Link to="/login" onClick={() => this.setState({logout: true})} style={{textDecoration: 'none'}} className="mdl-navigation__link header-link">LOGOUT</Link>
    else return <Link to="/login" style={{textDecoration: 'none'}} className="mdl-navigation__link header-link">LOGIN</Link>
  }
render(){
  return (
    <div>
    <Provider store={store}>
      <Layout>
          <Header className="header-color" transparent title={<Link style={{textDecoration: 'none', color: 'white'}} to="/" className="anurati">D I S C O V E R</Link>}>
              <Navigation>
                  <Link to="/" className="header-link">HOME</Link>
                  <Link to="/aboutme"className="header-link">ABOUT ME</Link>
                  <Link to="/travels"className="header-link">EXPERIENCES</Link>
                  <Link to="/contacts"className="header-link">CONTACTS</Link>
                  <this.Greeting isLoggedIn={loggedIn} />
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/" className="anurati">D I S C O V E R</Link>}>
              <Navigation>
                <Link to="/" className="header-link">HOME</Link>
                <Link to="/aboutme"className="header-link">ABOUT ME</Link>
                <Link to="/travels"className="header-link">EXPERIENCES</Link>
                <Link to="/contacts"className="header-link">CONTACTS</Link>
                <this.Greeting isLoggedIn={loggedIn} />
              </Navigation>
          </Drawer>
          <Content>
              <Main/>
              <Footer/>
          </Content>
      </Layout>
    </Provider>
    {this.Logout()}
</div>
  );
}
}

export default App;
