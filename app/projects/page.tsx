import { projects} from "lib/info";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Projects</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {projects()}
      </p>
    </section>
  );
}
