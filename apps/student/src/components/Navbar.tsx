import React from "react";
import Link from "next/link"
import { buttonVariants } from "@medprep/ui/components";
import { Brain } from "lucide-react";

export default function Navbar(){
  return( 
  <div className="bg-blue-100 py-2 bordder-b border-s-blue-200 fixed w-full via-zinc-100 top-0">
  <div className="container flex items-center justify-between">
  <Link href="/"> <Brain /></Link>
  <Link className={buttonVariants({ variant: "secondary" })} href="/sign-in">Sign-in</Link> 
  </div>
  

  </div>
  
)
};


