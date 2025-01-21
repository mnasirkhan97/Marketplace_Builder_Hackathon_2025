**Marketplace E-Commerce Project Documentation**

---

## **Introduction**

This project is a fully dynamic, responsive marketplace e-commerce application built with Next.js 14, leveraging the App Router, Tailwind CSS for styling, and Sanity as the headless CMS. It fetches product data from the provided API endpoint and allows for seamless management and rendering of products.

---

## **Project Requirements**

### **Tech Stack**:

1. **Frontend**: Next.js 14 with App Router.
2. **Styling**: Tailwind CSS for responsiveness.
3. **CMS**: Sanity for headless CMS functionality.
4. **API Endpoint**: `https://template6-six.vercel.app/api/products`
5. **Sanity Schema**: `product.js` (see below).

```javascript
import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    },
    {
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    },
  ],
});
```

---

## **Step-by-Step Guide**

### **1. Environment Setup**

1. **Initialize Next.js Project**:

   - Run the following command:
     ```bash
     npx create-next-app@latest marketplace --ts
     ```
   - Choose the `App Router` option during setup.

2. **Install Tailwind CSS**:

   - Follow the official Tailwind CSS setup for Next.js:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     ```
   - Configure the `tailwind.config.js` file as per project requirements.

3. **Set Up Sanity CMS**:
   - Install Sanity CLI:
     ```bash
     npm install -g @sanity/cli
     ```
   - Initialize a new Sanity project:
     ```bash
     sanity init --project marketplace
     ```
   - Add the `product.js` schema to the `schemas` folder.
   - Deploy the studio:
     ```bash
     sanity deploy
     ```

---

### **2. Build Frontend Pages**

#### **Homepage**:

- Create a dynamic, visually appealing homepage.
- Fetch featured products from the API.

#### **Product List Page**:

- Display all products dynamically.
- Add filters, sorting, and search functionality.

#### **Product Detail Page**:

- Display detailed information for each product.
- Include image, description, price, and discount.

#### **Other Pages**:

- **About**: Company information.
- **Contact**: Contact form.
- **Team**: Information about the team.
- **Pricing**: Product pricing and discount details.

---

### **3. Responsive Design**

- Utilize Tailwind CSS utilities to create mobile-first designs.
- Test on various screen sizes for full responsiveness.

---

### **4. API Integration**

- Fetch product data dynamically from:
  ```
  https://template6-six.vercel.app/api/products
  ```
- Use `getServerSideProps` or `getStaticProps` for data fetching.

---

### **5. Deployment**

- Deploy the application on platforms like Vercel or Netlify.
- Ensure the Sanity Studio is accessible via its deployed URL.

---

## **Conclusion**

This project provides a robust foundation for building a fully dynamic e-commerce platform. It leverages modern frameworks and tools to ensure scalability, responsiveness, and ease of management.

---

**Note**: For detailed screenshots and code snippets, refer to the sections within the project repository.
