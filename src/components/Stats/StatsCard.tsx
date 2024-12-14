import { IconDefinition } from '@heroicons/react/24/outline';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="flex justify-between items-start">
        <div>
          <p className="stats-title">{title}</p>
          <h3 className="stats-value">{value}</h3>
        </div>
        {Icon && (
          <div className="p-2 bg-white/10 rounded-lg">
            <Icon className="w-6 h-6 text-white/60" />
          </div>
        )}
      </div>

      {trend && (
        <div className={`stats-comparison ${trend.isPositive ? 'stats-trend-up' : 'stats-trend-down'}`}>
          <span>
            {trend.value}% مقارنة بالشهر السابق
          </span>
        </div>
      )}
    </div>
  );
}
