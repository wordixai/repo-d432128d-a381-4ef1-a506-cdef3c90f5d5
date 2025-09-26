import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "产品",
      links: [
        { label: "功能特性", href: "#features" },
        { label: "定价方案", href: "#pricing" },
        { label: "API文档", href: "#api" },
        { label: "更新日志", href: "#changelog" },
      ]
    },
    {
      title: "解决方案",
      links: [
        { label: "小型民宿", href: "#small" },
        { label: "民宿集团", href: "#enterprise" },
        { label: "酒店管理", href: "#hotel" },
        { label: "度假村", href: "#resort" },
      ]
    },
    {
      title: "资源",
      links: [
        { label: "帮助中心", href: "#help" },
        { label: "视频教程", href: "#tutorials" },
        { label: "最佳实践", href: "#practices" },
        { label: "模板库", href: "#templates" },
      ]
    },
    {
      title: "公司",
      links: [
        { label: "关于我们", href: "#about" },
        { label: "招聘职位", href: "#careers" },
        { label: "新闻资讯", href: "#news" },
        { label: "投资者", href: "#investors" },
      ]
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter section */}
      <div className="py-16 bg-gradient-brand">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            获取最新资讯和优惠
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            订阅我们的newsletter，第一时间了解产品更新、行业洞察和独家优惠
          </p>
          
          <div className="max-w-md mx-auto flex space-x-4">
            <Input
              type="email"
              placeholder="输入您的邮箱地址"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
            />
            <Button variant="secondary" className="bg-white text-brand-primary hover:bg-white/90">
              订阅
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl">StayManager</span>
              </div>
              
              <p className="text-neutral-400 mb-6 leading-relaxed">
                专业的民宿管理SaaS平台，帮助民宿经营者提升效率，增加收益，为客人提供更好的入住体验。
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span className="text-neutral-400">contact@staymanager.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-neutral-500" />
                  <span className="text-neutral-400">400-888-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-neutral-500" />
                  <span className="text-neutral-400">北京市朝阳区创业大厦</span>
                </div>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-neutral-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-neutral-800" />

      {/* Bottom footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span>© 2024 StayManager. 保留所有权利.</span>
              <a href="#privacy" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#terms" className="hover:text-white transition-colors">服务条款</a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;