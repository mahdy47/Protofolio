import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import CoursesSection from "./sections/CoursesSection";
import LabsPracticeSection from "./sections/LabsPracticeSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CoursesSection />
      <LabsPracticeSection />
      <ContactSection />
    </main>
  );
}
