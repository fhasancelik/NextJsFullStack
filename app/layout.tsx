'use client'
import Navbar from "./components/navbar/Navbar"
import '../styles/global.css'
import {Nunito} from 'next/font/google'
import MountedClient from "./components/MountedClient"
import Modal from "./components/modals/Modal"
import RegisterModal from "./components/modals/RegisterModal"

const newFont=Nunito({
  subsets:['latin']
})

const RootLayout=({children}:{children:React.ReactNode})=>{
  return(

  <html lang="en">
    <body className={newFont.className}>
   <MountedClient>
    <RegisterModal/>
    <Navbar/>
   </MountedClient>
      {children}
    </body>

  </html>
  )
}

export default RootLayout