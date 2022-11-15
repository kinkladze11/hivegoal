const AsianHandicap = () => {
  return (
    <table className="table-data__table table-data__table--odds mx-auto w-full border-collapse border border-slate-400 xl:w-2/3">
      <thead>
        <tr>
          <th></th>
          <th
            colSpan="2"
            className=" bg-red border-collapse border border-slate-400 bg-red-600 p-2 text-center font-light text-white"
          >
            Asian handicap
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="border-collapse border border-slate-400 p-2  text-center font-light">
            Line
          </th>
          <th className="border-collapse border border-slate-400 p-2  text-center font-light">1</th>
          <th className="border-collapse border border-slate-400 p-2   text-center font-light">
            2
          </th>
          <th className="border-collapse border border-slate-400 p-2  text-center font-light">
            Line
          </th>
        </tr>

        <tr>
          <td className="border-collapse border border-slate-400">-1.5</td>
          <td className="border-collapse border border-slate-400">2.01</td>
          <td className="border-collapse border border-slate-400">1.98</td>

          <td className="border-collapse border border-slate-400">+1.5</td>
        </tr>

        <tr>
          <td className="border-collapse border border-slate-400">-1.25</td>
          <td className="border-collapse border border-slate-400">1.71</td>
          <td className="border-collapse border border-slate-400">2.14</td>

          <td className="border-collapse border border-slate-400">+1.25</td>
        </tr>

        <tr>
          <td className="border-collapse border border-slate-400">-1.75</td>
          <td className="border-collapse border border-slate-400">2.17</td>
          <td className="border-collapse border border-slate-400">1.69</td>

          <td className="border-collapse border border-slate-400">+1.75</td>
        </tr>
      </tbody>
    </table>
  )
}

export default AsianHandicap
