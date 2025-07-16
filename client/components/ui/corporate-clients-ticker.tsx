import React from "react";
import { cn } from "@/lib/utils";

export interface CorporateClient {
  name: string;
  logo: string;
}

interface CorporateClientsTickerProps {
  clients: CorporateClient[];
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
  className?: string;
  direction?: "left" | "right";
}

export function CorporateClientsTicker({
  clients,
  speed = "medium",
  pauseOnHover = true,
  className,
  direction = "left",
}: CorporateClientsTickerProps) {
  const speedClass = {
    slow:
      direction === "left"
        ? "animate-[scroll_80s_linear_infinite]"
        : "animate-[scrollReverse_80s_linear_infinite]",
    medium:
      direction === "left"
        ? "animate-[scroll_60s_linear_infinite]"
        : "animate-[scrollReverse_60s_linear_infinite]",
    fast:
      direction === "left"
        ? "animate-[scroll_40s_linear_infinite]"
        : "animate-[scrollReverse_40s_linear_infinite]",
  };

  // Triple the items to ensure seamless loop
  const tripleClients = [...clients, ...clients, ...clients];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50",
        className,
      )}
    >
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none" />

      <div
        className={cn(
          "flex items-center",
          speedClass[speed],
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {tripleClients.map((client, index) => (
          <div key={`${client.name}-${index}`} className="flex-none mx-8 group">
            <div className="flex items-center justify-center w-40 h-20 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 p-4">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const textSpan = document.createElement("span");
                    textSpan.textContent = client.name;
                    textSpan.className =
                      "text-sm font-medium text-gray-700 text-center";
                    parent.appendChild(textSpan);
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Compact version for smaller spaces
export function CompactCorporateClientsTicker({
  clients,
  speed = "fast",
  pauseOnHover = true,
  className,
  direction = "left",
}: CorporateClientsTickerProps) {
  const speedClass = {
    slow:
      direction === "left"
        ? "animate-[scroll_100s_linear_infinite]"
        : "animate-[scrollReverse_100s_linear_infinite]",
    medium:
      direction === "left"
        ? "animate-[scroll_70s_linear_infinite]"
        : "animate-[scrollReverse_70s_linear_infinite]",
    fast:
      direction === "left"
        ? "animate-[scroll_50s_linear_infinite]"
        : "animate-[scrollReverse_50s_linear_infinite]",
  };

  // Triple the items to ensure seamless loop
  const tripleClients = [...clients, ...clients, ...clients];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-4",
        className,
      )}
    >
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent pointer-events-none" />

      <div
        className={cn(
          "flex items-center",
          speedClass[speed],
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {tripleClients.map((client, index) => (
          <div key={`${client.name}-${index}`} className="flex-none mx-6 group">
            <div className="flex items-center justify-center w-24 h-12 bg-white rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 p-2">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const textSpan = document.createElement("span");
                    textSpan.textContent = client.name;
                    textSpan.className =
                      "text-xs font-medium text-gray-700 text-center";
                    parent.appendChild(textSpan);
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Two-direction version with different speeds
export function BiDirectionalCorporateClientsTicker({
  clients,
  className,
}: {
  clients: CorporateClient[];
  className?: string;
}) {
  const firstHalf = clients.slice(0, Math.ceil(clients.length / 2));
  const secondHalf = clients.slice(Math.ceil(clients.length / 2));

  return (
    <div className={cn("space-y-4", className)}>
      <CorporateClientsTicker
        clients={firstHalf}
        speed="medium"
        direction="left"
        pauseOnHover={true}
      />
      <CorporateClientsTicker
        clients={secondHalf}
        speed="medium"
        direction="right"
        pauseOnHover={true}
      />
    </div>
  );
}
