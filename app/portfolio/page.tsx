import ProjectCard, { Project } from "@/components/ProjectCard";
import { projects } from "@/constants";

const page = () => {
  return (
    <>
        <p className="section-heading"> All Projects</p>
      <section className="section_container">

        <ul className="mt-7 card_grid">
          {projects.map((project: Project) => <ProjectCard key={project.id} project={project} />)}
        </ul>
      </section>
    </>
  )
}

export default page;
