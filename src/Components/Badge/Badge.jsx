import React, {useState} from "react"

import './Badge.css'
import { Box, FormControl, MenuItem,} from "@mui/material";
import { Select } from "antd";

const Badge = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [language, setLanguage] = React.useState('English');
  
    const handleClick = () =>{
        setDropdownVisible(!isDropdownVisible);
    }
    const handleChange = (event) => {
        const value = event && event.target ? event.target.value : null;
        setLanguage(event.target.value);
      };
  
    return (
      <h4>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        
        <span className="shop-now">Shop Now!</span>
        <span className="english" value="English" >English<i class="fa-solid fa-angle-down"></i></span>
        {isDropdownVisible && (
         
        
            <Box sx={{ minWidth: 20 }}>
              <FormControl fullWidth>
                
                <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Age"
                onChange={handleChange}
                   >
                   <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Spanish</MenuItem>
                    <MenuItem value={30}>Turkish</MenuItem>
                </Select>
              </FormControl>
            </Box>
         

        )}
      </h4>
    );
  };

export default Badge



