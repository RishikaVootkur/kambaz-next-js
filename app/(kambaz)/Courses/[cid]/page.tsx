"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function CoursePage(
  { params }: { params: { cid: string } }
) {
  const { cid } = params;
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser?._id &&
      enrollment.course === cid
  );

  if (!isEnrolled && currentUser) {
    redirect("/Dashboard");
  }

  redirect(`/Courses/${cid}/Home`);
}