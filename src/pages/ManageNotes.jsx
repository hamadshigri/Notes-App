import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { toast } from 'react-toastify';


const ManageNotes = () => {
  const titleRef = useRef("");
  const messageRef = useRef("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const addNotify = () => toast("Notes Added!");
  const updateNotify = () => toast("Notes Updated!");
  const deleteNotify = () => toast("Notes Deleted!");



  let notes = JSON.parse(localStorage.getItem("notes")) ?? [];

  useEffect(() => {
    if (!id) return;
    let note = notes.find(n => n.id == id);
    if (!note) return;

    titleRef.current.value = note.title;
    messageRef.current.value = note.message;

  }, [id])


  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const message = messageRef.current.value;
    const createdAt = new Date();

    let data = { "id": Date.now(), "title": title, "message": message, "createdAt": createdAt }
    notes.push(data)
    localStorage.setItem("notes", JSON.stringify(notes));
    titleRef.current.value = "";
    messageRef.current.value = "";
    navigate("/");
    addNotify();
  }

  function handleUpdate(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const message = messageRef.current.value;
    const updatedAt = new Date();
    let data = { "title": title, "message": message, "updatedAt": updatedAt }
    let updatedNotes = notes.map(note => note.id == id ? { ...note, ...data } : note);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/");
    updateNotify();
  }

  function handleDelete(e) {
    e.preventDefault();
    const note = notes.filter(n => n.id != id);
    localStorage.setItem("notes", JSON.stringify(note));
    navigate("/");
    deleteNotify();
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-[700px] pt-4">
          <input type="text" ref={titleRef} placeholder="Type Your Notes Title" className="bg-[#F7F7F7] p-4" />
          <textarea cols="4" rows="4" ref={messageRef} className="bg-[#F7F7F7] p-4" placeholder="Type Your Notes Body" ></textarea>
          {!id ? <Button name="Add Notes" clickHandler={handleSubmit} /> :
            (<div className="flex justify-between">
              <Button name="Update" clickHandler={handleUpdate} />
              <Button name="Delete" clickHandler={handleDelete} />
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default ManageNotes