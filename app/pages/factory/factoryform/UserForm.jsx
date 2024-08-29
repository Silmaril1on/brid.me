"use client";
import ArrowSvg from "@/app/components/buttons/ArrowSvg";
import GreenArrow from "@/app/components/buttons/GreenArrow";
import emailjs from "@emailjs/browser";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";

const inputData = [
  {
    id: 0,
    type: "name",
    placeholder: "name surname",
    name: "to_name",
  },
  {
    id: 1,
    type: "company_name",
    placeholder: "company name",
    name: "company_name",
  },
  {
    id: 2,
    type: "email",
    placeholder: "email",
    name: "from_name",
  },
  {
    id: 3,
    type: "phone number",
    placeholder: "phone number",
    name: "phone_number",
  },
  {
    id: 4,
    type: "select",
    placeholder: "offer of packages",
    name: "package_offer",
    options: [
      { label: "micro business", value: "free" },
      { label: "small business", value: "standart" },
      { label: "medium business", value: "standart" },
      { label: "premium", value: "premium" },
    ],
  },
  {
    id: 5,
    type: "select",
    placeholder: "duration of cooperation",
    name: "colab_duration",
    options: [
      { label: "1 month", value: "1 month" },
      { label: "3 month", value: "3 month " },
      { label: "6 month", value: "6 month" },
      { label: "1 year", value: "1 year" },
    ],
  },
];

const UserForm = () => {
  const [active, setActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_fe8p85h", "template_6scpb4c", form.current, {
        publicKey: "bu1XoaSFCfPo8U_Xu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <section className="bg-primaryBg flex justify-center pt-10 flex-col w-full h-full md:w-2/4 p-2">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full center flex-col space-y-2 lg:space-y-4"
      >
        {inputData.map((item) => {
          const { type, placeholder, name, id } = item;
          if (item.type === "select") {
            return (
              <div
                key={id}
                className="form-child-container"
                onClick={() => setActive(id)}
                onMouseLeave={() => setActive(false)}
              >
                <div className="arrow-size">
                  {active === id ? <GreenArrow /> : <ArrowSvg />}
                </div>
                <div className="absolute right-5 h-full center -z-1">
                  <IoIosArrowDown className="text-grayText text-xl" />
                </div>
                <select
                  name={name}
                  className={
                    active === 5
                      ? "footer-input-style placeholder:text-green appearance-none text-xs lg:text-xl"
                      : "footer-input-style appearance-none text-xs lg:text-xl"
                  }
                >
                  {item.options.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          } else
            return (
              <div
                key={id}
                className="form-child-container"
                onClick={() => setActive(id)}
                onMouseLeave={() => setActive(false)}
              >
                <div className="arrow-size">
                  {active === id ? <GreenArrow /> : <ArrowSvg />}
                </div>
                <input
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  className={
                    active === id
                      ? "footer-input-style placeholder:text-green"
                      : "footer-input-style"
                  }
                />
              </div>
            );
        })}
        <div
          id="7"
          onClick={() => setActive(7)}
          onMouseLeave={() => setActive(false)}
          className="form-child-container *:placeholder:pt-1"
        >
          <div className="arrow-size">
            {active === 7 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <textarea
            name="message"
            placeholder="project description"
            className="footer-input-style rounded-3xl h-36 focus:placeholder:text-green"
          ></textarea>
        </div>
        <section className="flex flex-row justify-between w-full px-2 md:px-16">
          <div className="flex flex-col my-3">
            <h1 className="text-[8px] md:text-xs">
              Our meeting will be scheduled by our manager
            </h1>
            <h1 className="text-green text-[9px]">approximate time 2 days</h1>
          </div>
          <input
            type="submit"
            value="Send"
            className="uppercase cursor-pointer underline text-base hover:text-green duration-300 relative z-[2]"
          />
        </section>
      </form>
    </section>
  );
};

export default UserForm;
