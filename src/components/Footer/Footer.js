import React from "react";
import FooterCol from "../FooterCol/FooterCol";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="FooterStyles">
      <div className="container">
        <div className="footer-col1">
          <h1 className="footer-col1-title">Ivan Budinov</h1>
          <div className="footer-col1-text">
            A web designer and developer from Sofia, Bulgaria. I always make
            websites that have unique designs and good performance.
          </div>
        </div>
        <div className="footer-col2">
          <FooterCol
            heading="Important Links"
            Links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer-col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                title: "(+359) 08822825",
                path: "tel:+359882280825",
              },
              {
                title: "ivan.budinow@gmail.com",
                path: "ivan.budinow@gmail.com",
              },
              {
                title: "Sofia, Bulgaria",
                path: "https://www.google.com/maps/place/1756+%D0%B6.%D0%BA.+%D0%94%D1%8A%D1%80%D0%B2%D0%B5%D0%BD%D0%B8%D1%86%D0%B0,+Sofia/@42.655554,23.3537586,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x40aa869c055515f1:0x4da49ce9b02c3ea6!2z0LYu0LouINCU0YrRgNCy0LXQvdC40YbQsCA0OdCQLCAxNzU2IGcuay4gRGFydmVuaXRzYSwgU29maWE!3b1!8m2!3d42.6503092!4d23.3640086!3m4!1s0x40aa869d44523ef1:0x52f7ef2690f72012!8m2!3d42.6555349!4d23.3641031",
              },
            ]}
          />
        </div>
        <div className="footer-col4">
          <FooterCol
            heading="Social Links"
            Links={[
              {
                title: "Facebook",
                path: "https://www.facebook.com/silentgtx",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/budinoff.ivan/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright-text">
            © 2024 - Portfolio| Designed By Ivan Budinov
          </div>
        </div>
      </div>
    </div>
  );
}
