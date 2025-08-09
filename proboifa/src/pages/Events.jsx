import { useState } from "react";
import { events } from "../data/events"; // Trending events
import { upcomingevents } from "../data/upcomingevents"; // Upcoming events
import EventCard from "../components/EventCard";


export default function Events() {
  const trendingEvents = events.slice(0, 4); // First 4 trending
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Skill-Based All events Gaming?",
      answer:
        "Skill-based All events gaming is an event-based activity where you can showcase your knowledge and expertise by making informed decisions about All events-related questions. Your insights and skills will be rewarded based on their accuracy and depth.",
    },
    {
      question: "How do I participate in events?",
      answer:
        "Simply sign up, choose an event, and share your prediction by answering YES or NO based on your analysis.",
    },
    {
      question: "Are there rewards for accurate predictions?",
      answer:
        "Yes! The more accurate your predictions, the bigger your chances of winning exciting rewards.",
    },
    {
      question: "Is this platform free to use?",
      answer:
        "You can start for free, and some events may offer premium features or higher reward opportunities.",
    },
    {
      question: "Can I play from outside my country?",
      answer:
        "Yes, our platform supports players from various regions, subject to local laws and regulations.",
    },
    {
      question: "How do I withdraw my rewards?",
      answer:
        "Withdrawals can be made via multiple payment methods available in your account dashboard.",
    },
    {
      question: "What types of events are available?",
      answer:
        "We cover events from sports, entertainment, politics, and much more — updated regularly.",
    },
  ];

  return (
    <div className="pt-24 px-6 pb-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left section: Trending Events */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight border-b border-gray-300 dark:border-gray-700 pb-2">
            Trending Events
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-10">
            {trendingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* All Events Info Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              All events - Showcase Expertise and Win Rewards
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Probo is the ultimate skill-based gaming platform where your expertise in All events, and more can lead to exciting rewards! Showcase your knowledge, make informed predictions on upcoming events, and win rewards for your insights.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              How It Works:
            </h4>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Make Your Decisions:</strong> Share your opinions on future All events by answering YES or NO, based on your knowledge and analysis.
              </li>
              <li>
                <strong>Earn Rewards:</strong> The more accurate your insights, the greater your chances of winning big rewards. Your predictive skills can lead to instant payouts.
              </li>
            </ul>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Why Join Us?
            </h4>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Diverse Categories:</strong> Engage with a variety of events across different fields.
              </li>
              <li>
                <strong>Empowering Expertise:</strong> Probo lets you make informed decisions, turning your knowledge into predictive insights that unlock thrilling prizes.
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Don’t just watch the world unfold—be part of it! Join Probo today, make informed All events predictions, and showcase your expertise!
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 text-gray-500 dark:text-gray-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-4 text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section: Upcoming Events (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight border-b border-gray-300 dark:border-gray-700 pb-2">
              Upcoming Events
            </h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
              {upcomingevents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  {/* Event Info */}
                  <div className="flex flex-col flex-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 w-fit mb-1">
                      {event.category}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                      {event.title}
                    </h3>
                    {event.date && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {event.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
