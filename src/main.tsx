import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BackgroundContainer, GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/DefaultTheme'

import img from './assets/backgroundpreto.jpeg'


createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={DefaultTheme}>
    <StrictMode>
      <BackgroundContainer img={img}>
        <GlobalStyle />
        <App />
      </BackgroundContainer>
    </StrictMode>
  </ThemeProvider>

)
