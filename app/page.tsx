'use client'

import { FaLink } from 'react-icons/fa'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { ChangeEvent, useCallback, useState } from 'react'
import { AddUrlResponse } from './api/addUrl/route'
import Spinner from './component/Spinner'

export default function Home() {
  const [input, setInput] = useState('')
  const updateInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }, [])

  const mutation = useMutation<AddUrlResponse>({
    mutationFn: async () => {
      const response = await axios.post('/api/addUrl', {
        link: 'input',
      })
      return response.data
    },
    onSuccess: (data) => {
      console.log({ response: data })
    },
  })
  return (
    <div className="bg-gradient-to-br from-black to-indigo-900 min-h-screen max-h-screen">
      <div className="flex items-center justify-center flex-col p-6">
        <h1 className="text-white font-medium text-center text-3xl mt-40">
          URL Shortener
        </h1>
        <div className="w-full mb-6">
          <div className="relative max-w-xl mx-auto mt-3">
            <FaLink className="text-gray-600 ml-4 absolute left-0 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              className="inline-block w-full max-w-xl py-3 pl-10 pr-24 text-gray-600 rounded hover:ring hover:ring-indigo-500 focus:ring focus:ring-indigo-500 focus:border focus:border-none focus:outline-none transition"
              value={input}
              onChange={updateInputValue}
              disabled={mutation.isLoading}
            />
            <div className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2">
              {!mutation.isLoading ? (
                <button
                  className=" bg-indigo-500 text-white px-4 py-1.5 rounded text-sm"
                  onClick={() => mutation.mutate()}
                >
                  Shorten
                </button>
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
        {mutation.data && (
          <div className="bg-white drop-shadow shadow p-4 lg:p-7 rounded w-full max-w-xl">
            <p className="font-medium text-sm lg:text-base mb-1 text-gray-500">
              Your shortened url is ready!
            </p>
            <div className="flex justify-between items-end">
              <a
                href={`https://gon.er/${mutation.data.shortened_url}`}
                className="font-semibold text-lg lg:text-2xl hover:underline"
                target="_blank"
              >
                https://gon.er/{mutation.data.shortened_url}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
