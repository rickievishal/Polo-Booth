"use client"
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import React, { useState } from 'react'

const page = () => {
  const colorScheme = [{
    hexCode : "#FF84DF",
    label : "primary",
  },{
    hexCode : "#FCC52E",
    label : "secondary",
  },
  {
    hexCode : "#FCE4EC",
    label : "primary-bg"
  }
]
const [primary, setPrimary] = useState("Primary")
const [secondary, setSecondary] = useState("Secondary")
const [disabled, setDisabled] = useState("Disabled")

  return (
     <div className="mx-auto max-w-4xl p-8 space-y-12 mt-24">
     <section>
      <h1 className='text-3xl font-bold'>
      Components
     </h1>
      <p className='mt-4'>
          This is a collective component library where you can see all the components used accross the ui.
      </p>
     </section>
     <section className='space-y-4'>
      <h2 className='text-xl font-bold'>
        Color Scheme
      </h2>
      <div className='flex flex-wrap gap-8'>
          {
            colorScheme.map((comp,index)=>(
              <div className='flex flex-col space-y-2' key={index}>
                <h3 className='text-base font-bold'>{comp.label}</h3>
                <div style={{ backgroundColor: comp.hexCode }} className={`w-24 h-24 rounded-lg shadow-[6px_6px_0px_0px_black] border-2 flex justify-end items-end px-1 py-1`}>
                    <p className='text-xs font-bold'>
                      {comp.hexCode}
                    </p>
                </div>
              </div>
            ))
          }
      </div>
     </section> 
     <section className='space-y-4'>
      <h2 className='text-xl font-bold'>
        Inputs
      </h2>
      <div className='max-w-sm space-y-4'>
        <Input  label={"primary"} value={primary} variant='primary' onChange={(e) => setPrimary(e.target.value)}/>
        <Input label={"secondary"} value={secondary} variant='secondary' onChange={(e) => setSecondary(e.target.value)}/>
        <Input label={"disabled"} value={disabled} disabled={true} onChange={(e) => setDisabled(e.target.value)}/>
      </div>
     </section>
     <section className='space-y-4'>
      <h2 className='text-xl font-bold'>
        Buttons
      </h2>
      <div className='flex flex-wrap gap-4'>
        <Button variant='primary'>
          Primary
        </Button>
        <Button variant='icon'>
          icon
        </Button>
        <Button variant='secondary'>
          Button
        </Button>
        
      </div>
     </section>
     <section className=''>
     </section>
    </div>
  )
}

export default page