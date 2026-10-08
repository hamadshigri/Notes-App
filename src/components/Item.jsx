
const Item = ({title,message,createdAt}) => {

    return (
        <>
            <div className="flex justify-center pt-6">
                <div className="max-w-[750px] w-full bg-[#F7F7F7] p-6 rounded text-lg">
                    <p>{title ?? '-'}</p>
                    <p>{message ?? '-'}</p>
                    <p>{createdAt ? new Date(createdAt).toLocaleDateString() : '-'}</p>
                </div>
            </div>
        </>
    )
}

export default Item