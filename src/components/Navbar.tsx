import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Как работает", href: "#how-it-works" },
  { label: "Состав", href: "#ingredients" },
  { label: "Где купить", href: "#buy" },
  { label: "Вопросы", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1 text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-md">Тими</span>
          <span className="italic text-primary">Лор</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Где купить
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            onClick={() => setOpen(false)}
            className="block bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold text-center"
          >
            Где купить
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
