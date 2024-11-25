import { FiHelpCircle, FiKey, FiGlobe } from 'react-icons/fi';

function difference() {
    return (
        <section className="bg-[#111111] text-white py-12 px-6 lg:px-36 lg:py-44">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-medium">
                    What are Our Differentiation?
                </h2>
                <p className="mt-4 text-gray-400">
                    Our expertise lies in attending with attention to every
                    detail, both technically and visually.
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Expert Advice */}
                <div className="bg-[#111111] p-6 rounded-lg flex flex-col items-center text-center hover:drop-shadow-xl">
                    <FiHelpCircle className="text-gray-400 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                        Expert Advice
                    </h3>
                    <p className="text-gray-400">
                        Our specialized advisors provide personalized insights,
                        making your real estate journey seamless.
                    </p>
                </div>

                {/* Exclusive Property */}
                <div className="bg-[#111111] p-6 rounded-lg flex flex-col items-center text-center hover:drop-shadow-xl">
                    <FiKey className="text-gray-400 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                        Exclusive Property
                    </h3>
                    <p className="text-gray-400">
                        Join our exclusive events for early access to unique and
                        high-value properties in the market.
                    </p>
                </div>

                {/* Global Network */}
                <div className="bg-[#111111] p-6 rounded-lg flex flex-col items-center text-center hover:drop-shadow-xl">
                    <FiGlobe className="text-gray-400 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                        Global Network
                    </h3>
                    <p className="text-gray-400">
                        Access a vast network of international properties,
                        opening doors to a world of possibilities.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default difference;
