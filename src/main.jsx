import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalState from './context/index.jsx'
import theme from "./theme.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalState>
 <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </GlobalState>

)
