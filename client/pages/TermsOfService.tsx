import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                alt="QuantumRoot Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Quantum Root
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Quantum Root's website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Quantum Root provides online and offline technology training
                courses, educational content, and related services. Our services
                include but are not limited to:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Live and recorded video courses</li>
                <li>Educational materials and resources</li>
                <li>Instructor support and mentorship</li>
                <li>Certificates of completion</li>
                <li>Community forums and networking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. User Registration and Account
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To access certain features of our service, you may be required
                to register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Course Enrollment and Payment
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Enrollment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Course enrollment is subject to availability and our
                    acceptance. We reserve the right to refuse enrollment to any
                    individual at our discretion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Payment Terms
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>All course fees must be paid in advance</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Payment plans may be available for select courses</li>
                    <li>All payments are in Indian Rupees (INR)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Refund and Cancellation Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our refund policy is designed to be fair to both students and
                Quantum Root:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>
                  Full refund available within 7 days of course start date
                </li>
                <li>
                  50% refund available within 14 days of course start date
                </li>
                <li>No refund after 14 days of course commencement</li>
                <li>
                  Refunds for technical issues will be handled case-by-case
                </li>
                <li>Processing time for refunds is 7-10 business days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For detailed refund terms, please refer to our{" "}
                <Link
                  to="/refund-policy"
                  className="text-brand-600 hover:text-brand-700"
                >
                  Refund Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Intellectual Property Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All content, including but not limited to text, graphics,
                videos, audio, software, and course materials, is the property
                of Quantum Root or its content suppliers and is protected by
                copyright and other intellectual property laws.
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>
                  You may not reproduce, distribute, or create derivative works
                </li>
                <li>
                  Course materials are for personal, non-commercial use only
                </li>
                <li>
                  Screenshots, recordings, or sharing content is prohibited
                </li>
                <li>
                  Violation may result in account termination and legal action
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. User Conduct and Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed">You agree to:</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Use our services for lawful purposes only</li>
                <li>Respect other students and instructors</li>
                <li>Not share account credentials with others</li>
                <li>Not engage in disruptive or harmful behavior</li>
                <li>Not attempt to hack or compromise our systems</li>
                <li>Follow all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Quantum Root shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Service Availability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain service availability but cannot guarantee
                uninterrupted access. We reserve the right to modify, suspend,
                or discontinue services at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your account and
                access to our services immediately, without prior notice, for
                any reason, including violation of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service are governed by and construed in
                accordance with the laws of India. Any disputes arising from
                these terms will be subject to the exclusive jurisdiction of the
                courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>QuantumRoot</strong>
                  <br />
                  Email: info@quantumroot.in
                  <br />
                  Phone: +91 96502 19962
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
