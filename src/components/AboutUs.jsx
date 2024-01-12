import * as React from "react";

function MyComponent(props) {
    return (
        <span className="flex flex-col items-stretch px-5">
            <div className="text-slate-900 text-center text-4xl leading-10 self-center whitespace-nowrap">
                Our Expertise
            </div>
            <div className="max-w-screen-sm text-gray-500 text-center text-sm leading-5 self-center mt-5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.
            </div>
            <div className="w-full mt-6 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col rounded-3xl max-md:mt-3">
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="aspect-[0.82] object-contain object-center w-full overflow-hidden"
                            />
                            <span className="items-stretch flex flex-col mt-3 px-2">
                                <div className="text-slate-500 text-xs font-medium leading-4 whitespace-nowrap">
                                    Biohacker & Health Expert
                                </div>
                                <div className="text-slate-900 text-lg font-semibold leading-6 whitespace-nowrap mt-1.5">
                                    Ben Greenfield
                                </div>
                                <div className="text-gray-600 text-sm leading-6 mt-1.5">
                                    I believe in sustainable wellness from the inside out. What’s
                                    that mean? It’s simple: Train not for the singular pursuit of
                                    a six pack or toned legs, but to live your longest,
                                    healthiest, happiest life possible.
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="justify-center items-stretch flex grow flex-col rounded-3xl max-md:mt-3">
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="aspect-[0.82] object-contain object-center w-full overflow-hidden"
                            />
                            <span className="items-stretch flex flex-col mt-3 px-2">
                                <div className="text-slate-500 text-xs font-medium leading-4 whitespace-nowrap">
                                    Integrative Medicine Expert
                                </div>
                                <div className="text-slate-900 text-lg font-semibold leading-6 whitespace-nowrap mt-1.5">
                                    Dr. Leland Stillman
                                </div>
                                <div className="text-gray-600 text-sm leading-6 mt-1.5">
                                    The incredible union of breath and movement through yoga
                                    provides endless possibility in our lives and in our
                                    relationships. Yoga creates the space between our reality and
                                    how we choose to respond.
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col rounded-3xl max-md:mt-3">
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="aspect-[0.82] object-contain object-center w-full overflow-hidden"
                            />
                            <span className="items-stretch flex flex-col mt-3 px-2">
                                <div className="text-slate-500 text-xs font-medium leading-4 whitespace-nowrap">
                                    Neuroscientist & Biohacker
                                </div>
                                <div className="text-slate-900 text-lg font-semibold leading-6 whitespace-nowrap mt-1.5">
                                    Louisa Nicola
                                </div>
                                <div className="text-gray-600 text-sm leading-6 mt-1.5">
                                    Residing at the intersection of neuroscience and athleticism,
                                    I provide a fresh perspective on achieving peak performance
                                    using evidence-based tools and methods.
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
}

export default MyComponent;