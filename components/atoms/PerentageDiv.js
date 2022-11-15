const PercentageDiv = () => {
  return (
    <div>
      <div className="mt-4 flex border-b-2 border-black">
        <div className="team1 w-1/3 border-t-4 border-t-red-600 text-center ">3 wins</div>
        <div className="team1 w-1/3 border-t-4 border-t-gray-600 text-center ">0 draws</div>
        <div className="team1 w-1/3 border-t-4 border-t-blue-600 text-center ">3 wins</div>
      </div>
      <div className="text-center">6 matches</div>
    </div>
  )
}

export default PercentageDiv
