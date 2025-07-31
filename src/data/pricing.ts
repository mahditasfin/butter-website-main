import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Lite Version',
        price: 'Book A Demo',
        features: [
            'Automated Refund Management',
            'User-Friendly Mobile Interface',
            'Standardized Refund Claim Initiation',
            'Photo Capture & OCR for Evidencing',
            'Auto-populated refund forms',
            'Partial & Full Claim Initiation',
            'Automated Messaging',
            'Sales Representative Connect (RepConnect)',
            'Claim Tracking & Status Notifications',
            'Limited Users',
            'Guided Onboarding & App Support',
            'Centralized Record Keeping for Easy Auditing',
        ],
    },
    {
        name: 'Premium Version',
        price:'Coming Soon',
        features: [
            'All the Lite features plus:',
            'Multi-User Permissions',
            'Supplier Return Instructions if Return Required for Credit Refund',
            'Supplier Message Customization',
            'Advanced Analytics & Quarterly Refund Reports',
            'Multi-language Support',
            'Multi-unit Support',
            'Product Recommendations (Coming Soon)',
        ],
    },
    {
        name: 'Licensing & Enterprise',
        price: 'Custom Pricing',
        features: [
            'All the Premium features plus:',
            'Unlimited Claim Transactions',
            'Food & Beverage Distributors',
            'Restaurant Management Software Provider',
            'Access to Refund Data Reports',
            'Improved Enterprise Decision Making',
            'Avoid Supply Chain Issues by Gaining Visibility ',
        ],
    },
];
