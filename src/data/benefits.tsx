import { FiBell, FiCamera, FiCheckCircle, FiClock, FiDollarSign, FiFileText, FiMail, FiRepeat } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Submit Claims in 60 Seconds",
    description: "Submit claims in seconds with smart photo uploads, auto-filled forms, and built-in verification checks.",
    bullets: [
      {
        title: "Image Processing with AI",
        description: "Snap a photo of your invoice — we extract item and price details instantly with smart OCR.",
        icon: <FiCamera size={26} />
      },
      {
        title: "Attach Proof in 3 Photos",
        description: "Upload images of the damaged product, the invoice, and the item code or label to support your claim.",
        icon: <FiFileText size={26} />
      },
      {
        title: "Auto-Check with Manual Review",
        description: "AI fills out your claim, then lets you review and make changes before it's sent to your supplier.",
        icon: <FiCheckCircle size={26} />
      }
    ],
    imageSrc: "/images/demo1.gif"
  },
  {
    title: "Easy Claim Communication",
    description: "Keep everyone updated with instant alerts, email/SMS updates, and smart follow-up nudges.",
    bullets: [
      {
        title: "Email & Text Notifications",
        description: "Get automatic status updates via email and text as your claim moves through the process.",
        icon: <FiMail size={26} />
      },
      {
        title: "Real-Time Notifications",
        description: "Get notified the moment a supplier responds, approves, or takes action on your claim.",
        icon: <FiBell size={26} />
      },
      {
        title: "Automated Nudging",
        description: "We’ll follow up for you — keeping suppliers accountable and your claim on track.",
        icon: <FiClock size={26} />
      }
    ],
    imageSrc: "/images/hero2.png"
  },
  {
    title: "Simple Reconciliation",
    description: "Finish the loop with credits, AP adjustments, and synced ledgers — no spreadsheets needed.",
    bullets: [
      {
        title: "Credit Memo Generation",
        description: "Generate supplier credit memos automatically once a claim is approved and processed.",
        icon: <FiFileText size={26} />
      },
      {
        title: "AP (Accounts Payable) Adjustment",
        description: "Update your books to reflect refunds clearly and cleanly, with no manual entry required.",
        icon: <FiDollarSign size={26} />
      },
      {
        title: "Automated Ledger Updates",
        description: "Sync claims with your financial records in real time so your reports are always accurate.",
        icon: <FiRepeat size={26} />
      }
    ],
    imageSrc: "/images/hero3.gif"
  }
];
