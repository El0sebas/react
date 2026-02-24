const Avatar = ({ nombre, imagen }) => {
  return (
    <div className="text-center">
      <img
        src={imagen}
        alt={nombre}
        className="rounded-circle mb-3"
        width="150"
        height="150"
        style={{ objectFit: "cover" }}
      />
      <h5>{nombre}</h5>
    </div>
  )
}

export default Avatar