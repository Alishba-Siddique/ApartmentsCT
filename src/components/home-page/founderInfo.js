import Link from 'next/link';
import Image from 'next/image';

function founderInfo() {
    const subTitle = `text-[18px] leading-[32px] text-black uppercase`; // Changed text color to white
    const title = `text-[36px] lm:text-[42px] lm:leading-[50px] text-black font-normal mb-[35px] lg:max-w-[560px]`; // Changed text color to white
    const desc = `text-[17px] leading-[25px] text-black mb-[50px] lg:max-w-[490px]`; // Changed text color to white
    const aboutImage = `flex lg:justify-end md:justify-center relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[330px] sm:before:w-[330px] sm:before:top-[45px] sm:before:left-[155px]`;

    return (
        <div
            id="about"
            className="about-area md:pt-[150px] pt-[50px] pb-24 bg-transparent"
        >
            {' '}
            {/* Added bg-black */}
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col">
                    <div className="about-content max-md:py-6">
                        {/* <span className={subTitle}>About</span> */}
                        <h2 className={title}>About us</h2>
                        {/* <h3 className="text-black text-2xl mb-12"> 
                            We know that good design means <br /> good business
                        </h3> */}
                        <p className={desc}>
                            Apartments CT is a prominent real estate company
                            specializing in the sale of apartments across
                            Connecticut, catering to a diverse clientele in
                            major cities such as Hartford, Bridgeport, Stamford,
                            and New Haven. With its deep understanding of the
                            local real estate market, Apartments CT helps
                            clients navigate the complexities of buying and
                            selling properties, ensuring they find the right fit
                            for their needs. The company is well-versed in the
                            unique characteristics of each city, from
                            Hartford&apos;s rich history and government presence
                            to Stamford&apos;s thriving business environment and
                            New Haven&apos;s cultural vibrancy.
                        </p>
                        <Link href="/about">
                            <a className="boxed-btn text-[18px] leading-[30px]">
                                More About Us
                            </a>
                        </Link>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/CT-map.png" // Ensure this image is appropriate
                            alt="Owner Image" // Changed alt text for clarity
                            width={540}
                            height={450}
                            quality={70}
                            layout="fixed"
                            objectFit="contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default founderInfo;
