import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:abdelkaderismail82@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 
    justify-evenly mx-auto items-center max-w-md"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className=" flex flex-col space-y-5 mt-24">
        <h4 className="text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-base">+44777777</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-base">116 London road</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-base">Email</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex flex-col space-y-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput" // Add a new class for smaller input fields
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput" // Add a new class for smaller input fields
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput" // Add a new class for smaller input fields
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput" // Add a new class for smaller input fields
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black 
                    font-bold text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
