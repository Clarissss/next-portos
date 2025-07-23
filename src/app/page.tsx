import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-purple-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {"<Dev/>"}
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Egi
                  </span>
                </h1>
                <p className="text-xl text-gray-600">Full-Stack Developer</p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Passionate about creating beautiful, functional applications with clean code
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  View My Work
                </Button>
                <Link href="/cv/">
                <Button variant="outline" size="lg" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                  Download CV
                </Button>
                </Link>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/2.jpg?height=500&width=400"
                  alt="Anime-style developer illustration"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Get to know me better</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
              I'm a fresh graduate in software engineering with hands-on experience in building web and mobile applications through various freelance projects. My journey in programming began during college, where I discovered a passion for creating digital solutions that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600">1 Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                  <p className="text-gray-600">10+ Completed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Bandung, Indonesia</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                  <p className="text-gray-600">Open to work</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/3.jpg?height=400&width=400"
                alt="Anime-style workspace"
                width={400}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 mx-auto text-pink-600 mb-4" />
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Express</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Smartphone className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-lg">Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">Android</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Globe className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle className="text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Figma</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/bmti.jpg?height=200&width=400"
                  alt="Anime Task Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Training Need Analysis</CardTitle>
                <CardDescription>
                  A Analysis of training needs for a Government Agency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>PHP</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Javascript</Badge>
                  <Badge>Codeigniter</Badge>
                </div>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/BooRoom.png?height=200&width=400" alt="Otaku Store" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>BooRoom</CardTitle>
                <CardDescription>
                  Mobile apps for booking a room in ITENAS University.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Dart</Badge>
                  <Badge>Flutter</Badge>
                  <Badge>Etter</Badge>
                </div>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/images.jpeg?height=300&width=300" alt="Anime Tracker" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Buns Cramics</CardTitle>
                <CardDescription>
                  An Subscription website for Buns Cramics Company
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Laravel</Badge>
                  <Badge>PHP</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <Mail className="w-12 h-12 mx-auto text-purple-600" />
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">rinrinka@otakuupdate.com</p>
            </div>
            <div className="space-y-4">
              <Linkedin className="w-12 h-12 mx-auto text-purple-600" />
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/akira-dev</p>
            </div>
            <div className="space-y-4">
              <Github className="w-12 h-12 mx-auto text-purple-600" />
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p className="text-gray-600">github.com/Clarisss</p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Claris. Made with ❤️ and Next.js</p>
        </div>
      </footer>
    </div>
  )
}
