import "/styles/Result.css";
import Image from "next/image";
import Link from "next/link";
import LinkIcon from "/public/icons/Link.svg";

const ResultUser = ({ result }) => {
  return (
    <Link href={result.html_url}>
      <div className="result">
        <div className="avatar-container">
          <Image
            src={result.avatar_url}
            width={70}
            height={70}
            alt="avatar"
            className="avatar"
            loading="lazy"
          />
        </div>

        <div className="data">
          <p className="name">{result.login}</p>
          <p className="type">{result.type}</p>
        </div>
        <div className="link-icon-container">
          <Image src={LinkIcon} width={20} height={20} className="link-icon" />
        </div>
      </div>
    </Link>
  );
};

export default ResultUser;
