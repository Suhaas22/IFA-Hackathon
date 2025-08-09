export default function EventCard({ event }) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Thumbnail */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-40 object-cover"
      />

      {/* Event Info */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 w-fit mb-2">
          {event.category}
        </span>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 flex-1">
          {event.title}
        </h3>
        {event.date && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {event.date}
          </p>
        )}

        {/* Yes and No Buttons */}
       {/* Yes and No Buttons */}
<div className="mt-4 flex gap-4 justify-center">
  <button
    className="flex-1 bg-blue-100 text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-sm transition-colors hover:bg-blue-200"
  >
    Yes ₹{event.yesprice}
  </button>
  <button
    className="flex-1 bg-red-100 text-red-700 font-semibold py-2 px-6 rounded-lg shadow-sm transition-colors hover:bg-red-200"
  >
    No ₹{event.noprice}
  </button>
</div>

      </div>
    </div>
  );
}
