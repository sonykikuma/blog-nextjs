import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/site/abha1.png"
          alt="An image showing Abha"
          width={300}
          height={200}
        />
        <h1>Hi,I am Abha</h1>
        <p>
          I blog about web development-especially frontend frameworks like
          React,Nextjs.
        </p>
      </div>
    </section>
  );
};

export default Hero;
