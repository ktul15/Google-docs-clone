import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import TextEditor from './TextEditor'

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Redirect to={`/documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:documentId" exact>
        <TextEditor />
      </Route>
    </Router>
  )
}

export default App
