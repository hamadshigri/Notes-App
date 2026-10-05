
const Form = () => {
  return (
    <>
    <div className="flex flex-col w-[500px]">
        <input type="text" placeholder="Type Your Notes Title"/>
        <textarea cols="4" rows="4"></textarea>
        <button className='bg-[#437993] p-4 text-white font-bold rounded w-[200px]'>Add Notes</button>
    </div>
    </>
  )
}

export default Form