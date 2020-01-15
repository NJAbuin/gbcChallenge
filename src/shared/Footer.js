import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/lanacion">
        <img className="socialIcon" src="./media/fbIcon.png" />
      </a>
      <a href="https://twitter.com/LANACION">
        <img className="socialIcon" src="./media/twitterIcon.png" />
      </a>
      <a href="https://www.instagram.com/lanacioncom/">
        <img className="socialIcon" src="./media/instagramIcon.png" />
      </a>
      <a href="http://servicios.lanacion.com.ar/herramientas/rss/ayuda">
        <img className="socialIcon" src="./media/rssIcon.png" />
      </a>
      <a href="https://www.lanacion.com.ar/">
        <img className="footerLogo" src="./media/LaNacionLogo.jpg" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419">
        <img className="playStoreIcon" src="./media/googlePlay.png" />
      </a>
      <a href="https://apps.apple.com/ar/app/la-nacion/id410689702">
        <img className="appStoreIcon" src="./media/appStore.png" />
      </a>
      <br />
      <hr />
      <p className="leftFooterText">
        <a href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html">
          Mapa del sitio
        </a>
        &nbsp; &nbsp;
        <a href="https://micuenta.lanacion.com.ar/ayuda">Ayuda</a>
        &nbsp; &nbsp;
        <a href="https://micuenta.lanacion.com.ar/tyc">
          Términos y condiciones
        </a>
        &nbsp; &nbsp;
        <a href="https://www.lanacion.in/#/">¿Cómo anunciar?</a>
        &nbsp; &nbsp;
        <a href="https://suscripciones.lanacion.com.ar/suscribirme/">
          Suscribirse al diario impreso
        </a>
      </p>
      &nbsp;
      <p className="rightFooterText">
        Protegido por re CAPTCHA: &nbsp; Condiciones &nbsp; Privacidad
      </p>
      <br />
      <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
    </div>
  );
}
