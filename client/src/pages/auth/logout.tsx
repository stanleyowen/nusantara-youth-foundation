import { useEffect } from "react";
import { useRouter } from "next/router";
import { signOutHandler } from "@/firebase/signOut";

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      await signOutHandler().then((res) => {
        if (res.error) console.log(res.error);
        else router.push("/");
      });
    };

    handleSignOut();
  }, [router]);
}
