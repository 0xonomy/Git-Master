import "/styles/about.css"
import github from "/public/icons/github.svg"
import instagram from "/public/icons/instagram.svg"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div className="container">
      <p>This Project was just a side learning project so i don't really care if you copy it or smth</p>
      <p>Also, source code is in my github</p>
      <div className="social-links">
        <Link href="https://github.com/0xonomy/">
          <Image src={github} width={60} height={60} className="social-link"/>
        </Link>
        <Link href="https://instagram.com/oxo.nomy/">
          <Image src={instagram} width={60} height={60} className="social-link"/>
        </Link>
      </div>
    </div>
  );
};

export default About;
