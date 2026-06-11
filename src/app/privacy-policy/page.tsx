import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zenith Trader Academy",
  description: "Privacy Policy for Zenith Trader Academy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-10">
          Last updated: January 2024
        </p>

        <div
          className="space-y-10 text-zinc-400 leading-relaxed
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-3
          [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1"
        >
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Zenith Trader Academy. We are committed to protecting
              your privacy. This Privacy Policy explains how we collect, use and
              protect your information when you use our website.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                Information you provide via the contact form (name, email,
                message)
              </li>
              <li>
                Usage data collected automatically through analytics tools
              </li>
              <li>
                Cookies and similar tracking technologies for site functionality
              </li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your enquiries and messages</li>
              <li>Improve our website and content</li>
              <li>Analyse website traffic and user behaviour</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              You can choose to disable cookies through your browser settings,
              though this may affect some functionality of the site.
            </p>
          </section>

          <section>
            <h2>5. Third Party Services</h2>
            <p>
              We may use third-party services such as Google Analytics to
              understand website traffic. These services have their own privacy
              policies and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information.
              However, no method of transmission over the Internet is 100%
              secure and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of any marketing communications</li>
            </ul>
          </section>

          <section>
            <h2>8. Disclaimer</h2>
            <p>
              All content on Zenith Trader Academy is for educational purposes
              only. Nothing on this website constitutes financial advice.
              Trading involves risk and past performance is not indicative of
              future results.
            </p>
          </section>

          <section>
            <h2>9. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us through our{" "}
              <a
                href="/contact"
                className="text-emerald-400 hover:underline"
              >
                Contact Page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
