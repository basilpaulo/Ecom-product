import React from 'react';
import './Navbar.css'
//import { HiMagnifyingGlass } from 'react-icons/hi';
//import Button from '@mui/material/Button';
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

 
//import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Navbar = () => {
    return (

        
      
   

                <div className="search-box">
                    <div Class = "row">
                        <input type="text" id="input-box" class="custom-input" placeholder='What are you looking for?'></input>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>                    
                    </div>
                    <div Class='cart'>
                    <button><i class="fa-regular fa-heart"></i></button>
                        <button><i class="fas fa-shopping-cart"></i></button>
                        <button><i class="fa-regular fa-user"></i></button>
                   </div>
                </div>
                

            

       
    )
}

export default Navbar

