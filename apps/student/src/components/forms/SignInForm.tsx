"use client"
import Link from "next/link";
import { Form,FormField,FormLabel,FormItem,FormControl,FormDescription,FormMessage } from "@medprep/ui/components";
import { Input } from "@medprep/ui/components";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@medprep/ui/components";

const formSchema = z.object({
 Email: z.string().min(1,{message: "Email is required",}).email("Invalid Email"),
 Password:z.string().min(1,{message: "Password is required."}).min(6,{message: "Password must be at least 6 characters."}),

})


const onSubmit =(values:z.infer<typeof formSchema>) =>{
  console.log(values)
}
const SignInForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className="space-y-2">
       
      <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (    
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (    
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div> 
      <Button className="w-full mt-6" type="submit">Sign in</Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly
        before:m-4 before:block before:h-px before:flex-grow before:bg-stone-400
        after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you don&apos;t have an account, please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/sign-up">Sign Up</Link>
        </p>

    </Form>
  )
}

export default SignInForm