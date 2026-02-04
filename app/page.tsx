import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/EDMVerify.png"
                  alt="EDM Verify" 
                  width={500} 
                  height={167}
                  className="h-24 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#1F2937] hover:text-[#2F6F66] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#6B7280] hover:text-[#2F6F66] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#6B7280] hover:text-[#2F6F66] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#6B7280] hover:text-[#2F6F66] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-[#4CAF50] text-white hover:bg-[#45a049] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#1F2937] sm:text-6xl md:text-7xl">
            Stay Compliant
            <span className="block text-[#4CAF50]">Stay Confident</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#6B7280]">
            Streamline your Know Your Customer (KYC) compliance with instant SMS-based identity verification. Meet regulatory requirements while delivering a seamless customer experience.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#4CAF50] text-white text-lg font-semibold rounded-lg hover:bg-[#45a049] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#2F6F66] text-lg font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors border-2 border-[#2F6F66]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937]">Why EDM Verify Rocks</h2>
          <p className="mt-4 text-xl text-[#6B7280]">
            Built for businesses that value real connections over fake accounts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-[#4CAF50]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">
              Dead Simple
            </h3>
            <p className="text-[#6B7280] text-center">
              Your customers verify in seconds. No friction, no confusion, just smooth sailing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-[#4CAF50]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">
              Blazing Fast
            </h3>
            <p className="text-[#6B7280] text-center">
              Sub-2-second load times. Because nobody's got time to wait around.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-[#4CAF50]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">
              Your Brand, Your Way
            </h3>
            <p className="text-[#6B7280] text-center">
              White-label ready with custom styling. Make it yours without the dev headache.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937]">What We Do</h2>
            <p className="mt-4 text-xl text-[#6B7280]">
              Three ways to level up your customer game
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Solutions List */}
            <div className="space-y-12">
              {/* Solution 1 */}
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Instant Identity Checks</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Send a quick verification ping. Your users confirm who they are in seconds, and you get peace of mind.
                </p>
              </div>

              {/* Solution 2 */}
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Smart Document Delivery</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Drop docs straight into your customers' texts for e-signatures. Way better conversion than email ever dreamed of.
                </p>
              </div>

              {/* Solution 3 */}
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Win Back Drop-Offs</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Customers bail on your form? Fire off automated nudges that actually bring them back to finish what they started.
                </p>
              </div>
            </div>

            {/* Single Image */}
            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image 
                src="/Phone.png" 
                alt="EDM Verify Solutions"
                width={350} 
                height={350}
                className="w-auto h-auto object-contain max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#2F6F66] via-[#6FD6A8] to-[#4CAF50] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join businesses that trust EDM Verify for SMS verification and improved customer engagement.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-[#2F6F66] text-lg font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b3a41] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EDM Verify</h3>
              <p className="text-gray-400">
                SMS verification for businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@edmverify.com
              </p>
            </div>
          </div>
          <div className="border-t border-[#E5E7EB] mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EDM Verify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
