export const navItems = [
    {
        title: "HOME",
        path: "/",
        exact: true,
    },
    {
        title: "PRODUCTS",
        path: "/shop/products",
        matchPatterns: [
            "/shop/products", "/shop/products/"
        ]
    },
    {
        title: "ABOUT US",
        path: "/about-us",
        exact: true,
    },
    {
        title: "SERVICES",
        path: "/services",
        matchPatterns: [
            "/services", "/services/"
        ]
    },
    {
        title: "BLOGS",
        path: "/blogs",
        matchPatterns: [
            "/blogs", "/blogs/"
        ]
    },
    {
        title: "CONTACT US",
        path: "/contact-us",
        exact: true,
    },
]

// ALL PARENT-CHILD RELATIONSHIPS.
export const parentChildRelationships = {
    "/shop/products": ["/shop/products", "/shop/products/"],
    "/services": ["/services", "/services/"],
    "/blog": ["/blogs", "/blogs/"],
}