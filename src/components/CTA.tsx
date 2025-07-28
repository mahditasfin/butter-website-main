"use client";

import { ctaDetails } from "@/data/cta";
import { useState } from "react";

const CTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative z-10 mx-auto rounded-3xl bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-95">
        {/* radial tint */}
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]" />

        <div className="relative flex flex-col gap-10 px-6 py-12 text-white sm:px-10 sm:py-16 md:flex-row lg:px-20 lg:py-20">
          {/* ────────── LEFT – FORM ────────── */}
          <div className="w-full md:w-1/2">
            {submitted ? (
              <div className="rounded-xl bg-green-50/10 p-8 text-center md:text-left">
                <h3 className="mb-3 text-2xl font-semibold text-green-200">
                  Thank you!
                </h3>
                <p className="text-green-100">
                  We’ll reach out shortly to schedule your personalised demo.
                </p>
              </div>
            ) : (
              <form
                name="demo"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  data.append("form-name", "demo");
                  fetch("/", { method: "POST", body: data }).then(() =>
                    setSubmitted(true)
                  );
                }}
              >
                <input type="hidden" name="bot-field" />
                <h3 className="text-2xl font-semibold">Book a demo</h3>

                {/** Re-usable input component */}
                {([
                  { label: "Name", name: "name", type: "text", ph: "Jane Doe" },
                  {
                    label: "Work E-mail",
                    name: "email",
                    type: "email",
                    ph: "jane@restaurant.com",
                  },
                  {
                    label: "Company",
                    name: "company",
                    type: "text",
                    ph: "Good Eats Inc.",
                  },
                ] as const).map((f) => (
                  <label key={f.name} className="flex flex-col text-sm">
                    {f.label}
                    <input
                      name={f.name}
                      type={f.type}
                      required
                      placeholder={f.ph}
                      className="mt-2 rounded-lg bg-[#1e2329] px-4 py-3 placeholder-gray-400
                                 ring-1 ring-[#2d333b] focus:outline-none
                                 focus:ring-2 focus:ring-yellow-500"
                    />
                  </label>
                ))}

                {/* Message */}
                <label className="flex flex-col text-sm">
                  Message&nbsp;(optional)
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about your workflow…"
                    className="mt-2 resize-none rounded-lg bg-[#1e2329] px-4 py-3 placeholder-gray-400
                               ring-1 ring-[#2d333b] focus:outline-none
                               focus:ring-2 focus:ring-yellow-500"
                  />
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="mx-auto mt-2 w-max rounded-full bg-yellow-400 px-10 py-3 font-semibold
                             text-black shadow-md transition hover:bg-yellow-500
                             focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Book&nbsp;a&nbsp;Demo
                </button>
              </form>
            )}
          </div>

          {/* ────────── RIGHT – COPY ────────── */}
          <div className="flex w-full flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left">
            <h2 className="mb-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {ctaDetails.heading}
            </h2>
            <p className="mx-auto max-w-xl md:mx-0 md:px-0">
              {ctaDetails.subheading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
