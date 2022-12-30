
import { useState } from 'react';
import DisplayProduct from './components/DisplayProduct/DisplayProduct';
import MenuProduct from './components/MenuProduct/MenuProduct';

import s from './style.module.css';

//STATEFULL COMPONENT
function App() {

  const [currentProducto,setcurrentProducto] = useState("");
  const [currentPrecio,setcurrentPrecio]     = useState("");

  const onMenuListItemClick = (prod,precio)=>{
    setcurrentProducto(prod)
    setcurrentPrecio(precio)
  }

  return (
    <div className={s.principal}>
      
      <h1 className={s.titulo}>Selecciona el Producto</h1>

      <div>
        <MenuProduct
          producto={currentProducto}
          precio={currentPrecio}
          onItemClick={onMenuListItemClick}
        />

        <DisplayProduct producto={currentProducto} precio={currentPrecio}/>

      </div>
    </div>
  );
}

export default App;
