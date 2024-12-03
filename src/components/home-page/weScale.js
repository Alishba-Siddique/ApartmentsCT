import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { TfiHome } from 'react-icons/tfi';

function HowWeScale() {
    const [inView, setInView] = useState(false); // To track when the section is in the viewport

    const title = `text-[34px] lm:text-[40px] lm:leading-[50px] text-black font-bold mb-[35px] lg:max-w-[560px]`;
    const desc = `text-[17px] leading-[25px] text-black mb-[50px] lg:max-w-[520px]`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true); // Set inView to true when section is in the viewport
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is in view
            }
        );

        const section = document.getElementById('how-we-scale-section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <div
            id="how-we-scale-section"
            className="flex flex-col lg:flex-row items-stretch py-5 lg:items-start lg:justify-between lg:gap-18 px-[15px] lg:py-28 lg:px-28"
        >
            {/* Left Section: Text Content */}
            <div className="pt-12 md:items-stretch lg:pt-0 lg:w-1/2 lg:px-5 lg:pl-16">
                <h2 className={title}>How we scale</h2>
                <p className={desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum elit non facilisis facilisis. Aliquam et
                    dignissim nisi. Integer sit amet magna id erat fermentum
                    vehicula non nec risus.
                </p>
                <p className={desc}>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Cras sit amet urna magna.
                    Proin nec varius sem. Curabitur convallis tellus nec sapien
                    pellentesque, non tincidunt lorem blandit.
                </p>
            </div>

            {/* Right Section: Statistics */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-start">
                    <h3 className="text-4xl md:text-5xl font-normal mb-11">
                        {inView && (
                            <CountUp
                                start={0}
                                end={3500}
                                duration={2}
                                suffix="+"
                                startOnMount
                            />
                        )}
                    </h3>
                    <p className="text-gray-600 text-xl">Happy Customers</p>
                </div>

                {/* Card 2 */}
                <div className="bg-black text-white p-6 rounded-lg shadow-sm text-start">
                    <h3 className="text-4xl md:text-5xl font-normal mb-11">
                        {inView && (
                            <CountUp
                                start={0}
                                end={15}
                                duration={2.2}
                                suffix="+"
                                startOnMount
                            />
                        )}
                    </h3>
                    <p className="text-gray-300 text-xl">Years Experience</p>
                </div>

                {/* Card 3 */}
                <div className="grid grid-cols-subgrid gap-6 col-span-2 bg-gray-100 p-6 rounded-lg shadow-sm text-start">
                    <div className="col-start-1">
                        <h3 className="text-4xl md:text-5xl font-normal mb-11">
                            {inView && (
                                <CountUp
                                    start={0}
                                    end={10000}
                                    duration={2.4}
                                    suffix="+"
                                    startOnMount
                                />
                            )}
                        </h3>
                        <p className="text-gray-600 text-xl">Property Ready</p>
                    </div>
                    <div className="col-start-2 place-items-center">
                        <TfiHome size={126} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWeScale;
