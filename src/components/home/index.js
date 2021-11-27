import React, { useState } from 'react'
import Body from '../body';
import Footer from '../footer';
import Header from '../header';
import './home.css'


/* material ui import */
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {  CssBaseline} from '@material-ui/core'

const Home = () => {
    const [dark, setDark] = useState(false)
   
	const theme = createMuiTheme({
		palette: {
			type: dark ? 'dark' : 'light',
			primary: dark ?  {main: '#fff'} : {main: '#000'},
			
		}
	})

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="home">
          <div>
              <Header  dark={dark} theme={theme} change={() => setDark(!dark)} />
          </div>
          <div>
              <Body/>
          </div>
          <div>
              <Footer/>
          </div>
        </div>
        </ThemeProvider>
    )
}

export default Home;
