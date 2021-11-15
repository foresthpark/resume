import React from "react";

export default function index() {
  return (
    <div>
      <section>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 py-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-col w-full  text-left lg:text-center">
            <h1 className="max-w-5xl text-5xl text-center font-bold leading-none tracking-tighter lg:block text-black lg:text-6xl lg:max-w-7xl">
              {/* Long headline to turn <br className="hidden lg:block" /> your
              visitors into users */}
              Forest Park
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-2xl leading-relaxed text-left text-gray-400 lg:text-center">
              Full Stack Developer
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="text-blueGray-700">
        <div className="container items-center px-5 py-8 mx-auto lg:px-24">
          <div className="flex flex-wrap mb-12 text-left">
            <div className="w-full mx-auto lg:w-1/3">
              <div className="p-6">
                <h1
                  className="
                  mx-auto
                  mb-8
                  text-2xl
                  font-semibold
                  leading-none
                  tracking-tighter
                  text-black
                  lg:text-3xl
                "
                >
                  Skills
                </h1>
                <ul>
                  <li>NextJS</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Graphql</li>
                  <li>Apollo Server</li>
                  <li>MongoDB</li>
                  <li>Prisma</li>
                  <li>PostgreSQL</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
            <div className="w-full mx-auto lg:w-1/3">
              <div className="p-6">
                <h1
                  className="
                  mx-auto
                  mb-8
                  text-2xl
                  font-semibold
                  leading-none
                  tracking-tighter
                  text-black
                  lg:text-3xl
                "
                >
                  Other Skills
                </h1>
                <ul>
                  <li>Leadership</li>
                  <li>Mentorship</li>
                  <li>Public Speaking</li>
                  <li>Presentation</li>
                </ul>
              </div>
            </div>
            <div className="w-full mx-auto lg:w-1/3">
              <div className="p-6">
                <h1
                  className="
                  mx-auto
                  mb-8
                  text-2xl
                  font-semibold
                  leading-none
                  tracking-tighter
                  text-black
                  lg:text-3xl
                "
                >
                  Hobbies
                </h1>
                <ul>
                  <li>Bouldering</li>
                  <li>Baking</li>
                  <li>Cooking</li>
                  <li>Motorcycles</li>
                  <li>Photography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
