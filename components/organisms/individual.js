import Link from "next/link";

const IndividualStat = ({ pos, player, stat }) => {
  return (
    // <div className="flex justify-between border-2 border-black bg-slate-200 p-2 pt-2">
    //   <img src={player.player.photo} className="h-10 rounded-full" alt="" />

    //   <div className="no flex flex-col text-center">
    //     <div className="no">{pos + 2}.</div>
    //     <div className="img">
    //       <img src={player.statistics[0].team.logo} className="h-5" alt="" />
    //     </div>
    //   </div>
    //   <div className="name">
    //     <div className="">{player.player.name}</div>
    //     <div className="team-name">{player.statistics[0].team.name}</div>
    //   </div>
    //   <div className="goals">{stat}</div>

    <tr>
      <td>
        <Link href={`/player/${player.player.id}`}>
          <a>
            <img
              src={player.player.photo}
              className="h-10 rounded-full"
              alt=""
            />
          </a>
        </Link>
      </td>
      <td>
        <div className="no   text-center">
          <div className="no">{pos + 2}.</div>
          <div className="img">
            <Link href={`/team/${player.statistics[0].team.id}`}>
              <a>
                <img
                  src={player.statistics[0].team.logo}
                  className="w-5 "
                  alt=""
                />
              </a>
            </Link>
          </div>
        </div>
      </td>
      <td>
        <div className="name">
          <div className="">
            <Link href={`/player/${player.player.id}`}>
              <a>{player.player.name}</a>
            </Link>
          </div>
          <div className="team-name">{player.statistics[0].team.name}</div>
        </div>
      </td>
      <td className="text-center">{stat}</td>
    </tr>

    // </div>
  );
};

export default IndividualStat;
