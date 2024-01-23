import img1 from "../../assets/evening-4579176_1280.jpg";
import img2 from "../../assets/futuristic-1820728_1280.jpg";
import img3 from "../../assets/home-1438305_1280.jpg";
import img4 from "../../assets/house-3150500_1280.jpg";
import img5 from "../../assets/houses-416031_1280.jpg";
import img6 from "../../assets/indoors-3101776_1280.jpg";
import img7 from "../../assets/interior-2685516_1280.jpg";
import img8 from "../../assets/interior-2685518_1280.jpg";
import img9 from "../../assets/interior-2685522_1280.jpg";
import img10 from "../../assets/interior-3012237_1280.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full h-[40vh] md:h-[500px] mb-5 md:mb-16 z-0" >
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper z"
      >
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative z-0">
            <img className="h-full w-full object-cover" src={img1} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                Discover Your Dream Home with Our Unmatched House Hunting Website!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Welcome to the ultimate destination for finding your perfect home! Uncover a seamless house hunting experience on our website, where every click brings you closer to your dream abode. Explore a vast array of listings tailored to your preferences, ensuring a match made in heaven. From cozy apartments to spacious villas, we have a home for every heart.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Step into the realm of possibilities as you embark on the exciting journey of finding your dream home. Our house hunting website is your gateway to a world of curated listings and unparalleled convenience. Discover homes that resonate with your vision and aspirations, all at your fingertips
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img2} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                Elevate Your Home Search: Where Dreams Meet Reality!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Indulge in a house hunting experience like never before! Our website opens the doors to a world where your dream home seamlessly becomes a reality. Dive into an expansive collection of listings designed to inspire and cater to your unique preferences.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Embark on a house hunting adventure with our platform – the key to unlocking your dream home. Browse curated listings, enjoy seamless navigation, and explore a world where possibilities meet reality. Start your journey today and turn your dream home into a tangible address.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img3} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                Home Sweet Home: Find Yours with Us!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Welcome to your ultimate destination for house hunting! Let the search for your dream home be an exciting journey with our user-friendly platform. From cozy apartments to spacious villas, we have curated a diverse collection of listings to suit every taste. Navigate seamlessly through our intuitive interface, enjoy high-quality visuals, and discover in-depth details about each property.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in the charm of various neighborhoods with comprehensive insights. Whether you are a first-time buyer or seasoned homeowner, our platform ensures a personalized and stress-free experience. Your dream home is not just a destination; its a delightful journey that begins right here. Start exploring today and make Home Sweet Home a reality!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img4} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                Unlock Your Perfect Home: Seamless House Hunting Starts Here!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Step into a world of endless possibilities as you embark on the quest to find your perfect home. Our house hunting platform is designed to make your journey smooth, enjoyable, and ultimately successful. From modern apartments to charming houses, we offer an extensive array of listings, ensuring theres a home that resonates with every dream
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in an intuitive search experience, where smart filters and detailed property insights guide your choices. Our user-friendly interface and real-time updates keep you informed, while the convenience of one-click connections with sellers or agents streamlines the entire process. Your dream home is more than a place; its a feeling, a sanctuary. Begin your exploration today, and let the search for your ideal home be as delightful as the home itself
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img5} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                Discover Your Sanctuary: Elevate Your Home Search with Us!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Welcome to a world of possibilities where your dream home awaits. Our platform is your key to a seamless house hunting experience, tailored to match your unique preferences. From urban apartments to suburban retreats, explore an extensive range of listings that redefine the meaning of home..
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in the journey of finding the one with our intuitive interface and smart search features. Uncover in-depth property details, visualize your future neighborhood, and connect effortlessly with sellers or agents. Whether youre a first-time buyer or seasoned homeowner, our platform is here to guide you through the exciting process of turning a house into your cherished home. Begin your search today, and let us be the compass that leads you to your perfect sanctuary.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img6} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                Your Ideal Home Awaits: Explore with Ease!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Step into a realm of endless possibilities as you embark on the journey of finding your dream home. Our platform redefines house hunting, offering a seamless experience that matches your unique preferences. Whether you envision a contemporary city apartment or a tranquil suburban abode, our extensive listings cater to every taste.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in an intuitive search journey, where smart filters guide your exploration and detailed property insights empower your decisions. Navigate effortlessly through neighborhoods, visualize your future surroundings, and connect directly with sellers or agents. As you embark on this exciting adventure, let our platform be your trusted companion, guiding you toward the home you have always envisioned. Start your search today and transform the quest for your dream home into a delightful and fulfilling experience.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img7} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                Home Haven: Your Journey to Dream Living Starts Here!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Embark on a journey to find your perfect sanctuary with our comprehensive house hunting platform. Dive into an array of thoughtfully curated listings that span the spectrum from modern urban dwellings to serene suburban retreats. Our platform is not just a tool; its your partner in transforming a house into a cherished home.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in a user-friendly interface designed to simplify your quest. From detailed property insights to seamless connections with sellers or agents, every step is crafted to make your home search a joyous experience. Whether you are a first-time buyer or a seasoned homeowner seeking a change, let our platform guide you toward the home that resonates with your vision. Begin your exploration today and turn the dream of ideal living into a tangible reality
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img8} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                HomeQuest: Your Pathway to Exceptional Living Begins Now!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Embark on an unparalleled journey to discover your ideal home with HomeQuest. Our platform invites you to explore a diverse collection of listings, ranging from urban havens to tranquil escapes. More than a house hunting tool, HomeQuest is your gateway to shaping the lifestyle you desire.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in a user-centric experience where intuitive design meets in-depth insights. Navigate effortlessly through neighborhoods, visualize your future dwelling, and seamlessly connect with sellers or agents. HomeQuest is more than a platform; its your companion in the quest for the perfect home. Whether you are a first-time buyer or a seasoned homeowner seeking a change, let HomeQuest guide you towards the residence that reflects your unique aspirations. Start your journey now and redefine your idea of home.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img9} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                DreamDwell: Your Gateway to Home Bliss!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Embark on an exciting quest to find your dream home with DreamDwell, where possibilities meet your unique preferences. Discover a curated selection of listings that span the spectrum from modern elegance to timeless classics, ensuring that your perfect abode is just a click away.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in an intuitive and user-friendly platform designed to make your house hunting experience seamless and enjoyable. From detailed property insights to one-click connections with sellers or agents, DreamDwell is your trusted partner in transforming a house into your dream haven. Whether you are a first-time home buyer or a seasoned seeker of new horizons, let DreamDwell guide you through the journey of turning your dream living into a tangible reality. Start your exploration today and let the pursuit of home bliss begin!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img10} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-0 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className=" md:text-5xl font-medium md:font-bold text-white">
                HomeHarbor: Navigate Your Way to Dream Living!
                </h1>
                <p className="md:hidden text-white text-xs md:text-lg md:font-normal ">
                Embark on a captivating journey to find your perfect haven with HomeHarbor, where the search for your dream home becomes an adventure. Explore a diverse array of listings that cater to every taste, from urban chic to suburban tranquility, as you navigate towards the residence that echoes your unique vision of home.
                </p>
                <p className="hidden md:block  text-xs md:text-lg font-light md:font-normal text-white">
                Immerse yourself in an intuitive and dynamic platform designed to simplify your house hunting experience. With smart search features, rich property insights, and effortless connections with sellers or agents, HomeHarbor ensures that every step of your journey is filled with excitement and promise. Whether you are a first-time buyer or a seasoned homeowner in pursuit of a new chapter, let HomeHarbor be your guiding star. Start your odyssey today and set sail towards the dream living you have always envisioned!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
