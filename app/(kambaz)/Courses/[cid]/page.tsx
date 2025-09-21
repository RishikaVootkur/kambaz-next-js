import { redirect } from "next/navigation";

export default async function CoursePage(
  { params }: { params: Promise<{ cid: string }> }
) {
  const { cid } = await params;
  redirect(`/Courses/${cid}/Home`);
}

// export default function Courses() {
//     return (
//         <div id="wd-courses">
//             <h2>Course 1234</h2>
//         </div>
//     )
// }