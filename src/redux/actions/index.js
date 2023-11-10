export const GET_SEARCH = 'GET_SEARCH'
export const GET_LOCAL = 'GET_LOCAL' 
export const SET_DETAILS= 'SET_DETAILS'

export const getDetailsAction= (song)=>{
    return {
        type: SET_DETAILS,
        payload : song
    }

}

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

export const getNewSearchAction = (searchValue)=>{
    console.log(searchValue)
 
    return async (dispatch) => {
        try {
       const res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q={query}' + searchValue);
       if (res.ok) {
         const { data } = await res.json()
         console.log(data)
          dispatch({
          type: GET_SEARCH,
          payload: data.data
         })
       } else {
         throw new Error("Error fetching results");
       }
     } catch (error) {
       console.log(error);
     }
   };
}