import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPost from '../components/FeaturedPost'

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* Breadcrum */}
      <div className="flex gap-4">
        <Link to='/'>Home</Link>
        <span>/</span>
        <span className='text-blue-800'>Blogs and Articles</span>
      </div>
      {/* Introduction */}
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className='text-gray-800 text-2xl md:text-4xl lg:text-6xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p className="mt-8 text-md md:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, molestiae excepturi? Libero ab facere nihil unde eius impedit assumenda beatae optio sint? Laboriosam perferendis magnam earum ratione nam eligendi sint.</p>
          </div>
          {/* Link to write ANimation */}
          <Link to="/write" className="relative inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="200"
              height="200"
              className="text-lg tracking-widest animate-spin animatedButton"
            >
              <defs>
                <path
                  id="circlePath"
                  fill="none"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Write Your Story
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  Share Your Idea
                </textPath>
              </text>
            </svg>
            <button
              className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center"
              aria-label="Write your story"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </button>
          </Link>

        </div>
      {/* Categories */}
      <MainCategories/>
      {/* Featured List */}
      <FeaturedPost/>
      {/* Post List */}
    </div>
  )
}

export default HomePage