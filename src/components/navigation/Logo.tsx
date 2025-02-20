
import { Link } from "react-router-dom";

const Logo = () => (
  <Link
    to="/"
    className="flex items-center space-x-2 text-xl font-semibold tracking-tight hover:opacity-100 transition-opacity logo-container"
  >
    <img
      src="/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png"
      alt="WhitegloveAI Logo"
      className="h-10"
    />
  </Link>
);

export default Logo;
