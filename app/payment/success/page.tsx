"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 text-center">
      <h1 className="font-bold text-4xl">Payment Successful</h1>
      <div className="w-[300px] h-[2px] bg-green-300"></div>
      <p className="text-xl font-semibold">
        Thank you for your purchase. Your payment has been processed succesfully.
      </p>
      <Button>
        <Link href="/pricing">Return to Pricing</Link>
      </Button>
    </div>
  );
};

export default SuccessPage;
