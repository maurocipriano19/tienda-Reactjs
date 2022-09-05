import './estilos.css';
import 'core-js/actual';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

 function App() {
  return (
    <>
      
      <NavBar />     
      <ItemListContainer  greeting = {"greeting"}/>
      
    </>




  );
}


export default App;
