import * as React from "react";

function Footer(props) {
  return (
    <div className="justify-center items-stretch bg-slate-950 flex flex-col px-16 max-md:px-5">
      <div className="max-w-screen-xl items-stretch flex flex-col mx-5 px-8 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
        <div className="items-center flex flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-[482px] max-w-full flex-col items-stretch my-8">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[2.46] object-contain object-center w-[118px] justify-center items-center overflow-hidden self-center max-w-full"
            />
            <span className="items-stretch flex justify-between gap-5 mt-12 px-2 py-1 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-gray-400 text-sm leading-5 grow whitespace-nowrap">
                Offerings
              </div>
              <div className="text-gray-400 text-sm leading-5">Experts</div>
              <div className="text-gray-400 text-sm leading-5">
                Testimonials
              </div>
              <div className="text-gray-400 text-sm leading-5">Pricing</div>
              <div className="text-gray-400 text-sm leading-5 grow whitespace-nowrap">
                Trusted Partners
              </div>
            </span>
            <div className="justify-between items-start self-center flex w-[168px] max-w-full gap-5 mt-12 px-0.5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/223196cc050da7323c36ad3c6c930a6e47c0746a58de52791e6093f336962948?"
                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eedbae69d62cd525390c8f25a94981325a479367169a0db3d991e56590c2f998?"
                className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1 my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/734a25bcf7d7fd53a584899ce351d0062ee352792164696690416da5d804ace0?"
                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d12ce435c7e2830002871ca8d7e2b5306627baa50a8d3a3d98abf6dd3d104131?"
                className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1 my-auto"
              />
            </div>
          </div>
        </div>
        <span className="justify-between items-stretch border-t-[color:var(--System-colors-Blue-Gray-Secondary,#64748B)] flex w-full gap-5 py-10 border-t border-solid max-md:max-w-full max-md:flex-wrap">
          <div className="text-gray-400 text-sm leading-5 grow shrink basis-auto max-md:max-w-full">
            Copyright � 2023 Ben Greenfield Life � Health, Diet, Fitness, Family
            & Faith. All rights reserved
          </div>
          <span className="items-stretch flex gap-4">
            <div className="text-white text-sm leading-5 grow whitespace-nowrap">
              Privacy Policy
            </div>
            <div className="text-slate-500 text-sm leading-5">|</div>
            <div className="text-white text-sm leading-5 grow whitespace-nowrap">
              Terms of Service
            </div>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
