// GET ALL CATEGORIES FROM DB.
export const getCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/categories`, {
            cache: "no-store",
        });

        if (!res.ok) {
            toast.error("Failed to fetching categories!");
        }

        const data = res.json();
        return data;
    } catch (error) {
        toast.error(error);
        return [];
    }
};