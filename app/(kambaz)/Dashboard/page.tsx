import Link from "next/link"
import Image from "next/image"
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1><hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2><hr/>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" 
                        width={200} 
                        height={150}
                        alt="React JS course image"/>
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack Software Developer
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5101" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" 
                        width={200} 
                        height={150}
                        alt="PDP course image"/>
                        <div>
                            <h5> CS5101 PDP </h5>
                            <p className="wd-dashboard-course-title">
                                Programming Design Paradigm
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5102" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" 
                        width={200} 
                        height={150}
                        alt="WD course image"/>
                        <div>
                            <h5> CS5102 WD </h5>
                            <p className="wd-dashboard-course-title">
                                Web Development
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5201" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" 
                        width={200} 
                        height={150}
                        alt="Algos course image"/>
                        <div>
                            <h5> CS5201 Algos </h5>
                            <p className="wd-dashboard-course-title">
                                Agorithms
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5202" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" 
                        width={200} 
                        height={150}
                        alt="DBMS course image"/>
                        <div>
                            <h5> CS5202 DBMS </h5>
                            <p className="wd-dashboard-course-title">
                                Database Management Systems
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/6101" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" 
                        width={200} 
                        height={150}
                        alt="ML course image"/>
                        <div>
                            <h5> CS6101 ML </h5>
                            <p className="wd-dashboard-course-title">
                                Machine Learning
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/6102" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" 
                        width={200} 
                        height={150}
                        alt="NLP course image"/>
                        <div>
                            <h5> CS6102 NLP </h5>
                            <p className="wd-dashboard-course-title">
                                Natural Language Processing
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}