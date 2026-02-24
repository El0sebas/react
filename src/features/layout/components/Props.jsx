import Avatar from "./Avatar"
import hitler from "/react/images/hitler.jpg"
import kim from "/react/images/kim.jpg"
import putin from "/react/images/putin.jpg"
const Props = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Props React</h1>

      <div className="row">
        <div className="col">
          <Avatar nombre="Adolf Hitler" imagen={hitler} />
        </div>

        <div className="col">
          <Avatar nombre="kim jong un" imagen={kim} />
        </div>

        <div className="col">
          <Avatar nombre="Vladimir Putin" imagen={putin} />
        </div>
      </div>
    </div>
  )
}

export default Props