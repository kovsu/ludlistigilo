import { TStatus } from "../types";

function Status(props: { status: TStatus }) {
  const { status } = props;
  const colors = {
    "pending": "bg-primary",
    "converting": "bg-pending",
    "converted": "bg-success",
    "uploading": "bg-pending",
    "uploaded": "bg-success",
    "failed": "bg-failed"
  };

  return (
    <span className={`rounded-full ${colors[status]}`} p="x-4 y-2" border="2 solid black">
      {status.toUpperCase()}
    </span>
  )
}

export default Status;
