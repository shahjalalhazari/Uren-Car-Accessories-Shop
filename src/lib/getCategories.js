import { toast } from "react-toastify";

// GET ALL CATEGORIES FROM DB.
export const getCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/categories`, {
            cache: "no-store",
        });

        if (!res.ok) {
            // TODO: REMOVE
            console.log("Failed to fetching categories!");
        }

        const data = res.json();
        return data;
    } catch (error) {
        // TODO: REMOVE
        console.log(error);
        return [];
    }
};