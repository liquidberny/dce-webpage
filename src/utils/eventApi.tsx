export const fetchEvents = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/events?populate=*');
    const data = await res.json();
    return data.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      name: item.name || 'Unnamed',
      description: item.description || 'No description',
      price: item.price || 0,
      date: item.date,
      time: item.time,
      ubication: item.ubication|| 'missing',
      images: item.images?.[0]?.formats?.thumbnail?.url 
               ? `http://localhost:1337${item.images[0].formats.thumbnail.url}` 
               : '/default-image.jpg',
    }));
  }catch (error){
    console.error('Error fetching events:', error);
    return [];
  }
}