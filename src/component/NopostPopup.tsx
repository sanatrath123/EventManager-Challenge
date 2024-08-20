

const NopostPopup = () => {
  return (
    <div className='w-full h-screen bg-black flex '>
        <div className='w-80 h-60 bg-gray-800 rounded-2xl m-auto flex flex-col'>
            <h1 className='text-gray-100 text-3xl font-semibold p-3 text-center'>There is No Events You Set Please Set Some Events</h1>

            <button className='bg-violet-500 text-gray-100 font-bold text-xl w-40 h-16 rounded-2xl mx-auto mt-4'>Go To Callender</button>
        </div>
    </div>
  )
}

export default NopostPopup