import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Users, Building2, LineChart } from "lucide-react";

const achievementData = [
  {
    icon: <Trophy className="w-8 h-8 text-blue-500" />,
    number: "1,000+",
    label: "完了プロジェクト",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    number: "500+",
    label: "お客様",
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-500" />,
    number: "30+",
    label: "年の実績",
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-500" />,
    number: "95%",
    label: "顧客満足度",
  },
];

const Achievements = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">実績</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{achievement.number}</h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;