import React, { useState } from "react";
import styles from "./header.module.css";
//import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useScreenSize from "@/utilities/useScreenSize";
import MenuOrdenador from "../MenuOrdenador/MenuOrdenador";
import MenuMobil from "../MenuMobil/MenuMobil";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ menu_list }) => {
  const [menuAbieto, setMenuAbierto] = useState(false);
  const { width } = useScreenSize();
  return (
    <header className={styles.header}>
      <nav className={styles.contenedorLogo}>
        <figure>
          <a
            href="https://quickgold.es/"
            title="Logo Quickgold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://quickgold.es/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={163}
              height={30}
            />
          </a>
        </figure>
        <div className={styles.menuHamburquesa}>
          <MenuIcon onClick={() => setMenuAbierto(true)} />
        </div>
        <div className={styles.contenedorRedes}>
          <div className={styles.contenedorIconos}>
            <a
              target="_blank"
              className={styles.linkedin}
              href="https://www.linkedin.com/company/quickgold"
              title="Linkedin"
            >
              <img
                src="https://quickgold.es/Vector12.png"
                alt="Quickgold Logo"
                className={styles.vector}
              />
              <LinkedInIcon />
            </a>
            <a
              href="https://www.facebook.com/quickgold.es/"
              title="Facebook"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/quickgold.es/"
              title="Instagram"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className={styles.botonLlamar}>
            <a href="tel:900 373 629" title="Teléfono">
              LLAMA GRATIS AL 900 373 629
            </a>
          </div>
        </div>
      </nav>
      <MenuMobil
        menu_list={menu_list}
        menuAbieto={menuAbieto}
        setMenuAbierto={setMenuAbierto}
      />
      <MenuOrdenador menu_list={menu_list} />
    </header>
  );
};

export default Header;
