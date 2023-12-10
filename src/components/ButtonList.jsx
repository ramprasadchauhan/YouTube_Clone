import Button from "./Button";

const ButtonList = () => {
  // const nameList = ["All", "Gaming", "News", "Cricket"];
  return (
    <div>
      <div className="flex overflow-x-auto">
        {/* {nameList.map((name, index) => {
          return <Button key={index} name={name} />;
        })} */}

        <Button name="All" />
        <Button name="Gaming" />
        <Button name="News" />
        <Button name="Music" />
        <Button name="Cricket" />
        <Button name="Movies" />
        <Button name="Comedy" />
        <Button name="Cooking" />
        <Button name="Live" />
        <Button name="Movies" />
        <Button name="Comedy" />
      </div>
    </div>
  );
};

export default ButtonList;
