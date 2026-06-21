const taskbarButtons = ({ name, active, onClick }) => {
  return (
    <>
    <button className={`${name} ${active ? "active" : ""} button`} onClick={onClick}>
        <p style={{fontSize: "18px"}}>{name}</p>
    </button>
    </>
  )
}

export default taskbarButtons