import {
  BadgeDollarSign,
  Bot,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Detect duplicate tools",
    description:
      "Identify overlapping AI subscriptions across teams and departments.",
    icon: Layers3,
  },
  {
    title: "Track monthly AI spend",
    description:
      "Monitor recurring subscription costs and spending trends over time.",
    icon: BadgeDollarSign,
  },
  {
    title: "AI-generated summaries",
    description:
      "Generate executive-ready recommendations powered by Anthropic.",
    icon: Bot,
  },
  {
    title: "Privacy-first architecture",
    description:
      "Built with Supabase and secure server-side processing patterns.",
    icon: ShieldCheck,
  },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight">
          Built for startup finance visibility
        </h2>

        <p className="mt-4 text-muted-foreground">
          A lightweight audit workflow for teams trying to control rapidly
          growing AI software costs.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-medium">{feature.title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}