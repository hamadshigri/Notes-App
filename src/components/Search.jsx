
const Search = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] flex justify-center items-center gap-10 p-4">
        <input type="text" placeholder="Filter by" className="bg-white p-2"/>
        <select name="filter" id="filter" className="bg-white p-2">
            <option value="">Sort By</option>
            <option value="">Alphabets</option>
            <option value="">Last Edited</option>
            <option value="">Recently Created</option>
        </select>
      </div>
    </>
  )
}

export default Search