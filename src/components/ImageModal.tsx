
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description?: string;
}

const ImageModal = ({ isOpen, onClose, image, title, description }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
