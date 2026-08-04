import { Map, TrendingUp, User, RotateCcw, Star, Zap, Trophy, Flame } from "lucide-react";
import SectionTitle from "../../components/molecules/SectionTitle/index.js";
import ActionCard from "../../components/molecules/ActionCard/index.js";
import StatCard from "../../components/molecules/StatCard/index.js";
import ContinueLearningCard from "../../components/molecules/ContinueLearningCard/index.js";
import EmptyState from "../../components/molecules/EmptyState/index.js";

const quickActions = [
  {
    icon: <Map size={22} />,
    title: "Roadmap",
    description: "See the full learning path ahead.",
    buttonText: "Open",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Progress",
    description: "Review how far you've come.",
    buttonText: "Open",
  },
  {
    icon: <User size={22} />,
    title: "Profile",
    description: "Manage your learner profile.",
    buttonText: "Open",
  },
  {
    icon: <RotateCcw size={22} />,
    title: "Review",
    description: "Revisit techniques you've learned.",
    buttonText: "Open",
  },
];

const stats = [
  { title: "Level", value: 3, icon: <Star size={18} /> },
  { title: "XP", value: 420, icon: <Zap size={18} /> },
  { title: "Challenges Conquered", value: 18, icon: <Trophy size={18} /> },
  { title: "Current Streak", value: "7 Days", icon: <Flame size={18} /> },
];

function Dashboard() {
  return (
    <div className="space-y-10">
      <ContinueLearningCard
        world="Arrays"
        currentTechnique="Binary Search"
        progress={62}
        buttonText="Resume"
        onResume={() => {}}
      />

      <section>
        <SectionTitle title="Quick Actions" subtitle="Jump back into your learning tools." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <ActionCard
              key={action.title}
              icon={action.icon}
              title={action.title}
              description={action.description}
              buttonText={action.buttonText}
              onClick={() => {}}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Your Stats" subtitle="A snapshot of your current progress." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Recent Activity" />
        <EmptyState
          title="No recent activity"
          description="Start your first challenge to begin your journey."
        />
      </section>
    </div>
  );
}

export default Dashboard;