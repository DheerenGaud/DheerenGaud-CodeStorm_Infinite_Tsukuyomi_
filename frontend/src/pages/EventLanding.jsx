import React from 'react';

const EventLanding = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center bg-[url('https://img.freepik.com/free-photo/glowing-stage-light-illuminates-cheering-rock-fans-generated-by-ai_188544-37983.jpg?w=2000&t=st=1696436871~exp=1696437471~hmac=d8e0292e01a1b1c7c3b0856d4dd66c86c1816a761a3507dfabb7f01dfe5d05ec')] bg-cover bg-no-repeat">
      <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-4">Event Name</h1>
        <p className="text-gray-600 mb-4">Event Description goes here.</p>
        <p className="text-gray-600 mb-4">Event Date: DD/MM/YYYY</p>
        <p className="text-gray-600 mb-4">Event Location: Event Location</p>
        <div className='flex flex-col [&>*]:py-2'>
        <div >
            <label
                htmlFor="Name"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <input
                    type="text"
                    id="Name"
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-4 py-2 w-full text-base"
                    placeholder="Name"
                    
                />

                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Name
                </span>
                
            </label>
        </div>
        <div >
          <label
              htmlFor="Email"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
              <input
                  type="email"
                  id="Email"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-4 py-2 w-full text-base"
                  placeholder="Email Address"
                  
              />

              <span
                  className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                  Email Address
              </span>
              
          </label>
      </div>

        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Register
        </button>
      </div>
    </div>
  );
};

export default EventLanding;