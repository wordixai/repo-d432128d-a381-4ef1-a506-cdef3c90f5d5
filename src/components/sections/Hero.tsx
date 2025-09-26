import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, label: "活跃用户", value: "10,000+" },
    { icon: TrendingUp, label: "收益提升", value: "35%" },
    { icon: Star, label: "客户评分", value: "4.9/5" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23007BFF" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20 animate-fade-in">
            <span className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-neutral-700">新功能：AI智能定价已上线</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            让民宿经营
            <span className="gradient-text block">更简单智能</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            全方位民宿管理SaaS平台，从预订管理到收益优化，让您专注于为客人创造美好体验
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              免费开始使用
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              观看演示
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full mb-3 group-hover:shadow-lg transition-shadow">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-2xl text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="mt-20 relative animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden transform hover:scale-105 transition-transform duration-700">
                <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-brand-success/10 to-brand-success/5 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-success">¥128,420</div>
                      <div className="text-sm text-neutral-600">本月收入</div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-accent/10 to-brand-accent/5 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-accent">94.5%</div>
                      <div className="text-sm text-neutral-600">入住率</div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">4.9</div>
                      <div className="text-sm text-neutral-600">客户评分</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
                      <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-brand rounded-full"></div>
                      </div>
                      <span className="text-sm text-neutral-600">80%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-brand-secondary rounded-full"></div>
                      <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="w-3/5 h-full bg-gradient-brand rounded-full"></div>
                      </div>
                      <span className="text-sm text-neutral-600">60%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;