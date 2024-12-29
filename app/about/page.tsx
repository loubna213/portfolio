import { skills } from "../../constants";

const page = () => {
  return (
    <>
      <p className="section-heading">About me</p>
      <section className="mx-auto max-w-[1440px] py-12 px-12 2xl:px-0 max-md:px-16">
        <p className="text-xl leading-relaxed">
          Hi, I&apos;m Loubna Lekouaghet, a dedicated Frontend Developer who loves turning ideas into functional and visually appealing projects.
          I specialize in building responsive websites and web applications and crafting intuitive user interfaces i also enjoy exploring innovative solutions to challenging problems. 
        </p>
        <p className="text-xl leading-relaxed mt-4">
          I believe in delivering quality code, working collaboratively, and creating seamless user experiences.
            When I&apos;m not coding or designing, I love exploring new tech, reading about design trends. My curiosity drives me to constantly learn and grow.
            Take a look at my portfolio to see some of my recent projects, and feel free to reach out if you&apos;d like to collaborate!
        </p>
        <h3 className="text-3xl mt-8 font-semibold">Skills</h3>
        <ul className="mt-4 flex flex-wrap gap-4">
          {
            skills.map(skill => <li key={skill.id}  className="border-4 border-black rounded-full bg-white px-4 py-2 shadow-100">{skill.skill}</li>)
          }
        </ul>
      </section>
    </>
  )
}

export default page;
