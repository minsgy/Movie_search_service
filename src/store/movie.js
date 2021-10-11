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
      const { page = 1 } = payload
      commit('assignState', {
        isLoading: true
      })

      const movies = await fetch('/.netlify/functions/getMovieList', {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(res=>res.json())
    
      if (page === 1) {
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
            totalResult: '',
            Response: movies.Response,
            isLoading: false
          })
        }
      } else {       
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
      const currentMovie = await fetch('/.netlify/functions/getMovie', {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(res=>res.json())

      console.log(currentMovie)
      commit('assignState', {
        currentMovie
      })
    }
  }
}
