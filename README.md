# REVIEW WIDGET

[DEMO LINK](https://widget-google-review.netlify.app/)

## Features

- <img width=20 height=20 src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png">&nbsp;&nbsp;&nbsp;Vue 3, Composition API  
- <img width=20 height=20 src="https://pinia.vuejs.org/logo.svg">&nbsp;&nbsp;&nbsp;Pinia  
- <img width=20 height=20 src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png">&nbsp;&nbsp;&nbsp;TypeScript  
- Vue I18n  

## A responsive widget for displaying a company's rating.

### Mobile View  
---  
<img src="https://img001.prntscr.com/file/img001/xQThWJ8YRuK7Tbaa6F7ZBQ.png">  

### Desktop View  
---  
<img src="https://img001.prntscr.com/file/img001/gns2D3IsQ66LT9M5kzgajQ.png">  

- The **"View" button** opens a new tab with the company's real reviews.  
- The **"Write" button** opens a modal window.

<img src="https://img001.prntscr.com/file/img001/MmpfpRObTe2pWd8jAqm4xg.png">

- The **"Publish" button** sends a request to update the rating and the number of reviews. Note: the entered text is not saved.  

---

# API

The MockAPI service is used for data retrieval and updates.  
**Endpoint:**  
`https://6793d56b5eae7e5c4d900b67.mockapi.io/api/review/google`

---

# Multilingual Support

The widget supports switching between languages: **UA**/**EN**.

---

## How to Start the Application

1. Install dependencies:  

   ```bash
   npm install
   ```

2. Start the development server:  

   ```bash
   npm run dev
   ```

