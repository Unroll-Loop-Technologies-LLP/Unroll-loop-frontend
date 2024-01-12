import * as React from "react";

function Home(props) {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
          <span className="items-stretch flex flex-col mt-7 pt-12 pb-px px-5 max-md:max-w-full max-md:mt-10">
            <div className="justify-center text-gray-900 text-8xl font-medium leading-[69.72px] tracking-[4.2px] mt-1.5 max-md:max-w-full max-md:text-4xl">
              Optimize{" "}
            </div>
            <div className="text-amber-500 text-8xl font-bold leading-[90px] mt-1 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Your <span className="text-amber-500">Life</span>
            </div>
            <div className="text-gray-600 text-base leading-7 mt-8 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </div>
            <div className="justify-between items-stretch flex gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
              <span className="text-white text-base font-medium leading-6 justify-center items-stretch bg-amber-500 grow mr-0.5 px-6 py-4 rounded-[100px] max-md:px-5">
                Start Free Trial
              </span>
              <div className="justify-center items-stretch bg-orange-100 flex grow basis-[0%] flex-col px-9 py-4 rounded-[100px] max-md:px-5">
                <span className="flex justify-between gap-2 items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a6792b52c93f60003e338388f28ee3f29b7c7d917cdf1e286a0ffc0c321cf2?"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-900 text-base font-medium leading-6">
                    Watch Intro
                  </div>
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[63%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[1.48] object-contain object-center w-full items-center border-[color:var(--tailwind-colors-gray-200,#E5E7EB)] shadow-sm overflow-hidden grow rounded-3xl border-8 border-solid max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
