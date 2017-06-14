+++
title = "Portfolio"
description = "A brief history of the projects Chris Allen has worked on during his time as a software developer"
keywords = ["Chris Allen", "Christopher R. Allen", "portfolio", "software developer", "software engineer"]
slug = "portfolio"
+++

## Portfolio

### Capital One

#### AWS Migration

I was part of a team effort to start moving the Spark Online Store infrastructure from its data center to Amazon Web Services. In this effort, I wrote and maintained CloudFormation templates, Linux shell scripts, PowerShell scripts, and Python scripts. Templates and scripts were fashioned in such a way that upon rehydration the server would return to the state it was previously.

I was also responsible for moving our existing CI environment that used TeamCity over to Jenkins, and create a &quot;pipeline as code&quot; for the CI/CD process in AWS. This process also involved several adjustments to the steps of the CI process, including a rewrite of scripts in PowerShell. The change to Jenkins has increased the speed of the CI process via parallel steps and gives us far more control over how failures are handled. The CI environment runs on a pair of EC2 instances: a Linux master and a Windows slave.

#### Securing Internal APIs

In order to tighten the security of internal data, the security of several service applications had to be re-evaluated. A two-tier system was devised: the internal API would have access to databases and other sensitive data, while the public API would only have access to the internal one provided that a valid user was logged in. Once logged in, a JSON Web Token was assigned to that session, which would be exchanged with the internal API in order to authenticate requests. The public service was further secured via a IP whitelist to restrict access to company resources to known IP ranges.

#### Checkout Rewrite in Angular

The Spark Online Store checkout page was starting to show its age, so I set out to modernize it and make it far more responsive and easier to use. Using Angular, TypeScript, and Webpack, I pulled pieces of the previous page apart and reconstructed it as a single page application. As this page previously used ASP.NET Web Forms and the antiquated ASP.NET AJAX Extensions, much work had to be done on the server side as well to provide the necessary data and templates to the Angular frontend.

While the project was eventually put on hold due to some unforeseen challenges, it was a very good learning opportunity that made me a lot more prepared for any future frontend projects.

#### Internal Tooling & Development Workflow Improvements

After AmeriCommerce acquisition, all of our development environments and tooling needed to be migrated to the new corporate hardware and network. Doing so in a way that made life easy required several pieces, including setting up scheduled tasks to run batch scripts, figuring out the nuances of the corporate web proxy, adding user impersonation to internal tooling so that existing data center assets could be accessed, and the creation of new tools to increase productivity. React and Angular were used to create some of these new tools.

#### Featurization

In an effort to simplify the product offering and diversify how the product could be sold, the Spark Online Store product was divided up into features and packages. The system was retrofitted onto the existing product, allowing features that were not available to the account to be hidden. As part of this, additional admin screens were necessary to manage the features and packages. These screens were built using Angular.

### AmeriCommerce

#### REST API

Before 2013, if merchants or third parties wanted a deeper level of integration with Spark Online Store, they had to use the platform's SOAP API. There were a number of problems with the SOAP API: it was slow, clunky, and hard to use outside of the .NET ecosystem.

I was responsible for designing and developing a new, modern API from the ground up. It supports many of the features common to modern RESTful APIs: security scopes, field selection, on-demand collections, paged results, and OAuth authentication. In addition, to give our partners and merchants flexibility, I built out a robust query syntax framework. This allows any field returned over the API to also be used for filtering based on some criteria; i.e. `/api/v1/products?price=gt:30` returns all products with price greater than $30.

The API has seen some additional enhancements over time. A third-party wanting to integrate with many merchants can sign up as an integration partner and publish their application to a central repository, which allows that application to be installed on any Online Store account. Webhook subscriptions are available that allow the client application to specify a URL that will receive a request when a designated event is triggered.

The API was built using ASP.NET Web API, C#, and Microsoft SQL Server.

Further reading:

- <a href="https://github.com/sparkpay/rest-api" target="_blank">Spark Online Stores REST API Documentation</a>

#### Client API and JavaScript SDK

In order to empower merchants with more flexibility in designing their user experiences, I set out to build a simple API and accompanying JavaScript SDK to perform some of the routine functions of the storefront: cart functions and product searching. This project brought a new level of interactivity to the storefronts that took advantage of it. The JavaScript carting functionality also extended the existing remote carting system, allowing sites not hosted on the AmeriCommerce platform to interact with a storefront's cart.

The server side components of the API were built on ASP.NET, C#, and Microsoft SQL Server.

Further reading:

- <a href="https://github.com/SparkPay/js-api-samples" target="_blank">Client API Examples</a>

#### Remote Carting

The remote carting system allowed sites or static pages not hosted on the AmeriCommerce platform to interact with the shopping cart on a storefront. Not only did I greatly expand upon the functionality of this existing system, but I also heavily refactored it from a single, complicated ASPX page into a set of handlers that could be tested in isolation and had a clearly identifiable purpose.

#### Third-Party Integrations

I had the opportunity to work on several third-party integrations during my time with AmeriCommerce:

- <a href="https://apps.facebook.com/americommerce" target="_blank">Facebook Social Store</a> - allows a storefront to be embedded on a Facebook page
- <a href="https://support.sparkpay.com/hc/en-us/articles/202610394-Login-With-Facebook" target="_blank">Facebook Social Login</a> - allows the customers of a storefront to log in with their Facebook account
- PayPal Express Checkout - originally an alternative for the &quot;click a button to go to PayPal&quot; flow, this is now commonplace on sites that accept PayPal payments
- Google Checkout (discontinued) - Google's attempt at a PayPal competitor
- Google Trusted Stores (discontinued) - an ecommerce certification introduced by Google to indicate that the merchant was a fast and reliable shipper with good quality and service

#### Admin Console Refresh (2011)

A large and complicated project and very much a team effort. My role started early on in the project, building out prototypes from designs given to me and laying much of the infrastructure that would later be built on top of. Some of the notable pieces I built as part of this project are listed below:

- The overlay system, a key component of the entire admin console that allows &quot;detail&quot; screens to be displayed over their parent page, allowing the parent page to be easily returned to
- The store picker, a piece of the admin console that allowed merchants with multiple stores to switch between them on editor screens
- A streamlined way to report notifications (success, warning, error, etc) to users
- A customizable admin dashboard, with widgets that could be customized or dragged to reposition
- A tracker for background processes that displayed a progress bar and updated at regular intervals
- An asset pipeline that allowed us to declare how JavaScript and CSS should be combined and optimized for the admin console

In addition to the usual ASP.NET, C#, and Microsoft SQL Server stack, JavaScript, JQuery, and Backbone played important roles in providing the user experience we sought with this redesign. For the asset pipeline, Ruby was used during the CI process to combine and minify the assets.

#### Live Design

It all started from a rough prototype. I had seen other hosting platforms that allowed live editing and designing of pages, and felt the itch to try to build something like it on the AmeriCommerce platform. Before I knew it, I was buried in my first heavily JavaScript project.

This project was a blast to work on and really opened my eyes to what could be done with JavaScript. Merchants could activate Live Design if they were logged in to their admin console, navigate to the frontend of their site, and start editing. It allowed them to change element sizing, move widgets around, manipulate CSS, and even directly open editors for some forms of site content.

This project was done with JavaScript and JQuery, with ASP.NET and C# on the server side.

#### Themes v2 Admin Experience

When we set out to provide a new theme experience for our merchants, we knew it would need a more robust user experience in the admin console as well. I built out the majority of the v2 theme admin experience, including draggable widgets as well as embedded HTML and CSS editors.

#### Scheduled Exports

The scheduled export system allowed merchants to set up a job that would automatically export data on a recurring interval, and optionally upload it to a destination FTP server. My work not only involved implementing this system, but refactoring the existing export code and making it more modular and centralized so it could easily be used by the scheduling system. This work was done with ASP.NET, C#, and Microsoft SQL Server.

#### Rule Engine

Analytical data about incoming traffic was being set by a few hardcoded conditions in early request processing, and that was pretty much the extent of it. My task for this project was to build a customizable rule engine that could evaluate incoming web traffic based on a set of conditions and then take one or more actions based on the result. This system was later adapted to work on more types of data, including customers and orders, and respond to a wider variety of events.

#### Automated Testing & Continuous Integration

The build and deploy process for code was manual, and I knew we could do better. I introduced a unit test library for our project and wrote some of the first tests that would actually get run on every build. I also set up JetBrains TeamCity as our CI server and wrote our first CI scripts in Ruby using Rake. This enabled us to do automatic code builds when code was committed, and the deployment artifacts were placed on a staging server. While the actual deploy to production was still a manual process, this cut the time those deploys took drastically, and we knew almost immediately when an error occured instead of waiting for someone to run the build.

#### Custom Fields

I was responsible for building out a system that merchants could use to customize their data. This system originally allowed for additional fields to be added to customer, order, and product data. These fields would appear in all of the relevant editors across the admin console, and in imports and exports. Built using ASP.NET, C#, and Microsoft SQL Server.