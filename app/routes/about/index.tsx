import AboutIntro from "~/components/About/AboutIntro";
import AboutMission from "~/components/About/AboutMission";
import type { Route } from "./+types/index";
import AboutTechSkills from "~/components/About/AboutTechSkills";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Freindly Dash Developer" },
    {
      name: "description",
      content:
        "Custom React Router-based website, focuses on Portfolio and Blogs!!",
    },
  ];
}
const AboutPage = () => {
  return (
    <div className="px-6 py-10 bg-gray-900 rounded-md flex flex-col gap-10">
      {/* Intro */}
      <AboutIntro />
      {/* My Mission */}
      <AboutMission />
      {/* Tech Used */}
      <AboutTechSkills />
    </div>
  );
};

export default AboutPage;
