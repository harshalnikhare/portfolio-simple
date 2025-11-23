import { resumeData } from './data';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Awards } from './components/Awards';

function App() {
  const { basics, sections } = resumeData;

  return (
    <Layout>
      <Header basics={basics} profiles={sections.profiles} />

      <main className="space-y-12">
        <div id="summary">
          <Summary data={sections.summary} />
        </div>
        <div id="skills">
          <Skills data={sections.skills} />
        </div>
        <div id="experience">
          <Experience data={sections.experience} />
        </div>
        <div id="projects">
          <Projects data={sections.projects} />
        </div>
        <div id="education">
          <Education data={sections.education} />
        </div>
        <div id="certifications">
          <Certifications data={sections.certifications} />
        </div>
        <div id="awards">
          <Awards data={sections.awards} />
        </div>
      </main>

      <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-text-muted">
        <p>&copy; {new Date().getFullYear()} {basics.name}. All rights reserved.</p>
      </footer>
    </Layout>
  );
}

export default App;
