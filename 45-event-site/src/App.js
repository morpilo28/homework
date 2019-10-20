import React from 'react';
import './App.css';
import Header from './components/Header'
import InputField from './components/InputField'
import MainContent from './components/MainContent'

function App() {
  return <div className={"app-container"}>
    <Header/>
    <InputField/>
    <MainContent/>
  </div>;
}

export default App;
