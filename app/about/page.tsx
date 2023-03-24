import {
  GitHubIcon,
  InstaIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi I'm Markus Trachsel nice to meet you! As a software architect and
        full-stack engineer, I bring a passion for empowering agile software
        teams through DevOps principles, small batch sizes, and frequent
        deployments. My approach prioritizes people over technology, recognizing
        the vital role software plays in supporting and improving organizational
        goals. My expertise extends to process automation and integration and
        pipelines, which allows me to help clients optimize their productivity
        and efficiency through the use of appropriate technology. Beyond work, I
        enjoy playing basketball and exploring my culinary creativity in the
        kitchen.
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/markus_trachsel"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <TwitterIcon />
            <div className="ml-3">Twitter</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/markus-codechefs"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">Github</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/trachselfood"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <InstaIcon />
            <div className="ml-3">Instagram</div>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
