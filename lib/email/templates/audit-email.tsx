interface Props {
  shareUrl: string;

  monthlySavings: number;
}

export function AuditEmailTemplate({
  shareUrl,
  monthlySavings,
}: Props) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        maxWidth: "600px",
      }}
    >
      <h1>
        Your AI Spend Audit Report
      </h1>

      <p>
        We identified approximately{" "}
        <strong>
          ${monthlySavings}/month
        </strong>{" "}
        in potential optimization
        opportunities.
      </p>

      <p>
        You can view your saved audit
        report below:
      </p>

      <a
        href={shareUrl}
        style={{
          display: "inline-block",
          marginTop: "16px",
        }}
      >
        View Audit Report
      </a>
    </div>
  );
}