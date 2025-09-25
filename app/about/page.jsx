import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TitleHeader from "@/components/TitleHeader";

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'TailwindCSS', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 pt-24 pb-16">
      <Header />
      <div className="max-w-4xl mx-auto px-6">
        <TitleHeader title="About Me" sub="Get to know me better" />
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-64 h-64 bg-gradient-to-br from-gray-400 to-neutral-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <div className="w-56 h-56 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-56 h-56 object-cover rounded-2xl border-neutral-200 dark:border-neutral-700"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hello, I'm Ugonna!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate full-stack developer with over 5 years of experience creating digital solutions
              that make a difference. I love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open source
              projects, or enjoying a good cup of coffee while reading tech blogs.
            </p>
            <Button variant="outline">Download Resume</Button>
          </div>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 dark:bg-neutral-700 px-4 py-2 rounded-lg text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
