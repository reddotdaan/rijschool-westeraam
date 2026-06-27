import { CoursePageContent } from "@/components/rijopleidingen/course-page-content";
import { coursePages } from "@/lib/course-pages-data";
import type { Metadata } from "next";

const course = coursePages.aanhangwagen;

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
};

export default function AanhangwagenPage() {
  return <CoursePageContent course={course} />;
}
