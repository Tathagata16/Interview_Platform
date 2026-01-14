# Clerk to Mongodb:
    clerk and mongodb will be connected through inngest. When user signs up, there will be a function triggerd in inngest which will retrive the user info into inngest store. Then, inngest, through another function, will send those credentials to mongodb database.

# Stream: 
    for stream, as inngest store will have the data after signin, it will send the data to stream as well through another function

# Delete: 
    incase, when user deletes it's account, inngest handles it and deletes it from mongodb and stream.

