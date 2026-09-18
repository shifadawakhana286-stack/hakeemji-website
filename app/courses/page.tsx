import Courses from "@/components/home/Courses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unani Treatment Courses",
  description: "Explore traditional Unani wellness courses and treatment packages from Shifa Dawakhana.",
};
import BackHomeLink from "@/components/common/BackHomeLink";

export default function CoursesPage() {
  return (
    <main className="pt-16 sm:pt-[72px]">
      <div className="mx-auto max-w-7xl px-5 pb-2 pt-6 lg:px-8">
        <BackHomeLink />
      </div>
      <Courses showAll={true} />
    </main>
  );
}