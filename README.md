# Toggle Feature is "Sign In" and "Sign Up"
=> I use useState for toggling sign in to sign up and the whole form will act according to that useState.

# Form Validation using Regex
=> i use regex form email and password in signup/signin form 

# Firebase connection
=> connect my Firebase account for " storing data of user for signIn/signUp " and for Authentication...

# Manage Users in Firebase (signed in or not)
=> i use firebase API for a user if he is signed in or signed up that state should be managed by " onAuthStateChanged ". Then i use useNavigate() hook for navigating form home page to browse page .
when user is signed in/signed up then useNavigate() navigate him to " /browse " page 

# create A Redux Store 
=> whenever user is signed up / signed in then that user Data should be save in my Redux Store 