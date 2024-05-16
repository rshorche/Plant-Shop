import TeamUser from "../TeamUser/TeamUser";

export default function TeamBox(teamDateals) {
  console.log(teamDateals);
  return (
    <div
      className={`flex items-center justify-evenly flex-wrap md:flex-nowrap gap-5 ${
        teamDateals.reverse ? "flex-row-reverse" : ""
      }`}>
      <div>
        <TeamUser {...teamDateals} />
      </div>
      <div className="relative max-w-md pt-14">
        <img
          src="src/assets/images/quote.png"
          alt=""
          className="absolute top-0 "
        />
        <p className="text-xl sm:text-2xl">{teamDateals.description}</p>
      </div>
    </div>
  );
}
