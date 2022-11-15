const Goals = () => {
  return (
    <table className="table-data__table table-data__table--odds mx-auto w-full xl:w-2/3">
      <thead>
        <tr>
          <th className="border-collapse border border-slate-400 "></th>
          <th
            colSpan={2}
            className="border-collapse border border-slate-400  bg-red-600 px-4 py-2 text-center font-light text-white "
          >
            Goals
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-uppercase color-gray border-collapse  border border-slate-400 p-2 text-center font-light">
            Line
          </th>
          <th className="text-uppercase color-gray border-collapse  border border-slate-400 p-2 text-center font-light">
            Under
          </th>
          <th className="text-uppercase color-gray border-collapse  border border-slate-400 p-2 text-center font-light">
            Over
          </th>
        </tr>
        <tr>
          <td className="border-collapse border border-slate-400  p-2 text-center">2.5</td>

          <td className="border-collapse border border-slate-400  p-2 text-center">2.2</td>

          <td className="border-collapse border border-slate-400  p-2 text-center">1.67</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Goals
