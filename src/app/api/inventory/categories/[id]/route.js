import { connectDB } from "@/lib/connectDB";

// UPDATE/PUT API ENDPOINT FOR CATEGORY UPDATE.
export const PUT = async (req, { params }) => {
    try {
        const { id } = params;
        const formData = await req.formData();

        const newName = formData.get("name");
        const oldImgPublicId = formData.get("OldImgPublicId");
        const newImage = formData.get("image");

        const categoriesCollection = await connectDB().collection("categories");


    } catch (error) {
        
    }
}