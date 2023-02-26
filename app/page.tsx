import { FaLink } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-blue-700 to-indigo-500 min-h-screen max-h-screen'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-white font-medium text-center text-3xl mt-40'>URL Shortener</h1>
        <div className='w-full'>
          <div className="relative max-w-xl mx-auto mt-3">
            <FaLink className='text-gray-600 ml-4 absolute left-0 top-1/2 transform -translate-y-1/2' />
            <input type="text" className="inline-block w-full max-w-xl py-3 pl-10 pr-24 text-gray-600 rounded hover:ring hover:ring-indigo-500 focus:ring focus:ring-indigo-500 focus:border focus:border-none focus:outline-none transition" />
            <button className='absolute right-0 mr-2 bg-indigo-500 text-white px-4 py-1.5 top-1/2 transform -translate-y-1/2 rounded text-sm'>Shorten</button>
          </div>
        </div>
      </div>
    </div>
  )
}
