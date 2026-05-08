import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function WhatsAppIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.3-.7.8-1 1.2-.8l.8.4c.4.2.6.7.4 1.1l-.5 1a4.5 4.5 0 0 0 2.4 2.4l1-.5c.4-.2.9 0 1.1.4l.4.8c.2.4-.1.9-.8 1.2-2.5 1-5.5-1-6.5-4a3 3 0 0 1-.5-2z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CameraIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M28 24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h3.5l2-3h9l2 3H26a2 2 0 0 1 2 2v13z" />
      <circle cx="16" cy="17" r="4.5" />
      <circle cx="16" cy="17" r="2" />
    </svg>
  );
}

export function VideoIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="8" width="18" height="16" rx="2.5" />
      <path d="M20 13l8-4v14l-8-4" />
      <line x1="7" y1="13" x2="7" y2="19" />
      <line x1="11" y1="13" x2="11" y2="19" />
    </svg>
  );
}

export function GlobeIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="16" cy="16" r="12" />
      <path d="M16 4c-3 3-5 7-5 12s2 9 5 12" />
      <path d="M16 4c3 3 5 7 5 12s-2 9-5 12" />
      <line x1="4" y1="16" x2="28" y2="16" />
      <path d="M5 11h22M5 21h22" />
    </svg>
  );
}

export function MonitorIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="28" height="18" rx="2.5" />
      <line x1="16" y1="22" x2="16" y2="28" />
      <line x1="10" y1="28" x2="22" y2="28" />
      <polyline points="8 14 13 9 17 13 22 8" />
      <circle cx="22" cy="8" r="1.5" />
    </svg>
  );
}

export function RocketIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6c0 0-8 6-8 16v2l4-2 4 4 4-4 4 2v-2C28 12 20 6 20 6z" />
      <circle cx="20" cy="18" r="2.5" />
      <path d="M13 24l-4 6 6-2" />
      <path d="M27 24l4 6-6-2" />
    </svg>
  );
}

export function TrendUpIcon({ size = 40, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 28 16 18 22 24 34 12" />
      <polyline points="26 12 34 12 34 20" />
      <line x1="6" y1="34" x2="34" y2="34" />
    </svg>
  );
}

export function BrainIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 6C12 6 8 9 8 13c0 2 .8 3.8 2 5v5h4v-3h4v3h4v-5c1.2-1.2 2-3 2-5 0-4-4-7-8-7z" />
      <line x1="12" y1="18" x2="20" y2="18" />
      <path d="M10 13c0-1.5 1-2.5 2-2.5" />
      <path d="M22 13c0-1.5-1-2.5-2-2.5" />
    </svg>
  );
}

export function LockIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="6" y="14" width="20" height="14" rx="3" />
      <path d="M10 14v-4a6 6 0 0 1 12 0v4" />
      <circle cx="16" cy="21" r="2" />
      <line x1="16" y1="23" x2="16" y2="25" />
    </svg>
  );
}

export function BotIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="6" y="12" width="20" height="14" rx="3" />
      <path d="M12 12V9a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="19" r="2" />
      <circle cx="20" cy="19" r="2" />
      <line x1="16" y1="6" x2="16" y2="9" />
      <line x1="3" y1="17" x2="6" y2="17" />
      <line x1="26" y1="17" x2="29" y2="17" />
    </svg>
  );
}

export function CartIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function AutomationIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="16" cy="16" r="4" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
      <path d="M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M7.8 24.2l2.8-2.8M21.4 10.6l2.8-2.8" />
    </svg>
  );
}
