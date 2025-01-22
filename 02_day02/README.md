# Hackathon Day 2: Planning the Technical Foundation

Welcome to **Day 2** of the Marketplace Builder Hackathon 2025! On this day, we transition from business-oriented planning to the technical preparation required to build your marketplace. The goal is to create a high-level technical plan, including system architecture, workflows, and API requirements, which will serve as the blueprint for your implementation phase.

---

## Table of Contents

1. [Day 1 Recap](#day-1-recap)
2. [Day 2 Activities: Technical Planning](#day-2-activities-technical-planning)
   - [Define Technical Requirements](#define-technical-requirements)
   - [Design System Architecture](#design-system-architecture)
   - [Plan API Requirements](#plan-api-requirements)
   - [Write Technical Documentation](#write-technical-documentation)
3. [Collaborate and Refine](#collaborate-and-refine)
4. [Key Outcomes of Day 2](#key-outcomes-of-day-2)
5. [Submission Guidelines](#submission-guidelines)
6. [What's Next?](#whats-next)

---

## Day 1 Recap: Business Focus

On Day 1, we focused on business requirements before diving into technical details. Here's what we achieved:

1. **Business Goals Defined**:
   - Identified the problem your marketplace aims to solve.
   - Defined your target audience and unique value proposition (UVP).
   
2. **Data Schema Drafted**:
   - Created a preliminary data schema outlining entities like products, orders, customers, and their relationships.

3. **Single Focus**:
   - Set a solid foundation for the technical phase without distractions by concentrating on business requirements.

These achievements ensure that your marketplace aligns with real-world business needs and lays the groundwork for the technical phase.

---

## Day 2 Activities: Technical Planning

### Define Technical Requirements

Translate your business goals into clear technical requirements. For each feature identified on Day 1, outline the following:

- **Frontend Requirements**:
  - User-friendly interface for browsing products.
  - Responsive design for mobile and desktop users.
  - Essential pages: Home, Product Listing, Product Details, Cart, Checkout, and Order Confirmation.
  
- **Sanity CMS as Backend**:
  - Use **Sanity CMS** to manage product data, customer details, and order records. Sanity will act as your backend database.
  - Focus on designing schemas in Sanity to align with business goals.

- **Third-Party APIs**:
  - Integrate APIs for shipment tracking, payment gateways, and other backend services.
  - Ensure these APIs provide necessary data for frontend functionality.

---

### Design System Architecture

Create a high-level diagram to visualize how your system components interact. Use tools like **Lucidchart**, **Figma**, or **Excalidraw**. A typical architecture might include the following:


#### Key Workflows to Include:

1. **User Registration**:
   - User signs up → Data stored in **Sanity** → Confirmation sent to the user.
   
2. **Product Browsing**:
   - User views product categories → **Sanity API** fetches data → Products displayed on frontend.
   
3. **Order Placement**:
   - User adds items to the cart → Proceeds to checkout → Order details saved in **Sanity**.
   
4. **Shipment Tracking**:
   - Order status updates fetched via **Third-Party API** → Displayed to the user.

---

### Plan API Requirements

Based on your data schema, define the necessary API endpoints. Example API endpoints for a **General E-Commerce Marketplace**:

- **Endpoint**: `/products`
  - **Method**: `GET`
  - **Description**: Fetch all available products from **Sanity**.
  - **Response Example**:
    ```json
    {
      "id": 1,
      "name": "Product A",
      "price": 100
    }
    ```

- **Endpoint**: `/orders`
  - **Method**: `POST`
  - **Description**: Create a new order in **Sanity**.
  - **Payload**: Customer info, product details, payment status.
  - **Response Example**:
    ```json
    {
      "orderId": 123,
      "status": "Success"
    }
    ```

- **Endpoint**: `/shipment`
  - **Method**: `GET`
  - **Description**: Track order status via third-party API.
  - **Response Example**:
    ```json
    {
      "shipmentId": 456,
      "orderId": 123,
      "status": "In Transit",
      "expectedDeliveryDate": "2025-01-30"
    }
    ```

---

### Write Technical Documentation

Document your system architecture, workflows, and API requirements in a structured format. Your documentation should include:

1. **System Architecture Overview**:
   - Include a clear diagram showing how the frontend interacts with **Sanity CMS** and third-party APIs.
   - Briefly describe the role of each component.

2. **Key Workflows**:
   - Detail user workflows like "User adds products to cart," specifying the interactions between components.

3. **Category-Specific Instructions**:
   - **Q-Commerce**: Focus on real-time inventory updates, delivery SLA tracking, and express delivery workflows.
   - **Rental eCommerce**: Include workflows for rental duration, condition reports, and return management.
   - **General eCommerce**: Cover workflows like product browsing, cart management, and order placement.

4. **API Endpoints**:
   - Provide a table format for all endpoints, methods, and expected responses.

5. **Sanity Schema Example**:
   Example schema for **Product**:
   ```js
   export default {
     name: 'product',
     type: 'document',
     fields: [
       { name: 'name', type: 'string', title: 'Product Name' },
       { name: 'price', type: 'number', title: 'Price' },
       { name: 'stock', type: 'number', title: 'Stock Level' }
     ]
   };




<!-- # Hackathon Day 2: Planning the Technical Foundation

Welcome to **Day 2** of the Marketplace Builder Hackathon 2025! On this day, we transition from business-oriented planning to the technical preparation required to build your marketplace. The goal is to create a high-level technical plan, including system architecture, workflows, and API requirements, which will serve as the blueprint for your implementation phase.

---

## Table of Contents

1. [Day 1 Recap](#day-1-recap)
2. [Day 2 Activities: Technical Planning](#day-2-activities-technical-planning)
   - [Define Technical Requirements](#define-technical-requirements)
   - [Design System Architecture](#design-system-architecture)
   - [Plan API Requirements](#plan-api-requirements)
   - [Write Technical Documentation](#write-technical-documentation)
3. [Collaborate and Refine](#collaborate-and-refine)
4. [Key Outcomes of Day 2](#key-outcomes-of-day-2)
5. [Submission Guidelines](#submission-guidelines)
6. [What's Next?](#whats-next)

---

## Day 1 Recap: Business Focus

On Day 1, we focused on business requirements before diving into technical details. Here's what we achieved:

1. **Business Goals Defined**:
   - Identified the problem your marketplace aims to solve.
   - Defined your target audience and unique value proposition (UVP).
   
2. **Data Schema Drafted**:
   - Created a preliminary data schema outlining entities like products, orders, customers, and their relationships.

3. **Single Focus**:
   - Set a solid foundation for the technical phase without distractions by concentrating on business requirements.

These achievements ensure that your marketplace aligns with real-world business needs and lays the groundwork for the technical phase.

---

## Day 2 Activities: Technical Planning

### Define Technical Requirements

Translate your business goals into clear technical requirements. For each feature identified on Day 1, outline the following:

- **Frontend Requirements**:
  - User-friendly interface for browsing products.
  - Responsive design for mobile and desktop users.
  - Essential pages: Home, Product Listing, Product Details, Cart, Checkout, and Order Confirmation.
  
- **Sanity CMS as Backend**:
  - Use **Sanity CMS** to manage product data, customer details, and order records. Sanity will act as your backend database.
  - Focus on designing schemas in Sanity to align with business goals.

- **Third-Party APIs**:
  - Integrate APIs for shipment tracking, payment gateways, and other backend services.
  - Ensure these APIs provide necessary data for frontend functionality.

---

### Design System Architecture

Create a high-level diagram to visualize how your system components interact. Use tools like **Lucidchart**, **Figma**, or **Excalidraw**. A typical architecture might include the following:


#### Key Workflows to Include:

1. **User Registration**:
   - User signs up → Data stored in **Sanity** → Confirmation sent to the user.
   
2. **Product Browsing**:
   - User views product categories → **Sanity API** fetches data → Products displayed on frontend.
   
3. **Order Placement**:
   - User adds items to the cart → Proceeds to checkout → Order details saved in **Sanity**.
   
4. **Shipment Tracking**:
   - Order status updates fetched via **Third-Party API** → Displayed to the user.

---

### Plan API Requirements

Based on your data schema, define the necessary API endpoints. Example API endpoints for a **General E-Commerce Marketplace**:

- **Endpoint**: `/products`
  - **Method**: `GET`
  - **Description**: Fetch all available products from **Sanity**.
  - **Response Example**:
    ```json
    {
      "id": 1,
      "name": "Product A",
      "price": 100
    }
    ```

- **Endpoint**: `/orders`
  - **Method**: `POST`
  - **Description**: Create a new order in **Sanity**.
  - **Payload**: Customer info, product details, payment status.
  - **Response Example**:
    ```json
    {
      "orderId": 123,
      "status": "Success"
    }
    ```

- **Endpoint**: `/shipment`
  - **Method**: `GET`
  - **Description**: Track order status via third-party API.
  - **Response Example**:
    ```json
    {
      "shipmentId": 456,
      "orderId": 123,
      "status": "In Transit",
      "expectedDeliveryDate": "2025-01-30"
    }
    ```

---

### Write Technical Documentation

Document your system architecture, workflows, and API requirements in a structured format. Your documentation should include:

1. **System Architecture Overview**:
   - Include a clear diagram showing how the frontend interacts with **Sanity CMS** and third-party APIs.
   - Briefly describe the role of each component.

2. **Key Workflows**:
   - Detail user workflows like "User adds products to cart," specifying the interactions between components.

3. **Category-Specific Instructions**:
   - **Q-Commerce**: Focus on real-time inventory updates, delivery SLA tracking, and express delivery workflows.
   - **Rental eCommerce**: Include workflows for rental duration, condition reports, and return management.
   - **General eCommerce**: Cover workflows like product browsing, cart management, and order placement.

4. **API Endpoints**:
   - Provide a table format for all endpoints, methods, and expected responses.

5. **Sanity Schema Example**:
   Example schema for **Product**:
   ```js
   export default {
     name: 'product',
     type: 'document',
     fields: [
       { name: 'name', type: 'string', title: 'Product Name' },
       { name: 'price', type: 'number', title: 'Price' },
       { name: 'stock', type: 'number', title: 'Stock Level' }
     ]
   }; -->
