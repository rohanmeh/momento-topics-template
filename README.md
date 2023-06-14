# Momento Topics Listener Template

Running the template:
- Environment Variables:
    - SECRET_ID: 
        - An AWS Secrets Manager Secret Name (ex: "MomentoCacheSecret")
        - Secrets Manager Secret Format: {"MomentoCacheSecret": "MomentoAuthTokenValue"}
- Command: SECRET_ID=MomentoCacheSecret node index.js

Files:
- Index.js
    - Topic Listener Functions
        - One per topic
    - Handler Functions
        - One per listener
    - Error Handling
- Momento.js
    - Authentication with Cache
- Secrets.js
    - Secrets Management with AWS Secrets Manager
