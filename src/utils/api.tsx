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

export const fetchProductById = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:1337/api/merches/${id}?populate=*`);
    const data = await res.json();
    const item = data.data;
    return {
      id: item.id,
      documentId: item.documentId,
      name: item.name || 'Unnamed',
      price: item.price || 0,
      description: item.description || 'No description',
      images: item.images?.[0]?.formats?.thumbnail?.url 
               ? `http://localhost:1337${item.images[0].formats.thumbnail.url}` 
               : '/default-image.jpg',
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};
