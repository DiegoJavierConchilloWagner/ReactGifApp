

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3OCSmkHkmGX6RAwZ2JhCOCYoTg3ezPud`
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(data => {
        return {
            id: data.id,
            title: data.title,
            url: data.images?.downsized_medium.url
        };
    });

    return gifs;
} 