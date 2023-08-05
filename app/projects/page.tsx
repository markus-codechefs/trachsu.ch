import project from "../../components/project";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <div className="grid grid-cols-2 gap-4 my-4">
          {project(
            "CRM Dynamics 365 Customizer / Azure Software Engineer at BKW",
            "My first Freelancer Contract. I'm working with a team of engineers to support the sales and support needs of BKW via their CRM Dynamics 365 Platform.",
            [
              "Microsoft Dynamics 365", "Azure Cloud", "C#", ".NET Core",".NET Framework",
            ]
          )}
          {project(
            "trachsu.ch",
            "My landing page, which gave me ample opportunity to dive into the world of react, nextjs and vercel.",
            ["react", "next.js", "type script", "vercel", "planetscale db"]
          )}
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">        
          {project(
            "Simpline Workflow System",
            "I created a web portal using .NET Core, Orchard.net CMS, Bootstrap, and MS-SQL. It was hosted on Azure and deployed with Azure DevOps.",
            ["C#",".NET Core", "Bootstrap", "ms-sql"]
          )}
          {project(
            "Increased deployment frequency at immoscout24",
            "Applying the DORA metrics and modern practices like CI /CD we increased the deployment frequency to production from 4 times per month to 200!",
            ["Github", "octopus deploy", "bamboo", "process"]
          )}
      </div>
      <div className="grid grid-cols-2 gap-4">        
          {project(
            "Automated Personal Debtcheck API from Intrum Justitia AG for Meisterwerk GmbH",
            "Analysis, design, implementation and testing of the API. Integration and automation of the ordering process at the customer.",
            ["Shopify API", "C#", ".NET Core", "Rest API"]
          )}
          {project(
            "Cloud Project at Post IT",
            "Analysis, design, implementation and testing of an App Service, Logic App, Functions and Lambdas. Purpose of the project was to compare services on AWS and Azure creating a Workflow System.",
            ["C#",".NET Core", "Rest API", "Angular","AWS","Azure Cloud"]
          )}
      </div>
    </section>
  );
}
