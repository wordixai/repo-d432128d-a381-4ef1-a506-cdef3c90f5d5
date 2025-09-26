import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp, MessageSquare, BarChart3, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "智能预订管理",
      description: "统一管理多平台预订，自动同步房态，避免超订风险",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "AI收益优化",
      description: "基于市场数据和预订模式，智能调整价格策略，最大化收益",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: MessageSquare,
      title: "客户服务中心",
      description: "集成客户沟通，自动回复，提升服务效率和客户满意度",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BarChart3,
      title: "数据分析洞察",
      description: "详细的经营报表和趋势分析，帮助您做出明智的经营决策",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "安全保障",
      description: "企业级安全防护，数据加密存储，保护您的隐私和资产",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "快速部署",
      description: "5分钟快速上手，无需技术背景，即开即用的民宿管理解决方案",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            强大功能
            <span className="gradient-text block">助力民宿经营</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            从预订管理到收益优化，我们提供完整的民宿经营解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-20 bg-gradient-brand rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  一站式民宿管理解决方案
                </h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  整合预订、客服、财务、营销等多个环节，让您的民宿经营更加高效、智能、盈利
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>30天免费试用</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>7×24小时技术支持</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-white/80">服务可用性</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;