import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Login, Register, Home, Feed, Edit, About, Contact, FAQ } from './pages/index';
import { Header, Footer, Container } from './components/index';
import { AuthProvider } from './firebase-auth';
import { PrivateRoute } from './private-route';



export const Routes = () => {

    return (
        <AuthProvider>
            <Router>
                <Header />
                <Container>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/cadastro" component={Register} />
                        <Route exact path="/sobre" component={About} />
                        <Route exact path="/contato" component={Contact} />
                        <Route exact path="/faq" component={FAQ} />
                        <PrivateRoute exact path="/feed" component={Feed} />
                        <PrivateRoute exact path="/edit" component={Edit} />
                        <PrivateRoute exact path="/new" component={() => <h1>new</h1>} />
                        
                        <Route component={() => <h1>NOT FOUND</h1>} />
                    </Switch>
                </Container>
                <Footer />
            </Router>
        </AuthProvider>
    )
}

