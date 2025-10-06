import { IoEllipsisVertical } from "react-icons/io5";
import { BsCaretDown, BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center ms-auto gap-2">
      <GreenCheckmark />
      <BsCaretDown className="fs-5" />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}