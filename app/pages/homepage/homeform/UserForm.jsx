"use client";
import { useRef, useState } from "react";
import ArrowSvg from "@/app/components/buttons/ArrowSvg";
import GreenArrow from "@/app/components/buttons/GreenArrow";
import TextAnimation from "@/app/components/TextAnimation";
import Contact from "./Contact";
import emailjs from "@emailjs/browser";

const inputData = [
  {
    id: 0,
    type: "text",
    placeholder: "your name",
    name: "to_name",
  },
  {
    id: 1,
    type: "email",
    placeholder: "your email",
    name: "from_mail",
  },
];

const UserForm = () => {
  const [active, setActive] = useState(null);
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_fe8p85h",
          "template_5b2cysk",
          formRef.current,
          "bu1XoaSFCfPo8U_Xu"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.error("FAILED...", error);
          }
        );
      e.currentTarget.reset();
    }
  };

  return (
    <div className="bg-primaryBg flex flex-col justify-evenly lg:flex-row lg:justify-between h-full">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="px-3 lg:px-5 w-full md:w-[40%] flex flex-col justify-center"
      >
        <div>
          {inputData.map((item) => {
            const { type, placeholder, id, name } = item;
            return (
              <div
                key={id}
                onClick={() => setActive(id)}
                onMouseLeave={() => setActive(null)}
                className="flex flex-row my-2 pb-1 border-b border-lineColor"
              >
                <div className="arrow-size">
                  {active === id ? <GreenArrow /> : <ArrowSvg />}
                </div>
                <input
                  id={type}
                  type={type}
                  name={name}
                  autoComplete="off"
                  placeholder={placeholder}
                  className={`footer-input-style ${
                    active === item.id ? "placeholder:text-green" : ""
                  }`}
                />
              </div>
            );
          })}
          <div
            id="2"
            onClick={() => setActive(2)}
            onMouseLeave={() => setActive(false)}
            className="w-full border-b border-lineColor flex flex-row justify-start *:placeholder:pt-1"
          >
            <div className="arrow-size">
              {active === 2 ? <GreenArrow /> : <ArrowSvg />}
            </div>
            <textarea
              name="message"
              placeholder="tell us about your project"
              className={
                active === 2
                  ? "footer-input-style h-24 lg:h-36 placeholder:text-green"
                  : "footer-input-style h-24 lg:h-36"
              }
            />
          </div>
        </div>

        <section className="flex flex-row items-center lg:items-end xl:items-center justify-between w-full lg:mt-4">
          <Text />
          <div className="my-2">
            <input
              type="submit"
              value="Send"
              className="uppercase text-[14px] cursor-pointer underline hover:text-green duration-300"
            />
          </div>
        </section>
      </form>
      <Contact />
    </div>
  );
};

const Text = () => {
  return (
    <div className="w-[250px] md:w-[450px] *:text-[8px] *:lg:text-sm *:lg:leading-4">
      <TextAnimation text="fill out the form and We will" />
      <TextAnimation text="get back to you" />
    </div>
  );
};

export default UserForm;
