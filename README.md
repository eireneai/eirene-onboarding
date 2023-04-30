# Eirene Onboarding Project

## Getting Started

Run `npm install` to install node dependencies.

Run `npm run test` to run unit tests.

Run `npm run build` to transpile typescript.

Run `npm run start` to execute transpiled typescript.

## Goals

This project is designed to introduce the following:

1) advanced typescript usage
2) functional programming tactics such as immutability and purity
3) reducers and projections (aka materialized views)
4) event driven architecture

## Overview

This is a distributed todo app - three seperate services come together to create a mock version of a system that might be 
deployed to the cloud. No extenal libraries are used so everything will be implemented using vanilla typescript. 

These services are the three services implemented in the `src/apps` folder:

1) Web UI: Allow users to view a list of all todos in the browser; periodically (re)renders a webpage based on all todos saved in the system
2) Web API: Allow users to add, update and remove todos by sending requests to an API 
3) Newsletter: Increases engagement by periodically sending an email that lists the titles of recently added todos 

These three services will communicate asynchronously via an event bus. The web API will publish events to the bus and the other two services must update their own states in response.

To complete this project, you will fill in several gaps in the implementation of this system. Anywhere you see a statement to throw `NotImplemented` exceptions, you must provide an implementation. Typescript type definitions, comments with notes and links, and tests are provided for every function you need to implement.

The longest block of code you will need to write should be around 20 lines, but many functions will only require you to write a few lines, if not a single line. Focus on understanding the concepts introduced, and the implementation will become self-evident. Pay particular attention to the provided type definitions and be sure to carefully read the links in the code comments.

Here are the recommended steps for completing the project:

1) Run unit tests with `npm run test` - run these frequently to measure your progress
2) Learn about immutablity and pure functions by implementing utility functions for structures in `src/data/struct.ts`
3) Implement the Observable data structure that will serve as an event bus in `src/data/observable.ts`
4) Learn about events and partial function application by implementing EventCreator in `src/core/event.ts`
5) Learn about closures, reducers and projections by implementing Projection in `src/core/projection.ts`
6) Learn about entities by implementing a Todo constructor in `src/todos/entities.ts`
6) Solidify your understanding of reducers and projections by implementing the two projections described in `src/todos/projections.ts`
7) When all tests pass, run the complete application with `npm run build && npm run start` and observe asynchronous interservice communication! 



Project bootstrapped using [NodeJS Starter ToolKit](https://github.com/vitorsalgado/create-nodejs-ts).  
Visit the repository for more details.
