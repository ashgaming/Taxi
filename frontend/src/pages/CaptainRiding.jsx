import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FinishRide from '../components/FinishRide'

const CaptainRiding = (props) => {
  const [finishRidingPanelOpen, setFinishRidingPanelOpen] = useState(false)
  const finishRidingPanelOpenRef = useRef(null)

  useGSAP(() => {
    if (finishRidingPanelOpen) {
      gsap.to(finishRidingPanelOpenRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(finishRidingPanelOpenRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidingPanelOpen])


  return (
    <div className='h-screen'>


      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16 ' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='' />
        <Link to={`/captian-home`} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>


      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src='https://tse3.mm.bing.net/th?id=OIP.Xl33AAWnwUNysT_nFRsUEgHaHa&pid=Api&P=0&h=180' />
      </div>

      <div className='h-1/5 flex p-6 items-center justify-between relative bg-yellow-400'>
        <h3 className='text-2xl w-[90%] font-semibold mb-5 text-center absolute top-0' onClick={()=>setFinishRidingPanelOpen(true)}>
          <i class="ri-arrow-up-wide-line"></i>
        </h3>
        <h4 className='text-xl font-semibold'>4 min away</h4>
        <button
          onClick={()=>setFinishRidingPanelOpen(true)}
          className='bg-green-600 text-white font-semibold p-2 rounded-full'
        >Complete Ride</button>
      </div>

      <div ref={finishRidingPanelOpenRef} className='fixed w-full min-h-screen z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6'>
        <FinishRide setFinishRidingPanelOpen={setFinishRidingPanelOpen} />
      </div>




    </div>
  )
}

export default CaptainRiding

