import React from 'react';
import ContactForm from '../SiteComponents/ContactForm';
import Navbar from '../SiteComponents/Navbar';
import Footer from '../SiteComponents/Footer';

function ContactPage() {
  return (
    <div>
        <Navbar/>
      <h1>Contattami</h1>
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default ContactPage;
