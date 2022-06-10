import Layout from "./layout/Layout";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {useSelector} from 'react-redux'
import Single from "./pages/single/Single";




const App = () => {
    const darkMode = useSelector(state => state.darkMode.value.darkMode)

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    })


  return (
      <ThemeProvider theme={darkTheme}>
          <Router>
              <Layout darkMode={darkMode}>
                  <Routes>
                      <Route path='/' element={<Products />} />
                      <Route path='/products'>
                          <Route index element={<Products />} />
                          <Route path=':productId' element={<Single />} />
                      </Route>
                      <Route path='/login' element={<Login />} />
                  </Routes>
              </Layout>
          </Router>
      </ThemeProvider>

  );
}

export default App;
