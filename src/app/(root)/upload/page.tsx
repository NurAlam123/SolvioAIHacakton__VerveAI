import Button from "@/components/ui/Button";

export default function Upload() {
  return (
    <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-24 md:pb-16">
      <Button>Video</Button>
      <Button>Audio</Button>
    </div>
  );
}
