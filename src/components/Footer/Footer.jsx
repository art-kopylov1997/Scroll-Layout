import React from "react";
import styles from "./Footer.module.scss"

export const Footer = () => (

    <div className={styles.root}>
        © {new Date().getFullYear()}. Artyom Kopylov
    </div>
)