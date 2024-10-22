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
      map: item.map,
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

export const fetchEventById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:1337/api/events/${id}?populate=*`);
    const data = await res.json();

    if (!data || !data.data) {
      throw new Error('Evento no encontrado o respuesta incorrecta de la API');
    }

    const item = data.data;

    // Obtener todas las imágenes en un array
    const images = item.images.map((img: any) => ({
      thumbnail: `http://localhost:1337${img.formats.thumbnail.url}`,
      large: img.formats.large ? `http://localhost:1337${img.formats.large.url}` : null,
    }));

    // Obtener la imagen principal
    const mainImage = item.images?.[0]?.formats?.thumbnail?.url
      ? `http://localhost:1337${item.images[0].formats.thumbnail.url}`
      : '/default-image.jpg';

    return {
      id: item.id,
      documentId: item.documentId,
      name: item.name || 'Unnamed',
      description: item.description || 'No description',
      price: item.price || 0,
      date: item.date,
      time: item.time,
      map: item.map,
      ubication: item.ubication|| 'missing',
      images, // Lista de imágenes
      mainImage, // Imagen principal
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null; // Devuelve null en caso de error
  }
}

export const fetchLastThreeEvents = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/events?populate=*&sort=date:desc&pagination[limit]=3');
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
    console.error('Error fetchin last events: ', error);
    return [];
  }
}

export const fetchLastEvent = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/events?populate=*&sort=date:desc&pagination[limit]=1');
    const data = await res.json();
    const item = data.data[0]; // Acceder directamente al primer (y único) elemento
console.log(item)
    return {
      id: item.id,
      documentId: item.documentId,
      name: item.name || 'Unnamed',
      description: item.description || 'No description',
      price: item.price || 0,
      date: item.date,
      time: item.time,
      map: item.map,
      ubication: item.ubication || 'missing',
      images: item.images?.[0]?.formats?.thumbnail?.url
        ? `http://localhost:1337${item.images[0].formats.thumbnail.url}`
        : '/default-image.jpg',
    };
  } catch (error) {
    console.error('Error fetching last event:', error);
    return null; // Devuelve null en caso de error
  }
};

