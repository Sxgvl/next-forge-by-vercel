import { unstable_noStore as noStore } from "next/cache";

const Page = () => {
  noStore();
  return (
    <div
      style={{
        fontFamily: "system-ui",
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>API Service</h1>
      <p>This is the API application. Available endpoints:</p>
      <ul>
        <li>
          <a
            href="/health"
            style={{ color: "#0070f3", textDecoration: "none" }}
          >
            /health
          </a>{" "}
          - Health check endpoint
        </li>
        <li>/webhooks/* - Webhook handlers</li>
        <li>/cron/* - Scheduled job endpoints</li>
      </ul>
      <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "2rem" }}>
        Running on port 3002
      </p>
    </div>
  );
};

export default Page;
