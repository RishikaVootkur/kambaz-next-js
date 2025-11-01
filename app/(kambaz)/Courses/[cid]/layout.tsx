/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { ReactNode, useState } from 'react';
import CourseNavigation from './Navigation';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { FaAlignJustify } from 'react-icons/fa';
import * as db from '../../Database';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const [modules, setModules] = useState<any[]>(db.modules);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => setShowNav((v) => !v);

  return (
    <div id="wd-courses">
      <h2>
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          role="button"
          title="Toggle course navigation"
          onClick={toggleNav}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {showNav && (
          <div>
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}