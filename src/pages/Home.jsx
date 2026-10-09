import Item from "../components/Item"
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";


const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [selectItem, setSelectItem] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(()=> JSON.parse(localStorage.getItem("notes")) ?? []);
  const [notes] = useState(()=> JSON.parse(localStorage.getItem("notes")) ?? []);


  useEffect(()=>{
    if(searchItem.trim()==="" && selectItem === "sortby") {
      setFilteredNotes(notes);
    }
    setFilteredNotes(notes.filter(note => note.title.toLowerCase().includes(searchItem.toLowerCase())));
  },[searchItem])


  useEffect(() => {
    if (selectItem == "alphabets") {
      setFilteredNotes( prev => [...prev].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (selectItem == "recentlycreated"){
      setFilteredNotes( prev => [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
    else if (selectItem == "lastedited") {
      setFilteredNotes( prev => [...prev].sort((a, b) => new Date(b.updatedAt ?? b.createdAt) - new Date(a.updatedAt ?? a.createdAt)));
    }
    else{
      setFilteredNotes(notes);
    }
    
  }, [selectItem])

  return (
    <>
      <Navbar setSearchItem={setSearchItem} setSelectItem={setSelectItem} />
      <div className="relative h-[calc(100vh-173px)]">
        {filteredNotes.map((note, index) => (
          <Link key={index} to={`/add-notes?id=${note.id}`}><Item title={note.title} message={note.message} createdAt={note.createdAt} /></Link>
        ))}

        <div className='absolute fixed bottom-7 right-1 p-4'> 
          <Link to={"/add-notes"} className='bg-[#437993] p-6 text-white font-bold rounded hover:opacity-[0.9]'>Create New Note</Link>
        </div>
      </div>
    </>

  )
}

export default Home