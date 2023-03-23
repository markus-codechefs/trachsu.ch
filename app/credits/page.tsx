import { credits} from "lib/info";

export default function CreditsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Credits</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {credits()}
      </p>
    </section>
  );
}
