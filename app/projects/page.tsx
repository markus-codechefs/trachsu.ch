import project from "../../components/project";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          {project(
            "trachsu.ch",
            "My landing page which gave me ample opportunity to dive into the world of react, nextjs and vercel",
            ["react", "next.js", "type script", "vercel", "planetscale db"]
          )}
        </div>
        <div>
          {project(
            "Simpline Workflow System",
            "I created a web portal using .NET Core, Orchard.net CMS, Bootstrap, and MS-SQL. It was hosted on Azure and deployed with Azure DevOps.",
            [".NET Core", "Bootstrap", "ms-sql"]
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {project(
            "Increased deployment frequency at immoscout24",
            "Applying the DORA metrics and modern practices like CI /CD we increased the deployment frequency to production from 4 times per month to 200!",
            ["Github", "octopus deploy", "bamboo", "process"]
          )}
        </div>
        <div>
          {project(
            "Automated Personal Debtcheck API from Intrum Justitia AG for Meisterwerk GmbH",
            "Analysis, design, implementation and testing of the API. Integration and automation of the ordering process at the customer.",
            ["Shopify API", "C#", ".NET Core", "Rest API"]
          )}
        </div>
      </div>
    </section>
  );
}
