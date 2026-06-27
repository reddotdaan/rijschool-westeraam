import { CoursePageContent } from "@/components/rijopleidingen/course-page-content";
import { coursePages } from "@/lib/course-pages-data";
import type { Metadata } from "next";

const course = coursePages.motor;

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
};

export default function MotorPage() {
  return <CoursePageContent course={course} />;
}
