import './styles/global.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Cards } from './components/cards/cards.jsx';
import { NavBar } from './components/navBar/navBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { IdCard } from './components/idCard/idCard';
import { Footer } from './components/footer/footer';



// https://gateway.marvel.com:443/v1/public/characters?apikey=9684e1ddaba5d95959df60f5fef958ec
// https://gateway.marvel.com:443/v1/public/characters?apikey=9684e1ddaba5d95959df60f5fef958ec

// key private: 8da3acb078a6da8226bd672bdc26ae4de3fce542
// key public: 9684e1ddaba5d95959df60f5fef958ec
// ts:1

// 18da3acb078a6da8226bd672bdc26ae4de3fce5429684e1ddaba5d95959df60f5fef958ec 
// hash: 49757fc258b96e4ec149f012908e9ba7
// hash: 49757fc258b96e4ec149f012908e9ba7


function App() {

const [personajes, setPersonajes]= useState([])

useEffect(()=>{
axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9684e1ddaba5d95959df60f5fef958ec&hash=49757fc258b96e4ec149f012908e9ba7').then(res => {
  setPersonajes(res.data.data.results)
}).catch(err=>console.log("error: ",err))
},[])



  return (
    <Router>
      <NavBar/>
      <Switch>

        <Route path="/:id">       
          <IdCard e={personajes}/>
        </Route>
      

        <Route path="/" exact>
          <Cards personajes={personajes}/>     
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
