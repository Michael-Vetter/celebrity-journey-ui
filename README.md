# celebrity-journey.com

This project is to create a Dua Lipa fan site. It originally started to teach myself React. The files are a bit of a mess as I changed direction several times. At first, all data was in files, but the content got so big, I had to put them in an API. Also, I started with everything in Javascript, but then later learned some Typescript and started converting some stuff over.

The project needs a lot of work. To name a few:

1. Needs a lot of refactor. My api url is hard-coded all over the place. I put most of my "useState" constants in app.js because I couldn't figure out how to use them on other pages without getting an error. I'm getting warnings for some of useEffect items and I haven't had time to figure that out.
2. UX. I'm not a UI person at all. Could use some professional help with pictures and colors.
3. There is an faux admin login. This is just so I (and anyone else I choose) can add content easily. Not the end of the world if someone figures out how to add content. I can always restore the files to a previous state.

## Help is encouraged

Love Dua Lipa and want to help? The backend could also use a lot of help. I do this in my limited spare time while still trying to keep up on the content on the site.

## How to run locally

1. npm install
2. yarn start
3. Note: the url's will hit my production endpoints (there are no CORS restrictions currently). If you add content via your local instance, it will be added to production. Just keep that in mind if you add random pictures or videos. Removing content must be done manually by me, so send me a note (my instagran is mentioned on the site)
