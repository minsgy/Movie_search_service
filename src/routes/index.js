import { createRouter, createWebHistory } from 'vue-router'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'
export default createRouter({
 history: createWebHistory(),
 scrollBehavior: () => ({top: 0}),
 routes:[
  {
   path: '/',
   component : MovieList,
   children :[
    {
     name: 'movies',
     path: 'movie/:title',
     component: MovieList
    },
   ]
  },
  {
   name: 'movieDetail',
   path: '/movie/:index/:imdbID',
   component: MovieDetail
  },
  {
   path: '/:notFound(.*)',
   component: NotFound
  }
 ]
})