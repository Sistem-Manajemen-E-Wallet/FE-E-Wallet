import { Link } from "react-router-dom";

const Menu = (props: { source: string; name: string; navigate: string }) => {
  return (
    <Link className="mx-auto" to={props.navigate}>
      <div className="rounded-full hover:bg-yellow-500 w-44 h-44 bg-yellow-200 flex justify-center items-center">
        <img src={props.source} alt="" width={100} height={100} />
      </div>
      <p className="text-center mt-2 text-xl font-bold">{props.name}</p>
    </Link>
  );
};

export default Menu;
