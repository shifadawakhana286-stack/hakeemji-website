"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
  } = useLanguage();

  return (
    <div className="flex items-center gap-2">

      <Globe
        size={18}
        className="text-[#0B5D3B]"
      />

      <select
        value={language}
        onChange={(e) =>
          setLanguage(
            e.target.value as
              | "en"
              | "hi"
              | "ur"
          )
        }
        className="
        rounded-full
        border
        border-[#0B5D3B]
        bg-white
        px-3
        py-2
        text-sm
        outline-none
        "
      >
        <option value="en">
          English
        </option>

        <option value="hi">
          हिन्दी
        </option>

        <option value="ur">
          اردو
        </option>
      </select>

    </div>
  );
}