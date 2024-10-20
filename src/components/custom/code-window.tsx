"use client";

import { Copy } from "lucide-react";
import { Highlight } from "prism-react-renderer";
import { MouseEventHandler, ReactNode, useState } from "react";

const CodeWindow = () => {
  return (
    <div className="relative overflow-hidden w-full text-white">
      <CodeCard />
    </div>
  );
};

const CodeCard = () => {
  const [selected, setSelected] = useState<"js" | "ts">("js");

  return (
    <Card className="mx-auto max-w-3xl pt-3">
      <div className="-mx-6 mb-6 flex items-center justify-between border-b border-white/10 px-4 pb-3">
        <div className="flex items-center gap-3">
          <ToggleChip
            onClick={() => setSelected("js")}
            selected={selected === "js"}
          >
            JavaScript
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("ts")}
            selected={selected === "ts"}
          >
            TypeScript
          </ToggleChip>
        </div>
        <Copy size={20} />
      </div>
      <div className="-mx-6 overflow-x-auto px-6">
        <Markup code={selected === "js" ? javascriptCode : typescriptCode} />
      </div>
      <span className="absolute left-0 top-1/2 h-48 w-[1px] -translate-y-1/2 animate-pulse bg-gradient-to-b from-[#0096FA]/0 via-[#0096FA] to-[#0096FA]/0" />
    </Card>
  );
};

const ToggleChip = ({
  children,
  selected,
  onClick,
}: {
  children: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-[#0096FA] text-white" : "bg-[#282828] text-white/70 hover:bg-[#3c3c3c]"}`}
    >
      {children}
    </button>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#161616]/70 backdrop-blur-sm to-black/70 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

const Markup = ({ code }: { code: string }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Highlight theme={theme} code={code} language="javascript">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="inline-block w-[40px] select-none text-white">
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const theme = {
  plain: {
    color: "#e2e8f0",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#94a3b8)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "rgb(195, 232, 141)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(191, 199, 213)",
      },
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: "rgb(255, 203, 107)",
      },
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: "rgb(255, 85, 114)",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["keyword"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "rgb(221, 221, 221)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "#c792e9",
        fontStyle: "normal",
      },
    },
  ],
};

const javascriptCode = `import { initSDK } from "your-package";
    
const app = initSDK({ apiKey: "sk_abc123" });
app.doSomething();

app.on('event', () => {
  console.log("Event fired!");
  console.log("Let's gooo!");
});

`;

const typescriptCode = `import { initSDK, CoolApp } from "your-package";
    
const app: CoolApp = initSDK({ apiKey: "sk_abc123" });
app.doSomething();

app.on('event', () => {
  console.log("Event fired!");
  console.log("Let's gooo!");
});

`;

export default CodeWindow;
