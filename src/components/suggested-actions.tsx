"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChatRequestOptions, CreateMessage, Message } from "ai";
import { memo, useEffect, useState } from "react";

interface SuggestedActionsProps {
  chatId: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
}

const ALL_SUGGESTED_ACTIONS = [
  {
    title: "Explore the Galaxy",
    label: "with a courageous astronaut",
    action:
      "Create a sci-fi story about a courageous astronaut exploring unknown galaxies. Include an image of a spaceship amidst colorful nebulae.",
  },
  {
    title: "Design a Workout Routine",
    label: "for building strength at home",
    action:
      "Create a simple workout routine for building strength at home, with no equipment needed.",
  },
  {
    title: "Plan a Healthy Meal",
    label: "for a busy workday",
    action:
      "Suggest a healthy meal plan for a busy workday, including quick recipes and snack ideas.",
  },
  {
    title: "Learn a New Skill",
    label: "like playing the guitar",
    action:
      "Provide beginner tips and resources for learning how to play the guitar.",
  },
  {
    title: "Write a Python Script",
    label: "to scrape web data efficiently",
    action:
      "Write a Python script using BeautifulSoup and requests to scrape product prices from a web page cleanly.",
  },
  {
    title: "Draft a Professional Email",
    label: "requesting a deadline extension",
    action:
      "Write a polite, professional email to a project manager requesting a 3-day extension on a key deliverable.",
  },
  {
    title: "Optimize SQL Query",
    label: "for high-traffic databases",
    action:
      "Explain indexing and query optimization strategies for PostgreSQL to speed up slow SELECT queries.",
  },
  {
    title: "Create a Travel Itinerary",
    label: "for a 5-day trip to Tokyo",
    action:
      "Design a detailed 5-day travel itinerary for visiting Tokyo, including cultural landmarks, food spots, and day trips.",
  },
  {
    title: "Explain Quantum Computing",
    label: "in simple terms for beginners",
    action:
      "Explain the basic principles of quantum computing, qubits, and superposition using simple real-world analogies.",
  },
  {
    title: "Generate Next.js Code",
    label: "for a responsive navbar component",
    action:
      "Write a modern, fully responsive React/Next.js navbar component using Tailwind CSS and Lucide icons.",
  },
  {
    title: "Compose a Poem",
    label: "about nature and seasonal change",
    action:
      "Write an evocative 4-stanza poem describing the transition from autumn into winter.",
  },
  {
    title: "Design a Resume Summary",
    label: "for a Senior Software Engineer",
    action:
      "Write a compelling 3-paragraph professional summary for a Senior Full-Stack Engineer resume.",
  },
  {
    title: "Build a Monthly Budget",
    label: "for personal savings goals",
    action:
      "Create a 50/30/20 monthly personal budgeting template with advice on building an emergency savings fund.",
  },
  {
    title: "Write a Tech Blog Post",
    label: "explaining AI Agent architecture",
    action:
      "Draft an engaging technical blog post explaining how modern LLM AI agents use tools and context memory.",
  },
  {
    title: "Brainstorm App Ideas",
    label: "combining AI and fitness",
    action:
      "List 5 innovative mobile app ideas that combine artificial intelligence with personalized fitness and health tracking.",
  },
  {
    title: "Prepare Interview Questions",
    label: "for hiring a React developer",
    action:
      "Provide 10 technical and behavioral interview questions for assessing a Senior React/Next.js developer candidate.",
  },
  {
    title: "Summarize Complex Topics",
    label: "such as general relativity",
    action:
      "Summarize Einstein's theory of General Relativity in 3 concise, easy-to-understand bullet points.",
  },
  {
    title: "Design a Brand Logo Concept",
    label: "for an eco-friendly tech startup",
    action:
      "Describe detailed visual design concepts and color palette recommendations for a sustainable tech company logo.",
  },
  {
    title: "Write a Mystery Story",
    label: "about a time-traveling detective",
    action:
      "Write an intriguing opening chapter for a mystery novel about a detective solving crimes across historical eras.",
  },
  {
    title: "Create a Study Guide",
    label: "for TypeScript generics",
    action:
      "Create a clear study guide with code examples covering TypeScript Generics, Utility Types, and Type Constraints.",
  },
  {
    title: "Build a Launch Strategy",
    label: "for a new SaaS product",
    action:
      "Outline a step-by-step Product Hunt and social media launch checklist for a new SaaS product.",
  },
  {
    title: "Write a Bash Script",
    label: "to automate daily backups",
    action:
      "Write a robust Shell/Bash script that creates timestamped tar.gz archives of a directory and removes backups older than 7 days.",
  },
  {
    title: "Draft a Privacy Policy",
    label: "for a mobile web application",
    action:
      "Draft a standard, easy-to-read Privacy Policy outline covering user data collection, storage, and rights.",
  },
  {
    title: "Compare Tech Stacks",
    label: "Docker vs Virtual Machines",
    action:
      "Compare Docker containers versus traditional virtual machines in terms of resource efficiency, security, and deployment speed.",
  },
];

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const [displayedActions, setDisplayedActions] = useState<
    typeof ALL_SUGGESTED_ACTIONS
  >([]);

  useEffect(() => {
    // Randomly shuffle array and select 4 distinct items on page load
    const shuffled = [...ALL_SUGGESTED_ACTIONS].sort(() => 0.5 - Math.random());
    setDisplayedActions(shuffled.slice(0, 4));
  }, []);

  const currentActions =
    displayedActions.length > 0
      ? displayedActions
      : ALL_SUGGESTED_ACTIONS.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
      {currentActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className="block"
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, "", `/chat/${chatId}`);

              append({
                role: "user",
                content: suggestedAction.action,
              });
            }}
            className="text-left bg-[#fffefb] dark:bg-neutral-900/80 border border-[#f4e2c6]/70 dark:border-neutral-800 hover:border-[#d97706] hover:bg-[#fef3c7]/30 transition-all duration-300 rounded-3xl px-5 py-4 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start shadow-[0_10px_30px_rgba(217,119,6,0.03)]"
          >
            <span className="font-outfit font-bold tracking-tight text-[#451a03] dark:text-[#fdf9f0] text-base">
              {suggestedAction.title}
            </span>
            <span className="text-[#78350f] dark:text-amber-200/70 text-xs">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => prevProps.chatId === nextProps.chatId
);
