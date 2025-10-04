import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg
                  variant="top"
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}>
                    Full Stack Software Developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5101/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg
                  variant="top"
                  src="/images/pdp.jpeg"
                  width="100%"
                  height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5101 PDP
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}>
                    Programming Design Paradigm
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5102/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg
                  variant="top"
                  src="/images/wd.jpeg"
                  width="100%"
                  height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5102 WD
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}>
                    Web Development
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5201/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg
                  variant="top"
                  src="/images/algo.jpeg"
                  width="100%"
                  height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5201 Algos
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}>
                    Algorithms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5202/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg
                  variant="top"
                  src="/images/dbms.png"
                  width="100%"
                  height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5202 DBMS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}>
                    Database Management Systems
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/6101/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg
                  variant="top"
                  src="/images/ml.jpeg"
                  width="100%"
                  height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS6101 ML
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}>
                    Machine Learning
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/6102/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg
                  variant="top"
                  src="/images/nlp.jpeg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS6102 NLP
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}>
                    Natural Language Processing
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}