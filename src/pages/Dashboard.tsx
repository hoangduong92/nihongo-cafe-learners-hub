
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import ProgressBar from "@/components/ui-custom/ProgressBar";
import CourseCard, { CourseProps } from "@/components/ui-custom/CourseCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, PlayCircle, Award, Clock, BookOpen, Target } from "lucide-react";

// Mock data
const userProgress = {
  dailyGoal: 3,
  daysStreak: 5,
  totalLessonsCompleted: 24,
  totalTimeSpent: "12h 30m",
};

const recentCourses: CourseProps[] = [
  {
    id: "jlpt-n5",
    title: "JLPT N5 Complete Course",
    description: "Comprehensive preparation for the JLPT N5 certification exam.",
    level: "beginner",
    duration: "40 hours",
    lessons: 32,
    image: "https://images.unsplash.com/photo-1617774816669-8d66b454d572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    progress: 65,
    category: "JLPT Prep",
  },
  {
    id: "everyday-japanese",
    title: "Everyday Japanese Conversations",
    description: "Master practical Japanese phrases for daily communication.",
    level: "beginner",
    duration: "25 hours",
    lessons: 20,
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    progress: 30,
    category: "Conversation",
  },
];

const recommendedCourses: CourseProps[] = [
  {
    id: "kanji-basics",
    title: "Kanji Foundations",
    description: "Learn the most common 100 kanji characters with mnemonics and practice.",
    level: "beginner",
    duration: "15 hours",
    lessons: 25,
    image: "https://images.unsplash.com/photo-1625480860249-e498d173a042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Writing",
  },
  {
    id: "hiragana-katakana",
    title: "Hiragana & Katakana Mastery",
    description: "Complete guide to reading and writing all Japanese syllabaries.",
    level: "beginner",
    duration: "10 hours",
    lessons: 15,
    image: "https://images.unsplash.com/photo-1594064424123-5ef1eb9891c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Writing",
  },
  {
    id: "grammar-basics",
    title: "Japanese Grammar Essentials",
    description: "Core grammar principles for building proper Japanese sentences.",
    level: "beginner",
    duration: "20 hours",
    lessons: 18,
    image: "https://images.unsplash.com/photo-1603738118489-f9a1a3837971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
    category: "Grammar",
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold">
          こんにちは, {user?.name}! <span className="text-primary">👋</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Let's continue your Japanese learning journey.
        </p>
      </motion.div>

      {/* Progress Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-2 rounded-full bg-primary/10 p-3">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Daily Goal</h3>
              <p className="text-3xl font-bold mt-1">
                {userProgress.dailyGoal} <span className="text-sm text-muted-foreground">lessons</span>
              </p>
            </div>
          </div>
          
          <div className="glass-card flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-2 rounded-full bg-nihongo-sunset/10 p-3">
              <BookOpen className="h-6 w-6 text-nihongo-sunset" />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Lessons Completed</h3>
              <p className="text-3xl font-bold mt-1">
                {userProgress.totalLessonsCompleted}
              </p>
            </div>
          </div>
          
          <div className="glass-card flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-2 rounded-full bg-nihongo-moss/10 p-3">
              <Clock className="h-6 w-6 text-nihongo-moss" />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Total Learning Time</h3>
              <p className="text-3xl font-bold mt-1">
                {userProgress.totalTimeSpent}
              </p>
            </div>
          </div>
          
          <div className="glass-card flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-2 rounded-full bg-nihongo-cherry/10 p-3">
              <Award className="h-6 w-6 text-nihongo-cherry" />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Day Streak</h3>
              <p className="text-3xl font-bold mt-1">
                {userProgress.daysStreak} <span className="text-sm text-muted-foreground">days</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Continue Learning Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Continue Learning</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/courses" className="flex items-center">
              View all courses <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        {recentCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
            
            <div className="glass-card flex flex-col items-center justify-center p-8 text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <PlayCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Resume Your Practice</h3>
              <p className="text-muted-foreground mb-6">
                Continue with your AI conversation practice where you left off.
              </p>
              <Button asChild>
                <Link to="/practice">Start Practicing</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-medium mb-2">No courses in progress</h3>
            <p className="text-muted-foreground mb-6">
              Start learning Japanese by enrolling in a course!
            </p>
            <Button asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        )}
      </motion.section>

      {/* Recommended Courses Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recommended for You</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/courses" className="flex items-center">
              Explore more <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Dashboard;
