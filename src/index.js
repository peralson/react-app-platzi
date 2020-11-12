import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './routes/App'

const initialState = {
    "user": {},
    "playing": {},
    "searchQuery": [],
    "myList": [],
    "trends": [
            {
              "id": 2,
              "slug": "tvshow-2",
              "title": "In the Dark",
              "type": "Scripted",
              "language": "English",
              "year": 2009,
              "contentRating": "16+",
              "duration": 164,
              "cover": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 3,
              "slug": "tvshow-3",
              "title": "Instinct",
              "type": "Adventure",
              "language": "English",
              "year": 2002,
              "contentRating": "16+",
              "duration": 137,
              "cover": "https://images.unsplash.com/photo-1547248085-bf272dd7cb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 4,
              "slug": "tvshow-4",
              "title": "Grand Hotel",
              "type": "Comedy",
              "language": "English",
              "year": 2014,
              "contentRating": "16+",
              "duration": 163,
              "cover": "https://images.unsplash.com/photo-1546513027-cd32829de838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 5,
              "slug": "tvshow-5",
              "title": "Stargate Atlantis",
              "type": "Scripted",
              "language": "English",
              "year": 2014,
              "contentRating": "16+",
              "duration": 194,
              "cover": "https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 6,
              "slug": "tvshow-6",
              "title": "Final Space",
              "type": "Scripted",
              "language": "English",
              "year": 2017,
              "contentRating": "16+",
              "duration": 124,
              "cover": "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 7,
              "slug": "tvshow-7",
              "title": "The InBetween",
              "type": "Drama",
              "language": "English",
              "year": 2011,
              "contentRating": "16+",
              "duration": 179,
              "cover": "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            }
    ],
    "originals": [
            {
              "id": 8,
              "slug": "tvshow-8",
              "title": "Stargate Atlantis",
              "type": "Action",
              "language": "English",
              "year": 2012,
              "contentRating": "16+",
              "duration": 148,
              "cover": "https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 9,
              "slug": "tvshow-9",
              "title": "Alien Highway",
              "type": "Action",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": 128,
              "cover": "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 10,
              "slug": "tvshow-10",
              "title": "Elementary",
              "type": "Animation",
              "language": "English",
              "year": 2011,
              "contentRating": "16+",
              "duration": 346,
              "cover": "https://images.unsplash.com/photo-1496280307390-7f58b19658b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 11,
              "slug": "tvshow-11",
              "title": "Strange Angel",
              "type": "War",
              "language": "English",
              "year": 2015,
              "contentRating": "16+",
              "duration": 226,
              "cover": "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 12,
              "slug": "tvshow-12",
              "title": "Private Eyes",
              "type": "Comedy",
              "language": "English",
              "year": 2018,
              "contentRating": "16+",
              "duration": 190,
              "cover": "https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              "id": 13,
              "slug": "tvshow-13",
              "title": "NCIS: Los Angeles",
              "type": "Drama",
              "language": "English",
              "year": 2010,
              "contentRating": "16+",
              "duration": 160,
              "cover": "https://images.unsplash.com/photo-1601758260651-32188a43c9b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "description": "Vestibulum ac est lacinia nisi venenatis tristique",
              "source": "https://www.w3schools.com/html/mov_bbb.mp4"
            }
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
