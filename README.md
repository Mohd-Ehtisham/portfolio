## Merit Demo Marketplace

Merit marketplace is a demo application to showcase latest features of we offer to our customers. The aim of this codebase is to make sure we are building a modular and scalable application that helps to launch a new marketplace with minimal changes and avoid duplication.

A develop working on the codebase should adhere to the guidelines while contributing to the codebase.

<br/>

<hr/>

<br/>
### Technology stack

<br/>

- React

- Typescript

- UI Componenets

  - [Ant Design](https://ant.design/components/overview/)

- Code Formatting

  - [Prettier](https://prettier.io/docs/en/index.html)

- Build

  - [Vite](https://vitejs.dev/)

- HTTP

  - [Axios](https://axios-http.com/)

  - [React-Query](https://react-query-v3.tanstack.com/overview)

- State Management

  - [Preact/Signals](https://preactjs.com/guide/v10/signals/)

<br/>

<hr/>

<br/>

## Getting started

<br/>

- Clone the repository

```

git clone <repo_url>

```

- Install dependecies

```

yarn install

```

- Build and preview locally

```

yarn dev

```

- Build Production

```

yarn build

```

### Testing

[Cypress](https://www.cypress.io/)

- Unit testing

- Snapshot

- Integration

<br/>

### Localisation

[react-i18next](https://react.i18next.com/)

---

## Project

- ### Folder structue

  ```
  - src/
  --- feature/
  ----- user/
  ------- profile/
  ------- avatar/
  ----- message/
  ------- message-item/
  ------- message-list/
  ----- payment/
  ------- payment-form/
  ------- payment-wizard/
  ----- error/
  ------- error-message/
  ------- error-boundary/
  --- components/
  ----- app/
  ----- list/
  ----- input/
  ----- button/
  ----- checkbox/
  ----- radio/
  ----- dropdown/


  ```

### Naming convention

- #### Component naming
  - Components will follow pascal case notation. example `HomeList`
- #### Variable declarations
  - Constants must always be `UPPERCASE`
  - Variables must be declared using `let`
- Except for component names, everything will be kebab-case notation. example `giftcards-list`

- For more info on [naming convetion](https://www.pluralsight.com/blog/software-development/programming-naming-conventions-explained#:~:text=snake_case%20is%20a%20variable%20naming,database%20table%20and%20column%20names.) types

### Git workflow

- We will follow trunck based developemnt without feature flags.
- `master` is the base branch and all PRs should be raised against it.
- ### Issues, feature branches
  - Gitlab Issue must be created with details before contributing any code.
  - Feature branches should start with a prefix as issue number associated with the changes. For example the issue number is 123, the branch name should be 123-new-feature-branch for more info refer to gitlab [documentation](https://docs.gitlab.com/ee/user/project/issues/crosslinking_issues.html#from-commit-messages)
  - Issues must be referred in the commit messages, coupld of ways to do it, start the header with prefix `GL-#issue-number for example for issue 123, the commit should start with GL-123 or add #Ref 123 at the end of header or commit message. You can refer to the above doc for more info. Commits should have readable descriptions. I recommend everyone to go through this [link](https://www.gitkraken.com/learn/git/best-practices/git-commit-message) for best practices on writing commit messages.
- ### Merge requests
  - Merge requests target branch must be `master`
  - Work in progress merge request must have a prefix [DRAFT] to the title.
  - Add readable description to merge request description. Related issues must be referred in the description. Issues can be referred with a # for example. `this fixes the login bug, refers #123`
  - Merge requests to master requires 2 approvals.
  - Post changes are approved,
    - Pipeline must be successful
    - Test cases must be passed and the coverage improved.

### Reusability and composobility

- A component should have a single responsibility
- Components should be viewed as lego block and componsed in to a large component.
