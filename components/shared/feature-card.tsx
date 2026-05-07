import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <Card className="rounded-2xl border bg-background shadow-none">
      <CardContent className="p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border bg-muted">
          {icon}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">
            {title}
          </h3>

          <p className="text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}