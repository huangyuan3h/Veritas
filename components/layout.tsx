"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Header } from "@/components/header";
import { NavigationProvider } from "@/contexts/navigation-context";
import {
  AgentProvider as BaseAgentProvider,
  useAgentState,
} from "@/contexts/agent";
import { AgentProvider } from "@/components/agent/agent-provider";
import type { AgentConfig } from "@/components/agent/config";
import { getPageAgentConfig } from "@/components/agent/config";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  enableAgent?: boolean;
  agentConfig?: AgentConfig;
  pageName?: string;
}

function LayoutShell({
  children,
  title = "Dashboard",
  subtitle,
}: Pick<LayoutProps, "children" | "title" | "subtitle">) {
  const { isOpen, mode, width } = useAgentState();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isSidebarMode = mode === "sidebar" && isOpen && isClient;
  const rightInset = isSidebarMode ? width : 0;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Navigation />
      <div
        className="flex flex-1 flex-col transition-[margin-right] duration-300 ease-in-out"
        style={{ marginRight: rightInset }}
      >
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function StaticShell({
  children,
  title = "Dashboard",
  subtitle,
}: Pick<LayoutProps, "children" | "title" | "subtitle">) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Navigation />
      <div className="flex flex-1 flex-col">
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export function Layout(props: LayoutProps) {
  const inferredConfig = props.pageName
    ? getPageAgentConfig(props.pageName)
    : props.agentConfig;
  const effectiveConfig: AgentConfig = inferredConfig ?? {
    enabled: props.enableAgent ?? true,
    showTrigger: true,
    showDialog: true,
  };

  if (!effectiveConfig.enabled) {
    return (
      <NavigationProvider>
        <StaticShell title={props.title} subtitle={props.subtitle}>
          {props.children}
        </StaticShell>
      </NavigationProvider>
    );
  }

  return (
    <NavigationProvider>
      <BaseAgentProvider>
        <AgentProvider
          config={effectiveConfig}
          enabled={effectiveConfig.enabled}
        >
          <LayoutShell title={props.title} subtitle={props.subtitle}>
            {props.children}
          </LayoutShell>
        </AgentProvider>
      </BaseAgentProvider>
    </NavigationProvider>
  );
}
