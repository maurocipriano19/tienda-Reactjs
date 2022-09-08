import './estilos.css';
import 'core-js/actual';


import ItemListContainer from './components/ItemListContainer';

 function App() {

  const productos = { id:0, nombre:"remera", precio:80000}

  return (
    <>
      
      
      <ItemListContainer  
      productos = {productos}/>
      
    </>


  );
}


export default App;
