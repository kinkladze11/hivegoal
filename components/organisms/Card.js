import Link from "next/link";

const Card = ({ player, stat, category }) => {
  return (
    <>
      <div className="card  border-l-2 border-indigo-900  pt-2">
        <div className="flex ">
          <div className="image">
            <Link href={`/player/${player.player.id}`}>
              <a>
                <img src={player.player.photo} className="h-32" alt="" />
              </a>
            </Link>
          </div>
          <div className="stat-type flex flex-col p-10 text-center">
            <img src={category.image} className="h-10 " alt="" />
            <div className="stat-name">{category.name}</div>
          </div>
        </div>
        <div className="data solorized flex justify-around p-2 text-white">
          <div className="no">
            <div className="no">1.</div>
            <div className="img">
              <img
                src={player.statistics[0].team.logo}
                className="h-5"
                alt=""
              />
            </div>
          </div>
          <div className="name">
            <div className="">
              <Link href={`/player/${player.player.id}`}>
                <a>{player.player.name}</a>
              </Link>
            </div>
            <div className="team-name">{player.statistics[0].team.name}</div>
          </div>
          <div className="goals">{stat}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
