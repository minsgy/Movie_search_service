export default {
  namespaced: true,
  state(){
   return { 
    movies: [],
    totalResults: 0,
    currentMovie: {},
    isLoading: false,
   }
  },
  getters:{
    ActorsSplit(state) {
      return state.currentMovie['Actors'].split(',')
    }
  },
  mutations:{
    assignState(state, payload){
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    addMovie(state, { movies }){
      state.movies = [...state.movies, ...movies]
      state.isLoading = false
    }
  },
  actions: {
    async readMovies({ commit }, payload) {
      const { title = '', page = 1 } = payload
      commit('assignState', {
        isLoading: true
      })
      if (page === 1) {
        const movies = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${title}&page=${page}`)
          .then(res=>res.json())
        console.log(movies)
        if (movies.Response === 'True') {
          commit('assignState', {
            movies: movies.Search,
            totalResults: movies.totalResults,
            Response: movies.Response,
            isLoading : false
          })
        } else if(movies.Response === 'False'){
          commit('assignState', {
            movies: [],
            Response: movies.Response,
            isLoading: false
          })
        }
      } else {
        const movies = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${title}&page=${page}`)
          .then(res => res.json())
        
        commit('addMovie', {
          movies: movies.Search
        })

        commit('assignState', {
          Response: movies.Response,
          isLoading : false
        })
      }
    },
    async readMovie({ commit }, payload) {
      const { imdbID } = payload
      const currentMovie = await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${imdbID}`)
        .then(res=>res.json())
      commit('assignState', {
        currentMovie
      })
    }
  }
}