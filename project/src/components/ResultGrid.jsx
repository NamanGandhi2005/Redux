import React, { useEffect } from 'react'


import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi'

import { setQuery, setResults, setLoading, setError } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {

    const dispatch = useDispatch();

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    const getData = async () => {
        try {
            dispatch(setLoading())
            let data = [];
            if (activeTab == 'photos') {
                let response = await fetchPhotos(query)
                //normalization of data from api
                data = response.results.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src: item.urls.full
                }));
            }
            if (activeTab == 'videos') {
                let response = await fetchVideos(query)
                data = response.videos.map((item) => ({
                    id: item.id,
                    title: item.user.name || 'video',
                    thumbnail: item.image,
                    src: item.video_files[0].link,
                    type: 'video'
                }));
            }
            if (activeTab == 'GIF') {
                let response = await fetchGif(query)
                data = response.data.map((item) => ({
                    title: item.title,
                    thumbnail: item.images['480w_still'].url,
                    src: item.embed_url,
                    type: 'GIF',
                    id: item.id
                }))
            }
            dispatch(setResults(data))
        }
        catch (err) {
            dispatch(setError(err.message))
        }

    }

    useEffect(function () {
        if(!query) return
        getData()
    }, [query, activeTab])


    if (error) {
        return <h1>Error</h1>

    }

    if (loading) return <h1>Loading</h1>

    return (
        <div>
            {results.map((item, idx) => {
                return <div key={idx}>{item.title}</div>
            })}
        </div>
    )
}

export default ResultGrid