import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/lanacion" className="footerLink">
        <img className="socialIcon" src="./media/fbIcon.png" />
      </a>
      <a href="https://twitter.com/LANACION" className="footerLink">
        <img className="socialIcon" src="./media/twitterIcon.png" />
      </a>
      <a href="https://www.instagram.com/lanacioncom/" className="footerLink">
        <img className="socialIcon" src="./media/instagramIcon.png" />
      </a>
      <a
        href="http://servicios.lanacion.com.ar/herramientas/rss/ayuda"
        className="footerLink"
      >
        <img className="socialIcon" src="./media/rssIcon.png" />
      </a>
      <a href="https://www.lanacion.com.ar/" className="footerLink">
        <img className="footerLogo" src="./media/LaNacionLogo.jpg" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419"
        className="footerLink"
      >
        <img className="playStoreIcon" src="./media/googlePlay.png" />
      </a>
      <a
        href="https://apps.apple.com/ar/app/la-nacion/id410689702"
        className="footerLink"
      >
        <img className="appStoreIcon" src="./media/appStore.png" />
      </a>
      <br />
      <hr />
      <p className="leftFooterText">
        <a
          href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html"
          className="footerLink"
        >
          Mapa del sitio
        </a>
        &nbsp; &nbsp;
        <a href="https://micuenta.lanacion.com.ar/ayuda" className="footerLink">
          Ayuda
        </a>
        &nbsp; &nbsp;
        <a href="https://micuenta.lanacion.com.ar/tyc" className="footerLink">
          Términos y condiciones
        </a>
        &nbsp; &nbsp;
        <a href="https://www.lanacion.in/#/" className="footerLink">
          ¿Cómo anunciar?
        </a>
        &nbsp; &nbsp;
        <a
          href="https://suscripciones.lanacion.com.ar/suscribirme/"
          className="footerLink"
        >
          Suscribirse al diario impreso
        </a>
      </p>
      &nbsp;
      <p className="rightFooterText">
        Protegido por re CAPTCHA: &nbsp; &nbsp;
        <a
          href="https://policies.google.com/terms?hl=es-419"
          className="footerLink"
        >
          Condiciones
        </a>
        &nbsp; &nbsp;
        <a
          href="https://policies.google.com/privacy?hl=es-419"
          className="footerLink"
        >
          Privacidad
        </a>
      </p>
      <br />
      <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
    </div>
  );
}
