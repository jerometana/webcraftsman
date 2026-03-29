import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="p-8 border-t border-gray-200 text-center text-gray-500 text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-12 fill-primary shrink-0" />{" "}
          <p className="font-[Outfit] text-lg text-black">WEBCRAFTSMAN</p>
        </div>
        <div className="font-[Outfit] flex items-center text-sm gap-4">
          <p>© {new Date().getFullYear()} WEBCRAFTSMAN. All rights reserved.</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
