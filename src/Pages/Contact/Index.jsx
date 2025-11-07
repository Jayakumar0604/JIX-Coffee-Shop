import React from "react";
import SBackground from "../../Components/SBackground/Index";
import Back from "../../assets/Contact.jpg";
import AllContact from "./AllContact";
import Map from "./Map";

const Contact = () => {
  return (
    <>
      <SBackground
        title="Contact Us"
        text="Have a question about our beans, need catering information, or just want to say hello? We're here to help! Reach out to our friendly team via phone, email, or visit us in person."
        image={Back}
      />
      <AllContact />
      <Map />
    </>
  );
};

export default Contact;
