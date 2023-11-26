const Myheader = () => {
  return (
    <header className='flex bg-gray-700 sm:justify-center'>
      <div>
        <div className='p-3 ml-20 flex justify-between'>
          <label className='pr-2'>Name:</label>
          <input type="text" name="" id="" />
        </div>
        <div className='p-3 ml-3 flex justify-between'>
          <label className='pr-2'>Date and Time:</label>
          <input type="text" name="" id="" />
        </div>
      </div>
      <div>
        <div className='p-1 flex justify-start'>
          <button className='bg-indigo-800 p-2 mr-2'>DRAW</button>
          <button className='bg-indigo-800 p-2'>VIEW</button>
        </div>
        <div className='p-1 flex justify-start'>
          <button className='bg-indigo-800 p-2 mr-2'>SAVE</button>
          {/* <button className='bg-indigo-800 p-2'>VIEW</button> */}
        </div>
      </div>

    </header>
  )
}

export default Myheader