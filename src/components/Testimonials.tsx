import React from 'react';
import { FaUtensils, FaStore, FaWarehouse, FaMoneyCheckAlt } from 'react-icons/fa'; // Import Icons

// Integration Data
const integrations = [
    {
        name: 'F&B Distributors',
        icon: <FaUtensils className="text-gold text-4xl" />,
        description: 'Seamless claims and inventory tracking with top F&B distributors.',
    },
    {
        name: 'Restaurant POS Systems',
        icon: <FaStore className="text-gold text-4xl" />,
        description: 'Directly integrate refunds into your restaurant POS system.',
    },
    {
        name: 'Back-of-the-house Systems',
        icon: <FaWarehouse className="text-gold text-4xl" />,
        description: 'Automated tracking & claim processing for kitchen & supplier workflows.',
    },
    {
        name: 'Accounts Payable Software',
        icon: <FaMoneyCheckAlt className="text-gold text-4xl" />,
        description: 'Reconcile claims with AP automation, reducing financial errors.',
    }
];

const Integrations: React.FC = () => {
    return (
        <div className="grid gap-8 max-w-lg w-full mx-auto lg:grid-cols-2 lg:max-w-full">
            {integrations.map((integration, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-3">{integration.icon}</div>
                    <h3 className="text-lg font-semibold text-secondary">{integration.name}</h3>
                    <p className="text-sm text-foreground-accent mt-2">{integration.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Integrations;