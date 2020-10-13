<h1 >
  Chasing a Rainbow - Readme
</h1>

Based on Gatsby starter kit, this version has been customized and includes

1. Pagination for articles
2. Categories (and Tags)
3. Related articles 
4. Typography with funston theme
5. Google Analytics
6. 

Many thanks to the following -

Introduction to Gatsby
https://www.youtube.com/watch?v=8t0vNu2fCCM

Convert Markdown to MDX
https://www.gatsbyjs.org/blog/2019-11-21-how-to-convert-an-existing-gatsby-blog-to-use-mdx/

Add Pagination
https://www.digitalocean.com/community/tutorials/gatsbyjs-pagination-in-gatsby

Extract tags and categories
https://mattwelson.com/2020-01-11-tag-page/

images 
https://pixabay.com
https://unsplash.com


Advanced Blog System by Danilo Woznica

Markdown Guide
https://www.markdownguide.org/basic-syntax/



### How did I build it

1. Create a new site from a starter:
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello

2. Update gatby-config.js with siteMetadata

3. Install Typography and theme
npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates

4. React Helmet is a component which lets you control your document head using their React component
npm install --save gatsby-plugin-react-helmet react-helmet

5. A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem
npm install --save gatsby-source-filesystem

6. MDX seeks to make writing with Markdown and JSX simpler while being more expressive
npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react

7. Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images
npm install --save gatsby-transformer-sharp gatsby-plugin-sharp

8. Exposes several image processing functions built on the Sharp image processing library.
npm install --save gatsby-plugin-sharp

9. https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=gatsby%20plugin%20mani 
npm install --save gatsby-plugin-manifest

10. ?
npm i --save lodash.kebabcase

11. React component specially designed to work seamlessly with Gatsby’s GraphQL queries
npm install --save gatsby-image

12. Reaact-hook-form
npm install react-hook-form

13. react-discuss
introduced discussion form
https://janosh.dev/blog/disqus-comments


13. Build a contact form
https://seifi.org/aws/build-a-contact-form-in-gatsby-part-1-aws-lambda-simple-email-service-and-api-gateway.html
https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/


14. Added google analytic
https://www.gatsbyjs.org/docs/adding-analytics/

15. https://dennytek.com/blog/personal-site-with-gatsby-part-7

16. npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components

https://scottspence.com/2020/02/06/globally-style-gatsby-styled-components/


### Customize this blog

1. Fonts are based on Typography. Install new font from 
https://kyleamathews.github.io/typography.js/
Make corresponding changes to typography.js under styles folder

2. In Components Footer.js, change the footer display text

3. Change name of blog, version, instaagram etc in gatsby-config.js


### How do I use the status field in the .md files

using status field in the md as below
status = draft, published, featured, readerspick


