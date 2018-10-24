# Ally API Docs

## What is this?
Documentation for the Ally API.

## What problems does it solve?
After discussion, these docs are necessary to solve these problems;

- Inconsistencies in API conventions/parameters/general design
- Lack of spec/visibility for QA, stake holders and team members
- Lack of ability to retrieve and mutate data programatically for clients
- Lack of a central focus when amending existing, discussing/planning new API's
- Not having appropriate documentation to show potential clients

## Contributing

```
# Get the code
git clone git@bitbucket.org:mobiusai/ally-api-docs.git
cd ally-api-docs

# Install deps, start dev server
yarn && yarn develop

# Branch, make changes and push
git checkout -b feature/add-route
(make changes)
git commit -am "add route"
git push -u origin feature/add-route
```

Then [open a PR](https://bitbucket.org/mobiusai/ally-api-docs/pull-requests/new)

## What tech does it use?
It's written in React
