import Link from 'next/link';
import Image from 'next/image';

function About() {
    const subTitle = `text-[18px] leading-[32px] text-white uppercase`; // Changed text color to white
    const title = `text-[34px] lm:text-[40px] lm:leading-[50px] text-white font-bold mb-[35px] lg:max-w-[560px]`; // Changed text color to white
    const desc = `text-[17px] leading-[25px] text-white  mb-[40px] lg:max-w-[510px]`; // Changed text color to white
    const aboutImage = `flex lg:justify-start md:justify-center relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[45px] sm:before:right-[65px]`;

    return (
        <div
            id="about"
            className="about-area md:pt-[150px] pt-[50px] pb-28 bg-black"
        >
            {' '}
            {/* Added bg-black */}
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col">
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/Oz.webp" // Ensure this image is appropriate
                            alt="Owner Image" // Changed alt text for clarity
                            width={440}
                            height={490}
                            quality={70}
                            layout="fixed"
                            objectFit="cover"
                            priority
                            className="filter grayscale"
                        />
                    </div>
                    <div className="about-content max-md:py-6 ">
                        {/* <span className={subTitle}>About</span> */}
                        <h2 className={title}>Founder of Apartments CT</h2>
                        {/* <h3 className="text-white text-2xl mb-12"> {/* Changed text color to white 
                            We know that good design means good business
                        </h3> */}
                        <p className={desc}>
                            Oz is the visionary founder of Apartments CT, a real
                            estate company dedicated to facilitating the buying
                            and selling of apartments throughout Connecticut.
                            With a strong background in real estate and a
                            passion for helping clients find their ideal homes,
                            Oz has established Apartments CT as a trusted name
                            in the industry. Under his leadership, the company
                            has become well-regarded for its expertise in key
                            Connecticut cities such as Hartford, Bridgeport,
                            Stamford, and New Haven.
                        </p>
                        <p className={desc}>
                            Oz&apos;s commitment to customer satisfaction and
                            his deep understanding of the local market have
                            driven the company&apos;s growth, enabling it to
                            effectively meet the diverse needs of its clientele.
                            His innovative approach and dedication to excellence
                            continue to shape Apartments CT&apos;s reputation as
                            a leader in Connecticut&apos;s real estate
                            landscape.
                        </p>
                        <Link href="/about">
                            <a className="boxed-btn text-[18px] leading-[30px]">
                                More About Oz
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
