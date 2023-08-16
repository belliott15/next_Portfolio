import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col  text-center">
      <form className="w-full flex-col">
        <h2 className="text-2xl ">Contact Me</h2>
        <input
          required
          placeholder='"Your Email"'
          className="pl-2 rounded"
        ></input>
        <textarea
          placeholder="I would love to hear from you!"
          className="p-2 h-40 m-4 rounded bg-white opacity-50 text-black"
          required
        ></textarea>
        <button className="bg-white rounded p-2 w-20">Punch It!</button>
      </form>
    </section>
  );
};

export default Footer;
