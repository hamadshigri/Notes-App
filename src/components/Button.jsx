const Button = ({name, clickHandler}) => {
    return (
        <>
            <button onClick={clickHandler} className='bg-[#437993] p-4 text-white font-bold rounded w-[120px] hover:opacity-[0.9] cursor-pointer'>{name}</button>
        </>
    )
}

export default Button