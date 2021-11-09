import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"


const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.user.user)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user != null ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
