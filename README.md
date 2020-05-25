##My Manga List - Backend & Frontend version

Deployed to Heroku: https://mymangalist.herokuapp.com/

Remember the list at https://github.com/inespisca/manga-list ?
Well, now it's back but it has backend as well so I can update it whenever I wish without having to change the code.
This is my actual manga list and it was created out of a personal need, that's why only I can access the backend.
Still, everything is working.

## Contents - Public pages
Each public page filters the status those manga titles are in: Reading, Planned to Read, On-Hold, Dropped and Complete.
Within this filter, all titles are organized by alphabetical order. The last public page shows all titles in the list:
organized by status and then by alphabetical order as well. Also each title has a link to their BakaUpdates and MyAnimeList page but, because not all have a BakaUpdates or a MyAnimeList, I made the BakaUpdates link only appear when said manga has a BakaUpdates page and the MyAnimeList link only appears when a title has a MyAnimeList page as well. The bar that separates both links will only appear when a title has a BakaUpdates and a MyAnimeList page.

##Contents - Backoffice

About the backoffice, it has a list of all manga organized in alphabetical order (regardless of status) with an edit button in front of each title. If that edit button is pressed, it'll lead to the edit page of the specific manga I clicked, where I can change the name of said manga or even delete it at will.
At last, there's also an "Add a new manga" button, which allows to insert a new manga to the database. This will be used when I start reading a new manga that isn't in the list yet.
