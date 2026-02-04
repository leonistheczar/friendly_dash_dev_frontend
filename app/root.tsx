import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/Navbar";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freindly Dash Developer" },
    { name: "description", content: "Custom React Router-based website, focuses on Portfolio and Blogs!!" },
  ];
}
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        <Navbar />
        <main>
        {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
<main className="min-h-dvh px-6 py-10">
  <section
    id="error-page"
    className="w-full max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-xl border border-slate-700/50 p-8 flex flex-col items-center gap-6"
  >
    {/* Header */}
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-semibold text-red-400 underline decoration-2 underline-offset-4">
        {message}
      </h1>
      <p className="text-slate-300 text-sm leading-relaxed">
        {details}
      </p>
    </div>

    {/* Stack trace */}
    {stack && (
      <div className="relative">
        <span className="absolute -top-3 left-4 bg-slate-900 px-2 text-xs text-slate-400">
          Stack Trace
        </span>

        <pre className="w-full max-h-[40vh] overflow-auto rounded-lg bg-black/60 border border-slate-700 p-4">
          <code className="text-xs text-red-300 leading-relaxed whitespace-pre">
            {stack}
          </code>
        </pre>
      </div>
    )}
    <Link
  to="/"
  className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4">Go back to home</Link>
  </section>
</main>
  );
}
