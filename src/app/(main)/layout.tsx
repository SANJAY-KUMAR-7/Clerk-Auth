
import InfoBar from '@/components/infobar'
import MenuOptions from '@/components/sidebar'
import React from 'react'

type Porps={ children: React.ReactNode}
const Layout=(props:Porps)=> {
  return (
    <div>
      <div className="flex overflow-hidden h-screen">
      <MenuOptions/>
      <div className="w-full">
        <InfoBar/>
        {props.children}
      </div>
    </div>
    </div>
  )
}

export default Layout
