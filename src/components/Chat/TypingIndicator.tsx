export const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[85%] md:max-w-[75%] mr-4">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl rounded-bl-md px-4 py-3 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-sm text-gray-400 font-medium">AI is thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
};