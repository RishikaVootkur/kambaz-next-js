"use client";
import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import RedBanIcon from "./RedBanIcon";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModulesControls() {
  return (
    <>
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-add-module-btn"
      >
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />Module
      </Button>

      <Dropdown className="float-end me-2">
        <Dropdown.Toggle
          variant="secondary"
          size="lg"
          id="wd-publish-all-btn"
        >
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <RedBanIcon /> Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <RedBanIcon /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button
        variant="secondary"
        size="lg"
        className="me-2 float-end border border-dark"
        id="wd-view-progress"
      >
        View Progress
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="me-2 float-end border border-dark"
        id="wd-collapse-all"
      >
        Collapse All
      </Button>
    </div>
    </>
  );
}