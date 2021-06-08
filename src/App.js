import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Content from './components/Content'
import DashBoard from './components/DashBoard';


function App() {

  let [drawer, setDrawer] = useState(true)


  return (
    <div className="App">

      <Navbar drawer={drawer} setDrawer={setDrawer}></Navbar>
      <Content></Content>

    </div>
  );
}

export default App;
