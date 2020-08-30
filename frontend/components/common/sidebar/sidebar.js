import React from "react";
import {Button} from "react-bootstrap";

const Sidebar = ({itemName, iconName, handleChange }) =>{
    return(
            <div id="sidebar">
                <ul className="list-group">
                    {itemName.map((name, inx)=>{
                        return(
                        <React.Fragment key={inx}>
                            <li className="list-group-item p-0 pt-1 pb-1">
                                <Button variant="dark w-100" onClick={handleChange[inx]}>
                                    <i className={iconName[inx]} /> {name}
                                </Button>
                            </li>
                        </React.Fragment>
                        )
                    }
                )
                }
                </ul>
            </div>
    );
}

export default Sidebar;