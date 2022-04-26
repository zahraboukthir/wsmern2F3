
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home  from './Component/Home';

import NavigationBar from './Component/NavBars/NavigationBar';
import SignUp from './Component/AuthForms/SignUp';
import SignIn from './Component/AuthForms/SignIn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/actions/useractions';
import PrivateRoute from './Component/PrivateRoute/index';
import DashboardClient from './Component/PrivateRoute/Dashbords/DashboardClient';
import DashbooardAdmin from './Component/PrivateRoute/Dashbords/DashbooardAdmin';


function App() {
  const dispatch=useDispatch()
 
  
  useEffect(() => {
 
    dispatch( getUser())
  }, [dispatch])

  return (
    <div className="App">
      <NavigationBar/>
     <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route  path='/register' element={<SignUp/>} />
       <Route path='/login' element={<SignIn/>} />
       <Route path="/dachboardClient" element={<PrivateRoute><DashboardClient/></PrivateRoute>}/>
       <Route path="/dachboardAdmin" element={<PrivateRoute><DashbooardAdmin/></PrivateRoute>}/>
     </Routes>
    </div>
  );
}

export default App;
