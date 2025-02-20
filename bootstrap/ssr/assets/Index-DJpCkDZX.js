import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { L as Logo } from "./Logo-BrIzKzpY.js";
import { usePage, Link } from "@inertiajs/react";
import { Button, Transition, Dialog, TransitionChild, DialogPanel } from "@headlessui/react";
import { C as Close } from "./Close-DxNaVPET.js";
import Slider from "react-slick";
const Navbar = () => {
  const { auth, setting_data } = usePage().props;
  const mainLogo = (setting_data == null ? void 0 : setting_data.logo) ?? null;
  return /* @__PURE__ */ jsx("div", { className: "absolute w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full max-w-[1240px] mx-auto px-4 py-5 md:py-[30px]", children: [
    /* @__PURE__ */ jsxs(Link, { href: "/", children: [
      " ",
      mainLogo ? /* @__PURE__ */ jsx("img", { className: "w-[180px] h-auto", src: mainLogo, alt: "Logo" }) : /* @__PURE__ */ jsx(Logo, {}),
      " "
    ] }),
    auth.user ? /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 lg:gap-5", children: /* @__PURE__ */ jsx(Link, { href: route("task.index"), className: "landing-primary-btn", children: "Dashboard" }) }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 lg:gap-5", children: [
      /* @__PURE__ */ jsx(Link, { href: route("login"), className: "landing-primary-btn", children: "Sign In" }),
      /* @__PURE__ */ jsx(Link, { href: route("register"), className: "landing-secondary-btn", children: "Sign Up for Free" })
    ] })
  ] }) });
};
function Banner() {
  const { auth, setting_data } = usePage().props;
  const extensionLink = (setting_data == null ? void 0 : setting_data.extension_link) ?? null;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "site-container bg-[url('/images/banner-graph-bg-small.png')] bg-no-repeat bg-contain lg:bg-cover bg-center lg:bg-[url('/images/banner-graph-bg.png')] pt-[75px] md:pt-[110px] ",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative md:pb-[100px] pt-5 md:pt-[70px] mb-[50px] md:mb-0", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "block md:w-auto w-[38px] animate-right absolute top-0 left-0",
                src: "https://i.ibb.co/QvSw5K9/Group-25.png",
                alt: "Group-25",
                border: "0"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "block md:w-auto w-[39px] animate-right absolute bottom-0 left-0",
                src: "https://i.ibb.co/k1ZWGX5/Group-28.png",
                alt: "Group-28",
                border: "0"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "block md:w-auto w-[36px] animate-left absolute top-0 right-0",
                src: "https://i.ibb.co/C9LX5WF/Group-26.png",
                alt: "Group-26",
                border: "0"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "block md:w-auto w-[40px] animate-left absolute bottom-0 right-0",
                src: "https://i.ibb.co/ypSdR6k/Group-27.png",
                alt: "Group-27",
                border: "0"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-[335px] sm:max-w-[790px] mx-auto text-center", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-[21px] leading-[25px] sm:text-[42px] sm:leading-[50px] lg:text-[52px] lg:leading-[62px] font-semibold text-text-primary", children: "Your Ultimate Destination for Free Promotion and Viral Post" }),
            /* @__PURE__ */ jsx("p", { className: "subtitle mt-1.5 md:mt-5", children: "Use free promotion to make your viral post on Dribbble, Facebook, LinkedIn, Instagram, Youtube, Behance, Medium, Twitter, TikTok, and Artstation. Discover unlimited growth with us" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 mt-4 md:mt-[30px] justify-center", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: extensionLink,
                  download: extensionLink,
                  target: "_blank",
                  className: "landing-secondary-btn cursor-pointer",
                  children: "Install Extension"
                }
              ),
              /* @__PURE__ */ jsx(Link, { href: "#guide-to-use", className: "landing-primary-btn", children: "Learn More" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "mx-auto", src: "https://i.ibb.co/hZZwX4V/banner.png", alt: "banner", border: "0" })
      ]
    }
  );
}
function Company$3() {
  return /* @__PURE__ */ jsx("div", { id: "platforms", className: "py-[30px] lg:py-20 bg-side-and-button", children: /* @__PURE__ */ jsxs("div", { className: "site-container", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-base lg:text-[21px] lg:leading-[25px] font-medium text-t-secondary mb-5 lg:mb-10 text-center", children: "Get free promotion your post with" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-y-4 md:gap-y-[30px] gap-x-5 md:gap-x-10 flex-wrap w-full", children: [
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/QfvKCkH/Group-14.png", alt: "Group-14", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/vjfgzLh/Group-15.png", alt: "Group-15", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/r57Zxqn/Group-16.png", alt: "Group-16", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/YL9S6S1/Group-17.png", alt: "Group-17", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/X3xtyxc/Group-18.png", alt: "Group-18", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/KjZ27Yr/Group-19.png", alt: "Group-19", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/0YPcGPL/Group-20.png", alt: "Group-20", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/18xn12q/Group-21.png", alt: "Group-21", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/GJrtSR9/Group-22.png", alt: "Group-22", border: "0" }),
      /* @__PURE__ */ jsx("img", { className: "h-5 md:h-[38px]", src: "https://i.ibb.co/M5rHrZB/Group-23.png", alt: "Group-23", border: "0" })
    ] })
  ] }) });
}
function Company$2() {
  return /* @__PURE__ */ jsxs("div", { id: "guide-to-use", className: "py-[30px] lg:py-20 site-container", children: [
    /* @__PURE__ */ jsx("h2", { className: "landing-title max-w-[790px]", children: "A Guide to Using Maketop.me: Earning Points and Boosting Success" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-[100px] p-[10px] md:p-[50px] bg-side-and-button rounded-[10px] md:rounded-xl lg:rounded-[20px] mb-[10px] lg:mb-[50px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-[480px]", children: [
        /* @__PURE__ */ jsx("h4", { className: "landing-secondary-title mb-[10px] lg:mb-[30px] ", children: "How Maketop.me Works?" }),
        /* @__PURE__ */ jsx("p", { className: "subtitle mb-2 lg:mb-[25px]", children: "At Maketop.me, we connect you with a vibrant community of real users from platforms like Dribbble and Behance." }),
        /* @__PURE__ */ jsx("p", { className: "subtitle mb-3 lg:mb-[30px]", children: "Through mutual engagement, you'll see a boost in likes, comments, and followers, driving genuine growth for your social media presence." }),
        /* @__PURE__ */ jsx(Link, { href: route("register"), className: "landing-secondary-btn inline-block", children: "Start for Free" })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "w-full", src: "https://i.ibb.co/tKDfN1d/guide1.png", alt: "guide1", border: "0" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse lg:flex-row items-start lg:items-center gap-5 lg:gap-[100px] p-[10px] md:p-[50px] bg-side-and-button rounded-[10px] md:rounded-xl lg:rounded-[20px] mb-[10px] lg:mb-[50px]", children: [
      /* @__PURE__ */ jsx("img", { className: "w-full", src: "https://i.ibb.co/pxj3b2x/guide2.png", alt: "guide1", border: "0" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[480px]", children: [
        /* @__PURE__ */ jsx("h4", { className: "landing-secondary-title mb-[10px] lg:mb-[30px] ", children: "How did you earn points?" }),
        /* @__PURE__ */ jsx("p", { className: "subtitle mb-2 lg:mb-[25px]", children: "Earning Points on our platform is simple and rewarding! You can acquire Points by completing tasks offered by fellow users or purchasing them directly." }),
        /* @__PURE__ */ jsx("p", { className: "subtitle mb-2 lg:mb-[25px]", children: "Additionally, don't miss out on our referral program! Invite friends and colleagues to join, and with each successful referral, you'll receive a bonus of +10 points." }),
        /* @__PURE__ */ jsx("p", { className: "subtitle mb-3 lg:mb-[30px]", children: "Don't forget to check in daily for even more rewarding opportunities!" }),
        /* @__PURE__ */ jsx(Link, { href: route("register"), className: "landing-secondary-btn inline-block", children: "Start for Free" })
      ] })
    ] })
  ] });
}
function Company$1() {
  const data2 = [
    {
      name: "Dribbble",
      title: "Dribbble Boost: Elevate Your Profile with Strategic Promotion",
      subtitle: "Experience a surge in followers, likes, saves, and comments on your Dribbble profile through our targeted promotion services. Maximize your visibility and engagement with every shot you share!",
      image: "https://i.ibb.co/C0kRJHH/gate1.png"
    },
    {
      name: "Behance",
      title: "Behance Boost: Amplify Your Presence with Strategic Promotion",
      subtitle: "Elevate your Behance profile with our promotion services, gaining increased followers, likes, saves, and comments. Expand your reach and engagement to showcase your creative work to a wider audience.",
      image: "https://i.ibb.co/zf28mDd/Frame-89.png"
    },
    {
      name: "ArtStation",
      title: "ArtStation Ascend: Propel Your Portfolio with Strategic Promotion",
      subtitle: "Experience a surge in followers, likes, and comments on your ArtStation portfolio through our targeted promotion services. Enhance your visibility and engagement to showcase your artistic talent to a broader audience.",
      image: "https://i.ibb.co/8922w5X/Frame-90.png"
    },
    {
      name: "YouTube",
      title: "TubeTrend: Ignite Your YouTube Channel with Strategic Promotion",
      subtitle: "Experience rapid growth on your YouTube channel with our promotion services, garnering subscribers, likes, and comments. Amplify your content's reach and engagement to drive success in the competitive world of online video",
      image: "https://i.ibb.co/dtmnsBQ/Frame-90-1.png"
    },
    {
      name: "LinkedIn",
      title: "Unlock Your LinkedIn Profile with Strategic Promotion",
      subtitle: "Supercharge your LinkedIn presence with our promotion services, gaining followers, likes, reposts, and comments. Elevate your professional profile and expand your network with increased visibility and engagement.",
      image: "https://i.ibb.co/7GRZSSG/Frame-90-2.png"
    },
    {
      name: "Medium",
      title: "Medium Momentum: Boost Your Reach with Strategic Promotion",
      subtitle: "Gain momentum on Medium with our promotion services, increasing followers, likes, and comments on your articles. Expand your readership and engagement to elevate your content's impact.",
      image: "https://i.ibb.co/8MmZGky/Frame-90-3.png"
    },
    {
      name: "Instagram",
      title: "IgBoost: Skyrocket Your Instagram Presence with Strategic Promotion",
      subtitle: "Maximize your Instagram presence with our promotion services, gaining followers, likes, saves, and comments. Elevate your profile's visibility and engagement to stand out in the vibrant world of social media.",
      image: "https://i.ibb.co/sHzyJnT/Frame-90-4.png"
    },
    {
      name: "Twitter",
      title: "Tweet Thrive: Ignite Your Twitter Presence with Strategic Promotion",
      subtitle: "Go to trend and Boost your Twitter profile with our promotion services, gaining followers, likes, reposts, and comments. Elevate your presence and engagement to make waves in the Twittersphere.",
      image: "https://i.ibb.co/RH9Br9Y/Frame-90-5.png"
    },
    {
      name: "Facebook",
      title: "Facebook Buzz: Spark Virality on Facebook with Strategic Promotion",
      subtitle: "Experience viral growth on Facebook with our promotion services, gaining followers, likes, and comments. Amplify your reach and engagement to make a lasting impact in the world's largest social network.",
      image: "https://i.ibb.co/thxTMBG/Frame-90-6.png"
    },
    {
      name: "TikTok",
      title: "TikTok Surge: Propel Your Presence with Strategic Promotion",
      subtitle: "Catapult your TikTok profile and post (video)  with our promotion services, garnering followers, likes, and comments. Boost your visibility and engagement to ride the wave of TikTok virality.",
      image: "https://i.ibb.co/MM3kBMb/Frame-90-7.png"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "pb-5 md:py-20 site-container", children: [
    /* @__PURE__ */ jsx("h2", { className: "landing-title max-w-[960px]", children: "Your Gateway to Free Social Network Promotion Through Community Collaboration" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10", children: data2.map((social) => /* @__PURE__ */ jsxs("div", { className: "p-[10px] md:p-10 bg-side-and-button rounded-xl lg:rounded-[20px]", children: [
      /* @__PURE__ */ jsx("img", { className: "w-full mb-5 lg:mb-[30px]", src: social.image, alt: "guide1", border: "0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "landing-secondary-title mb-[10px] lg:mb-5", children: social.title }),
        /* @__PURE__ */ jsx("p", { className: "subtitle mb-4 lg:mb-5", children: social.subtitle }),
        /* @__PURE__ */ jsx(Link, { href: route("register"), className: "landing-secondary-btn inline-block", children: "Start for Free" })
      ] })
    ] })) })
  ] });
}
function Principles() {
  return /* @__PURE__ */ jsxs("div", { id: "principles", className: "py-[30px] md:py-20 site-container bg-[url('/images/banner-graph-bg-small.png')] bg-no-repeat bg-contain lg:bg-cover lg:bg-[url('/images/banner-graph-bg.png')] bg-center", children: [
    /* @__PURE__ */ jsxs("h2", { className: "landing-title max-w-[560px]", children: [
      "Guaranteed Satisfaction: ",
      /* @__PURE__ */ jsx("br", {}),
      " Our Core Principles"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-5 justify-between items-center flex-wrap sm:flex-nowrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-[356px] ", children: [
        /* @__PURE__ */ jsx("img", { className: "w-[70px] md:w-auto ms-[-10px] md:ms-[-18px]", src: "https://i.ibb.co/Cbm2C9c/p-1.png", alt: "" }),
        /* @__PURE__ */ jsx("h4", { className: "landing-secondary-title mb-2 md:mb-3 lg:mb-5 max-w-[320px]", children: "Lightning-Speed Services at No Cost" }),
        /* @__PURE__ */ jsx("p", { className: "subtitle", children: "Free and fast promotion! Skip the spending and zoom ahead with our speedy services." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[356px] ", children: [
        /* @__PURE__ */ jsx("img", { className: "w-[70px] md:w-auto ms-[-10px] md:ms-[-18px]", src: "https://i.ibb.co/hBzTV43/p-2.png", alt: "" }),
        /* @__PURE__ */ jsx("h4", { className: "landing-secondary-title mb-2 md:mb-3 lg:mb-5 max-w-[320px]", children: "Ensuring Safety in Every Step" }),
        /* @__PURE__ */ jsx("p", { className: "subtitle", children: "Your security guaranteed: No account access required, no worries." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-[356px] ", children: [
        /* @__PURE__ */ jsx("img", { className: "w-[70px] md:w-auto ms-[-10px] md:ms-[-18px]", src: "https://i.ibb.co/RvQjGbC/p-3.png", alt: "" }),
        /* @__PURE__ */ jsx("h4", { className: "landing-secondary-title mb-2 md:mb-3 lg:mb-5 max-w-[320px]", children: "Human-Centric: No Bots Allowed!" }),
        /* @__PURE__ */ jsx("p", { className: "subtitle", children: "Genuine Engagement. 100% Real Likes and Followers, No Bots Involved." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-[30px] lg:mt-[50px]", children: /* @__PURE__ */ jsx(Link, { href: route("register"), className: "landing-secondary-btn mx-auto inline-block", children: "Start for Free" }) })
  ] });
}
function Statistics() {
  const { tasks, users } = usePage().props;
  return /* @__PURE__ */ jsx("section", { className: "py-5 lg:py-20 px-3", children: /* @__PURE__ */ jsxs("div", { className: "py-5 lg:py-[50px] px-[42px] lg:px-[100px] rounded-[10px] lg:rounded-2xl bg-side-and-button site-container flex justify-between items-center gap-y-[30px] gap-x-8 flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary", children: users }),
      /* @__PURE__ */ jsx("p", { className: "subtitle text-text-primary", children: "Signup Users" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary", children: [
        tasks,
        "+"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "subtitle text-text-primary", children: "Task Created" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary", children: "10" }),
      /* @__PURE__ */ jsx("p", { className: "subtitle text-text-primary", children: "Platforms Available" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[36px] lg:text-[52px] leading-[43px] lg:leading-[62px] font-semibold text-text-primary", children: "24/7" }),
      /* @__PURE__ */ jsx("p", { className: "subtitle text-text-primary", children: "Service provide" })
    ] })
  ] }) });
}
function Company() {
  const faqs = [
    {
      question: "Is Maketop.me safe for my profile?",
      answer: "Absolutely! Maketop.me prioritizes the safety and security of your profile. We use only ethical and legitimate methods to promote your content, ensuring compliance with platform guidelines and safeguarding your account."
    },
    {
      question: "How can I promote for free?",
      answer: "Promoting for free is easy with Maketop.me! Simply engage with our community by completing tasks like liking, commenting, and following others' content. In return, you'll receive promotion from fellow users, helping to boost your profile organically."
    },
    {
      question: "Are the likes/followers I receive from real users?",
      answer: "Yes! At Maketop.me, we pride ourselves on providing genuine engagement from real users. Our community consists of authentic individuals who engage with each other's content, ensuring that the likes and followers you receive are from real people."
    },
    {
      question: "Do I have to give you my password?",
      answer: "Absolutely not! We never require access to your account password. Your privacy and security are paramount to us, and we operate solely based on the information you provide voluntarily, such as your post or profile link."
    },
    {
      question: "How does it work?",
      answer: "Maketop.me operates on a mutual assistance model. By participating in community tasks such as liking, commenting, and following, you earn points that can be used to promote your own content. It's a win-win scenario where everyone helps each other grow their social media presence organically."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { id: "faq", className: "py-5 lg:py-20 max-w-[803px] mx-auto p-3 ", children: [
    /* @__PURE__ */ jsx("h2", { className: "landing-title max-w-[542px]", children: "Here are Some FAQs About Maketop.me" }),
    /* @__PURE__ */ jsx("div", { className: "mb-[30px] lg:mb-[50px]", children: faqs.map((faq) => /* @__PURE__ */ jsxs("div", { className: "mb-5 lg:mb-[30px]", children: [
      /* @__PURE__ */ jsx("h4", { className: "landing-secondary-title mb-4 lg:mb-5", children: faq.question }),
      /* @__PURE__ */ jsx("p", { className: "subtitle", children: faq.answer })
    ] })) }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Link, { href: route("register"), className: "landing-secondary-btn inline-block", children: "Start for Free" }) })
  ] });
}
function Instagram$1(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_642_5820)", children: [
      /* @__PURE__ */ jsx("rect", { width: "20", height: "20", fill: "url(#paint0_radial_642_5820)" }),
      /* @__PURE__ */ jsx("rect", { width: "20", height: "20", fill: "url(#paint1_radial_642_5820)" }),
      /* @__PURE__ */ jsx("path", { d: "M9.99997 13.8891C7.85608 13.8891 6.11108 12.1447 6.11108 10.0002C6.11108 7.85577 7.85608 6.11133 9.99997 6.11133C12.1439 6.11133 13.8889 7.85577 13.8889 10.0002C13.8889 12.1447 12.1439 13.8891 9.99997 13.8891ZM9.99997 7.22244C8.46831 7.22244 7.2222 8.46855 7.2222 10.0002C7.2222 11.5319 8.46831 12.778 9.99997 12.778C11.5316 12.778 12.7778 11.5319 12.7778 10.0002C12.7778 8.46855 11.5316 7.22244 9.99997 7.22244Z", fill: "white" }),
      /* @__PURE__ */ jsx("path", { d: "M14.1667 6.66667C14.6269 6.66667 15 6.29357 15 5.83333C15 5.3731 14.6269 5 14.1667 5C13.7065 5 13.3334 5.3731 13.3334 5.83333C13.3334 6.29357 13.7065 6.66667 14.1667 6.66667Z", fill: "white" }),
      /* @__PURE__ */ jsx("path", { d: "M13.3334 17.2223H6.66672C4.52283 17.2223 2.77783 15.4778 2.77783 13.3334V6.66672C2.77783 4.52228 4.52283 2.77783 6.66672 2.77783H13.3334C15.4773 2.77783 17.2223 4.52228 17.2223 6.66672V13.3334C17.2223 15.4778 15.4773 17.2223 13.3334 17.2223ZM6.66672 3.88894C5.13505 3.88894 3.88894 5.13505 3.88894 6.66672V13.3334C3.88894 14.8651 5.13505 16.1112 6.66672 16.1112H13.3334C14.8651 16.1112 16.1112 14.8651 16.1112 13.3334V6.66672C16.1112 5.13505 14.8651 3.88894 13.3334 3.88894H6.66672Z", fill: "white" })
    ] }),
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("radialGradient", { id: "paint0_radial_642_5820", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(7.43497 20.0144) scale(24.9307 24.9307)", children: [
        /* @__PURE__ */ jsx("stop", { stopColor: "#FFDD55" }),
        /* @__PURE__ */ jsx("stop", { offset: "0.328", stopColor: "#FF543F" }),
        /* @__PURE__ */ jsx("stop", { offset: "0.348", stopColor: "#FC5245" }),
        /* @__PURE__ */ jsx("stop", { offset: "0.504", stopColor: "#E64771" }),
        /* @__PURE__ */ jsx("stop", { offset: "0.643", stopColor: "#D53E91" }),
        /* @__PURE__ */ jsx("stop", { offset: "0.761", stopColor: "#CC39A4" }),
        /* @__PURE__ */ jsx("stop", { offset: "0.841", stopColor: "#C837AB" })
      ] }),
      /* @__PURE__ */ jsxs("radialGradient", { id: "paint1_radial_642_5820", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(3.2183 -0.249698) scale(16.554 11.03)", children: [
        /* @__PURE__ */ jsx("stop", { stopColor: "#4168C9" }),
        /* @__PURE__ */ jsx("stop", { offset: "0.999", stopColor: "#4168C9", stopOpacity: "0" })
      ] }),
      /* @__PURE__ */ jsx("clipPath", { id: "clip0_642_5820", children: /* @__PURE__ */ jsx("rect", { width: "20", height: "20", rx: "4", fill: "white" }) })
    ] })
  ] });
}
function Instagram(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_489_16061)", children: [
      /* @__PURE__ */ jsx("rect", { width: "36", height: "36", fill: "#29B6F6" }),
      /* @__PURE__ */ jsx("path", { d: "M27.5021 10.8143L24.4518 26.3883C24.4518 26.3883 24.3207 27.1 23.438 27.1C22.969 27.1 22.7272 26.8769 22.7272 26.8769L16.1201 21.3943L12.8873 19.7649L8.73856 18.6616C8.73856 18.6616 8 18.4482 8 17.8375C8 17.3286 8.75973 17.0859 8.75973 17.0859L26.117 10.1905C26.117 10.1905 26.6471 9.99919 27.0339 10C27.2717 10 27.5429 10.1018 27.5429 10.4071C27.5429 10.6107 27.5021 10.8143 27.5021 10.8143Z", fill: "white" }),
      /* @__PURE__ */ jsx("path", { d: "M18.5857 23.4397L15.7959 26.1871C15.7959 26.1871 15.6746 26.2807 15.5126 26.2848C15.4564 26.2864 15.3961 26.2775 15.3342 26.2498L16.1192 21.3926L18.5857 23.4397Z", fill: "#B0BEC5" }),
      /* @__PURE__ */ jsx("path", { d: "M24.2019 13.4163C24.0643 13.2372 23.8102 13.2046 23.6311 13.3406L12.8857 19.771C12.8857 19.771 14.6006 24.5688 14.862 25.3994C15.1242 26.2308 15.3343 26.2503 15.3343 26.2503L16.1193 21.3931L24.1253 13.9863C24.3045 13.8504 24.3379 13.5955 24.2019 13.4163Z", fill: "#CFD8DC" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_489_16061", children: /* @__PURE__ */ jsx("rect", { width: "36", height: "36", rx: "8", fill: "white" }) }) })
  ] });
}
const data$1 = [
  {
    title: "Privacy Policy",
    text: "At Maketop.me, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit or interact with our website."
  },
  {
    title: "Information We Collect",
    text: "We collect limited personal information provided voluntarily by users, such as name, email address, and social media Profile link, to provide our services effectively. We may also gather non-personal information automatically, such as browser type and IP address, for analytics purposes."
  },
  {
    title: "How We Use Your Information",
    text: "We use the information collected to enhance your user experience, provide personalized content, and improve our services. Your data may be used to communicate with you, respond to inquiries, and send updates about our platform. We do not sell or share your information with third parties for marketing purposes."
  },
  {
    title: "Data Security",
    text: "We implement industry-standard security measures to safeguard your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to protect your data, we cannot guarantee absolute security."
  },
  {
    title: "Third-Party Links",
    text: "Our website may contain links to third-party sites or services. These external sites have their own privacy policies, and we are not responsible for their content or practices. We encourage you to review the privacy policies of these sites before providing any personal information."
  },
  {
    title: "Changes to This Privacy Policy",
    text: "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on this page. Your continued use of our website after such modifications constitutes your acknowledgment and acceptance of the updated policy."
  },
  {
    title: "Contact Us",
    text: "If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at hellomaketopme@gmail.com."
  }
];
function PrivacyPolicy() {
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: open,
        className: "subtitle text-main-and-focus",
        children: "Privacy Policy"
      }
    ),
    /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, children: /* @__PURE__ */ jsx(Dialog, { as: "div", className: "relative z-10 focus:outline-none", onClose: close, __demoMode: true, children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto bg-text-primary", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center px-5 lg:px-[50px]", children: /* @__PURE__ */ jsx(
      TransitionChild,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 transform-[scale(95%)]",
        enterTo: "opacity-100 transform-[scale(100%)]",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 transform-[scale(100%)]",
        leaveTo: "opacity-0 transform-[scale(95%)]",
        children: /* @__PURE__ */ jsxs(DialogPanel, { className: "w-full max-w-[1000px] h-full relative rounded-xl bg-white pr-5 lg:pr-[100px]", children: [
          /* @__PURE__ */ jsxs(Button, { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: close, children: [
            /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }),
            " "
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-5 py-[50px] md:p-[50px] max-h-[90vh] overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent", children: [
            data$1.map((part, i) => /* @__PURE__ */ jsxs("div", { className: "mb-4 md:mb-[30px]", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm md:text-[21px] md:leading-[25px] font-medium text-text-primary mb-2 md:mb-4", children: part.title }),
              /* @__PURE__ */ jsx("p", { className: "subtitle", children: part.text })
            ] }, i)),
            /* @__PURE__ */ jsx("p", { className: "subtitle mt-4", children: "Last Updated: 01/04/2024" })
          ] })
        ] })
      }
    ) }) }) }) })
  ] });
}
const data = [
  {
    title: "Public Offer",
    text: "Welcome to Maketop.me! This Public Offer outlines the terms and conditions governing the use of our services. By accessing or using our website, you agree to comply with these terms."
  },
  {
    title: "Service Description",
    text: "Maketop.me provides promotion services to enhance your social media presence. We offer various packages tailored to meet your needs, including likes, followers, comments, and other engagement metrics."
  },
  {
    title: "Payment Terms",
    text: "Payment for our services is required upfront, and prices are clearly displayed on our website. We accept payment through secure online payment gateways. Once payment is processed, our services will be delivered promptly."
  },
  {
    title: "Refund Policy",
    text: "At Maketop.me, we strive for customer satisfaction. However, due to the nature of our services, once an order has been placed and processed, we cannot issue refunds."
  },
  {
    title: "Intellectual Property Rights",
    text: "All content and materials provided on Maketop.me, including text, graphics, logos, and images, are the property of Maketop.me and protected by copyright laws. You may not reproduce, distribute, or modify any content without prior written permission."
  },
  {
    title: "Disclaimer of Warranties",
    text: "Maketop.me strives to provide high-quality services, but we make no warranties or representations regarding the accuracy, completeness, or reliability of the information provided. We disclaim all warranties, express or implied, including but not limited to merchantability and fitness for a particular purpose."
  },
  {
    title: "Limitation of Liability",
    text: "In no event shall Maketop.me be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services."
  },
  {
    title: "Contact Us",
    text: "If you have any questions or concerns about this Public Offer, please contact us at hellomaketopme@gmail.com."
  }
];
function PublicOffer() {
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: open,
        className: "subtitle text-main-and-focus",
        children: "Public Offer"
      }
    ),
    /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, children: /* @__PURE__ */ jsx(Dialog, { as: "div", className: "relative z-10 focus:outline-none", onClose: close, __demoMode: true, children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto bg-text-primary", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center px-5 lg:px-[50px]", children: /* @__PURE__ */ jsx(
      TransitionChild,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 transform-[scale(95%)]",
        enterTo: "opacity-100 transform-[scale(100%)]",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 transform-[scale(100%)]",
        leaveTo: "opacity-0 transform-[scale(95%)]",
        children: /* @__PURE__ */ jsxs(DialogPanel, { className: "w-full max-w-[1000px] h-full relative rounded-xl bg-white pr-5 lg:pr-[100px]", children: [
          /* @__PURE__ */ jsxs(Button, { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: close, children: [
            /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("div", { className: "px-5 py-[50px] md:p-[50px] max-h-[90vh] overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent", children: data.map((part, i) => /* @__PURE__ */ jsxs("div", { className: "mb-4 md:mb-[30px]", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm md:text-[21px] md:leading-[25px] font-medium text-text-primary mb-2 md:mb-4", children: part.title }),
            /* @__PURE__ */ jsx("p", { className: "subtitle", children: part.text })
          ] }, i)) })
        ] })
      }
    ) }) }) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("div", { className: "py-5 lg:py-[50px] bg-text-primary", children: /* @__PURE__ */ jsxs("div", { className: "site-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-5 flex-col md:flex-row items-center flex-wrap", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", className: "min-w-[120px]", children: /* @__PURE__ */ jsx(Logo, { light: true }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-wrap sm:flex-nowrap justify-center gap-4 lg:gap-5 whitespace-pre", children: [
        /* @__PURE__ */ jsx(Link, { href: "#guide-to-use", className: "subtitle text-main-and-focus", children: "How It’s Work" }),
        /* @__PURE__ */ jsx(Link, { href: "#platforms", className: "subtitle text-main-and-focus", children: "Platforms" }),
        /* @__PURE__ */ jsx(Link, { href: "#principles", className: "subtitle text-main-and-focus", children: "Safety" }),
        /* @__PURE__ */ jsx(Link, { href: "#faq", className: "subtitle text-main-and-focus", children: "FAQs" }),
        /* @__PURE__ */ jsx(Link, { href: "#testimonial", className: "subtitle text-main-and-focus", children: "Reviews" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 lg:gap-5", children: [
        /* @__PURE__ */ jsxs("a", { target: "_blank", href: "https://www.instagram.com/officialmaketop.me/", className: "flex items-center gap-2.5 subtitle text-main-and-focus", children: [
          "Follow",
          /* @__PURE__ */ jsx(Instagram$1, { className: "h-5 md:h-9 w-5 md:w-9" })
        ] }),
        /* @__PURE__ */ jsxs("a", { target: "_blank", href: "https://t.me/maketopme", className: "flex items-center gap-2.5 subtitle text-main-and-focus", children: [
          "Join",
          /* @__PURE__ */ jsx(Instagram, { className: "h-5 md:h-9 w-5 md:w-9" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "border-t border-t-t-secondary pb-5 lg:pb-10 mt-5 lg:mt-10" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-col md:flex-row items-center gap-5 text-center flex-wrap", children: [
      /* @__PURE__ */ jsx("p", { className: "subtitle text-main-and-focus", children: "All rights reserved. Copyright © 2024 Maketop.me." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-center", children: [
        /* @__PURE__ */ jsx(PrivacyPolicy, {}),
        /* @__PURE__ */ jsx(PublicOffer, {})
      ] })
    ] })
  ] }) });
}
const alex = "/build/assets/alex-BwhYqOg1.png";
const kali = "/build/assets/kail-CHBuhfBG.png";
const liam = "/build/assets/liam-CkRLfEr_.png";
const emily = "/build/assets/emily-CLhHGURd.png";
const max = "/build/assets/max-Bf_qvR-X.png";
function Testimonial() {
  const [showReview, setShowReview] = useState({
    id: 1,
    image: "https://i.ibb.co/ZN6zpY2/Rectangle-38.png",
    name: "Alex",
    designation: "Illustration Designer",
    text: "As an illustration designer, I rely on platforms like Maketop.me to amplify my artwork's visibility. Their services have significantly boosted my online presence, allowing my creations to reach a wider audience."
  });
  const reviews = [
    {
      id: 1,
      image: alex,
      name: "Alex",
      designation: "Illustration Designer",
      text: "As an illustration designer, I rely on platforms like Maketop.me to amplify my artwork's visibility. Their services have significantly boosted my online presence, allowing my creations to reach a wider audience."
    },
    {
      id: 2,
      image: kali,
      name: "Kali",
      designation: "Visual Designer",
      text: "Maketop.me has been instrumental in my success as a visual designer. With their promotion services, my design have gained popularity across social media platforms, establishing my reputation as a sought-after designer."
    },
    {
      id: 3,
      image: liam,
      name: "Liam",
      designation: "Digital Illustrator",
      text: "As a digital illustrator, Maketop.me has been an invaluable asset in promoting my work. Their platform has helped me showcase my illustrations to a broader audience, leading to increased recognition and opportunities."
    },
    {
      id: 4,
      image: emily,
      name: "Emily",
      designation: "Graphic Designer",
      text: "Thanks to Maketop.me, my journey as a graphic designer has taken a remarkable turn. Their promotion services have helped my designs gain traction, attracting attention from potential clients and collaborators."
    },
    {
      id: 5,
      image: max,
      name: "Max",
      designation: "Vector Artist",
      text: "Maketop.me has been a game-changer for me as a vector artist. With their help, my vector artworks have garnered more likes, comments, and shares, ultimately propelling my career forward."
    }
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3e3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  const handleChange = (e) => {
    const current = document.querySelector(".slick-current");
    const img = current.querySelector("img");
    const src = img.getAttribute("src");
    console.log(src);
    const currentData = reviews.find((review) => review.image === src);
    setShowReview(currentData);
  };
  return /* @__PURE__ */ jsxs("div", { id: "testimonial", className: "py-5 lg:py-20 site-container", children: [
    /* @__PURE__ */ jsx("h2", { className: "landing-title max-w-[682px]", children: "Voices of Success: Testimonials from Thrilled Clients" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1000px] mx-auto", children: /* @__PURE__ */ jsx(Slider, { ...settings, afterChange: handleChange, children: reviews.map((review) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: review.image, alt: "Rectangle-38" }) })) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[772px] mx-auto mt-6 md:mt-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-xs md:text-[21px] md:leading-[25px] font-medium text-t-secondary mb-5 md:mb-10", children: showReview.text }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-[17px] md:text-[25px] leading-[26px] md:leading-[30px] text-t-secondary mb-1 font-semibold text-center", children: showReview.name }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-xs md:text-[21px] md:leading-[25px] font-medium text-t-secondary", children: showReview.designation })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-main-and-focus", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Banner, {}),
    /* @__PURE__ */ jsx(Company$3, {}),
    /* @__PURE__ */ jsx(Company$2, {}),
    /* @__PURE__ */ jsx(Company$1, {}),
    /* @__PURE__ */ jsx(Principles, {}),
    /* @__PURE__ */ jsx(Statistics, {}),
    /* @__PURE__ */ jsx(Testimonial, {}),
    /* @__PURE__ */ jsx(Company, {}),
    /* @__PURE__ */ jsx(Footer, { color: "#ffffff" })
  ] });
}
export {
  Index as default
};
