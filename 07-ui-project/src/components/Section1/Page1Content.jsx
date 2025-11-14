import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 px-18 h-[90vh] gap-10 bg-green-800 flex items-center justify-between '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
