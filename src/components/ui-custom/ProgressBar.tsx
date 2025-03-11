
import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  total,
  label,
  showPercentage = true,
  size = "md",
  className,
}) => {
  const percentage = Math.round((value / total) * 100);
  
  const getHeight = () => {
    switch (size) {
      case "sm":
        return "h-1";
      case "lg":
        return "h-3";
      case "md":
      default:
        return "h-2";
    }
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-sm text-muted-foreground">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium">
              {value}/{total} ({percentage}%)
            </span>
          )}
        </div>
      )}
      <Progress value={percentage} className={getHeight()} />
    </div>
  );
};

export default ProgressBar;
