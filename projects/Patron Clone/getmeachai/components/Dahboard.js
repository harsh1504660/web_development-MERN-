import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-white">Profile Information</h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-white">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your username"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-white">Profile Picture</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Cover Picture */}
          <div>
            <label className="block text-white">Cover Picture</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Razorpay ID */}
          <div>
            <label className="block text-white">Razorpay ID</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your Razorpay ID"
            />
          </div>

          {/* Razorpay Secret */}
          <div>
            <label className="block text-white">Razorpay Secret</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your Razorpay Secret"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard
