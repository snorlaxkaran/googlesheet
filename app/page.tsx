import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20">
      <Button>Continue</Button>
      <Button variant={"outline"}>Cancel</Button>
    </div>
  );
}
