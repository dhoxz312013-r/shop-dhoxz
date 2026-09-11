import React, { useState, useRef } from 'react';
import { X, Upload, RotateCcw, Check, Image as ImageIcon } from 'lucide-react';

interface PhotoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBg: string;
  currentMascot: string;
  onUpdateBg: (newBgUrl: string) => void;
  onResetDefault: () => void;
}

export const PhotoCustomizerModal: React.FC<PhotoCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentBg,
  currentMascot,
  onUpdateBg,
  onResetDefault,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Silakan pilih file gambar (PNG, JPG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onUpdateBg(e.target.result as string);
        onClose();
      }
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-zinc-900 border border-white/15 p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-emerald-400" />
            <h3 className="font-heading font-black text-lg text-white">
              Foto Website & Background
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-zinc-300 leading-relaxed">
          Foto asli DHOXZ-UT digunakan sebagai background dan elemen visual utama website dengan dark overlay premium. Kamu juga bisa mengunggah foto langsung dari HP/PC kamu.
        </p>

        {/* Current Previews */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-black/40 border border-white/10 p-2 text-center">
            <div className="aspect-video rounded-lg overflow-hidden mb-1.5 bg-zinc-950">
              <img
                src={currentBg}
                alt="Background Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] text-zinc-400 font-medium">Hero Background</span>
          </div>
          <div className="rounded-xl bg-black/40 border border-white/10 p-2 text-center">
            <div className="aspect-video rounded-lg overflow-hidden mb-1.5 bg-zinc-950 flex items-center justify-center">
              <img
                src={currentMascot}
                alt="Mascot Preview"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <span className="text-[11px] text-zinc-400 font-medium">Visual Maskot</span>
          </div>
        </div>

        {/* Drag & Drop or Click Area */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all ${
            dragOver
              ? 'border-emerald-500 bg-emerald-500/10'
              : 'border-white/20 hover:border-emerald-500/50 bg-black/30 hover:bg-black/50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileChange(e.target.files[0]);
              }
            }}
          />
          <Upload className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
          <p className="text-xs font-bold text-white mb-1">
            Klik untuk Upload / Ganti Foto
          </p>
          <p className="text-[10px] text-zinc-400">
            Mendukung PNG, JPG, JPEG, WEBP dari galeri HP / PC
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => {
              onResetDefault();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset ke Default</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-black bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-lg transition-colors"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
