import { Button } from "@/components/ui/button";

interface Props {
  onAdd: () => void;
}

export function SpendFormActions({
  onAdd,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        type="button"
        onClick={onAdd}
      >
        Add Tool
      </Button>

      <Button
        type="submit"
        variant="outline"
      >
        Generate Audit
      </Button>
    </div>
  );
}