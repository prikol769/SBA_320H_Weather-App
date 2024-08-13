import Logo from "./Logo";
import Search from "./Search";
import Switcher from "./Switcher";

const Header = () => {
  return (
    <div className="bg-primary p-3">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <Logo />
        <Search />
        <Switcher />
      </div>
    </div>
  );
};

export default Header;
