import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import LabsPracticeSection from "./sections/LabsPracticeSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import CoursesSection from "./sections/CoursesSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <LabsPracticeSection />
      <SkillsSection />
      <EducationSection />
      <CoursesSection />
      <ContactSection />
    </main>
  );
}
