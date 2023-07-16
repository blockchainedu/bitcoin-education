﻿import React, { useState } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import Image from 'next/image';
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from 'next/script';
import { getProjectsFromMonday } from '../services';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from "styled-components";
import Mailchimp from 'react-mailchimp-form';
import { useAppContext } from '../context/state';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import FeatureSlider from '../components/featureSlider';
import Modal from '../components/donateSliderButton';
import StandardButton from '../components/standardButton';
import DonateOptions from '../components/donateOptions';
import PopUpVideo from '../components/popupVideo';
import { MediaType } from "../components/map"
import FAQItem from '../components/faqItem';
import MailchimpWithRedirect from "../components/mailchimpWithRedirect";
import Popup from '../components/popup';
import BlogGrid from '../components/blogGrid';

const impactStats = [
    {
        image: "/images/ambassadors-icon-home.png",
        number: "200+",
        name: "Ambassadors",
        imageStyling: "translate-y-10 transform",
        nameStyling: ""
    },
    {
        image: "/images/companies-icon-home.png",
        number: "250+",
        name: "Companies Founded",
        imageStyling: "translate-y-10 transform",
        nameStyling: ""
    },
    {
        image: "/images/valuations-icon-home.png",
        number: "3B",
        name: "Valuation of companies founded through ben",
        imageStyling: "translate-y-5 transform mx-auto lg:mx-0",
        nameStyling: ""
    },
    {
        image: "/images/jobs-icon-home.png",
        number: "1500+",
        name: "Jobs matched",
        imageStyling: "translate-y-5 transform",
        nameStyling: ""
    },
]

const Map = dynamic(() => import("../components/map"), {
    loading: () => "Loading...",
    ssr: false
})

export default function Home({ locations }) {

    const { sharedState, setSharedState } = useAppContext();
    const [globalClick, setGlobalClick] = useState(false);

    // Define the gtag_report_conversion function
    const gtag_report_conversion = (url) => {
      var callback = function () {
        if (typeof(url) !== 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
        'send_to': 'AW-11202135402/VQLfCM_u8LUYEOqKzN0p',
        'event_callback': callback
      });
      return false;
    };

    if (locations.length === 0) {
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

if (typeof window !== 'undefined') {
  // Check if the UTM parameters are present in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  // Retrieve the stored UTM parameters from session storage
  const storedUtmSource = sessionStorage.getItem('utm_source');
  const storedUtmMedium = sessionStorage.getItem('utm_medium');
  const storedUtmCampaign = sessionStorage.getItem('utm_campaign');

  // Check if the UTM parameters are present in the URL and not already stored
  if (utmSource && !storedUtmSource) {
    sessionStorage.setItem('utm_source', utmSource);
  }
  if (utmMedium && !storedUtmMedium) {
    sessionStorage.setItem('utm_medium', utmMedium);
  }
  if (utmCampaign && !storedUtmCampaign) {
    sessionStorage.setItem('utm_campaign', utmCampaign);
  }
}


  return (

    <div id="home">

      <Header />

      <Head>

        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7187550270272911"
          crossOrigin="anonymous">
        </script>

        <script type="text/javascript" async 
          src="https://embeds.beehiiv.com/attribution.js">
        </script>

        {/* Event snippet for Begin checkout conversion page
            In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-11202135402/VQLfCM_u8LUYEOqKzN0p',
                  'event_callback': callback
              });
              return false;
            }
          `,
        }}>
        </script>

        <title>Home | Blockchain Education Network</title>
      </Head>

      {/*
      <div className="text-white px-6 py-4 flex justify-center items-center" style={{ background: "orange" }}>
        <a href="https://bit.ly/ben-bitcoin2023" target="_blank"><div className="text-white text-lg font-bold text-center hover:text-black" style={{ transition: "color 0.2s" }}>Students! Apply for Free Bitcoin 2023 Tickets (May 18 - 24)🚀</div></a>
      </div>
      */}

      <section className="pt-10 lg:py-0 lg:pb-0 px-7">
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4"  style={{ maxWidth: "1000px"}}>

          <div className="col-span-1 lg:pt-10 lg:order-last">

            <h1 className="font-average text-5xl xl:text-6xl text-center max-w-4xl mx-auto mt-5 mb-2">
              Crypto News, Events, Jobs, and Tools!<span className="font-bold"></span>
            </h1>

            <div className="text-bengrey-500 text-xl text-center mx-auto leading-6" style={{ maxWidth: "610px" }}>
              Get the latest crypto opportunities and resources delivered to your inbox once a week 👇
            </div>

            <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-4 mt-8 mb-10 m-auto" style={{ "max-width": "800px" }}>
              <div className="mx-auto lg:mx-0 w-full lg:w-5/6">
                <iframe src="https://embeds.beehiiv.com/cfab9b0e-aa74-4e4d-bf81-2a81e1904f6c?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style={{ margin: "0", borderRadius: "0px", backgroundColor: "transparent", width: "100%" }}></iframe>
              </div>
            </div>

            <div className="col-span-2 mt-12 text-center">
              <div className="flex justify-center">
                <div className="w-full grid grid-cols-8 gap-9 relative" style={{ margin: "-10px", width: "calc(20px * 8 + 4px * 7)" }}>
                  <div className="rounded-full bg-gray-300 w-12 h-12 border-benorange border-2">
                    <img
                      src="/images/stories/priya-ganguly.jpeg"
                      alt="User Image 1"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-gray-300 w-12 h-12 border-benorange border-2 -z-1">
                    <img
                      src="/images/stories/valkyrie-holmes.jpg"
                      alt="User Image 2"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-gray-300 w-12 h-12 border-benorange border-2 -z-2">
                    <img
                      src="/images/stories/sohail-mohammed.jpg"
                      alt="User Image 2"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-gray-300 w-12 h-12 border-benorange border-2 -z-3">
                    <img
                      src="/images/stories/sarah-roff.jpeg"
                      alt="User Image 3"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-gray-300 w-12 h-12 border-benorange border-2 -z-4">
                    <img
                      src="/images/stories/anthony-ung.jpeg"
                      alt="User Image 4"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-gray-300 w-12 h-12 border-benorange border-2 -z-5">
                    <img
                      src="/images/stories/roberto-martinez.jpeg"
                      alt="User Image 5"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-gray-300 w-12 h-12 border-benorange border-2 -z-6">
                    <img
                      src="/images/stories/amrita-bhasin.jpeg"
                      alt="User Image 6"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-benorange-500 w-12 h-12 border-benorange border-2 -z-7">
                    <img
                      src="/images/stories//drew-cousin.jpeg"
                      alt="User Image 6"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-3 ml-20 text-bengrey-500 text-center text-md">Join thousands of subscribers!</p>
            </div>

          </div>

          <div className="flex justify-center items-center col-span-1 pb-12">
            <Image
              width={743}
              height={775}
              layout="intrinsic"
              objectFit="contain"
              src="/images/homepage-thumbnail-3.png"
              quality={100}
            />
          </div>
                
        </div>
      </section>

      <section className="py-20 bg-black text-white mt-5" style={{backgroundImage: 'url("/images/more-dark-2.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-full overflow-hidden mx-auto w-28 h-28 mb-6">
              <img src="/images/ben-logo-white-border.jpg" alt="Image" className="mx-auto w-full h-full" />
            </div>
            <h1 className="text-4xl font-bold mb-14 text-white shadow-lg">Join a community of thousands learning about blockchain!</h1>
            <StandardButton
              link="https://learn.blockchainedu.org/sign_up?plan_id=486348"
              text="Join Now"
              color="orange"
              target="blank"
              styling="text-center py-3 rounded-lg text-black"
              onClick={() => gtag_report_conversion('https://learn.blockchainedu.org/sign_up?plan_id=486348')}
            />
          </div> 
        </div>
      </section>

      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4 lg:w-7/12">
          <a href="https://learn.blockchainedu.org/sign_up?plan_id=486348" target="_blank"><div className="text-2xl text-center">Network | <span className="text-orange">Learn</span> | Build | <span className="text-orange">HODL</span> | Succeed</div></a>
          <div className="text-4xl text-center font-bold my-8">What do I get as a BEN Community Member?</div>
          <div className="px-4">
            <div className="text-2xl my-4 font-bold text-center">Networking</div>
            <div className="text-lg">✅ Access to a global community of blockchain enthusiasts</div>
            <div className="text-lg">✅ Online discussions about AI, NFTs, trading, top coins, and more...</div>
            <div className="text-lg">✅ Opportunities to share your project</div>
            <div className="text-lg">✅ Get feedback, mentorship, investors, and co-founders</div>
            <div className="text-2xl my-4 font-bold text-center">Resources</div>
            <div className="text-lg">✅ Courses, course certificates, guides, videos, tools, and resources</div>
            <div className="text-lg">✅ Airdrop alerts and job listings</div>
            <div className="text-lg">✅ Live AMAs with industry experts</div>
            <div className="text-lg">✅ Bitcoin & basics, crypto taxes, investing, NFTs, DeFi, and more</div>
            <div className="text-lg">✅ Promo codes and free flights to conferences like Consensus, Mainnet, and ETHDenver</div>
            <div className="text-2xl my-4 font-bold text-center">Market Analysis</div>
            <div className="text-lg">✅ Exclusive insights from industry experts</div>
            <div className="text-lg">✅ Deep dive analayses on specific projects</div>
            <div className="text-lg">✅ In-depth reports on the latest trends and tokens</div>
          </div>
          <div className="text-center my-4">
            <StandardButton
              link="https://learn.blockchainedu.org/sign_up?plan_id=486348"
              text="Join Now"
              color="orange"
              target="blank"
              styling="text-center py-3 rounded-lg text-black"
              onClick={() => gtag_report_conversion('https://learn.blockchainedu.org/sign_up?plan_id=486348')}
            />
          </div>
        </div>
      </section>


            <section className="bg-benorange-300 py-24 pb-24 mx-auto">
                <div className="bg-benorange-300 mx-auto w-11/12" style={{ maxWidth: "1000px" }}>
                    <h2 className="text-benblack-500 text-4xl lg:text-5xl text-left max-w-4xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="text-lg text-left leading-6 my-6" style={{ maxWidth: "610px" }}>
                        The Blockchain Education Network offers a constant inflow of crypto news, events, free flights, educational content and opportunities. Our community is
                        at the heart of what we do and we are commited to helping everyone figure out how to get the most out of the crypto space.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 bg-benorange-300">
                        <a target="_blank" href="https://beats.blockchainedu.org/" className="border p-8 rounded-lg bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        width="65px"
                                        height="65px"
                                        src="/images/ben-learn.svg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        width="24px"
                                        height="24px"
                                        src="/images/home-arrow.svg"
                                    />
                                </div>
                            </div>
                            <div class="font-inter text-xl uppercase font-semibold mt-4 mb-2">
                                Newsletter
                            </div>
                            <div class="text-sm font-inter">
                                Sign up and and get access to crypto news, opportunities, free flights and scholarships to blockchain conferennces.
                            </div>
                        </a>
                        <a target="_blank" href="https://learn.blockchainedu.org" className="border p-8 rounded-lg bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        width="65px"
                                        height="65px"
                                        src="/images/university-club.svg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        width="24px"
                                        height="24px"
                                        src="/images/home-arrow.svg"
                                    />
                                </div>
                            </div>
                            <div class="font-inter text-xl uppercase font-semibold mt-4 mb-2">
                                COMMUNITY
                            </div>
                            <div class="text-sm font-inter">
                                Are you new to blockchain? Trading cryptocurrency? Looking for a deep dive on DeFi? Join now and start learning!
                            </div>
                        </a>
{/*
                        <a target="_blank" href="https://docs.google.com/presentation/d/1stVgjgui--ok7uG8t6QFvpGkv9rk2NuCRXIHctkbGN0/edit?usp=sharing" className="border p-8 rounded-lg bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        width="65px"
                                        height="65px"
                                        src="/images/ben-financials.svg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        width="24px"
                                        height="24px"
                                        src="/images/home-arrow.svg"
                                    />
                                </div>
                            </div>
                            <div class="font-inter text-xl uppercase font-semibold mt-4 mb-2">
                                Ben Financials
                            </div>
                            <div class="text-sm font-inter">
                                Check out or latest financial reports and donate to support more Web 3.0 education
                            </div>
                        </a>
*/}
                        {/* <a target="_blank" href="" className="border p-8 rounded-lg bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        width="65px"
                                        height="65px"
                                        src="/images/ben-alumni.svg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        width="24px"
                                        height="24px"
                                        src="/images/home-arrow.svg"
                                    />
                                </div>
                            </div>
                            <div class="font-inter text-xl uppercase font-semibold mt-4 mb-2">
                                Ben Alumni
                            </div>
                            <div class="text-sm font-inter">
                                Become part of (or re-join) the largest and longest running blockchain student network in the world to connect with your fellow alumni and share your experience!
                            </div>
                        </a> */}
                        {/* <a target="_blank" href="" className="border p-8 rounded-lg bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        width="65px"
                                        height="65px"
                                        src="/images/blockchain-partners.svg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        width="24px"
                                        height="24px"
                                        src="/images/home-arrow.svg"
                                    />
                                </div>
                            </div>
                            <div class="font-inter text-xl uppercase font-semibold mt-4 mb-2">
                                Blockchain Partners
                            </div>
                            <div class="text-sm font-inter">
                                BEN partners with committed protocols, startups, corporations and associations that have proven commitment to accelerating the adoption of blockchain technology and are actively seeking to further educate the next generation of blockchain leaders.
                            </div>
                        </a> */}
                        <a href="/sponsor" className="border p-8 rounded-lg bg-white">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        width="65px"
                                        height="65px"
                                        src="/images/about-us.svg"
                                    />
                                </div>
                                <div>
                                    <Image
                                        width="24px"
                                        height="24px"
                                        src="/images/home-arrow.svg"
                                    />
                                </div>
                            </div>
                            <div class="font-inter text-xl uppercase font-semibold mt-4 mb-2">
                                Advertise With Us
                            </div>
                            <div class="text-sm font-inter">
                                Be heard in front of 55k+ crypto builders, traders, and founders worldwide!
                            </div>
                        </a>
                    </div>
                </div>
                {/* <div className="flex flex-col lg:flex-row justify-between pt-16 mx-auto items-center lg:items-end w-11/12" style={{ maxWidth: "1000px" }}>
                    <div className="ml-0 w-full rounded-2xl p-2" style={{ maxWidth: "600px" }}>
                        <FAQItem
                            question="How many courses are included in BEN Learn?"
                            answer="We offer various courses, from Bitcoin Basics to coding in Solidity, and even on crypto Taxes! We are on a mission to continuously expand on our course offering, with at least one new course published on bi-monthly basis."
                        />
                        <FAQItem
                            question="How does the Blockchain Education Network help students?"
                            answer="We offer various courses, from Bitcoin Basics to coding in Solidity, and even on crypto Taxes! We are on a mission to continuously expand on our course offering, with at least one new course published on bi-monthly basis."
                        />
                        <FAQItem
                            question="How often are courses updated?"
                            answer="We offer various courses, from Bitcoin Basics to coding in Solidity, and even on crypto Taxes! We are on a mission to continuously expand on our course offering, with at least one new course published on bi-monthly basis."
                        />
                        <FAQItem
                            question="I am an industry expert or professor, how can I create a course on BEN Learn?"
                            answer="We offer various courses, from Bitcoin Basics to coding in Solidity, and even on crypto Taxes! We are on a mission to continuously expand on our course offering, with at least one new course published on bi-monthly basis."
                        />
                        <FAQItem
                            question="Do you guys offer refunds or course cancellations? "
                            answer="We offer various courses, from Bitcoin Basics to coding in Solidity, and even on crypto Taxes! We are on a mission to continuously expand on our course offering, with at least one new course published on bi-monthly basis."
                        />
                    </div>
                    <Image
                        width="275px"
                        height="267px"
                        src="/images/faq-home-image.jpg"
                        quality={100}
                    />
                </div> */}
            </section>

{/*
      <section className="pt-0">
        <h2 className="font-average text-4xl lg:text-5xl text-center max-w-4xl mx-auto mb-4">
          Recent Posts
        </h2>
        <div className="mx-auto flex justify-center pb-12">
          <BlogGrid />
        </div>
      </section>
*/}

<section className="bg-benorange-300 mx-auto">

  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-2 text-black">Ready?</h1>
      <p className="text-xl mb-14 text-black">Sign up now and join thousands learning about crypto!</p>
      <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-4 mt-8 mb-10 m-auto" style={{ "max-width": "800px" }}>
        <div className="mx-auto lg:mx-0 w-full lg:w-5/6">
          <iframe src="https://embeds.beehiiv.com/cfab9b0e-aa74-4e4d-bf81-2a81e1904f6c?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style={{ margin: "0", borderRadius: "0px", backgroundColor: "transparent", width: "100%" }}></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

            <Footer />
        </div >
    )
}

const Container = styled.div`
  width: 100%;
  height: 60vh;
  minHeight: 588px;
`

export async function getStaticProps({ params }) {
    let fetchedProjects = []
    while (fetchedProjects.length === 0) {
        fetchedProjects = await getProjectsFromMonday() || []
    }
    return { props: { locations: fetchedProjects }, revalidate: fetchedProjects.length ? 3600 : 1 }
}