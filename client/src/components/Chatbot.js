import React, { useState, useEffect, useRef } from 'react';
import api from '../services/api';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const { data } = await api.post('/chatbot/message', { message: input });
      const botMessage = { text: data.response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = { text: 'Sorry, I am having trouble responding right now.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const quickReplies = [
    'Show medicines',
    'My orders',
    'Blood bank info',
    'Contact support'
  ];

  const handleQuickReply = (reply) => {
    setInput(reply);
  };

  return (
    <>
      <div className={`chatbot-button ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
        💬
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>MediCare Assistant</h3>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-replies">
            {quickReplies.map((reply, idx) => (
              <button key={idx} onClick={() => handleQuickReply(reply)}>
                {reply}
              </button>
            ))}
          </div>

          <form onSubmit={sendMessage} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
