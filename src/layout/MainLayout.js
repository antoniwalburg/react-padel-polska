import React from 'react'
import NavBar from '../components/Navbar'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import '../App.css'

const theme = createTheme({
    palette: {
      primary: {
        main: "#2e1667",
      },
      secondary: {
        main: "#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Kanit'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
      },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });

function MainLayout({children}) {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div>{children}</div>
        <div className='line'/>
      </ThemeProvider>
    </div>
    
  )
}

export default MainLayout
