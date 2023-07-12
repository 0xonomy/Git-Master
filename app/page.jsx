import "/styles/home.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="heading">
          <p className="heading-text">
            Simple and lighweight search tool for regular browsing and searching through Github
          </p>
        </div>
        <Link href="/search">
          <button className="start-button">Start Here</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
