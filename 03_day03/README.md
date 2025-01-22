# Day 3 - API Integration and Data Migration

## Objective
Integrate APIs and migrate data into Sanity CMS to build a functional marketplace backend.

## Requirements

### API Integration
1. **Understand the Provided API:**
   - **API URL:** `https://template6-six.vercel.app/api/products`
   - **Schema Reference:** [Product Schema](https://github.com/developer-hammadrehman/template6/blob/main/src/sanity/schemaTypes/product.ts)

2. **Fetch and Display Data:**
   - Create utility functions in Next.js to fetch data.
   - Render products and categories on the frontend.
   - Test API endpoints using Postman.

3. **Error Handling:**
   - Log errors centrally.
   - Display user-friendly error messages.
   - Implement fallback data or loaders for better UX.

### Data Migration
1. **Schema Validation:**
   - Align Sanity CMS schema with API data structure.
   - Adjust field mappings (e.g., `product_title` → `name`).

2. **Migration Methods:**
   - Fetch and transform data using scripts.
   - Use manual imports (JSON or CSV) if necessary.

3. **External Data Sources (Optional):**
   - Shopify, Magento, WooCommerce, or WordPress.

4. **Validation:**
   - Test imported data for accuracy.
   - Include validation checks in migration scripts.

### Expected Outputs
- Populated Sanity CMS with:
  - Data from the provided API or external sources.
- Functional API integration in Next.js displaying:
  - Product listings and categories.

### Submission Requirements
- Report documenting:
  - API integration process.
  - Schema adjustments.
  - Migration steps.
- Screenshots of:
  - API calls.
  - Data in frontend.
  - Populated Sanity CMS.
- Relevant code snippets.

## Best Practices
- Use `.env` files for sensitive data.
- Validate data types using schemas.
- Commit code frequently and maintain a changelog.
- Test thoroughly and document findings.

## Checklist
- API Understanding: ✔/✘
- Schema Validation: ✔/✘
- Data Migration: ✔/✘
- API Integration in Next.js: ✔/✘
- Submission Prepared: ✔/✘



<!-- # Hackathon Day 3: API Integration and Data Migration

## Objective:

The focus for Day 3 is integrating APIs and migrating data into **Sanity CMS** to build a functional marketplace backend. Students will learn how to utilize APIs for reference, migrate data into Sanity CMS, and ensure compatibility with their templates. This approach replicates real-world practices and prepares students to handle diverse client requirements, including integrating headless APIs or migrating existing data from popular eCommerce platforms.

---

## Key Learning Outcomes:

1. **Understand** how to integrate APIs into your Next.js project.
2. **Learn** to migrate data from APIs into Sanity CMS.
3. **Explore** how to use existing data from eCommerce platforms like Shopify, Magento, WooCommerce, WordPress, Salesforce, Custom Backend, Sanity, Mock APIs, or others.
4. **Develop** skills to handle and validate schemas, ensuring alignment with data sources.

---

## API Overview:

### Provided APIs:

Below are API references for templates 0 to 9. These APIs are read-only and meant for guidance in schema validation and data migration. Students have the freedom to:
- Use these APIs to populate their **Sanity CMS**.
- Import data manually.
- Use other APIs or existing data sources to customize their marketplace.

- **API URL**: [https://template6-six.vercel.app/api/products](https://template6-six.vercel.app/api/products)
- **Schema**: [Product Schema](https://github.com/developer-hammadrehman/template6/blob/main/src/sanity/schemaTypes/product.ts)

---

### Using External Data Sources (Optional):

Students may also integrate data from popular eCommerce platforms and custom backends using their headless APIs or data export features:

- **Shopify**: Export product data via CSV or access APIs.
- **Magento**: Use REST or GraphQL APIs for product and customer data.
- **WooCommerce**: Access REST APIs or export data manually.
- **WordPress**: Use REST APIs for content or WooCommerce-specific data.
- **Salesforce**: Use APIs for customer relationship and product data.
- **Already Developed Backend or Data Management Platform**
- **CMS (Sanity and others)**

---

## Steps for Day 3:

### 1. Understand the Provided API:

- Review the **API documentation** for your assigned template.
- Identify key endpoints such as:
  - **Product listings** (e.g., `/products`)
  - **Categories** (e.g., `/categories`)
  - **Order history** (if applicable)

### 2. Validate and Adjust Your Schema:

- Compare your existing **Sanity CMS** schema (created on Day 2) with the **API data structure**.
- Adjust field names, types, and relationships to ensure compatibility.

Example:
- **API Field**: `product_title`
- **Schema Field**: `name`

Adjust your schema to match or map fields during migration.

### 3. Data Migration Options:

To streamline your migration process, here are three methods you can use. Ensure you validate all data and document your migration steps:

#### Using the Provided API:
- Write scripts to fetch and transform data from the API.

#### Manual Import:
- Export data from the API or another source as **JSON** or **CSV**.
- Use **Sanity’s built-in import tools** to upload the data.
- This method is ideal for small datasets or when learning basic import methods.

#### Using External Platform APIs:
- Fetch data from platforms like **Shopify** or **WooCommerce**.
- Map fields to your **Sanity** schema.
- Follow a similar script-based migration process.

---

### Key Best Practices:

- **Always back up** your **Sanity project** before importing large datasets.
- **Test** the imported data for accuracy and alignment with your schema.
- **Include validation checks** in your migration scripts to handle errors gracefully.

---

### 4. API Integration in Next.js:

This step involves integrating APIs into your frontend project. Ensure robust error handling and modular coding for scalability.

#### Steps:
- **Step 1**: Create **Utility Functions**
- **Step 2**: **Render Data** in Components
- **Step 3**: **Test API Integration**
  - Use tools like **Postman** or your browser’s developer tools to test **API endpoints**.
  - Log responses to ensure data consistency and identify any issues.

#### Error Handling Tips:
- Log errors in a **centralized file** for debugging.
- Display user-friendly error messages in your UI.
- Use **fallback data** or skeleton loaders for a better user experience.

---

## Expected Output:

1. **Sanity CMS** populated with imported data from:
   - Provided API.
   - External sources.
   - Manually uploaded data.

2. Functional **API integration in Next.js** displaying:
   - Product listings.
   - Categories.
   - Other relevant data.

---

## Submission Requirements:

**Document Title**: "Day 3 - API Integration Report - [Your Marketplace Name]"

### What to Submit:
- A **report** documenting:
  - API integration process.
  - Adjustments made to schemas.
  - Migration steps and tools used.
- **Screenshots** of:
  - API calls.
  - Data successfully displayed in the frontend.
  - Populated **Sanity CMS** fields.
- **Code snippets** for API integration and migration scripts.

---

## Best Practices:

1. Use **.env files** for storing sensitive data like API keys securely.
2. Follow **clean coding practices**:
   - Use descriptive variable names.
   - Modularize functions for reusability.
   - Add comments to explain complex logic.
3. **Validate** all data during migration:
   - Use schemas to check field types and constraints.
   - Log discrepancies for further investigation.
4. **Document every step thoroughly**:
   - Include screenshots, scripts, and testing notes.
   - Maintain a changelog for any schema adjustments.
5. Use **version control**:
   - Commit changes frequently with meaningful messages.
   - Tag significant milestones in your repository.
6. **Test API integration thoroughly**:
   - Handle edge cases like empty responses or invalid data.
   - Use tools like **Postman** for endpoint validation.
7. **Peer review**:
   - Share your code and documentation with peers for feedback.
   - Incorporate suggested improvements to enhance quality.

---

## Day 3 Checklist:

### Self-Validation Checklist:

- **API Understanding**: ✔ or ✘
- **Schema Validation**: ✔ or ✘
- **Data Migration**: ✔ or ✘
- **API Integration in Next.js**: ✔ or ✘
- **Submission Preparation**: ✔ or ✘

---

## FAQs:

1. **Can we use other APIs or data sources instead of the provided API?**
   - Yes, you are free to use any API or existing data source that aligns with your marketplace’s requirements.

2. **How do we handle schema mismatches between the API and our Sanity CMS?**
   - Identify the differences in field names or data types and adjust your schema in **Sanity CMS** to match or map the data correctly.

3. **What if we don’t have prior experience with API integration?**
   - Start with simple API calls using tools like **Postman** to understand the responses. Follow the example scripts provided in this document for guidance.

4. **Can we manually add data to Sanity instead of using migration scripts?**
   - Yes, you can manually add data to **Sanity CMS** if you find it easier or if the data size is small. However, learning migration scripting will help you handle larger datasets in the future.

5. **Do we need to create new APIs for this hackathon?**
   - No, you only need to integrate and use existing APIs. However, you may customize your frontend logic to process the API responses effectively.

6. **Is API integration mandatory for all templates?**
   - Yes, API integration is required to fetch or migrate data. The method (manual or automated) is your choice.

7. **What should we submit as part of Day 3?**
   - Your submission should include:
     - A report documenting API integration and data migration steps.
     - Screenshots of data displayed on your frontend and populated in **Sanity CMS**.
     - Code snippets of your integration and migration scripts.

8. **How can we debug API errors?**
   - Use browser developer tools or tools like **Postman** to test API endpoints. Add error handling in your scripts to log specific issues and adjust requests accordingly.

9. **Can we use different data schemas for different templates?**
   - Yes, your schemas should reflect the unique requirements of your assigned template. Ensure they align with your chosen data source or API.

10. **What skills will we gain from this exercise?**
   - You will learn:
     - API integration techniques.
     - Data migration best practices.
     - Schema validation and customization.
     - Practical skills for building scalable marketplaces using headless CMS systems like **Sanity**.

---

Good luck with Day 3, and get ready for the final steps of your marketplace development journey! -->
