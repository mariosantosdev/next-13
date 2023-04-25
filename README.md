This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using the version [13.3](https://nextjs.org/blog/next-13-3). This project was created just to study new functions of the NextJS, as [App Directory](https://nextjs.org/blog/next-13#new-app-directory-beta), [React Server Components](https://nextjs.org/blog/next-13#server-components), [Layouts](https://nextjs.org/blog/next-13#layouts), etc.
For this studies I followed this [video](https://www.youtube.com/watch?v=0zl72thBKzo&ab_channel=Rocketseat)

## Anotations
- To create new pages to the application now all files inside the folder app that contains "page" will be transformed in pages
- The layouts allow we create wrappers to pages inside in determinate scope (folder). If we don't wanna that folder affect our route, we could create the folder with brackets like: `(auth)` and the routes will be `/login` instead `/auth/login`