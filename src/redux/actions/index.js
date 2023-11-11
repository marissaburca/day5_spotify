export const GET_SEARCH = 'GET_SEARCH'
export const GET_LOCAL = 'GET_LOCAL' 
export const SET_DETAILS= 'SET_DETAILS'
export const GET_SEARCHED = 'GET_SEARCHED'
export const ADD_TO_FAV='ADD_TO_FAV'
export const REMOVE_FROM__FAV='REMOVE_FROM__FAV'

export const getLocalAction = (artistName) =>{
    return async (dispatch) => {
        try {
            const res = await fetch(
                    'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                      artistName,
                    {
                      headers: {
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                        'X-RapidAPI-Key':
                          '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
                      },
                    }
                  )
            if (res.ok) {
              const data = await res.json()
              console.log(data)
              dispatch({
                type: GET_LOCAL,
                payload: data.data
              })
            }
            else {
              throw new Error('Error in fetching songs')
            }
          } catch (err) {
            console.log('error', err)
          }
        }
    }  
    
   export const getDetailsAction= (song)=>{
    return {
        type: SET_DETAILS,
        payload : song
    }

} 

export const getNewSearchAction = (searchValue)=>{
    return {
        type: GET_SEARCH,
        payload : searchValue
    }

}

export const getSearchedAction = (find)=>{
    return async (dispatch) => {
        try {
            const res = await fetch(
                    'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                      find,
                    {
                      headers: {
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                        'X-RapidAPI-Key':
                          '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
                      },
                    }
                  )
            if (res.ok) {
              const data = await res.json()
              console.log(data)
              dispatch({
                type: GET_SEARCHED,
                payload: data.data
              })
            }
            else {
              throw new Error('Error in fetching songs')
            }
          } catch (err) {
            console.log('error', err)
          }
        }
}


export const addToFavoritesAction= (song)=>{
  return{
      type: ADD_TO_FAV,
      payload: song
  }
}

export const removeFromFavoritesAction = (i)=>{
  return{
      type: REMOVE_FROM__FAV,
      payload: i
  }
}