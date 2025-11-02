import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

export const userLogout = async () => {
  try {
    await signOut({ redirect: false });
    toast.success("✅ You have been logged out successfully!");
    
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    toast.error("❌ Failed to logout. Please try again.");
  }
};