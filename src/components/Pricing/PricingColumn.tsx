import clsx from "clsx";
import Link from "next/link";               // ✅ use Link (or plain <a>)
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IPricing } from "@/types";

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }) => {
  const { name, price, features } = tier;

  return (
    <div
      className={clsx(
        "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200",
        { "shadow-lg": highlight }
      )}
    >
      {/* ─────────────────── header ─────────────────── */}
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="mb-4 text-2xl font-semibold">{name}</h3>

        <p className="mb-6 text-3xl font-bold md:text-5xl">
          <span className={clsx({ "text-secondary": highlight })}>
            {price}
          </span>
          {typeof price === "number" && (
            <span className="text-lg font-normal text-gray-600">/mo</span>
          )}
        </p>

        {/* CTA button styled link */}
        <Link
          href="https://calendly.com/vin-puleio/45min"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "block w-full rounded-full py-3 px-4 text-center transition-colors",
            {
              "bg-primary hover:bg-primary-accent text-white": highlight,
              "bg-hero-background hover:bg-gray-200 text-black": !highlight
            }
          )}
        >
          Get Started
        </Link>
      </div>

      {/* ─────────────────── features ─────────────────── */}
      <div className="p-6 mt-1">
        <p className="mb-0 font-bold">FEATURES</p>
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill className="mr-2 h-5 w-5 text-secondary" />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingColumn;
