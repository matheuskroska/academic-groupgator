import {BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Member from './pages/Member';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignIn from './pages/SignIn';


const Routes = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact={true} path = "/" component ={Home} />
            <Route exact={true} path = "/member" component ={Member} />
            <Route exact={true} path = "/contact" component ={Contact} />
            <Route exact={true} path = "/login" component ={Login} />
            <Route exact={true} path = "/signIn" component ={SignIn} />
            
        
            <Route exact={true} component ={NotFound} />
        </Switch>
        </BrowserRouter>


    )

}

export default Routes;