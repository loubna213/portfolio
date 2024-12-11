import { projects } from "@/constants";

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
              <img
                src={project.image}
                alt="thumbnail"
                className="w-full h-auto rounded-xl"
              />

              <div className="space-y-5 mt-10 max-w-4xl mx-auto">

                <h3 className="text-30-bold">Project Details</h3>
                  <p className="no-result">No details provided</p>
              </div>
            </section>
          </>
        ))
      }
    </>
  );
};

export default Page;
