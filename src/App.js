import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { HomePage, SignInPage, SignUpPage, ErrorPage, VerifyEmail } from "./Pages";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./state/store";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />

        <Switch>

          <Route exact path="/" component={HomePage} />

          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          {/* Private Routes */}
          <PrivateRoute
            exact
            path="/verify-account-email/id=:id"
          > <VerifyEmail /> </PrivateRoute>
          {/* Profile, Admin */}
          {/* End Private Routes */}

          <Route exact path="*" component={ErrorPage} />

        </Switch>

        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
