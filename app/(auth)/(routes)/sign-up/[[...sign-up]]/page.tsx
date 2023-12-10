import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  );
}

// import { UserButton } from "@clerk/nextjs";
 
// export default function Home() {
//   return (
//     <div>
//       <UserButton afterSignOutUrl="/"/>
//     </div>
//   )
// }