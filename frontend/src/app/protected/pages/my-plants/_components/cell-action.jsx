import { DropdownMenu } from "@/components/dropdown-menu";
import { Edit, Leaf, MoreVertical, Trash } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import WarningModal from "./warning-modal";

const CellAction = ({ plant }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const items = [
    {
      icon: Leaf,
      label: "View Plant",
      onClick: () => navigate(`/plants/${plant.slug}`),
    },
    {
      icon: Edit,
      label: "Edit Plant",
      onClick: () => navigate(`/dashboard/plants/${plant.slug}/edit`),
    },
    {
      icon: Trash,
      label: "Delete Plant",
      onClick: () => setOpenModal(true),
    },
  ];
  return (
    <DropdownMenu items={items}>
      <MoreVertical className="size-4" />
      {openModal && (
        <WarningModal
          plantId={plant.id}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </DropdownMenu>
  );
};

export default CellAction;
