import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

let x = createBrowserRouter([
    {path:'', element:<Layout />, children:[
        {index:true, element:<Home />},
        {path:'about', element:<About />},
        {path:'portfolio', element:<Portfolio />},
        {path:'contact', element:<Contact />},
        {path:'*', element:<NotFound />},
    ]},
]);


function App() {
    return <RouterProvider router={x}></RouterProvider>
}

export default App
