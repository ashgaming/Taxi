import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmVehicle from '../components/ConfirmVehicle'
import WaitForDriver from '../components/WaitForDriver'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmVehiclePanelOpen, setConfirmVehiclePanelOpen] = useState(false);
  const confirmVehiclePanelRef = useRef(null);

  const [lookingForDriverPanelOpen, setLookingForDriverPanelOpen] = useState(false);
  const lookingForDriverpanelRef = useRef(null);

  const [waitForDriverPanelOpen, setWaitForDriverPanelOpen] = useState(false);
  const waitForDriverpanelRef = useRef(null);

  const [VehicleFound,setVehicleFound] = useState(false)
 



  //const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%'
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(() => {
    if (confirmVehiclePanelOpen) {
      gsap.to(confirmVehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmVehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmVehiclePanelOpen])

  useGSAP(() => {
    if (lookingForDriverPanelOpen) {
      gsap.to(lookingForDriverpanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(lookingForDriverpanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [lookingForDriverPanelOpen])

  useGSAP(() => {
    if (waitForDriverPanelOpen) {
      gsap.to(waitForDriverpanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitForDriverpanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitForDriverPanelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />

      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src='https://tse3.mm.bing.net/th?id=OIP.Xl33AAWnwUNysT_nFRsUEgHaHa&pid=Api&P=0&h=180' />
      </div>

      <div className='flex flex-col justify-end absolute h-screen w-full bottom-0'>
        <div className='h-[30%] p-5 bg-white'>
          {
            panelOpen &&
            <h1 onClick={() => setPanelOpen(false)} className='absolute top-2 right-2'>
              <i className="ri-arrow-down-fill"></i>
            </h1>
          }
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={e => submitHandler(e)}>
            <input
              className='bg-[#eee] px-12 py-2 my-2 text-lg rounded-lg w-full'
              type='text'
              placeholder='Your location'
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)} />

            <input
              className='bg-[#eee] px-12 py-2 my-2 text-lg rounded-lg w-full'
              type='text'
              placeholder='Your destination'
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)} />

          </form>
        </div>
        <div ref={panelRef} className='h-[70%] bg-white p-5'>
          <LocationSearchPanel vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} setPanelOpen={setPanelOpen} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6'>
        <VehiclePanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}  setConfirmVehiclePanelOpen={setConfirmVehiclePanelOpen}/>
      </div>

      <div ref={confirmVehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6'>
        <ConfirmVehicle
          setPanelOpen={setPanelOpen}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmVehiclePanelOpen={setConfirmVehiclePanelOpen}
          setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
        />
      </div>

      <div ref={lookingForDriverpanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6'>
        <LookingForDriver
          setConfirmVehiclePanelOpen={setConfirmVehiclePanelOpen}
          setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
          setWaitForDriverPanelOpen={setWaitForDriverPanelOpen}
        />
      </div>

      <div ref={waitForDriverpanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 px-3 py-6'>
        <WaitForDriver
          setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
          setWaitForDriverPanelOpen={setWaitForDriverPanelOpen}
        />
      </div>

    </div>
  )
}

export default Home
