import Avatar from "./Avatar"

const Props = () => {
  const base = import.meta.env.BASE_URL

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Props React</h1>

      <div className="row">
        <div className="col">
          <Avatar 
            nombre="Adolf Hitler" 
            imagen={`${base}images/hitler.jpg`} 
          />
        </div>

        <div className="col">
          <Avatar 
            nombre="Kim Jong Un" 
            imagen={`${base}images/kim.jpg`} 
          />
        </div>

        <div className="col">
          <Avatar 
            nombre="Vladimir Putin" 
            imagen={`${base}images/putin.jpg`} 
          />
        </div>
      </div>
    </div>
  )
}

export default Props