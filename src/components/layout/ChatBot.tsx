import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Maximize2, Minimize2 } from "lucide-react";

const MOCK_RESPONSES: Record<string, string> = {
  "hello": "Hello! I'm the AI assistant for Ihsan's portfolio. How can I help you today?",
  "projects": "Ihsan has worked on several high-impact projects including TechFlow Solutions and Creative Pulse. You can find them in the Projects section!",
  "experience": "Ihsan is a Senior MERN Stack Engineer with experience at TechFlow, Creative Pulse, and StartUp Hub.",
  "stack": "Ihsan's core stack includes React, Node.js, MongoDB, and AWS. He's also proficient in Next.js and Tailwind CSS.",
  "contact": "You can reach Ihsan via the contact form below or through his LinkedIn profile.",
  "default": "That's a great question! While I'm just a demo chatbot, you can contact Ihsan directly for more detailed information."
};

/** Strip HTML tags to prevent XSS in rendered text */
const sanitize = (str: string) => str.replace(/<[^>]*>/g, "").trim();

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi there! I'm Ihsan's AI assistant. Ask me anything about his work!" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSend = useCallback(() => {
    const sanitized = sanitize(input);
    if (!sanitized) return;

    setMessages((prev) => [...prev, { role: "user", text: sanitized }]);
    setInput("");

    setTimeout(() => {
      const lower = sanitized.toLowerCase();
      let response = MOCK_RESPONSES.default;
      
      if (lower.includes("hello") || lower.includes("hi")) response = MOCK_RESPONSES.hello;
      else if (lower.includes("project")) response = MOCK_RESPONSES.projects;
      else if (lower.includes("experience") || lower.includes("work")) response = MOCK_RESPONSES.experience;
      else if (lower.includes("stack") || lower.includes("tech")) response = MOCK_RESPONSES.stack;
      else if (lower.includes("contact") || lower.includes("reach")) response = MOCK_RESPONSES.contact;

      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 600);
  }, [input]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-primary-foreground shadow-lg shadow-neon-blue/20 hover:scale-110 active:scale-95 transition-all neon-glow"
            aria-label="Open AI Assistant"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`glass-strong rounded-2xl flex flex-col border border-neon-blue/20 shadow-2xl overflow-hidden transition-all duration-300 ${
              isMinimized ? "h-14 w-64" : "h-[500px] w-[350px]"
            }`}
          >
            {/* Header */}
            <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-primary-foreground">Portfolio Assistant</span>
                  <span className="text-[10px] text-white/70">Online</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMinimized(!isMinimized)} className="text-white/80 hover:text-white transition-colors">
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/40 scrollbar-thin scrollbar-thumb-neon-blue/20"
                  aria-live="polite"
                  aria-label="Chat messages"
                >
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-2 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          msg.role === "user" ? "bg-neon-purple/20" : "bg-neon-blue/20"
                        }`}>
                          {msg.role === "user" ? <User size={12} className="text-neon-purple" /> : <Bot size={12} className="text-neon-blue" />}
                        </div>
                        <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                          msg.role === "user" 
                            ? "bg-neon-purple/10 text-foreground rounded-tr-none" 
                            : "bg-neon-blue/10 text-foreground rounded-tl-none border border-neon-blue/5"
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-3 border-t border-glass-border/30 bg-background/60">
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Ask me about Ihsan..."
                      aria-label="Type your message"
                      maxLength={500}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-neon-blue/50 transition-all pr-10"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-neon-blue hover:text-neon-purple disabled:opacity-50 transition-colors"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
