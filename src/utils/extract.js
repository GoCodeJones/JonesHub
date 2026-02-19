// pega ID do youtube
export function getYoutubeId(url) {
  const reg =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(reg);
  return match ? match[1] : null;
}

// SEMPRE funciona — primeiro tenta maxres depois hq
export function getYoutubeThumb(url) {
  const id = getYoutubeId(url);
  if (!id) return "";

  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}


// favicon + ogimage tentativa para artigos
export async function getArticlePreview(url) {
  try {
    const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    const html = await res.text();

    const ogImg = html.match(/property="og:image" content="([^"]+)"/);
    const desc = html.match(/property="og:description" content="([^"]+)"/);

    return {
      image: ogImg ? ogImg[1] : "",
      description: desc ? desc[1] : ""
    };
  } catch {
    return { image: "", description: "" };
  }
}
