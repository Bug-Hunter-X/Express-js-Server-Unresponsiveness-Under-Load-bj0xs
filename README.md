# Express.js Server Unresponsiveness Under Load

This repository demonstrates a common issue in Express.js applications where the server becomes unresponsive after handling a large or computationally intensive request.  The problem is exacerbated when requests are not properly handled asynchronously.

## Bug Report

The provided `bug.js` file contains an Express.js server.  Under normal conditions, it should respond with 'Hello World!' to GET requests on the root path. However, if the request processing involves a significant amount of work (not simulated here for brevity), the server might hang and stop responding to further requests.

## Solution

The `bugSolution.js` file demonstrates how to mitigate this issue using asynchronous operations and appropriate error handling.  Properly handling large or long-running operations within Express.js prevents the server from becoming blocked and unresponsive.