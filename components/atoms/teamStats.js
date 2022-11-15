const TeamStats = () => {
  return (
    <table className="mx-auto w-full border text-center lg:w-2/3">
      <thead className="border">
        <tr>
          <th className="border py-2 font-light">match played</th>
          <th className=" border py-2 font-light">wins</th>
          <th className=" border py-2 font-light">draws</th>
          <th className=" border py-2 font-light">loses</th>
          <th className=" border py-2 font-light">form</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border">
          <td className="border">6</td>
          <td className="border">3</td>
          <td className="border">1</td>
          <td className="border">1</td>
          <td className="w-5 border">
            {'wwwwddl'.split('').map((item, i) => {
              if (item == 'w') {
                return (
                  <div key={i} className=" inline bg-green-500 px-2 py-1">
                    {item}
                  </div>
                )
              }
              if (item == 'l') {
                return (
                  <div key={i} className="inline bg-red-500 px-2 py-1">
                    {item}
                  </div>
                )
              }
              if (item == 'd') {
                return (
                  <div key={i} className=" inline bg-yellow-500 px-2 py-1">
                    {item}
                  </div>
                )
              }
            })}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TeamStats
