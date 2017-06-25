+++
title = "Projects at Capital One"
description = "A brief history of the projects Chris Allen has worked on during his time as a software developer"
keywords = ["Chris Allen", "Christopher R. Allen", "portfolio", "projects", "software developer", "software engineer"]
slug = "capital-one"
+++

## Projects at Capital One

### AWS Migration

I was part of a team effort to start moving the Spark Online Store infrastructure from its data center to Amazon Web Services. In this effort, I wrote and maintained CloudFormation templates, Linux shell scripts, PowerShell scripts, and Python scripts. Templates and scripts were fashioned in such a way that upon rehydration the server would return to the state it was previously.

I was also responsible for moving our existing CI environment that used TeamCity over to Jenkins, and create a &quot;pipeline as code&quot; for the CI/CD process in AWS. This process also involved several adjustments to the steps of the CI process, including a rewrite of scripts in PowerShell. The change to Jenkins has increased the speed of the CI process via parallel steps and gives us far more control over how failures are handled. The CI environment runs on a pair of EC2 instances: a Linux master and a Windows slave.

### Securing Internal APIs

In order to tighten the security of internal data, the security of several service applications had to be re-evaluated. A two-tier system was devised: the internal API would have access to databases and other sensitive data, while the public API would only have access to the internal one provided that a valid user was logged in. Once logged in, a JSON Web Token was assigned to that session, which would be exchanged with the internal API in order to authenticate requests. The public service was further secured via a IP whitelist to restrict access to company resources to known IP ranges.

### Checkout Rewrite in Angular

The Spark Online Store checkout page was starting to show its age, so I set out to modernize it and make it far more responsive and easier to use. Using Angular, TypeScript, and Webpack, I pulled pieces of the previous page apart and reconstructed it as a single page application. As this page previously used ASP.NET Web Forms and the antiquated ASP.NET AJAX Extensions, much work had to be done on the server side as well to provide the necessary data and templates to the Angular frontend.

While the project was eventually put on hold due to some unforeseen challenges, it was a very good learning opportunity that made me a lot more prepared for any future frontend projects.

### Internal Tooling & Development Workflow Improvements

After AmeriCommerce acquisition, all of our development environments and tooling needed to be migrated to the new corporate hardware and network. Doing so in a way that made life easy required several pieces, including setting up scheduled tasks to run batch scripts, figuring out the nuances of the corporate web proxy, adding user impersonation to internal tooling so that existing data center assets could be accessed, and the creation of new tools to increase productivity. React and Angular were used to create some of these new tools.

### Featurization

In an effort to simplify the product offering and diversify how the product could be sold, the Spark Online Store product was divided up into features and packages. The system was retrofitted onto the existing product, allowing features that were not available to the account to be hidden. As part of this, additional admin screens were necessary to manage the features and packages. These screens were built using Angular.