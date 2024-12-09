

export const GifItem = ({ title, url, onDelete }) => {


    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
            <button onClick={onDelete}>X</button>
        </div>
    )
}
