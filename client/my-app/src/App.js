import React from 'react';
import {useState, useEffect} from 'react';
import Sitebar from './Components/Navbar/Navbar';
//import Auth from "./auth/Auth"
import CharacterIndex from './Components/Characters/CharacterIndex';

function App () {
  const [sessionToken, setSessionToken] =useState('');
  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  //**need to have Auth set up before use */

  /*const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <CharacterIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/> ) 
  }*/


  return (
    <div>
      <Sitebar clickLogout={clearToken} />
      {/* {protectedViews()}  --> set up auth first */} 
      <CharacterIndex token={sessionToken} />
    </div>
  );
}

export default App;
