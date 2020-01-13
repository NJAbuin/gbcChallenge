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
        Mapa del sitio &nbsp; Ayuda &nbsp; Términos y condiciones &nbsp; ¿Cómo
        anunciar? &nbsp; Suscribirse al diario impreso
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
