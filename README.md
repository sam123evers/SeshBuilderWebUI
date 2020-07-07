#SeshBuilderWebUI

To-Do:
-Make a new Component call pose list that fetches its own pose data ... done
-Make Login add the auth token to cookies or whatever and use that on future requests ... done
-Make Sign Up do its own data fetching too ... done
-Start adding components in components dir ... done



Will:
-Display Username in nav/banner componenet when navigating
-save created sesh to db as belonging to creator
-users can upload a pose to the database uploaded_by
-users can search for poses in the database
-users can filter search by category
-users can create a 'playist' of certain poses and save this playlist (called a sesh) to the database as belonging to them
-users can 'play' the playlists
	*users can add times to poses
	*users can select rest-time durations in between poses
-users can delete pose from database? (???)
-sesh.createdBy ---> this is the person that built the sesh on their account (Sam)
-sesh.seshPatron ---> this is the person who downloaded / uses the sesh (Paul)

Design Questions:
-should sign up and login be part of the same component?
-should sign up and login be stateful parts of Splash?