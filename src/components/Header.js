import React from 'react'
import styles from "../styles/Header.module.scss";

function Header() {

    const menus = [
        {
            name: "HOME",
            path: "/images/home-icon.svg"
        },
        {
            name: "SEARCH",
            path: "/images/search-icon.svg"
        },
        {
            name: "WATCHLIST",
            path: "/images/watchlist-icon.svg"
        },
        {
            name: "ORIGINALS",
            path: "/images/original-icon.svg"
        },
        {
            name: "MOVIES",
            path: "/images/movie-icon.svg"
        },
        {
            name: "SERIES",
            path: "/images/series-icon.svg"
        }
    ]

    return (
        <div className={styles.header}>
            <img src='/images/logo.svg' className={styles.logo} alt="logo"></img>
            <div className={styles.navMenu}>
                {menus.map((m,i) => {
                    return (<a className={styles.menuItem} href key={i}>
                        <img src={m.path} alt='home'></img>
                        <span>{m.name}</span>
                    </a>)
                })
                }
            </div>
            <img className={styles.profileIcon} src='/images/profile-icon.png' alt='profile'></img>
        </div>
    )
}

export default Header