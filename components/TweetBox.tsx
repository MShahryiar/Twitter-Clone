import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react';
import React, { useRef, useState } from 'react'

function TweetBox() {
   
    const [tweet, setTweet] = useState<string>("");
    const [image, setImage] = useState<string>("")

    const imageInputRef = useRef<HTMLInputElement>(null)
    const { data : session } = useSession();
    const [isImageBoxOpen, setIsImagBoxOpen] = useState(false);

    const addImageToTweet = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()

            if(!imageInputRef.current?.value) return ;

            setImage(imageInputRef.current?.value)
            imageInputRef.current.value = ''
            setIsImagBoxOpen(false);
    }
    
  return (
    <div className='flex space-x-2 p-2 '>
        {/* {session?.user?.email && <p>You are logged in as {session?.user?.email}</p>} */}
        {/* <img src={session?.user?.image||"https://links.papareact.com/gll"} */}
         <img src="https://links.papareact.com/gll"
        className='h-14 w-14 rounded-full object-cover'/>
        <div className='flex flex-1 pl-2  items-center'>
            <form className='flex- flex-1 flex-col'>
                <input type='text'  value={tweet} onChange={(e)=>setTweet(e.target.value)} className='text-gray-800 h-24 w-full outline-none placeholder:text-xl' placeholder="What's Happening?"/>
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        <PhotographIcon onClick={()=>setIsImagBoxOpen(!isImageBoxOpen)} className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <SearchCircleIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <EmojiHappyIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <CalendarIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <LocationMarkerIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                    </div>
                    <button disabled={!tweet || !session} className='bg-twitter text-white font-bold rounded-full px-5 py-2 disabled:opacity-40' >Tweet</button>
                </div>
                    {isImageBoxOpen && (

                    
                    <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
                        <input
                        ref={imageInputRef}
                        className='flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white'
                        type="text" name="image" placeholder='Enter Image URL'/>
                        <button onClick={addImageToTweet} className='font-bold bg-white p-2 rounded-lg text-sm'>Upload image</button>
                    </form>
                    )}
                    {image && <img src={image}/>}
            </form>
        </div>
        
    </div>
  )
}

export default TweetBox