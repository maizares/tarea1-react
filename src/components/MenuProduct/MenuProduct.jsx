import {MenuListItem} from '../MenuListItem/MenuListItem'
import React from 'react'
import { PRODUCTS } from './products'
import s from "./style.module.css";

const MenuProduct = (props) => {
  
  return (
    <div className={s.container}>
        {
            PRODUCTS.map((map_productos)=>(
                
                  <MenuListItem 
                      key={map_productos[0]}
                      isSelected={props.producto===map_productos}
                      onClick={props.onItemClick}
                      producto={map_productos[0]}
                      precio={map_productos[1]}                      
                  />                
            ))
        }
    </div>
  )
}

export default MenuProduct
