import Image from "next/image";
import Link from "next/link";
import { getStarCount } from "lib/metrics";
import {  
  GitHubIcon,
  TwitterIcon,
  MailIcon,
  LinkedinIcon,
  ArrowIcon,
} from "components/icons";
import { name, about, bio, avatar, meat } from "lib/info";

export const revalidate = 60;

export default async function HomePage() {
  let starCount: number | null = null;
  let starCountError = false;

  try {
    starCount = await getStarCount();
  } catch (error) {
    console.error('Failed to fetch star count:', error);
    starCountError = true;
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      
      {/* Call to Action */}
      <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 className="font-bold text-xl font-serif mb-3">Ready to improve your software delivery?</h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Let's discuss how I can help optimize your DevOps processes, improve deployment frequency, 
          or architect your next cloud solution.
        </p>
        <Link
          href="mailto:markus@codechefs.ch"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Get in Touch
          <MailIcon />
        </Link>
      </div>

      <h2 className="font-bold text-3xl font-serif my-5">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <h3 className="font-bold text-lg mb-2">DevOps & Process Improvement</h3>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• CI/CD pipeline optimization</li>
            <li>• Deployment frequency improvement</li>
            <li>• DORA metrics implementation</li>
            <li>• Team productivity enhancement</li>
          </ul>
        </div>
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Software Development</h3>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• .NET Core application development</li>
            <li>• React & TypeScript frontend</li>
            <li>• API development & integration</li>
            <li>• Cloud-native architecture</li>
          </ul>
        </div>
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Cloud Architecture</h3>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• AWS & Azure expertise</li>
            <li>• Multi-cloud strategies</li>
            <li>• Serverless architecture</li>
            <li>• Infrastructure as Code</li>
          </ul>
        </div>
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Consulting & Strategy</h3>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• Technical architecture review</li>
            <li>• Technology stack assessment</li>
            <li>• Team structure optimization</li>
            <li>• Digital transformation guidance</li>
          </ul>
        </div>
      </div>

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
            className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            <LinkedinIcon />
            {`contact me on linkedin`}
          </a>          
          <a
            target="_blank"
            href="mailto:markus@codechefs.ch"
            className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            <MailIcon />
            {`contact me`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/markus-codechefs"
            className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            <GitHubIcon />
            {starCountError 
              ? 'view my github' 
              : `${starCount?.toLocaleString() || '...'} stars on this repo`
            }
          </a>          
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/trachsel_markus"
            className="flex items-center gap-2 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            <TwitterIcon />
            {`follow me on twitter`}
          </a>          
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>      
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {meat()}
      </p>      
    </section>
  );
}
