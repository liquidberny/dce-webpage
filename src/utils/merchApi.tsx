// src/utils/api.ts
export const fetchMerch = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/merches?populate=*');
    const data = await res.json();
    return data.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      name: item.name || 'Unnamed',
      price: item.price || 0,
      description: item.description || 'No description',
      images: item.images?.[0]?.formats?.thumbnail?.url 
               ? `http://localhost:1337${item.images[0].formats.thumbnail.url}` 
               : '/default-image.jpg',
    }));
  } catch (error) {
    console.error('Error fetching merch:', error);
    return [];
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:1337/api/merches/${id}?populate=*`);
    const data = await res.json();

    if (!data || !data.data) {
      throw new Error('Producto no encontrado o respuesta incorrecta de la API');
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
      price: item.price || 0,
      description: item.description || 'No description',
      images, // Lista de imágenes
      mainImage, // Imagen principal
      sizes: ['S', 'M', 'L', 'XL'], // Ejemplo de tallas
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null; // Devuelve null en caso de error
  }
};

export const fetchLastThreeProducts = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/merches?populate=*&sort=createdAt:desc&pagination[limit]=3');
    const data = await res.json();
    return data.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      name: item.name || 'Unnamed',
      price: item.price || 0,
      description: item.description || 'No description',
      images: item.images?.[0]?.formats?.thumbnail?.url 
               ? `http://localhost:1337${item.images[0].formats.thumbnail.url}` 
               : '/default-image.jpg',
    }));
  } catch (error) {
    console.error('Error fetching last three products:', error);
    return [];
  }
};
