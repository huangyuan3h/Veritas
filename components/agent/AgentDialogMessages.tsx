"use client";
import { Bot, Loader2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { AgentMessage } from "@/contexts/agent";
import { AgentDialogWelcome } from "./AgentDialogWelcome";

interface AgentDialogMessagesProps {
  messages: AgentMessage[];
  isLoading: boolean;
  formatTime: (date: Date) => string;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export function AgentDialogMessages({
  messages,
  isLoading,
  formatTime,
  messagesEndRef,
}: AgentDialogMessagesProps) {
  return (
    <>
      {messages.length === 0 ? (
        <AgentDialogWelcome />
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex space-x-3",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
            )}
            <div
              className={cn(
                "max-w-[80%] rounded-lg px-4 py-2",
                message.role === "user"
                  ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white"
                  : "bg-slate-100 text-slate-900"
              )}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              <p
                className={cn(
                  "text-xs mt-1",
                  message.role === "user" ? "text-white/80" : "text-slate-500"
                )}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-gray-600" />
              </div>
            )}
          </div>
        ))
      )}
      {/* 加载状态 */}
      {isLoading && (
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full flex items-center justify-center">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div className="bg-gray-100 rounded-lg px-4 py-2">
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
              <span className="text-sm text-slate-500">Thinking...</span>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </>
  );
}
