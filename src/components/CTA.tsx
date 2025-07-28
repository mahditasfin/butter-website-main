"use client";

import { useState } from "react";
import { ctaDetails } from "@/data/cta";

const CTA: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    data.append("form-name", "demo");
    await fetch("/", { method: "POST", body: data });
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="cta" className="my-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#050a02] p-14 lg:p-16 text-white">
        <div className="flex flex-col gap-16 lg:gap-20 md:flex-row">
          {/* LEFT – form */}
          <div className="w-full md:w-1/2">
            {sent ? (
              <p className="rounded-xl bg-green-50/10 p-10 text-center md:text-left">
                Thanks! We’ll reach out soon.
              </p>
            ) : (
              <form
                name="demo"
                method="POST"
                data-netlify="true"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="demo" />

                <h3 className="text-3xl font-semibold">Book a demo</h3>

                <label className="flex flex-col text-sm">
                  Your Name:
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="mt-2 rounded-lg bg-[#1e2329] px-5 py-4 placeholder-gray-400
                               ring-1 ring-[#2d333b] focus:ring-2 focus:ring-yellow-500"
                  />
                </label>

                <label className="flex flex-col text-sm">
                  Your Email:
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@org.com"
                    className="mt-2 rounded-lg bg-[#1e2329] px-5 py-4 placeholder-gray-400
                               ring-1 ring-[#2d333b] focus:ring-2 focus:ring-yellow-500"
                  />
                </label>

                <label className="flex flex-col text-sm">
                  Company:
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="Good Eats Inc."
                    className="mt-2 rounded-lg bg-[#1e2329] px-5 py-4 placeholder-gray-400
                               ring-1 ring-[#2d333b] focus:ring-2 focus:ring-yellow-500"
                  />
                </label>

                <label className="flex flex-col text-sm">
                  Message:
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit about your workflow…"
                    className="mt-2 rounded-lg bg-[#1e2329] px-5 py-4 placeholder-gray-400
                               ring-1 ring-[#2d333b] focus:ring-2 focus:ring-yellow-500"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="mx-auto block rounded-full bg-yellow-400 px-12 py-4
                             text-lg font-semibold text-black transition
                             hover:bg-yellow-500 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Book a Demo"}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT – copy */}
          <div className="flex w-full flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left">
            <h2 className="mb-6 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {ctaDetails.heading}
            </h2>
            <p className="max-w-md text-lg opacity-80 lg:text-xl">
              {ctaDetails.subheading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
