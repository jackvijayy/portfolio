"use client";

import Image from "next/image";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "@/Hooks/useAlert";
import Button from "./ui/Button";
import { ArrowBigRight } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_jw0529b",
        "template_6cz0lhh",
        {
          from_name: form.name,
          to_name: "vijayAnand",
          from_email: form.email,
          to_email: "jackvijay1108@gmail.com",
          message: form.message,
        },
        "kw51Vl7ry9_YR6w4a"
      )
      .then(
        () => {
          setLoading(false);
          const notify = () => toast.success('Message Send',{
            icon:'✅',
            style: {
              borderRadius: '10px',
              background: '#70e000',
              color: '#fff',
            },
          });
          notify()
          setTimeout(() => {
            
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          const notify = () => toast.success('Problem To send Message',{
            icon:'🚫',
            style: {
              borderRadius: '10px',
              background: '#fff',
              color: '#252422',
            },
          });
          notify()

          
        }
      );
  };

  return (
    <section className="my-20">
      <div className="flex justify-between items-center gap-2">
        <div className="hidden lg:block max-w-[512px] ">
          <Image
            src="/images/contact.png"
            alt="contact"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="p-3 flex-1">
          <h2 className="text-[#E4ECFF] capitalize my-5 text-2xl lg:text-3xl">
            Let's Talk
          </h2>

          {/* form */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col justify-start  p-3 h-full"
          >
            <label className="flex flex-col gap-3 ">
              <span className="text-white">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-black-2 border-none rounded-md p-2 w-full  ring-neutral-200"
                placeholder="ex., saravana"
              />
            </label>

            <label className="flex flex-col gap-3 mt-5">
              <span className="text-white">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-black-2 rounded-md border-none p-2 w-full  ring-neutral-200"
                placeholder="ex., saro@gmail.com"
              />
            </label>

            <label className="flex- flex-col  mt-5">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-black-2 rounded-md border-none p-2 mt-2 w-full  ring-neutral-200"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <Button
              text={loading ? "Sending....." : "send Message"}
              className={`${loading && "bg-green-500"} mt-4`}
            >
              {loading ? "" :<ArrowBigRight className="text-center" /> }
              <Toaster />
              
            </Button>
          </form>
          

        </div>
      </div>
    </section>
  );
};

export default Contact;
