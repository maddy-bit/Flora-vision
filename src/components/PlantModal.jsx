import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Star, Sun, Droplets, Thermometer } from 'lucide-react';

export default function PlantModal({ plant, onClose, onAddToCart }) {
  if (!plant) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#142817] to-[#0a120b] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
          id="plant-modal-window"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer"
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Plant Image Column */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gradient-to-tr from-[#1a381f] to-[#0e1c11] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -inset-10 nature-glow pointer-events-none" />
            <div className="absolute top-6 left-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              {plant.category} Selection
            </div>

            <motion.img
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
              src={plant.image}
              alt={plant.name}
              className="w-56 h-56 md:w-64 md:h-64 object-contain z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Plant Info Column */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium">(4.9 reviews)</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                {plant.name}
              </h3>
              {plant.scientificName && (
                <p className="text-xs text-emerald-400 font-mono italic mt-0.5">
                  {plant.scientificName}
                </p>
              )}

              {/* Description */}
              <p className="text-xs text-gray-300 leading-relaxed mt-4">
                {plant.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3.5 my-6">
                <div className="bg-[#122415] border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                  <Sun className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[10px] font-semibold text-white">Sunlight</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">Moderate/Bright</span>
                </div>
                <div className="bg-[#122415] border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                  <Droplets className="w-4 h-4 text-sky-400 mb-1" />
                  <span className="text-[10px] font-semibold text-white">Watering</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">Once weekly</span>
                </div>
                <div className="bg-[#122415] border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                  <Thermometer className="w-4 h-4 text-rose-400 mb-1" />
                  <span className="text-[10px] font-semibold text-white">Temp</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">18°C - 24°C</span>
                </div>
              </div>
            </div>

            {/* Price & Add to Cart button */}
            <div className="border-t border-white/5 pt-5 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Price</span>
                <span className="text-xl font-display font-bold text-emerald-400">{plant.price}</span>
              </div>

              <button
                onClick={() => {
                  onAddToCart(plant);
                  onClose();
                }}
                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 transition-all duration-300 cursor-pointer active:scale-95"
                id="modal-add-to-cart-btn"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
