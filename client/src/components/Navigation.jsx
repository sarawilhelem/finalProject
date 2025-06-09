import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <Link to="invitations">הזמנות לאירועים</Link>
                    {/* <Link to="branding">מיתוג לאירועים</Link> */}
                    <Link to="shoppingCart">עגלת קניות</Link>

                 
                </nav>
            </header>
           <Login/>
        </>
    )
}