import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20">
      <Link href={"/documents/124"} className={cn(buttonVariants())}>
        Continue to dashboard
      </Link>
      <Button variant={"outline"}>Cancel</Button>
    </div>
  );
}
