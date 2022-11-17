const HeadToHead = (props) => {
  console.log(
    props,
    props.value.league.name,
    props.value.fixture.venue,
    props.value.goals.home
  );
  return (
    <>
      <tbody>
        <tr>
          <td className="p-10 ">
            <div className="mx-auto text-center">
              {props.value.teams.home.name}
            </div>
          </td>
          <td className="">
            <div className="text-center">
              {props.value.goals.home}-{props.value.goals.away}
            </div>
            <div className="text-center">{props.value.fixture.date}</div>
          </td>
          <td className="p-10">
            <div className="mx-auto text-center">
              {props.value.teams.away.name}
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default HeadToHead;
