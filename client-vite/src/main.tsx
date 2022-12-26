import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Root from "./Root";
import {initialState} from "./context";

import './styles/index.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Root initialState={initialState}>
        <App/>
      </Root>
  </React.StrictMode>,
)
