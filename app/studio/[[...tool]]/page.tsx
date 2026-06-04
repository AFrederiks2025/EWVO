import { isSanityConfigured } from "@/sanity/env";
import { Studio } from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Sanity Studio
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Nog niet gekoppeld
        </h1>
        <p className="mt-4 text-muted-foreground">
          Er is nog geen Sanity-project gekoppeld. Maak een gratis project aan op{" "}
          <a
            href="https://sanity.io"
            className="text-brand hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            sanity.io
          </a>{" "}
          en zet de volgende variabelen in <code>.env.local</code>:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-sm">
          {`NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production`}
        </pre>
        <p className="mt-4 text-sm text-muted-foreground">
          Zie <code>README.md</code> voor de volledige stappen. Tot die tijd
          draait de site op de lokale voorbeeldcontent.
        </p>
      </div>
    );
  }

  return <Studio />;
}
