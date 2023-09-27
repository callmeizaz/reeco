import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

import OrderComponent from './components/OrderComponent'
import { history, store } from './redux/store'
import muiTheme from './utils/theme.config'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <ReduxStoreProvider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<OrderComponent />} />
          </Routes>
        </HistoryRouter>
      </ReduxStoreProvider>
    </ThemeProvider>
  )
}

export default App
