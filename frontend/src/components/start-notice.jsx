import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const StartNotice = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem("hasSeenStartNotice");
    if (!hasSeenNotice) {
      setOpen(true);
      localStorage.setItem("hasSeenStartNotice", "true");
    }
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader className="text-start">
          <DialogTitle>Notice About Initial Delay</DialogTitle>
          <DialogDescription>
            This backend is hosted on the free tier of Render. Because of this,
            it could take up to&nbsp;
            <strong className="text-red-500">50 seconds</strong> to respond to
            to load data from database. Thank you for your patience!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button onClick={handleClose}>Got it</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartNotice;
