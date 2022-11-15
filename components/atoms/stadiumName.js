const StadiumName = (props) => {
  return (
    <div className=" w-full space-y-2 bg-red-500 p-5">
      <div className="capacity flex">
        <img
          src="https://cdn-icons-png.flaticon.com/512/951/951216.png"
          alt=""
          className="mr-5 w-14"
        />
        <div className="data flex flex-col">
          <span>Capacity</span>
          <span>{props.stadium?.capacity}</span>
        </div>
      </div>
      <div className="stadium flex">
        <img src={props.stadium?.image} alt="" className="mr-5 w-14" />
        <div className="data flex flex-col">
          <span>Stadium</span>
          <span>{props.stadium?.name}</span>
        </div>
      </div>
      <div className="surface flex">
        <img
          src="https://static.thenounproject.com/png/1780822-200.png"
          alt=""
          className="mr-5 w-14"
        />
        <div className="data flex flex-col">
          <span>Surface</span>
          <span>{props.stadium?.surface}</span>
        </div>
      </div>
    </div>
  )
}

export default StadiumName
