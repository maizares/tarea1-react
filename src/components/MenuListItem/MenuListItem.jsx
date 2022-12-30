
import s from "./style.module.css"
import { useState } from 'react'

export const MenuListItem = (props) => {
    
    const [isHovered,setIsHovered] = useState(false);

    const activate = () => {
        setIsHovered(true);
    }
    const desactivate = () =>{
        setIsHovered(false);
    }

    const getBackgroundColor = () => {
        if(isHovered){
            return s.hover
        }
        else {
            if(props.isSelected){  
                return s.nothover;
            }
            else{
                return s.inicio;
            }
        }
    }
    const onProdClick = () => {
        props.onClick(props.producto,props.precio);        
    }

    return (
        <div 
            onClick={onProdClick}
            onMouseEnter={activate}
            onMouseLeave={desactivate}
            className={getBackgroundColor()}
        >
            {props.producto}        
        </div>
    )
}
