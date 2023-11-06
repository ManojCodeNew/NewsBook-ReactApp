import './App.css';
// import NewsArea from './components/newsarea';
import Navbar from './components/navbar';
import Newsarea from './components/newsarea';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route path='/' element={<Newsarea key='General' category="General" />} />
      <Route path='/general' element={<Newsarea key="General" category='General' />} />
      <Route path='/Business' element={<Newsarea key="Business" category='Business' />} />
      <Route path='/Entertainment' element={<Newsarea key="Entertainment" category='Entertainment' />} />
      <Route path='/Health' element={<Newsarea key="Health" category='Health' />} />
      <Route path='/Science' element={<Newsarea key="Science" category='Science' />} />
      <Route path='/Sports' element={<Newsarea key="Sports" category='Sports' />} />
      <Route path='/Technology' element={<Newsarea key="Technology" category='Technology' />} />
    </Route>
  )
)

function App() {
  return (
    <div className='bg-blue-300 '>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
