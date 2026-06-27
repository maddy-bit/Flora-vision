import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Leaf } from 'lucide-react';

export default function Header({
  cartCount,
  onCartClick,
  onSearchClick,
  onHomeClick,
  onProductsClick,
  onReviewsClick
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 group cursor-pointer"
          id="logo-btn"
        >
          <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all duration-300">
            <Leaf className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
            FloraVision<span className="text-emerald-400">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={onHomeClick}
            className="text-sm font-medium text-emerald-400/90 hover:text-white transition-colors cursor-pointer"
            id="nav-home"
          >
            Home
          </button>
          
          <div className="relative group">
            <button
              onClick={onProductsClick}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              id="nav-plants-type"
            >
              Plants Type
              <span className="text-[10px] text-gray-500">▼</span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass-panel rounded-2xl py-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 shadow-xl border border-white/10">
              <button onClick={onProductsClick} className="w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-emerald-950/40 hover:text-white transition-colors">Indoor Plants</button>
              <button onClick={onProductsClick} className="w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-emerald-950/40 hover:text-white transition-colors">Succulents</button>
              <button onClick={onProductsClick} className="w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-emerald-950/40 hover:text-white transition-colors">Lush Foliage</button>
            </div>
          </div>

          <button
            onClick={onReviewsClick}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            id="nav-more"
          >
            Reviews
          </button>
          
          <a
            href="#footer"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            id="nav-contact"
          >
            Contact
          </a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onSearchClick}
            className="p-2 text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Search"
            id="header-search-btn"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onCartClick}
            className="p-2 text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all duration-300 relative cursor-pointer"
            aria-label="Cart"
            id="header-cart-btn"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-emerald-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-gray-300 hover:text-white rounded-full hover:bg-white/5 cursor-pointer"
            aria-label="Toggle menu"
            id="header-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/5 flex flex-col gap-4 px-2 animate-fadeIn">
          <button
            onClick={() => {
              onHomeClick();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-medium text-emerald-400 hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => {
              onProductsClick();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-medium text-gray-300 hover:text-white transition-colors"
          >
            Plants Type
          </button>
          <button
            onClick={() => {
              onReviewsClick();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-medium text-gray-300 hover:text-white transition-colors"
          >
            Reviews
          </button>
          <a
            href="#footer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 font-medium text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
