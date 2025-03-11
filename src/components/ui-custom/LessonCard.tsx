
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, Lock, PlayCircle, FileText } from "lucide-react";

export interface LessonProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "video" | "reading" | "quiz" | "practice";
  courseId: string;
  status: "locked" | "available" | "completed";
}

interface LessonCardProps {
  lesson: LessonProps;
  index: number;
  className?: string;
}

const getLessonIcon = (type: LessonProps["type"]) => {
  switch (type) {
    case "video":
      return <PlayCircle className="h-5 w-5 text-primary" />;
    case "reading":
      return <FileText className="h-5 w-5 text-nihongo-ocean" />;
    case "quiz":
      return <FileText className="h-5 w-5 text-nihongo-sunset" />;
    case "practice":
      return <PlayCircle className="h-5 w-5 text-nihongo-moss" />;
    default:
      return <FileText className="h-5 w-5 text-primary" />;
  }
};

const getStatusIcon = (status: LessonProps["status"]) => {
  switch (status) {
    case "locked":
      return <Lock className="h-5 w-5 text-muted-foreground" />;
    case "completed":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    default:
      return null;
  }
};

const LessonCard: React.FC<LessonCardProps> = ({ lesson, index, className }) => {
  const { id, title, description, duration, type, courseId, status } = lesson;

  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-subtle ${
        status === "locked" ? "opacity-75" : ""
      } ${className}`}
    >
      <Link
        to={status === "locked" ? "#" : `/courses/${courseId}/lessons/${id}`}
        className={status === "locked" ? "cursor-not-allowed" : ""}
      >
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            {getLessonIcon(type)}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="line-clamp-1 text-base font-medium leading-tight transition-colors group-hover:text-primary">
                {index + 1}. {title}
              </h3>
              {getStatusIcon(status)}
            </div>
            <p className="line-clamp-1 text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="pb-4 pl-18 pr-4 pt-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
            <Badge variant="outline" className="text-xs capitalize">
              {type}
            </Badge>
            {status === "locked" && (
              <Badge variant="outline" className="text-xs text-muted-foreground">
                Locked
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default LessonCard;
