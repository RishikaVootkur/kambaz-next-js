import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}