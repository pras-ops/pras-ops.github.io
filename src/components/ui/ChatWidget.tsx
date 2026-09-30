import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';

const QUESTIONS = [
  { keywords: ['stack', 'tech', 'skills', 'language'], response: "I specialize in Python, SQL, and JavaScript. For web, I use React & Tailwind. For AI, I focus on local LLM inference and scraping." },
  { keywords: ['contact', 'email', 'reach', 'talk'], response: "You can reach me at jacobprashant20@gmail.com or find me on LinkedIn." },
  { keywords: ['experience', 'work', 'job'], response: "I'm currently an Applied AI Developer & Data Engineer. I previously worked as a Technical Analyst in financial compliance." },
  { keywords: ['project', 'build', 'portfolio'], response: "I build tools like the Transcript Extractor, Client-Side LLM Preprocessor, and various Data Viz dashboards. Check the 'Projects' section!" },
  { keywords: ['hi', 'hello', 'hey'], response: "Hello! I'm your AI assistant. Ask me about Prashant's skills, experience, or projects!" }
];

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! Ask me anything about my work or experience." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');

    // Hardcoded logic
    setTimeout(() => {
      const lowerMsg = userMsg.toLowerCase();
      const match = QUESTIONS.find(q => q.keywords.some(k => lowerMsg.includes(k)));
      const reply = match ? match.response : "I'm not sure about that. Try asking about my skills, experience, or projects!";
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-96 glass-panel rounded-2xl shadow-2xl overflow-hidden border border-sky-500/20 flex flex-col h-[450px]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-sky-500/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">AI Assistant</div>
                  <div className="text-[10px] text-sky-400 font-medium uppercase tracking-wider">Online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-sky-500 text-white rounded-tr-none' 
                      : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-slate-900/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-slate-800 border-none rounded-xl px-4 py-2 text-sm text-white focus:ring-1 focus:ring-sky-500 outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
