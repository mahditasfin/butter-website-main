import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `What is ${siteDetails.siteName}?`,
    answer: `${siteDetails.siteName} is an end-to-end inventory refund-management system connecting food outlets with their suppliers.`,
  },
  {
    question: `Who can use ${siteDetails.siteName}?`,
    answer:
      "Restaurants, cafés, catering companies, convenience stores—any venue that sells food—as well as their suppliers and sales reps.",
  },
  {
    question: "How does a refund claim work?",
    answer:
      "Open the app, click on add claim, add three photos (barcode, invoice, product evidence), then send the claim by email to the supplier’s sales rep.",
  },
  {
    question: "Which photos are required?",
    answer:
      "Clear barcode of the item, invoice image showing price & date & one photo proving the damage and quality issue related to the inventory item.",
  },
  {
    question: "What happens after I send a claim?",
    answer:
      "The sales rep receives an email with your evidence and claim details. They can accept, reject, or relay it for approval to their accounting team.",
  },
  {
    question: `Can I use ${siteDetails.siteName} with multiple suppliers?`,
    answer:
      "Yes. Butter is supplier-agnostic—you can add as many supplier contacts as you like and send each claim to the appropriate sales rep with a single tap.",
  },
  {
    question: "What if the supplier doesn’t respond?",
    answer:
      "You can nudge the rep automatically at 24 h, 48 h, and 72 h intervals until a decision is made.",
  },

  {
    question: "How can I contact support?",
    answer:
      "Please contact us at tasfinmahdi@gmail.com, and we will get back to you as soon as possible.",
  },
];
