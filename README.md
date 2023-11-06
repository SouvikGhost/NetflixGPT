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

# important note for Updating user Data after createUserEmailandPassword API
=> i use update API because createUserEmailandPassword is only for Email & Password . so i can not update directly photoURL and displayName ok ? that's why i need updateProfile API to do that . Now the problem is that when you sign up first time the displayName and photoURL is not updating if i reload then it will updated . When i reload then updateProfile API fired and update that data . That's why i use dispatch an action for updating that displayName and photoURL Data. 



# unsubscribe our store when it not needed or when this component is unmounted
=> i am returning a function in useEffect() it means i am clearing my onAuthStateChanged function which is hanging in Header Component when i don't need it it means suppose when that component will unmount

# making Custom Hook named " useNowPlayingMovies() "
=> This useNowPlayingMovies() Hook is used to fetch NowPlayingMovies from API and Store it to Redux Store.


