import React, { useEffect, useState } from 'react'
import { Idea01Icon, ArrowLeft02Icon } from 'hugeicons-react'

const ThoughtOfTheDay = () => {
  const [quote, setquote] = useState("I am always thinking of something")
  const [author, setauthor] = useState("Suraj Kumar")

  // Fetch function to fetch quotes
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'E40SsvvHnVMgip0GOdrHxA==jxYaQHQxPU8gDhvx',
        }
      })
      const data = await response.json()
      setquote(data[0].quote)
      setauthor(data[0].author)
    }
    catch (error) {
      setquote("I am always thinking of something")
      setauthor("Suraj Kumar")
    }
  }

  // useEffect(() => {
  //   fetchQuote()
  // }, [])

  return (
    <>
      <div className=' relative flex justify-center flex-col gap-10 pt-20 pb-10 sm:px-10 md:pt-32 lg:flex-row-reverse lg:px-24 lg:pt-40 lg:pb-14 lg:gap-20 xl:px-40 xl:pt-48 xl:pb-20 2xl:px-60 2xl:pt-60 items-center w-full h-auto bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] -mt-16 sm:mt-[-90px] xl:mt-[-120px] 2xl:mt-[-140px]'>
        <div className=' flex flex-col items-center gap-5 lg:w-2/4'>
          <div className=' flex items-center gap-5'>
            <h1 className=' text-2xl sm:text-3xl font-medium text-white lg:font-bold md:text-5xl lg:text-3xl xl:text-4xl'>Thought of the day</h1>
            <Idea01Icon
              size={60}
              color={"#FFB200"}
              variant={"stroke"}
            />
          </div>
          <ArrowLeft02Icon
            size={100}
            color={"#d717b8"}
            variant={"stroke"}
            className=' hidden lg:block'
          />
        </div>
        <div className=' flex flex-col px-5 gap-5 sm:px-10 lg:px-0 lg:w-2/4 2xl:pl-10'>
          <h1 className=' text-lg sm:text-xl xl:text-2xl  font-medium text-white'>"{quote}"</h1>
          <h1 className=' text-base font-medium xl:text-lg text-white underline'>{author}</h1>
        </div>
      </div>
    </>
  )
}

export default ThoughtOfTheDay