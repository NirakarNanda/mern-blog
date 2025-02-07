import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const FeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/posts?cat=web-design" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* Title */}
        <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Link>
      </div>

      {/* Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second Post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image src="featured2.jpeg" className="rounded-3xl object-fit w-1/4 h-30 lg:h-40" />
          <div className="w-3/4">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link
                to="/posts?cat=web-design"
                className="hover:bg-blue-50 rounded-full px-4 py-2"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-lg lg:text-2xl font-semibold lg:font-bold md:text-2xl xl:text-2xl text-base"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* Third Post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image src="featured2.jpeg" className="rounded-3xl object-fit w-1/4 h-30 lg:h-40" />
          <div className="w-3/4">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link
                to="/posts?cat=web-design"
                className="hover:bg-blue-50 rounded-full px-4 py-2"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-lg lg:text-2xl font-semibold lg:font-bold md:text-2xl xl:text-2xl text-base"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* Fourth Post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image src="featured2.jpeg" className="rounded-3xl object-fit w-1/4 h-30 lg:h-40" />
          <div className="w-3/4">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link
                to="/posts?cat=web-design"
                className="hover:bg-blue-50 rounded-full px-4 py-2"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-lg lg:text-2xl font-semibold lg:font-bold md:text-2xl xl:text-2xl text-base"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost
