"use client";

import React, { useState } from "react";
import Head from "next/head";

// JSON-LD structured data for SEO
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Antigravity Coding Quality Kit",
      "operatingSystem": "Windows, macOS, Linux",
      "applicationCategory": "DeveloperApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Production-grade coding quality guidelines and agent skill for Google Antigravity IDE."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Antigravity Coding Quality Kit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is an always-on instruction set and reusable agent skill designed for Google Antigravity IDE. It eliminates conversational filler, ensures surgical code diffs, restricts commentary to why-only rationale, and mandates verified test execution."
          }
        },
        {
          "@type": "Question",
          "name": "How does it stop AI hallucinations and false test passes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rule 7 strictly bans agents from stating that tests, builds, or linters passed unless they were actually executed in the terminal and their output verified."
          }
        }
      ]
    }
  ]
};

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"win" | "mac" | "gui">("win");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const snippets = {
    win: `New-Item -ItemType Directory -Path "$HOME\\.gemini\\config\\skills\\clean-code-responses" -Force
Copy-Item -Path ".\\GEMINI.md" -Destination "$HOME\\.gemini\\GEMINI.md" -Force
Copy-Item -Path ".\\skills\\clean-code-responses\\SKILL.md" -Destination "$HOME\\.gemini\\config\\skills\\clean-code-responses\\SKILL.md" -Force
Write-Host "Antigravity Coding Quality Kit installed!" -ForegroundColor Green`,
    mac: `mkdir -p ~/.gemini/config/skills/clean-code-responses
cp ./GEMINI.md ~/.gemini/GEMINI.md
cp ./skills/clean-code-responses/SKILL.md ~/.gemini/config/skills/clean-code-responses/SKILL.md
echo "Antigravity Coding Quality Kit installed!"`,
    gui: `1. Open Antigravity IDE
2. In the Agent panel: Click ... -> Customizations -> Rules -> + Global
3. Name the rule "Global Quality Rules" and paste the contents of GEMINI.md
4. Copy skills/clean-code-responses/SKILL.md into ~/.gemini/config/skills/
5. Reload Antigravity window to activate!`
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#06090F] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <Head>
        <title>Antigravity Coding Quality Kit — Zero Slop, Verified Diffs</title>
        <meta name="description" content="Eliminate AI slop, enforce surgical code diffs, and mandate real test verification in Google Antigravity IDE." />
        <link rel="canonical" href="https://angelolockdev.github.io/antigravity-coding-quality-kit/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#06090F]/90 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-lg text-white">
              Antigravity <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">Quality Kit</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/angelolockdev/antigravity-coding-quality-kit" target="_blank" rel="noreferrer"
               className="text-sm text-slate-300 hover:text-white transition-colors">GitHub</a>
            <a href="#installation" className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all">
              Install Free
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 text-center px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Google Antigravity IDE • Global Rules & Agent Skill Kit
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Surgical Code Quality.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400">
              Zero Conversational Slop.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop wrestling with verbose AI greetings, unsolicited file rewrites, and hallucinated test passes.
            Equip your Antigravity agent with a deterministic quality framework that behaves like a disciplined staff engineer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#installation" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg transition-all">
              Install in 60 Seconds
            </a>
            <a href="#comparison" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-all">
              Interactive Diff Inspector
            </a>
          </div>
        </div>
      </section>

      {/* Installation Studio */}
      <section id="installation" className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Install in 60 Seconds</h2>
          <p className="text-slate-400">Select your environment to copy the exact setup script.</p>
        </div>

        <div className="flex items-center justify-center p-1 bg-slate-900 border border-slate-800 rounded-xl mb-6 max-w-md mx-auto">
          {(["win", "mac", "gui"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === tab ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {tab === "win" ? "Windows" : tab === "mac" ? "macOS & Linux" : "Antigravity UI"}
            </button>
          ))}
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950">
            <span className="text-xs font-mono text-slate-400">Setup Script</span>
            <button
              onClick={() => copyToClipboard(snippets[activeTab])}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-all"
            >
              {copied ? "Copied!" : "Copy Script"}
            </button>
          </div>
          <pre className="p-6 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto whitespace-pre">
            {snippets[activeTab]}
          </pre>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-xs text-slate-500">
        <p>© 2026 Antigravity Coding Quality Kit. MIT Licensed. Open Source.</p>
      </footer>
    </div>
  );
}
