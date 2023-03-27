import {impressum} from "lib/info";

export default function ImpressumPage() {
  return (
    <section>      
      <h1 className="font-bold text-3xl font-serif">Impressum</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {impressum()}
      </p>      
    </section>    
  );
}
