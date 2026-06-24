export function PhoneMockup() {
  return (
    <div className="relative" aria-hidden="true">
      <svg
        viewBox="0 0 280 560"
        className="h-[480px] w-auto drop-shadow-[0_30px_60px_rgba(0,167,157,0.25)]"
        role="img"
        aria-label="Náhled aplikace Perqo"
      >
        <defs>
          <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F2F5F7" />
            <stop offset="1" stopColor="#E6F6F5" />
          </linearGradient>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00A79D" />
            <stop offset="1" stopColor="#33B5AC" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="268" height="548" rx="42" fill="#0f172a" />
        <rect x="14" y="14" width="252" height="532" rx="36" fill="url(#screen)" />
        <rect x="110" y="22" width="60" height="14" rx="7" fill="#0f172a" />

        <text x="32" y="80" fill="#0f172a" fontSize="14" fontWeight="600" fontFamily="system-ui">
          Dobré ráno, Tomáši
        </text>
        <text x="32" y="100" fill="#64748b" fontSize="11" fontFamily="system-ui">
          Tvé skóre dnešní jízdy
        </text>

        <circle cx="140" cy="200" r="68" fill="white" stroke="#E2E8F0" strokeWidth="2" />
        <circle
          cx="140"
          cy="200"
          r="68"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="360"
          strokeDashoffset="60"
          transform="rotate(-90 140 200)"
        />
        <text x="140" y="195" textAnchor="middle" fill="#0B1D3A" fontSize="36" fontWeight="800" fontFamily="system-ui">
          92
        </text>
        <text x="140" y="218" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="system-ui">
          Bezpečné skóre
        </text>

        <rect x="32" y="300" width="216" height="64" rx="14" fill="white" stroke="#E2E8F0" />
        <circle cx="60" cy="332" r="14" fill="#E6F6F5" />
        <text x="86" y="328" fill="#0f172a" fontSize="13" fontWeight="600" fontFamily="system-ui">
          Sleva u PetrolGo
        </text>
        <text x="86" y="346" fill="#64748b" fontSize="11" fontFamily="system-ui">
          −7 % na palivo · platí 7 dní
        </text>
        <text x="232" y="338" textAnchor="end" fill="#00A79D" fontSize="14" fontWeight="700" fontFamily="system-ui">
          ⟶
        </text>

        <rect x="32" y="376" width="216" height="64" rx="14" fill="white" stroke="#E2E8F0" />
        <circle cx="60" cy="408" r="14" fill="#FCE7F3" />
        <text x="86" y="404" fill="#0f172a" fontSize="13" fontWeight="600" fontFamily="system-ui">
          Daruj na charitu
        </text>
        <text x="86" y="422" fill="#64748b" fontSize="11" fontFamily="system-ui">
          12 Kč → Linka naděje
        </text>

        <rect x="32" y="466" width="216" height="50" rx="25" fill="#00A79D" />
        <text x="140" y="497" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="system-ui">
          Vybrat odměnu
        </text>
      </svg>
    </div>
  );
}
