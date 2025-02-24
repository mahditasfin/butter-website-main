import { FiBarChart, FiBarChart2, FiBell, FiBriefcase, FiCamera, FiCheckCircle, FiClock, FiDollarSign, FiFileText, FiLock, FiMail, FiPieChart, FiRepeat, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Claim Initiation",
        description: "Streamline claim processing with automated data extraction, verification, and standardized claim submissions.",
        bullets: [
            {
                title: "Image Processing with OCR",
                description: "Extract claim details from invoices and receipts with AI-powered Optical Character Recognition (OCR).",
                icon: <FiCamera size={26} />
            },
            {
                title: "Standardized Claims with Evidencing",
                description: "Ensure consistency with auto-filled claim forms and attached image evidence.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Automated Data Validation",
                description: "Reduce errors with AI-driven verification and automatic flagging of discrepancies.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/demo1.gif"
    },
    {
        title: "Claim Communication",
        description: "Keep all stakeholders informed with real-time notifications, automated follow-ups, and multi-channel communication.",
        bullets: [
            {
                title: "Email & Text Notifications",
                description: "Ensure seamless communication between restaurants and suppliers via email and SMS updates.",
                icon: <FiMail size={26} />
            },
            {
                title: "Real-Time Notifications",
                description: "Receive instant updates on claim progress and actions taken by suppliers.",
                icon: <FiBell size={26} />
            },
            {
                title: "Automated Nudging",
                description: "Avoid delays with automated reminders and follow-ups to keep claims moving forward.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/hero2.png"
    },
    {
        title: "Claim Reconciliation",
        description: "Seamlessly reconcile financial adjustments with automated credit memos, AP adjustments, and real-time ledger updates.",
        bullets: [
            {
                title: "Credit Memo Generation",
                description: "Automatically issue credit memos to adjust balances and reconcile claims efficiently.",
                icon: <FiFileText size={26} />
            },
            {
                title: "AP (Accounts Payable) Adjustment",
                description: "Seamlessly adjust accounts payable to reflect the correct refund and reconciliation.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Automated Ledger Updates",
                description: "Sync all adjustments with financial records to maintain accurate bookkeeping.",
                icon: <FiRepeat size={26} />
            }
        ],
        imageSrc: "/hero3.gif"
    },
]