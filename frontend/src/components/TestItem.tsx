import React, { useState } from 'react'

const TestItem = () => {
     const [open, setOpen] = useState(false);

     return (
       <div className='text-black bg-white'>
         <button
           className="cursor-pointer"
           onClick={() => setOpen(!open)}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           >
             <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
           </svg>
           <span>Dropdown</span>
         </button>
         <div
           className={`hidden ${open ? "block bg-white h-20" : "none"}`}
           style={{
             animation: `fadeIn 200ms ease-in`,
           }}
         >
           <p>This is the dropdown content.</p>
         </div>
       </div>
     );
}

export default TestItem
