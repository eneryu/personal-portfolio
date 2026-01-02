import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowUpRight,
  IconBrandFacebook,
  IconPhone,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { SkillBar } from "@/components/SkillBar";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  const projects = [
    {
      title: "تطبيق إدارة المحتوى",
      type: "تطوير Full Stack",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      title: "موقع إخباري",
      type: "تصميم UI/UX",
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      title: "منصة تعليمية",
      type: "تطوير ويب",
      image: "https://picsum.photos/400/300?random=3",
    },
    {
      title: "تطبيق موبايل",
      type: "برمجة ++C",
      image: "https://picsum.photos/400/300?random=4",
    },
    {
      title: "نظام إدارة المكتبات",
      type: "برمجة #C",
      image: "https://picsum.photos/400/300?random=5",
    },
    {
      title: "موقع تجارة إلكترونية",
      type: "Full Stack",
      image: "https://picsum.photos/400/300?random=6",
    },
  ];

  const sections = {
    home: "الرئيسية",
    about: "عني",
    skills: "مهاراتي",
    projects: "مشاريعي",
    contact: "تواصل",
  };

  return (
    <main className="min-h-screen bg-dark text-light">
      <Navigation sections={sections} />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-32 pb-20 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="relative mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="https://picsum.photos/200/200"
                  alt="Jack Profile"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/20 group-hover:scale-105 group-hover:border-primary transition-all duration-500"
                />
                <div className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-xl border border-white/20 animate-bounce">
                  <span className="gradient-text">متاح للعمل</span>
                </div>
              </div>
            </div>

            <h1 className="text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-2xl block mb-3 text-gray-400 font-normal">
                مرحباً، أنا جاك 👋
              </span>
              <span className="block mb-2">مطور ويب شامل</span>
              <span className="block gradient-text text-6xl">
                ومصمم تجربة مستخدم
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed hover:text-gray-300 transition-colors">
              خريج كلية إعلام بتقدير امتياز (99%)، متخصص في الوسائط المتعددة
              والبرمجة. خبرة في تطوير Full Stack وتصميم UI/UX، مع شغف بالكتابة
              الإبداعية.
            </p>

            <div className="flex items-center gap-6 mb-16">
              <Link
                href="https://www.facebook.com/jack2xii"
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-3 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                  <IconBrandFacebook size={28} />
                </div>
              </Link>
              <Link href="https://github.com" className="group relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-3 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                  <IconBrandGithub size={28} />
                </div>
              </Link>
              <Link href="https://linkedin.com" className="group relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-3 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                  <IconBrandLinkedin size={28} />
                </div>
              </Link>
              <Link href="tel:+201014023583" className="group relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-3 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                  <IconPhone size={28} />
                </div>
              </Link>
              <Link
                href="https://wa.me/201014023583"
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass p-3 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                  <IconBrandWhatsapp size={28} />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-center">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <h3 className="text-4xl font-bold mb-2 gradient-text">23</h3>
                  <p className="text-gray-400 text-sm font-medium">
                    سنة من العمر
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <h3 className="text-4xl font-bold mb-2 gradient-text">99%</h3>
                  <p className="text-gray-400 text-sm font-medium">
                    تقدير التخرج
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <h3 className="text-4xl font-bold mb-2 gradient-text">4+</h3>
                  <p className="text-gray-400 text-sm font-medium">
                    لغات برمجة
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <h3 className="text-4xl font-bold mb-2 gradient-text">10+</h3>
                  <p className="text-gray-400 text-sm font-medium">
                    مشروع منجز
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            نبذة
            <span className="gradient-text"> عني</span>
          </h2>
          <div className="bg-dark-card p-8 rounded-2xl hover:bg-primary/5 transition-all duration-300">
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              مرحباً! أنا جاك، مطور ويب شامل ومصمم تجربة مستخدم من مصر. تخرجت من
              كلية الإعلام بتقدير امتياز (99%)، متخصص في الوسائط المتعددة
              والبرمجة. لدي شغف كبير بتطوير الويب وتصميم واجهات المستخدم.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              أجمع بين مهارات البرمجة المتقدمة (C#, C++, Full Stack) وخبرة
              التصميم لإنشاء تجارب مستخدم استثنائية. كما أنني كاتب محتوى متمرس،
              مما يمكنني من فهم احتياجات المستخدم وترجمتها إلى حلول تقنية فعالة.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            مهاراتي
            <span className="gradient-text"> التقنية</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-dark-card p-8 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  لغات البرمجة
                </h3>
                <SkillBar name="C#" percentage={95} />
                <SkillBar name="C++" percentage={90} />
                <SkillBar name="JavaScript" percentage={85} />
                <SkillBar name="TypeScript" percentage={80} />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-dark-card p-8 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  تقنيات الويب
                </h3>
                <SkillBar name="React.js" percentage={90} color="#61DAFB" />
                <SkillBar name="Next.js" percentage={85} color="#000000" />
                <SkillBar name="Node.js" percentage={80} color="#339933" />
                <SkillBar name="UI/UX Design" percentage={95} color="#FF3366" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            ألق نظرة على
            <span className="gradient-text"> أحدث مشاريعي</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-dark-card rounded-xl overflow-hidden hover-scale"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 text-right">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.type}</p>
                  </div>
                  <IconArrowUpRight className="absolute top-4 left-4 w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="bg-dark-card rounded-2xl p-12 hover:bg-primary/5 transition-all duration-300">
            <h2 className="text-4xl font-bold mb-12 text-center">
              لديك مشروع؟
              <span className="gradient-text"> دعنا نتحدث</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                    <IconPhone size={24} />
                    <span>01014023583</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                    <IconMail size={24} />
                    <span>jack@example.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                    <IconBrandFacebook size={24} />
                    <span>jack2xii</span>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
