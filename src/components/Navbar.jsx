import AddList from "components/List/AddList";
import Tabs from "componnents/Tabs";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Tabs />
        </li>
        <li>
          <AddList />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
