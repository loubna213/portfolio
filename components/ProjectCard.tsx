import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techs?: string[];
  liveLink: string;
  created_At: string;
}

interface ProjectProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <li className="project-card group">
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href="">
            <h3 className="text-26-semibold line-clamp-1">{project.title}</h3>
          </Link>
        </div>
      </div>

      <Link href="">
        <p className="project-card_desc">{project.description}</p>

        <Image
          src={project.image}
          alt="placeholder"
          className="project-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <p className="startup_card_date">{project.created_At}</p>
        <button className="project-card_btn" aria-label="details">
          <Link href={`/portfolio/${project.id}`}>Details</Link>
        </button>
      </div>
    </li>
  );
};

export default ProjectCard;
