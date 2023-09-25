import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="main-footer" class="py-2">
        <div class="container footer-container">
      <div>
        <img src="../../public/img/logo_light.png" alt="NewsGrid"/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum vitae.</p>
      </div>
      <div>
        <h3>Email Newsletter</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form>
          <input type="email" placeholder="Enter Email..."/>
          <input type="submit" value="Subscribe" class="btn btn-primary"/>
        </form>
      </div>
      <div>
        <h3>Site Links</h3>
        <ul class="list">
          <li><Link to="#">Help & Support</Link></li>
          <li><Link to="#">Privacy Policy</Link></li>
          <li><Link to="#">About Us</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h2>Join Our Club</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nesciunt!</p>
        <Link to="#" class="btn btn-secondary">Join Now</Link>
      </div>
      <div>
        <p>
          Copyright &copy; 2019, All Rights Reserved
        </p>
      </div>
    </div>
      </footer>
    </>
  );
}
