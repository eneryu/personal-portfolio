import { IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowUpRight, IconBrandFacebook, IconPhone, IconBrandWhatsapp } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { SkillBar } from '@/components/SkillBar'
import { ContactForm } from '@/components/ContactForm'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  const projects = [
    { title: 'تطبيق إدارة المحتوى', type: 'تطوير Full Stack', image: 'https://picsum.photos/400/300?random=1' },
    { title: 'موقع إخباري', type: 'تصميم UI/UX', image: 'https://picsum.photos/400/300?random=2' },
    { title: 'منصة تعليمية', type: 'تطوير ويب', image: 'https://picsum.photos/400/300?random=3' },
    { title: 'تطبيق موبايل', type: 'برمجة ++C', image: 'https://picsum.photos/400/300?random=4' },
    { title: 'نظام إدارة المكتبات', type: 'برمجة #C', image: 'https://picsum.photos/400/300?random=5' },
    { title: 'موقع تجارة إلكترونية', type: 'Full Stack', image: 'https://picsum.photos/400/300?random=6' }
  ]

  const sections = {
    home: 'الرئيسية',
    about: 'عني',
    skills: 'مهاراتي',
    projects: 'مشاريعي',
    contact: 'تواصل'
  }

  return (
    <main className="min-h-screen bg-dark text-light">
      <Navigation sections={sections} />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-32 pb-20">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8 hover:scale-105 transition-all duration-300">
              <Image 
                src="https://picsum.photos/200/200" 
                alt="Jack Profile" 
                width={200} 
                height={200} 
                className="rounded-full border-4 border-primary animate-bounce-slow"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                متاح للعمل
              </div>
            </div>

            <h1 className="text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-2xl block mb-2">مرحباً، أنا جاك</span>
              مطور ويب شامل
              <span className="block gradient-text">ومصمم تجربة مستخدم</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl hover:text-gray-300 transition-colors">
              خريج كلية إعلام بتقدير امتياز (99%)، متخصص في الوسائط المتعددة والبرمجة.
              خبرة في تطوير Full Stack وتصميم UI/UX، مع شغف بالكتابة الإبداعية.
            </p>
            
            <div className="flex items-center gap-6 mb-12">
              <Link href="https://www.facebook.com/jack2xii" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
                <IconBrandFacebook size={32} />
              </Link>
              <Link href="https://github.com" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
                <IconBrandGithub size={32} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
                <IconBrandLinkedin size={32} />
              </Link>
              <Link href="tel:+201014023583" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
                <IconPhone size={32} />
              </Link>
              <Link href="https://wa.me/201014023583" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
                <IconBrandWhatsapp size={32} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl text-center">
              <div className="bg-dark-card p-6 rounded-xl hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 gradient-text">23</h3>
                <p className="text-gray-400">سنة من العمر</p>
              </div>
              <div className="bg-dark-card p-6 rounded-xl hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 gradient-text">99%</h3>
                <p className="text-gray-400">تقدير التخرج</p>
              </div>
              <div className="bg-dark-card p-6 rounded-xl hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 gradient-text">4+</h3>
                <p className="text-gray-400">لغات برمجة</p>
              </div>
              <div className="bg-dark-card p-6 rounded-xl hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-2 gradient-text">10+</h3>
                <p className="text-gray-400">مشروع منجز</p>
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
              مرحباً! أنا جاك، مطور ويب شامل ومصمم تجربة مستخدم من مصر. تخرجت من كلية الإعلام بتقدير امتياز (99%)،
              متخصص في الوسائط المتعددة والبرمجة. لدي شغف كبير بتطوير الويب وتصميم واجهات المستخدم.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              أجمع بين مهارات البرمجة المتقدمة (C#, C++, Full Stack) وخبرة التصميم لإنشاء تجارب مستخدم استثنائية.
              كما أنني كاتب محتوى متمرس، مما يمكنني من فهم احتياجات المستخدم وترجمتها إلى حلول تقنية فعالة.
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
                <h3 className="text-2xl font-bold mb-6 gradient-text">لغات البرمجة</h3>
                <SkillBar name="C#" percentage={95} />
                <SkillBar name="C++" percentage={90} />
                <SkillBar name="JavaScript" percentage={85} />
                <SkillBar name="TypeScript" percentage={80} />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-dark-card p-8 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">تقنيات الويب</h3>
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
              <div key={index} className="group relative bg-dark-card rounded-xl overflow-hidden hover-scale">
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
  )
}
