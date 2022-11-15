import Link from "next/link";
const Squad = ({squad}) => {
  console.log(squad);
  return (
    <table className="mx-auto w-full text-center xl:w-2/3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {squad?.players?.map((player, i) => (
          <tr key={i}>
            <td>
              <div className="flex">
                <img className="mr-2 h-10" src={player.photo} alt="" />
                <div className="name">
                  <Link href={`/player/${player.id}`}>
                    <a>{player.name}</a>
                  </Link>
                </div>
              </div>
            </td>
            <td>{player.age}</td>
            <td>{player.position}</td>
            <td>{player.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Squad;
