import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <Link to="invitations">הזמנות לאירועים</Link>
                    <Link to="stickers">מדבקות שונות</Link>
                    <Link to="branding">מיתוג לאירועים</Link>
                    <Link to="souvenirs">מזכרות לאירועים</Link>
                    <Link to="EngagementAnnouncements">מודעות מאורסים</Link>
                    <Link to="booklets">חוברות</Link>
                    <Link to="eatingPage">דף אכיל</Link>
                    <Link to="transparents">שקף טרנספר</Link>
                    <Link to="shoppingCart">עגלת קניות</Link>

                 
                </nav>
            </header>
           <Login/>
        </>
    )
}