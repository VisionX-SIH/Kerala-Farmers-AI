import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your farming assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState("");

  // 👇 Chatbot logic (rule-based for now)
  const handleBotResponse = (userMessage: string) => {
    let reply = "";

    if (userMessage.toLowerCase().includes("farming")) {
      reply =
        "Farming is the backbone of our economy 🌱. Do you want info about crops, techniques, or markets?";
    } else if (userMessage.toLowerCase().includes("crop")) {
      reply = "Which crop are you interested in? (Wheat, Rice, Maize, etc.)";
    } else if (userMessage.toLowerCase().includes("weather")) {
      reply =
        "Weather plays a big role in farming ☀️🌧️. Do you want today's forecast or weekly details?";
    } else if (userMessage.toLowerCase().includes("today")) {
      reply =
        "Today's weather is sunny with a high of 30°C and a low of 20°C. Perfect for farming! 🌞";
    } else if (userMessage.toLowerCase().includes("weekly")) {
      reply =
        "This week looks great for farming! Expect sunny days with occasional showers. 🌤️🌦️";
    } else if (userMessage.toLowerCase().includes("bye")) {
      reply = "Goodbye! 👋 Happy farming!";
    } else if (userMessage.toLowerCase().includes("help")) {
      reply =
        "Sure! I'm here to assist you with farming-related queries. What do you need help with?";
    } else if (userMessage.toLowerCase().includes("tips")) {
      reply =
        "Here are some farming tips: 1. Rotate your crops 🌾. 2. Use organic fertilizers 🌿. 3. Monitor soil health 🧪. Anything specific you want to know?";
    } else if (userMessage.toLowerCase().includes("market")) {
      reply =
        "The current market prices are: Wheat - $200/ton, Rice - $250/ton, Maize - $180/ton. Prices may vary based on location and quality.";
    } else if (userMessage.toLowerCase().includes("price")) {
      reply =
        "Which crop's price are you interested in? (Wheat, Rice, Maize, etc.)";
    } else if (userMessage.toLowerCase().includes("wheat price")) {
      reply = "The current price of Wheat is $200/ton.";
    } else if (userMessage.toLowerCase().includes("rice price")) {
      reply = "The current price of Rice is $250/ton.";
    } else if (userMessage.toLowerCase().includes("maize price")) {
      reply = "The current price of Maize is $180/ton.";
    } else if (userMessage.toLowerCase().includes("soil")) {
      reply =
        "Soil health is crucial for good yields 🌱. Regularly test your soil, add organic matter, and avoid over-tilling. Need more details?";
    } else if (userMessage.toLowerCase().includes("pest")) {
      reply =
        "Pest management is key to protecting your crops 🐛. Use integrated pest management (IPM) techniques and consider natural predators. Want specific advice?";
    } else if (userMessage.toLowerCase().includes("disease")) {
      reply =
        "Crop diseases can be managed by crop rotation, resistant varieties, and proper field sanitation 🦠. Do you have a specific disease in mind?";
    } else if (userMessage.toLowerCase().includes("who developed you")) {
      reply =
        "I was developed by the VisionX team to assist farmers with their queries. How can I help you today?";
    } else if (userMessage.toLowerCase().includes("who is saral garg")) {
      reply =
        "Mr. Saral Garg is a renowned faculty member in the Department of Data Science at RKGIT. He is highly respected for his expertise and engaging way of teaching Web Development and related subjects.";
    } else if (userMessage.toLowerCase().includes("what can krishi sahayi do")) {
      reply =
        "Krishi Sahayi is your personal farming assistant! It can provide information on crops, weather, market prices, farming tips, pest management, and more. How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("hello")) {
      reply = "Hello! 👋 How can I help you today?";
    } else if (userMessage.toLowerCase().includes("thank")) {
      reply =
        "You're welcome! 😊 If you have more questions, feel free to ask.";
    } else if (userMessage.toLowerCase().includes("wheat")) {
      reply =
        "Wheat is a staple crop 🌾. It requires well-drained soil and moderate rainfall. Anything specific you want to know?";
    } else if (userMessage.toLowerCase().includes("rice")) {
      reply =
        "Rice thrives in warm, wet conditions 🌾💧. It needs plenty of water during its growing season. Any particular aspect you're curious about?";
    } else if (userMessage.toLowerCase().includes("maize")) {
      reply =
        "Maize, or corn, is a versatile crop 🌽. It prefers well-drained soil and full sun. Do you want tips on cultivation or pest management?";
    } else if (userMessage.toLowerCase().includes("technique")) {
      reply =
        "There are various farming techniques like crop rotation, no-till farming, and organic farming 🌱. Which one would you like to know more about?";
    } else if (userMessage.toLowerCase().includes("organic")) {
      reply =
        "Organic farming avoids synthetic chemicals and focuses on natural processes 🌿. It improves soil health and biodiversity. Interested in starting organic farming?";
    } else if (userMessage.toLowerCase().includes("crop rotation")) {
      reply =
        "Crop rotation involves changing the type of crop grown in a particular area each season 🌾➡️🌽➡️🌻. It helps maintain soil fertility and reduce pests. Want to know more?";
    } else if (userMessage.toLowerCase().includes("no-till")) {
      reply =
        "No-till farming minimizes soil disturbance by leaving the previous year's crop residue on the field 🌱. It helps improve soil health and reduce erosion. Need more details?";
    } else if (userMessage.toLowerCase().includes("fertilizer")) {
      reply =
        "Fertilizers provide essential nutrients to crops 🌿. There are organic and synthetic options. It's important to use them judiciously to avoid environmental harm. Want recommendations?";
    } else if (userMessage.toLowerCase().includes("irrigation")) {
      reply =
        "Irrigation is crucial for crop growth 💧. Common methods include drip, sprinkler, and surface irrigation. The choice depends on the crop and local conditions. Need help choosing?";
    } else if (userMessage.toLowerCase().includes("harvest")) {
      reply =
        "Harvesting at the right time ensures maximum yield and quality 🌾. It varies by crop, so it's important to monitor maturity closely. Do you need tips on harvesting a specific crop?";
    } else if (
      userMessage
        .toLowerCase()
        .includes("how are you different from other ai")
    ) {
      reply =
        "Krishi Sahayi stands out by being Malayalam-first, voice-enabled, and personalized for Kerala farmers 🌾. It provides local weather alerts, pest warnings, and government scheme updates — all in simple Malayalam.";
    } else if (
      userMessage
        .toLowerCase()
        .includes("farmers in rural kerala may not be tech savvy")
    ) {
      reply =
        "That’s exactly why we built VisionX as voice-first in Malayalam. Farmers don’t need to type — they can simply speak naturally. It’s also offline-capable for poor internet areas.";
    } else if (userMessage.toLowerCase().includes("what is your business model")) {
      reply =
        "We plan to offer a freemium model: basic features free for all farmers, and premium features like advanced analytics, consulting, and market insights via subscription.";
    } else if (userMessage.toLowerCase().includes("mvp")) {
      reply =
        "Our MVP is a voice-first chatbot in Malayalam that gives personalized farming advice. It covers weather forecasts, pest/disease ID, and market price updates.";
    } else if (
      userMessage
        .toLowerCase()
        .includes("how will this solution be financially sustainable")
    ) {
      reply =
        "Initially, it can be supported via government or NGO partnerships. Later, premium services like crop insurance, marketplace integration, or analytics can sustain it financially.";
    } else {
      reply =
        "I didn’t quite get that 🤔. I’m still learning. Could you rephrase?";
    }

    return reply;
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = { id: Date.now(), text: inputText, isUser: true };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");

    setTimeout(() => {
      const response = {
        id: Date.now() + 1,
        text: handleBotResponse(inputText),
        isUser: false,
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
      <div className="bg-green-600 text-white p-4 rounded-t-xl flex items-center justify-between">
        <h3 className="font-semibold">AI Assistant</h3>
        <button onClick={() => setIsOpen(false)}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.isUser
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your question..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
          <Button onClick={sendMessage} size="sm">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};
