import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://92.53.120.219:8080/v1/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        sendFeedback: build.mutation({
            
        })
    })
})