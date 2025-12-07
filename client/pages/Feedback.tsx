import Layout from "@/components/Layout";
import { MessageSquarePlus } from "lucide-react";

export default function Feedback() {
  return (
    <Layout>
      <div className="relative py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <MessageSquarePlus className="h-16 w-16 text-white relative z-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your Feedback <span className="text-cyan-400">Matters</span>
            </h1>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Help us improve CyberSquad by sharing your thoughts, suggestions,
              and experiences. Your feedback is valuable and will help us serve
              you better.
            </p>
          </div>
        </div>
      </div>

      {/* Google Form Embed */}
      <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdKjKOXQzEK9CRhh3nWWsLapuNkoQr_9TfjEgUppmbSCBWHUA/viewform?fbclid=IwY2xjawOiFnhleHRuA2FlbQIxMQBicmlkETFwb3FydkZBa1Z4MGtFZFFuc3J0YwZhcHBfaWQBMAABHn5qJER8wHegY2ItQ7AvKmb57KiR0jFLX2eugAnW877-Gx9mfh4MkkqqktOr_aem_HiZp5ukHmGDdsw5Shq02eA"
              width="100%"
              height="1000"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="CyberSquad Feedback Form"
              className="rounded-lg shadow-2xl border-2 border-gray-200 dark:border-gray-700"
            >
              Loading form...
            </iframe>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              If you're having trouble with the form above, you can also email
              us directly with your feedback. Thank you for helping us make
              CyberSquad better!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
