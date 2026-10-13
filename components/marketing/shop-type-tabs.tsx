"use client";

import { useState } from "react";
import { shopTypes } from "@/lib/marketing-content";
import { MediaPlaceholder } from "./media-placeholder";

export function ShopTypeTabs() {
  const [active, setActive] = useState(shopTypes[0].id);
  const current = shopTypes.find((s) => s.id === active)!;

  return (
    <div>
      <div role="tablist" aria-label="Loại hình quán" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1">
        {shopTypes.map((s) => (
          <button
            key={s.id}
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={s.id === active}
            aria-controls={`panel-${s.id}`}
            onClick={() => setActive(s.id)}
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition ${
              s.id === active ? "bg-ca-phe text-kem" : "bg-ca-phe/5 hover:bg-ca-phe/10"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`}>
        <p className="mb-6 max-w-2xl text-lg">{current.blurb}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {current.samples.map((label, i) => (
            <MediaPlaceholder
              key={label}
              label={label}
              aspect={i === 0 ? "aspect-[4/5]" : "aspect-square"}
              className={i === 0 ? "col-span-2 sm:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
