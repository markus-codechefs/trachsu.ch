import me from "../app/profile.jpg";

export const name = "Markus Trachsel";
export const avatar = me;
export const about = () => {
  return (
    <>
      As a full-stack engineer, I bring a passion for empowering agile software
      teams through DevOps principles, small batch sizes, and frequent
      deployments. I prioritize people over technology.       
    </>
  );
};
export const bio = () => {
  return (
    <>
      Beyond work, I spend time with my familiy, enjoy playing basketball and
      love exploring my culinary creativity in the kitchen.
    </>
  );
};
export const credits = () => {
  return (
    <>
      <p>
        Many thanks to Lee Robinson (<b>leerob</b>) for this awesome template!
      </p>
    </>
  );
};

export const imprint = () => {
  return (
    <>
      <p>
        <b>E-Mail:</b> markus@codechefs.ch
      </p>
      <p>
        <b>Website:</b> trachsu.ch
      </p>
      <p>
        <b>Authorized representative: </b>Markus Trachsel
      </p>
    </>
  );
};