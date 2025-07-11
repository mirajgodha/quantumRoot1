import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800"
                alt="QuantumRoot Logo"
                className="w-10 h-10 object-contain"
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
                to="/blog"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className="text-foreground hover:text-brand-600 transition-colors"
              >
                Careers
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
            Refund Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Quantum Root, we want you to be satisfied with your learning
                experience. This refund policy outlines the terms and conditions
                under which refunds are processed for our courses and services.
                Please read this policy carefully before enrolling in any
                course.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Refund Eligibility
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Full Refund (100%)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You are eligible for a full refund if:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      You request a refund within 7 days of course commencement
                    </li>
                    <li>
                      You have attended less than 10% of the course content
                    </li>
                    <li>
                      The course is cancelled by QuantumRoot due to insufficient
                      enrollment
                    </li>
                    <li>
                      Technical issues prevent you from accessing the course for
                      more than 48 hours
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Partial Refund (50%)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You are eligible for a 50% refund if:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      You request a refund within 8-14 days of course
                      commencement
                    </li>
                    <li>
                      You have attended less than 25% of the course content
                    </li>
                    <li>
                      You need to withdraw due to medical or family emergencies
                      (documentation required)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Refund
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No refund will be provided if:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      More than 14 days have passed since course commencement
                    </li>
                    <li>
                      You have completed more than 25% of the course content
                    </li>
                    <li>
                      You have downloaded course materials or certificates
                    </li>
                    <li>The refund request is made after course completion</li>
                    <li>You violate our terms of service or code of conduct</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Special Circumstances
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Corporate Training Programs
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Corporate training programs have different refund terms that
                    are negotiated and specified in the corporate agreement.
                    Please refer to your corporate contract for specific refund
                    policies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Live Classes and Workshops
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Live classes and workshops have stricter refund policies:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>
                      Full refund available up to 48 hours before the event
                    </li>
                    <li>
                      50% refund available up to 24 hours before the event
                    </li>
                    <li>No refund for cancellations within 24 hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Subscription Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Monthly and annual subscription services can be cancelled at
                    any time. Refunds for unused portions will be calculated on
                    a pro-rata basis for annual subscriptions only.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Refund Process
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    How to Request a Refund
                  </h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>
                      Send an email to{" "}
                      <span className="font-semibold">
                        refunds@quantumroot.in
                      </span>
                    </li>
                    <li>Include your full name and enrollment details</li>
                    <li>Specify the reason for your refund request</li>
                    <li>
                      Provide any supporting documentation (if applicable)
                    </li>
                    <li>
                      Wait for our team to review and respond within 3-5
                      business days
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Processing Time
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Review and approval: 3-5 business days from request</li>
                    <li>
                      Refund processing: 7-10 business days after approval
                    </li>
                    <li>
                      Bank processing: Additional 3-5 business days (varies by
                      bank)
                    </li>
                    <li>
                      Total timeline: Approximately 2-3 weeks from request to
                      account credit
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Refund Methods
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Refunds will be processed using the same payment method used for
                the original transaction:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Credit/Debit Card: Refunded to the original card</li>
                <li>Bank Transfer: Refunded to the original bank account</li>
                <li>Digital Wallets: Refunded to the original wallet</li>
                <li>
                  Cash Payments: Refunded via bank transfer (bank details
                  required)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Non-Refundable Items
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The following items are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Certification and examination fees</li>
                <li>Third-party software licenses or tools</li>
                <li>Physical materials once shipped</li>
                <li>Administrative and processing fees</li>
                <li>Late enrollment fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Course Transfer Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As an alternative to refunds, we offer course transfers:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Transfer to a different course of equal or lesser value</li>
                <li>
                  Transfer to the next batch of the same course (one-time only)
                </li>
                <li>
                  Transfers must be requested within the refund eligibility
                  period
                </li>
                <li>Price differences must be paid for higher-value courses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Force Majeure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In case of events beyond our control (natural disasters,
                government restrictions, pandemics, etc.), we will work with
                students to provide alternative arrangements such as:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Rescheduling courses to a later date</li>
                <li>Converting to online delivery format</li>
                <li>Providing course credits for future use</li>
                <li>
                  Offering refunds on a case-by-case basis depending on
                  circumstances
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you disagree with our refund decision, you may:
              </p>
              <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-1">
                <li>
                  Submit an appeal to{" "}
                  <span className="font-semibold">appeals@quantumroot.in</span>{" "}
                  within 15 days
                </li>
                <li>Provide additional documentation supporting your case</li>
                <li>
                  Participate in our internal review process (5-7 business days)
                </li>
                <li>
                  Seek external mediation if the internal review is
                  unsatisfactory
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For refund requests or questions about this policy, contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Refund Department</strong>
                  <br />
                  Email: refunds@quantumroot.in
                  <br />
                  Phone: +91 96502 19962
                  <br />
                  Business Hours: Monday-Friday, 9 AM - 6 PM IST
                </p>
              </div>
            </section>

            <section className="bg-brand-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Important Note
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This refund policy is subject to change without prior notice. We
                recommend reviewing this policy before enrolling in any course.
                The policy in effect at the time of your enrollment will apply
                to your refund request. For questions or clarifications, please
                contact our support team before making a purchase.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
