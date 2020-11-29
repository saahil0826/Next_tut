import Link from "next/Link";
const Navbar = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-around",
    background: "grey",
    padding: "1rem"
  };

  return (
    <div style={styles}>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Link href="about">
        <a>About Page</a>
      </Link>
      <Link href="contact">
        <a>Contact Page</a>
      </Link>
      <Link href="blog/nested-route">
        <a>Blog Page</a>
      </Link>
    </div>
  );
};
export default Navbar;
