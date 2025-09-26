import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "基础版",
      price: "99",
      description: "适合1-3间房源的小型民宿",
      features: [
        "最多3间房源",
        "基础预订管理",
        "客户沟通工具",
        "基础数据报表",
        "邮件支持"
      ],
      buttonText: "免费试用",
      popular: false,
    },
    {
      name: "专业版",
      price: "299",
      description: "适合4-15间房源的成长型民宿",
      features: [
        "最多15间房源",
        "AI智能定价",
        "多平台同步",
        "高级数据分析",
        "电话技术支持",
        "自定义品牌",
        "API接入"
      ],
      buttonText: "立即开始",
      popular: true,
    },
    {
      name: "企业版",
      price: "599",
      description: "适合15间以上房源的大型民宿集团",
      features: [
        "无限房源数量",
        "全功能AI助手",
        "企业级安全",
        "专属客户经理",
        "定制化开发",
        "7×24小时支持",
        "数据迁移服务",
        "培训服务"
      ],
      buttonText: "联系销售",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            灵活的
            <span className="gradient-text"> 定价方案</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            选择最适合您民宿规模的方案，随时可以升级
          </p>
          
          {/* Pricing toggle */}
          <div className="inline-flex items-center bg-neutral-100 rounded-lg p-1">
            <button className="px-4 py-2 rounded-md bg-white shadow-sm text-sm font-medium">
              月付
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium text-neutral-600">
              年付 <span className="text-brand-success ml-1">省20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-2 border-brand-primary shadow-2xl scale-105"
                  : "border border-neutral-200 hover:shadow-xl"
              } transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-brand text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>最受欢迎</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">¥{plan.price}</span>
                  <span className="text-neutral-500">/月</span>
                </div>
                <CardDescription className="text-neutral-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-brand-success/10 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-success" />
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-brand hover:shadow-xl"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ or additional info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">常见问题</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold mb-2">是否提供免费试用？</h4>
              <p className="text-neutral-600">
                所有方案都提供30天免费试用，无需信用卡，试用期结束可随时取消。
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-2">可以随时升级或降级吗？</h4>
              <p className="text-neutral-600">
                可以，您可以随时调整方案，我们会按比例计算费用差额。
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-2">数据安全如何保障？</h4>
              <p className="text-neutral-600">
                采用银行级加密技术，所有数据在国内服务器存储，符合相关法规要求。
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-2">是否提供技术支持？</h4>
              <p className="text-neutral-600">
                提供完整的技术支持，包括在线文档、邮件支持和电话支持。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;