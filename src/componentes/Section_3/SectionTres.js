import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Necesitas una oficina de cambio en
            <span className={styles.linea}> Valencia?</span>
          </h2>
          <p>
            <span>
              En Quickgold tenemos actualmente 5 casas de cambio en la capital
              de España para que puedas cambiar moneda extrajera fácil y rápido.
            </span>
            Tenemos más de 30 divisas disponibles para ofrecerte el mejor
            servicio.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cómo cambiar divisa?</h2>
          <p>
            Acude a tu casa de cambio quickgold más cercana, indícanos la moneda
            extranjera que quieres cambiar y recibe el dinero en efectivo al
            instante.
          </p>
        </div>
      </div>
      <h1>
        Cambiar divisa en <span className={styles.linea}>Valencia</span> es muy
        fácil
      </h1>
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>Indícanos la divisa que quieres cambiar</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>Acordamos precio. ¡Hacemos mejoras por cantidad!</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>Recibe el dinero en efectivo al instante</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
