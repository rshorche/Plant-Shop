export default function TeamUser(teamDatal) {
  return (
    <div key={teamDatal.id}>
      <img src={teamDatal.img} alt="" />
      <h4 className="mt-5 mb-2"> {teamDatal.name} </h4>
      <p> {teamDatal.Expertise} </p>
    </div>
  );
}
