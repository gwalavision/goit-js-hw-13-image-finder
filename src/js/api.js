const fetchPictures = (searchQuery, page) => {
    const key = '19920308-f5c9c99cb5045aa424c0eff35'
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`
    
    const headers = {
        'Autorization': `${key}`,
        'Content-Type': 'application/json'
        }
        
    return fetch(url, headers)
        .then(res => {
            if (res.ok) {
            return res.json()
            }
            throw new Error ('Error fetching data!')
        })
        .catch(console.log)
        
}

export default fetchPictures