import { connectDB } from "@/lib/connectDB";


export const POST = async (req) => {
    try {
        // GET SUBMITTED DATA.
        const { name, image, publicId } = await req.json();

        // CHECK FOR EMPTY DATA.
        if (!name || !image || !publicId) {
            return Response.json({ success: false, message: "Missing Fields" }, { status: 400 });
        }

        // CONNECT TO DB AND CREATE/FIND COLLECTION.
        const db = await connectDB();
        const categoryCollection = db.collection("Categories");

        // CHECK IF EXISTS.
        const categoryExists = await categoryCollection.findOne({name});
        if (categoryExists) {
            return Response.json({ success: false, message: "Category already exists!" }, { status: 400 });
        }

        // INSERT NEW DATA.
        await categoryCollection.insertOne({
            name, image, publicId, createdAt: new Date(),
        });

        // RESPONSE SUCCESS MESSAGE.
        return Response.json({ success: true, message: "Category Created Successfully!" }, { status: 201 });
    } catch (error) {
        // RESPONSE MESSAGE FOR SERVER ERROR.
        return Response.json({ success: false, message: "Server Error!" }, { status: 500 });
    };
};