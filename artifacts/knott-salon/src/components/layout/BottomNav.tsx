import { Link, useLocation } from "wouter";
import { Home, Scissors, Image, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Scissors },
  { name: "Gallery", href: "/gallery", icon: Image },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function BottomNav() {
  const [location] = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        {navItems.map(({ name, href, icon: Icon }) => {
          const active = location === href;
          return (
            <Link
              key={name}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition-colors min-h-[56px] ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-bottomnav-${name.toLowerCase()}`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
              <span className={`text-[9px] tracking-wider uppercase font-${active ? "semibold" : "normal"}`}>
                {name}
              </span>
              {active && (
                <span className="absolute top-0 w-8 h-[2px] bg-primary rounded-full" />
              )}
            </Link>
          );
        })}

        {/* WhatsApp Book CTA */}
        <a
          href="https://wa.me/919716002672?text=New%20Appointment%20Request"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 text-green-600 min-h-[56px] transition-opacity active:opacity-70"
          data-testid="link-bottomnav-whatsapp"
        >
          <FaWhatsapp size={22} />
          <span className="text-[9px] tracking-wider uppercase">Book</span>
        </a>
      </div>
    </div>
  );
}
