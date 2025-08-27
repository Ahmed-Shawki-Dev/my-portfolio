export const trimText = (text: string) => (text.length > 200 ? `${text.slice(0, 200)}...` : text)
