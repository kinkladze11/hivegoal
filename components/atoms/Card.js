const Cards = (props) => {
  return (
    <div className=" inline-block w-max p-3">
      <div className=" max-w-xs overflow-serve rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
        <div className="heading solorized px-2 py-2 text-center text-white">
          <div>{props.team1}</div>
          <div>{props.team2}</div>
        </div>
        <div className="body flex justify-around p-5">
          <img className="h-10 w-10" src={props.team1logo} alt="" />
          <div className="livescore solorized mx-2 w-10 self-center text-center text-white">
            {props.score1}-{props.score2}
          </div>
          <img className="h-10 w-10" src={props.team2logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cards
