import styles from "./layout.module.css";
import Header from "../../componentes/Cabecera/Header";
import Footer from "../Footer/Footer";
import BotonLamarFijo from "../BotonLlamarFijo/BotonLamarFijo";
import useScreenSize from "@/utilities/useScreenSize";
import FooterMobil from "../FooterMovil/FooterMobil";

export default function Layout({ children, menu_list }) {
  const { width } = useScreenSize();
  return (
    <>
      <main className={styles.contenedor}>
        <Header menu_list={menu_list} />
        {children}
        <FooterMobil /> <Footer />
        <BotonLamarFijo />
      </main>
    </>
  );
}
