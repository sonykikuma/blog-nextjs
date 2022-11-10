import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return;
  <Fragment>
    <Head>
      <title>
        Contact Me
        <meta name="decription" content="Send me your messages!"></meta>
      </title>
    </Head>{" "}
    <ContactForm />
  </Fragment>;
};

export default ContactPage;
