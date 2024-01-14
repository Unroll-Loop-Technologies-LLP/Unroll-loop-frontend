import heroImage from "../assets/hero-section-image.jpg";

function Home() {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
          <span className="items-stretch flex flex-col mt-7 pt-12 pb-px px-5 max-md:max-w-full max-md:mt-10">
            <div className="text-amber-500 text-5xl font-bold leading-[90px] mt-1 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Unroll Loop
            </div>
            <div className="text-gray-600 text-base leading-7 mt-8 max-md:max-w-full">
              Our vision is to pioneer innovation that transforms lives and
              empowers a connected, sustainable, and inclusive world. We aspire
              to be at the forefront of technological advancements, delivering
              cutting-edge solutions that address global challenges. Through
              relentless pursuit of excellence, we aim to create a positive
              impact on society, foster creativity and collaboration, and
              redefine the possibilities of a digital future. Our commitment is
              to build a company that not only thrives in the fast-paced tech
              landscape but also inspires positive change, leaving a lasting
              legacy of innovation, integrity, and social responsibility.
            </div>
            <div className="flex gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
              <button className="flex items-center text-white text-base font-medium leading-6 bg-amber-500 px-6 py-4 rounded-[100px] max-md:px-5">
                Get Started
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a6792b52c93f60003e338388f28ee3f29b7c7d917cdf1e286a0ffc0c321cf2?"
                  className="aspect-square object-contain object-center w-5 ml-2 overflow-hidden shrink-0 max-w-full"
                  alt="Icon"
                />
              </button>
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[63%] ml-5 mt-4 mr-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet={heroImage}
            alt="Hero Section"
            className="aspect-[1.50] object-center w-full border-[color:var(--tailwind-colors-gray-200,#E5E7EB)] shadow-sm grow rounded-3xl border-4 border-solid max-md:max-w-full max-md:mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
