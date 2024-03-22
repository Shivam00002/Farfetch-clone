import React from "react";
import Footer from "../footer";
import Icon from "../icons";
import styles from "./Footer.css"
export function FooterContainer() {
  return (
    <Footer>

      <Footer.Wrapper >
        <Footer.Row >
          <Footer.Column className="h">
            <Footer.Title>FARFETCH APP</Footer.Title>
            <Footer.Link href="#">Farfetch App for iOS and Android</Footer.Link>
          </Footer.Column  >
          <Footer.Column className="h">
            <Footer.Title >
              DESTINATION/REGION, CURRENCY AND LANGUAGE
            </Footer.Title>
            <Footer.Link href="#">India, USD $</Footer.Link>
          
            <Footer.Title>FOLLOW US</Footer.Title>
            <Footer.Column className="h">
              <Footer.Icon href="#">
                <Footer.Link href="#">
                  <Icon className="fab fa-instagram " />

                </Footer.Link>
                <Footer.Link href="#">
                  <Icon className="fab fa-facebook-f " />
                </Footer.Link>
                <Footer.Link href="#">
                  <Icon className="fab fa-twitter " />
                </Footer.Link>
                <Footer.Link href="#">
                  <Icon className="fab fa-snapchat " />
                </Footer.Link>
                <Footer.Link href="#">
                  <Icon className="fab fa-pinterest " />
                </Footer.Link>
                <Footer.Link href="#">
                  <Icon className="fab fa-youtube " />
                </Footer.Link>
              </Footer.Icon>
            </Footer.Column>
          </Footer.Column>
          <Footer.Column className="h">

            <Footer.Title>CUSTOMER SERVICE</Footer.Title>
        
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Orders & delivery</Footer.Link>
            <Footer.Link href="#">Payment & pricing</Footer.Link>
            <Footer.Link href="#">Returns & refunds</Footer.Link>
            <Footer.Link href="#">FAQs</Footer.Link>
            <Footer.Link href="#">Terms & conditions</Footer.Link>
            <Footer.Link href="#">Promotion terms & conditions</Footer.Link>
            <Footer.Link href="#">Privacy policy</Footer.Link>
            <Footer.Link href="#">Accessibility</Footer.Link>
          </Footer.Column>
          <Footer.Column className="h" id="h">                              
            <Footer.Title >ABOUT FARFETCH</Footer.Title>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Investors</Footer.Link>
            <Footer.Link href="#">Boutique Partners</Footer.Link>
            <Footer.Link href="#">Affiliate Programme</Footer.Link>
            <Footer.Link href="#">Student discount UNiDAYS</Footer.Link>
            <Footer.Link href="#">Youth discount</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
            <Footer.Link href="#">Customer Promise</Footer.Link>
            <Footer.Link href="#">FARFETCH App</Footer.Link>
            <Footer.Link href="#">Sitemap</Footer.Link>
            <Footer.Link href="#">Positively FARFETCH</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
