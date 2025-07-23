"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin, ArrowLeft, Award, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CVPage() {
  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation & Download Buttons - Hidden when printing */}
      <div className="fixed top-4 left-4 right-4 z-50 print:hidden">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Button variant="outline" className="bg-white/80 backdrop-blur-md border-purple-200 hover:bg-purple-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 print:p-6">
        {/* Header */}
        <div className="border-b-2 border-gradient-to-r from-purple-200 to-pink-200 pb-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200">
                <Image
                  src="/profile.jpg?height=128&width=128"
                  alt="Professional Photo"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Egi <span className="text-purple-600">Prayogi</span>
              </h1>
              <h2 className="text-xl text-gray-600 mb-4">Fullstack Developer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2 text-purple-600" />
                  rinrinka@otakuupdate.com
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-2 text-purple-600" />
                  +62-877-2803-9577
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                  Bandung, Indonesia
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Globe className="w-4 h-4 mr-2 text-purple-600" />
                  akira-dev.portfolio.com
                </div>
              </div>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Github className="w-4 h-4 mr-1 text-purple-600" />
                  github.com/Clarisss
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Linkedin className="w-4 h-4 mr-1 text-purple-600" />
                  linkedin.com/in/akira-dev
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Passionate Fullstack Developer with 1 year of hands-on experience in building modern web and mobile
            applications. Proficient in both frontend and backend technologies including Next.js, PHP, Flutter, and
            MySQL. Strong problem-solving skills with a keen eye for clean, maintainable code and user-centered design.
            Enthusiastic about learning new technologies and contributing to innovative projects.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-purple-700">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    HTML5
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    CSS3
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Tailwind CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-pink-700">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                    PHP
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                    Express.js
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                    REST API
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-blue-700">Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Dart
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Android
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    iOS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-indigo-700">Tools & Others</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    Git
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    VS Code
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    Postman
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    Figma
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">Work Experience</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-purple-200 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="mb-2">
                <h4 className="text-xl font-semibold text-gray-900">Fullstack Developer</h4>
                <p className="text-purple-600 font-medium">BBPPMPV BMTI Bandung</p>
                <p className="text-sm text-gray-500">July 2025 - Present (1 month)</p>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • Developed and maintained web applications using Next.js and PHP, serving 1000+ daily active users
                </li>
                <li>
                  • Designed and implemented RESTful APIs using Express.js and MySQL for efficient data management
                </li>
                <li>• Collaborated with cross-functional teams to deliver projects 20% ahead of schedule</li>
                <li>• Optimized database queries resulting in 40% improvement in application performance</li>
              </ul>
            </div>

            <div className="border-l-2 border-purple-200 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
              <div className="mb-2">
                <h4 className="text-xl font-semibold text-gray-900">Junior Web Developer (Freelance)</h4>
                <p className="text-purple-600 font-medium">SabishopGaming</p>
                <p className="text-sm text-gray-500">September 2022 - February 2023 (6 months)</p>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Assisted in developing company website using PHP and MySQL</li>
                <li>• Created responsive UI components and improved user experience</li>
                <li>• Participated in code reviews and learned best practices for clean code</li>
                <li>• Contributed to bug fixes and feature enhancements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">Education</h3>
          <div className="border-l-2 border-purple-200 pl-6 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
            <div className="mb-2">
              <h4 className="text-xl font-semibold text-gray-900">Bachelor of Information Systems</h4>
              <p className="text-purple-600 font-medium">Institut Teknologi Nasional Bandung</p>
              <p className="text-sm text-gray-500">April 2019 - March 2023</p>
            </div>
            <p className="text-gray-700">
              Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Mobile Application
              Development, Software Engineering
            </p>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">Key Projects</h3>
          <div className="space-y-4">
            <div className="border border-purple-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">E-Commerce Platform</h4>
              <p className="text-gray-600 mb-2">
                Full-stack e-commerce application with user authentication, product catalog, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  MySQL
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Xendit API
                </Badge>
              </div>
            </div>

            <div className="border border-purple-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Task Management Mobile App</h4>
              <p className="text-gray-600 mb-2">
                Cross-platform mobile application for task management with real-time synchronization.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  Flutter
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Dart
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Firebase
                </Badge>
                <Badge variant="outline" className="text-xs">
                    Etter Data Service
                </Badge>
              </div>
            </div>

            <div className="border border-purple-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Analysis of Training Needs</h4>
              <p className="text-gray-600 mb-2">
                Web-based system for Analysis of Training Needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  PHP
                </Badge>
                <Badge variant="outline" className="text-xs">
                  MySQL
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="text-xs">
                    Codeigniter
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">
            Certifications & Achievements
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">AWS Certified Developer Associate</h4>
                <p className="text-gray-600 text-sm">Amazon Web Services • 2023</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Google Flutter Development Bootcamp</h4>
                <p className="text-gray-600 text-sm">Google Developers • 2023</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Best Innovation Award</h4>
                <p className="text-gray-600 text-sm">TechStart Solutions Hackathon • 2023</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Problem Solving</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Code Quality</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">System Design</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Soft Skills</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Team Collaboration</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Communication</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Leadership</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interests & Hobbies */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">
            Interests & Hobbies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Heart className="w-4 h-4 text-pink-600 mr-2" />
                Personal Interests
              </h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Anime & Manga enthusiast (favorite: Attack on Titan, Your Name)</li>
                <li>• Japanese culture and language learning</li>
                <li>• Digital art and UI/UX design inspiration</li>
                <li>• Gaming (RPGs and indie games)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Heart className="w-4 h-4 text-pink-600 mr-2" />
                Professional Development
              </h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Open source contributions on GitHub</li>
                <li>• Tech meetups and developer conferences</li>
                <li>• Continuous learning through online courses</li>
                <li>• Mentoring junior developers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">Indonesian</h4>
              <p className="text-gray-600">Native Speaker</p>
              <div className="flex justify-center space-x-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-purple-600 text-purple-600" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">English</h4>
              <p className="text-gray-600">Professional Working</p>
              <div className="flex justify-center space-x-1 mt-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-purple-600 text-purple-600" />
                ))}
                <Star className="w-3 h-3 text-gray-300" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">German</h4>
              <p className="text-gray-600">Learning</p>
              <div className="flex justify-center space-x-1 mt-1">
                {[1].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-purple-600 text-purple-600" />
                ))}
                {[2,3,4,5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-gray-300" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio QR Code */}
        <section className="mb-8 text-center">
          <div className="inline-block p-4 border-2 border-purple-200 rounded-lg">
            <Image
              src="/porto.jpeg?height=100&width=100"
              alt="Portfolio QR Code"
              width={100}
              height={100}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">Scan for Online Portfolio</p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-purple-100 pt-4">
          <p>References available upon request</p>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}
