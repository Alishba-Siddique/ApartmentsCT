import { FiArrowUpRight } from 'react-icons/fi';

function Banner() {
    return (
        <div className="relative bg-gradient-to-r from-black to-transparent py-20 px-6 lg:px-32 xl:px-40 flex flex-col lg:flex-row justify-between items-center">
            {/* Background Gradient and Image */}
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage:
                        'url(/images/projects/the-hidden-agenda-of-residenital/hidden-agenda.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1,
                }}
            />

            {/* Left Content */}
            <div className="text-white text-center lg:text-left z-3">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium">
                    Ready to Start Your Project?
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg">
                    Embark on your dream home journey today. Your project, your
                    vision. Our expert at your service.
                </p>
            </div>

            {/* Right Arrow */}
            <div className="mt-6 lg:mt-0 z-3">
                <div className="rounded-full bg-white p-6  cursor-pointer transition-transform transform hover:scale-110">
                    <FiArrowUpRight className="h-16 w-16 xl:h-24 xl:w-24 text-black" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
