import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { request } from "@/lib/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

const WarningModal = ({ handleClose, plantId }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => request({ method: "delete", url: `/api/plants/${plantId}` }),
    onSuccess: () => {
      toast.success("Plant Deleted");
      queryClient.invalidateQueries(["plants"]);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-[450px]">
        <DialogHeader className="text-start">
          <DialogTitle>Delete this Plant</DialogTitle>
          <DialogDescription>This action cannot be undone</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-3">
          <Button
            disabled={isPending}
            type="button"
            variant="outline"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            disabled={isPending}
            onClick={mutate}
            type="button"
            variant="destructive"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WarningModal;
