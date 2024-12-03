import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';

function Accordion({ accordionItems }) {
    const [openIndex, setOpenIndex] = useState(null);

    // Sort items by order if needed
    const sortedItems =
        accordionItems?.items?.sort((a, b) => a.order - b.order) || [];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container space-y-4 py-10">
            <h2 className="text-3xl font-bold mb-6">Services</h2>
            {sortedItems.map((item) => (
                <div
                    key={item.order} // Use a unique identifier
                    className="border-b border-gray-200 last:border-b-0"
                >
                    <button
                        type="button" // Explicit button type
                        className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                        onClick={() => toggleAccordion(item.order)}
                    >
                        <div className="flex items-center">
                            <span className="text-gray-400 mr-4">
                                {String(item.order).padStart(2, '0')}
                            </span>
                            <span className="font-medium text-gray-900">
                                {item.title}
                            </span>
                        </div>
                        <ArrowUpRight
                            className={`h-10 w-10 text-gray-900 transition-transform duration-200 ${
                                openIndex === item.order ? 'rotate-90' : ''
                            }`}
                        />
                    </button>
                    {openIndex === item.order && (
                        <div className="pb-4 pr-12 pl-12 text-gray-600">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

// Add PropTypes validation
Accordion.propTypes = {
    accordionItems: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                order: PropTypes.number.isRequired,
            })
        ),
    }).isRequired,
};

export default Accordion;
