+++
title = "Portfolio"
description = "A summary of projects I've worked on"
slug = "portfolio"
+++

## Portfolio

### Online Store REST API

Before 2013, if merchants or third parties wanted a deeper level of integration with Spark Online Stores (previously AmeriCommerce), they had to use the platform's SOAP API. There were a number of problems with the SOAP API: it was slow, clunky, and hard to use outside of the .NET ecosystem.

I was responsible for designing and developing a new, modern API from the ground up. It supports many of the features common to modern RESTful APIs: security scopes, field selection, on-demand collections, paged results, and OAuth authentication. In addition, to give our partners and merchants flexibility, I built out a robust query syntax framework. This allows any field returned over the API to also be used for filtering based on some criteria; i.e. `/api/v1/products?price=gt:30` returns all products with price greater than $30.

The API has seen some additional enhancements over time. A third-party wanting to integrate with many merchants can sign up as an integration partner and publish their application to a central repository, which allows that application to be installed on any Online Store account. Webhook subscriptions are available that allow the client application to specify a URL that will receive a request when a designated event is triggered.

The API was built using ASP.NET Web API, C#, and Microsoft SQL Server.

Further reading:

- <a href="https://github.com/sparkpay/rest-api" target="_blank">Spark Online Stores REST API Documentation</a>
