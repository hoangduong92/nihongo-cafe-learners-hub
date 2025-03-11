
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Award } from "lucide-react";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced" | "all";
  duration: string;
  lessons: number;
  image?: string;
  progress?: number;
  category?: string;
}

interface CourseCardProps {
  course: CourseProps;
  className?: string;
}

const getLevelColor = (level: CourseProps["level"]) => {
  switch (level) {
    case "beginner":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "intermediate":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "advanced":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200";
    case "all":
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const CourseCard: React.FC<CourseCardProps> = ({ course, className }) => {
  const {
    id,
    title,
    description,
    level,
    duration,
    lessons,
    image,
    progress,
    category,
  } = course;

  return (
    <Link to={`/courses/${id}`}>
      <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-elevated ${className}`}>
        {image && (
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              {category && <Badge className="mb-2">{category}</Badge>}
              <h3 className="line-clamp-1 text-lg font-medium leading-tight transition-colors group-hover:text-primary">
                {title}
              </h3>
            </div>
            <Badge variant="outline" className={`ml-2 shrink-0 ${getLevelColor(level)}`}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{lessons} lesson{lessons !== 1 ? "s" : ""}</span>
            </div>
            {progress !== undefined && progress === 100 && (
              <div className="flex items-center gap-1 text-primary">
                <Award className="h-3.5 w-3.5" />
                <span>Completed</span>
              </div>
            )}
          </div>
        </CardContent>
        {progress !== undefined && (
          <CardFooter className="p-4 pt-0">
            <div className="w-full space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-1" />
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
};

export default CourseCard;
