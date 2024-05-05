"use client"
import Link from "next/link";
import { Form,FormField,FormLabel,FormItem,FormControl,FormDescription,FormMessage } from "@medprep/ui/components";
import { Input } from "@medprep/ui/components";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@medprep/ui/components";

const formSchema = z.object({
  First_Name:z.string().min(3,{message: "First Name is required."}),
  Last_Name:z.string().min(3,{message: "Last Name is required."}),
  Password:z.string().min(1,{message: "Password is required."}).min(6,{message: "Password must be at least 6 characters."}),
  Confrim_Password:z.string().min(1,{message: "Password is confirmation is required."}),
  Email: z.string().min(1,{message: "Email is required",}).email("Invalid Email"),
  

}).refine((data)=> data.Password === data.Confrim_Password,{path: ['Confrim_Password'],message: "Password doesn't match."})


const onSubmit =(values:z.infer<typeof formSchema>) =>{
  console.log(values)
}
const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className="space-y-2">
       

       <FormField
          control={form.control}
          name="First_Name"
          render={({ field }) => (    
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder=".....First" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Last_Name"
          render={({ field }) => (    
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder=".....Last" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


      
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
                <Input placeholder="Enter your Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Confrim_Password"
          render={({ field }) => (    
            <FormItem>
              <FormLabel>Confrim Password</FormLabel>
              <FormControl>
                <Input placeholder="Re-Enter your Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div> 
      <Button className="w-full mt-6" type="submit">Sign Up</Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly
        before:m-4 before:block before:h-px before:flex-grow before:bg-stone-400
        after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you already have an account, please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/sign-in">Sign In</Link>
        </p>

    </Form>
  )
}

export default SignUpForm