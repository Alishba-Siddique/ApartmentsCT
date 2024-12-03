import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import FounderInfo from '../components/home-page/founderInfo';
import About from '../components/home-page/about';
import Banner from '../components/home-page/banner';
import HowWeScale from '../components/home-page/weScale';
import PricingTab from '../components/home-page/pricing-tab';
import Testimonial from '../components/home-page/testimonial';
import Brand from '../components/home-page/brand';
import FeaturedPost from '../components/home-page/featured-post';
import LatestProject from '../components/home-page/latest-project';
import Difference from '../components/home-page/difference';
import Accordion from '../components/home-page/accordion';

function HomePage({
    heroItems,
    services,
    projects,
    pricingItems,
    testimonialItems,
    accordionItems,
    brandItems,
    posts,
}) {
    return (
        <>
            <Head>
                <title>ApartmentsCT</title>
                <meta
                    name="description"
                    content="ApartmentsCT is a real estate company that provides a wide range of apartments for rent in Connecticut."
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={heroItems} />
            {/* <Services services={services} /> */}

            <FounderInfo />
            <About />
            <LatestProject projects={projects} />
            <HowWeScale />
            <Difference />
            <Accordion accordionItems={accordionItems} />
            {/* <PricingTab pricingItems={pricingItems} /> */}
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="What Our Clients Say"
            />
            <Banner />
            {/* <Brand brandItems={brandItems} />
            <FeaturedPost posts={posts} /> */}
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const accordionItems = getAllItems('accordion');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            accordionItems,
            brandItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    pricingItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    accordionItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
