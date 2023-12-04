'use client'

import { useState } from "react"

const Myheader = () => {
  const [myName, setMyName] = useState('myNameFile')
  const getDateandTime = () => {
    //return (new Date().toString()) //Mon Nov 27 2023 17:49:05 GMT-0500 (Horário Padrão da Colômbia)
    // return (new Date().toDateString()) //Mon Nov 27 2023
    //return (new Date().toISOString()) //2023-11-27T22:49:29.034Z
    return (new Date().toUTCString()) //Mon, 27 Nov 2023 22:51:03 GMT
  }
  const changeMyName = (e: React.FormEvent<HTMLInputElement>) => {
    // const newValue = e.currentTarget.value;
    e.preventDefault()
    console.log(e.currentTarget.value);
    setMyName(e.currentTarget.value)


  }
  const save = () => {
    // const content = 'Hello content!';
    // const blob = new Blob([content], { type: 'text/plain' });
    // const url = URL.createObjectURL(blob);

    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'mynewfile.txt';
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);

    // // Revoke the Blob URL to free up resources
    // URL.revokeObjectURL(url);
    localStorage.setItem(`${myName}`, 'Aqui va el texto')

    console.log('Saved!');
  };

  return (
    <header className='flex flex-col bg-gray-700 sm:justify-center items-center pt-3 pb-3' >
      <div className='flex bg-slate-900  h-12 w-3/4 items-center justify-center gap-1 pl-2 rounded-lg p-2 my-2'>
        <label className="w-28">Name</label>
        <input type="text" placeholder="Type name in ..." className=" text-slate-900 w-56" value={myName} onChange={(e) => changeMyName(e)} />
        <button className='bg-indigo-800 p-2 rounded-lg'>DRAW</button>
        <button className='bg-indigo-800 p-2 px-4 rounded-lg'>VIEW</button>
      </div>
      <div className='flex bg-slate-950 w-3/4 h-12 items-center justify-center gap-1 pl-2 rounded-lg p-2'>
        <label className="w-28">Date and Time</label>
        {/* <input type="text" className=" text-slate-500 bg-slate-800 w-56" value={getDateandTime()} /> */}
        <label className=" text-slate-500 bg-slate-800 w-56">{getDateandTime()}</label>
        <button className='bg-indigo-800 p-2 px-3 rounded-lg' onClick={save}>SAVE</button>
        <button className='bg-indigo-800 p-2 rounded-lg'>CLEAN</button>
      </div>
    </header>
  )
}

export default Myheader