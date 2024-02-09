"use client";
import React, { useState, useContext } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { LanguageContext } from "@/contexts/LanguageContext";
import { sendContactInfo } from "@/actions/send-contact-info";
import Swal from "sweetalert2";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const ContactUs: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (phone: string) => {
    setForm({ ...form, phone: "+" + phone });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://rolando1001.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        // Se considera exitoso cualquier código de estado en el rango 200-299
        Swal.fire({
          title: "Enviado",
          icon: "success",
          text: "Your form has been sent successfully.",
        });
        setForm(initialForm);
      } else {
        // Manejar errores según el código de estado
        const errorMessage = await response.text();
        console.error(
          `Form Not Sent - Status: ${response.status}, Message: ${errorMessage}`
        );
        Swal.fire({
          title: "Form Not Sent",
          icon: "error",
          text: "There was an error sending your form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form Not Sent - An error occurred:", error);
      Swal.fire({
        title: "Form Not Sent",
        icon: "error",
        text: "There was an error sending your form. Please try again.",
      });
    }
    
  };

  return (
    <section className="bg-color-contactus p-2rem w-full pb-4" id="contact-us">
      <div className="container mx-auto px-4">
        <h3 className="text-white text-center py-5 font-bold text-2xl">
          {lang === "en" ? "CONTACT US" : "CONTÁCTANOS"}
        </h3>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="grid lg:px-[200px] grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-16">
              <div className="col-span-1">
                <div className="mb-10">
                  <input
                    placeholder={lang === "en" ? "Name" : "Nombre"}
                    className="px-3 py-2 w-full shadow-md rounded-lg"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-10">
                  <input
                    placeholder={lang === "en" ? "Email" : "Correo"}
                    className="px-3 py-2 w-full shadow-md rounded-lg"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-10">
                  <input
                    placeholder={lang === "en" ? "Company" : "Empresa"}
                    className="px-3 py-2 w-full shadow-md rounded-lg"
                    type="text"
                    name="company"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-10">
                  <PhoneInput
                    country={"us"}
                    value={form.phone}
                    inputClass="px-3 py-2 !w-full shadow-md rounded-lg"
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>

              <div className="col-span-1 ">
                <div className="mb-10">
                  <textarea
                    rows={11}
                    placeholder={lang === "en" ? "Message" : "Mensaje"}
                    className="px-3 py-2 w-full  resize-none shadow-md rounded-lg"
                    name="message"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-btn-color-contact hover:bg-orange-600 cursor-pointer text-white py-1 px-10 mt-3 mb-3 font-bold text-xl lg:text-3xl rounded-md text-center hover:bg-opacity-90 lg:w-auto w-full"
              >
                {lang === "en" ? "SEND" : "ENVIAR"}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
