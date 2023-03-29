import {imprint, credits} from "lib/info";

export default function ImpressumPage() {
  return (
    <section>      
      <h1 className="font-bold text-3xl font-serif">Imprint</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {imprint()}
      </p>    
      <h2 className="font-bold text-3xl font-serif">Credits</h2>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {credits()}
      </p>       
    </section>    
  );
}
