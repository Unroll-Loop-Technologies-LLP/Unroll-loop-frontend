import AIML from "../assets/ai-ml.jpg";
import DigitalSecurity from "../assets/digital-security.jpg";
import FUllStack from "../assets/full-stack.jpg";

function MyComponent() {
  return (
    <span className="flex flex-col items-stretch px-5 mb-10">
      <div className="text-slate-900 text-center text-4xl leading-10 self-center whitespace-nowrap">
        Our Expertise
      </div>
      <div className="max-w-screen-sm text-gray-500 text-center text-sm leading-5 self-center mt-5 max-md:max-w-full">
        At Unroll Loop, we bring a wealth of experience and a forward-thinking
        approach to IT consulting. Our team of seasoned professionals is
        dedicated to providing comprehensive solutions that propel your business
        into the digital future. With a focus on excellence, innovation, and
        client satisfaction, we stand as your trusted partner in navigating the
        complexities of the digital landscape
      </div>
      <div className="w-full mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col rounded-3xl max-md:mt-3">
              <img
                loading="lazy"
                srcSet={AIML}
                className="aspect-[0.7] object-contain object-center w-full overflow-hidden"
              />
              <span className="items-stretch flex flex-col mt-3 px-2">
                <div className="text-slate-900 text-lg font-semibold leading-6 whitespace-nowrap mt-1.5">
                  AI/ML Expert
                </div>
                <div className="text-gray-600 text-sm leading-6 mt-1.5">
                  Leveraging the power of Artificial Intelligence and Machine
                  Learning to drive innovation and intelligent solutions for
                  businesses.
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex grow flex-col rounded-3xl max-md:mt-3">
              <img
                loading="lazy"
                srcSet={FUllStack}
                className="aspect-[0.7] object-contain object-center w-full overflow-hidden"
              />
              <span className="items-stretch flex flex-col mt-3 px-2">
                <div className="text-slate-900 text-lg font-semibold leading-6 whitespace-nowrap mt-1.5">
                  Full Stack Developer
                </div>
                <div className="text-gray-600 text-sm leading-6 mt-1.5">
                  Crafting seamless and scalable web applications through
                  expertise in both front-end and back-end development
                  technologies.
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col rounded-3xl max-md:mt-3">
              <img
                loading="lazy"
                srcSet={DigitalSecurity}
                className="aspect-[0.7] object-contain object-center w-full overflow-hidden"
              />
              <span className="items-stretch flex flex-col mt-3 px-2">
                <div className="text-slate-900 text-lg font-semibold leading-6 whitespace-nowrap mt-1.5">
                  Digital Security Expert
                </div>
                <div className="text-gray-600 text-sm leading-6 mt-1.5">
                  Ensuring the utmost protection for your digital assets through
                  cutting-edge security measures and robust cybersecurity
                  strategies.
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-gray-600 text-base leading-7 mt-8 max-md:max-w-full">
        Unroll Loop Technologies LLP is a prominent technology solutions
        provider offering a comprehensive range of services to businesses. The
        company is committed to driving innovation and empowerment in the
        digital realm. We employs advanced algorithms and data-driven insights
        to facilitate informed decision-making, process automation, and open new
        avenues for growth. The company utilizes niche technologies to ensure
        the confidentiality, integrity, and availability of clients' critical
        information. Additionally, our services provide actionable insights,
        enabling businesses to stay ahead in the dynamic digital landscape. What
        sets Unroll Loop Technologies LLP apart is their unwavering commitment
        to client success. Through close collaboration and a deep understanding
        of clients' challenges and goals, the company delivers bespoke solutions
        that enhance efficiency, foster innovation, and fortify resilience. As a
        trusted partner, Unroll Loop Technologies LLP empowers businesses to
        thrive in the digital age.
      </div> */}
    </span>
  );
}

export default MyComponent;
