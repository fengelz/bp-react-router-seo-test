import React from 'react'
import { Route, BrowserRouter as Router, history, Link } from 'react-router-dom'

import { Home, Blog, About } from './components'

const GameApp = () => (
    <Router history={history}>
        <Route
            render={() => (
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/about" component={About} />
                </div>
            )}
        />
    </Router>
)

export default GameApp
