import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  
  return (
    <>
      {
        projects.map((project) => project.id == Number(id) && (
          <>
            <section className="black_container !min-h-[230px]">
              <p className="tag">{project.created_At}</p>

              <h1 className="heading">{project.title}</h1>
              <p className="sub-heading !max-w-5xl">{project.description}</p>
            </section>

            <section className="section_container">
              <Image
                src={project.image}
                alt="thumbnail"
                className="w-full h-auto rounded-xl"
              />

              <div className="space-y-5 mt-10 max-w-4xl mx-auto">

                <h3 className="text-30-bold">Project Details</h3>
                <div className="flex justify-center items-center max-md:flex-col gap-4">
                  <h4>Build using the following techs </h4>
                  <ul className="mt-4 flex flex-wrap gap-4">
                    { project.techs.map((tech: string) => <li key={project.id} className="skill">{tech}</li>)}
                  </ul>
                </div>
                <div className="text-xl flex flex-wrap gap-4 items-center">
                  <h3 className="font-semibold">See the project live: </h3>
                  <Link href={project.liveLink} className="text-secondary">{project.liveLink}</Link>
                </div>
              </div>
            </section>
          </>
        ))
      }
    </>
  );
};

export default Page;
