import React, {SVGProps} from 'react'

interface Props {
    Icon : (props: SVGProps<SVGSVGElement>) => JSX.Element
    title : string
}

function SidebarRow({Icon,title}:Props) {
  return (
    <div className='group flex max-w-fit rounded-full items-center cursor-pointer space-x-2 px-4 py-3 transition-all duration-200 hover:bg-gray-100'>
        <Icon className='h-7 w-7'/>
        <p className="group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl ">{title}</p>
    </div>
  )
}

export default SidebarRow