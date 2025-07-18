require('dotenv').config()


const express = require('express')
const app = express()
const port = process.env.PORT

const githubData = {
  "login": "abdussalam9891",
  "id": 209218089,
  "node_id": "U_kgDODHhqKQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/209218089?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abdussalam9891",
  "html_url": "https://github.com/abdussalam9891",
  "followers_url": "https://api.github.com/users/abdussalam9891/followers",
  "following_url": "https://api.github.com/users/abdussalam9891/following{/other_user}",
  "gists_url": "https://api.github.com/users/abdussalam9891/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abdussalam9891/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abdussalam9891/subscriptions",
  "organizations_url": "https://api.github.com/users/abdussalam9891/orgs",
  "repos_url": "https://api.github.com/users/abdussalam9891/repos",
  "events_url": "https://api.github.com/users/abdussalam9891/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abdussalam9891/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abdus Salam ",
  "company": null,
  "blog": "",
  "location": "Jaipur",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2025-04-26T07:23:35Z",
  "updated_at": "2025-07-13T18:35:06Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
  res.send('abdussssssssss')
})

app.get('/login', (req, res)=>{
  res.send('<h1>please log</h1>')
})

app.get('/youtube', (req, res)=>{
  res.send('<button>click me </button>')
})



app.get('/github', (req, res)=>{
  res.json(githubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
