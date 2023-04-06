import Link from "next/link";
import Image from "next/image";
import { getStarCount } from "lib/metrics";
import {  
  GitHubIcon,
  TwitterIcon,
  MailIcon,
  LinkedinIcon,
} from "components/icons";
import { name, about, bio, avatar } from "lib/info";

export const revalidate = 60;

export default async function HomePage() {
  let starCount, views;

  try {
    [starCount] = await Promise.all([
      getStarCount(),      
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <h2 className="font-bold text-3xl font-serif my-5">Services</h2>
      <ul className="list-disc mx-5">
        <li>Freelance software engineering</li>
        <li>Expertise in React, .NET Core, and cloud platforms such as AWS and Azure</li>
        <li>Creating high-quality and scalable software solutions</li>
        <li>Utilizing cutting-edge technologies, including AI, to deliver innovative software solutions</li>
      </ul>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
        <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/markustrachsel"
            className="flex items-center gap-2"
          >
            <LinkedinIcon />
            {`contact me on linkedin`}
          </a>          
          <a
            target="_blank"
            href="mailto:markus@codechefs.ch"
            className="flex items-center gap-2"
          >
            <MailIcon />
            {`contact me`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/markus-codechefs"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`${starCount.toLocaleString()} stars on this repo`}
          </a>          
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/trachsel_markus"
            className="flex items-center gap-2"
          >
            <TwitterIcon />
            {`follow me on twitter`}
          </a>          
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>      
    </section>
  );
}
