import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DefaultSidebar from './DefaultSidebar'

// routes config
import routes from '../../routes'

class DefaultLayout extends Component {
    render() {
        return (
            <main>
                <DefaultSidebar >
                </DefaultSidebar>
                <div className="main-content">
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                <route.component {...props} />
                            )} />)
                                : (null)
                        },
                        )}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
                </div>
            </main>
        )
    }
}

export default DefaultLayout