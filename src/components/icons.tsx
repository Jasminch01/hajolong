export const LINKEDIN_URL = "https://www.linkedin.com/company/hajolong-solution";
export const CONTACT_EMAIL = "contact@hajolong.com";

export function gmailComposeUrl(subject: string, body = "") {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: CONTACT_EMAIL, su: subject });
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.4 19H4.3V9.5h3.1V19zM5.85 8.2c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8 0 1-.8 1.8-1.8 1.8zM19.7 19h-3.1v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19H9.9V9.5h3v1.3h0c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9V19z" />
    </svg>
  );
}
