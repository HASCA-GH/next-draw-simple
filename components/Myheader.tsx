const Myheader = () => {
  const getDateandTime = () => {
    //return (new Date().toString()) //Mon Nov 27 2023 17:49:05 GMT-0500 (Horário Padrão da Colômbia)
    // return (new Date().toDateString()) //Mon Nov 27 2023
    //return (new Date().toISOString()) //2023-11-27T22:49:29.034Z
    return (new Date().toUTCString()) //Mon, 27 Nov 2023 22:51:03 GMT
  }
  return (
    <header className='flex flex-col bg-gray-700 sm:justify-center items-center pt-3 pb-3'>
      <div className='flex bg-slate-700 w-6/6  h-12 justify-stretch items-center gap-1  pl-2'>
        <label className="w-28">Name</label>
        <input type="text" placeholder="Type name in ..." className=" text-slate-900" />
        <button className='bg-indigo-800 p-2 rounded-lg'>DRAW</button>
        <button className='bg-indigo-800 p-2 px-4 rounded-lg'>VIEW</button>
      </div>
      <div className='flex bg-slate-950 w-6/6  h-12 justify-stretch items-center gap-1 pl-2'>
        <label className="w-28">Date and Time</label>
        <input type="text" />
        <button className='bg-indigo-800 p-2 px-3 rounded-lg'>SAVE</button>
        <button className='bg-indigo-800 p-2 rounded-lg'>CLEAN</button>
      </div>
    </header>
  )
}

export default Myheader