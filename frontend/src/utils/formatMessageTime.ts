export function formatMessageTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();

  // Extrai hora e minuto formatados (ex: "14:30")
  const timeString = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Verifica se é o mesmo dia (Hoje)
  const isToday = date.toDateString() === now.toDateString();
  if (isToday) {
    return timeString;
  }

  // Verifica se foi ontem
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();
  if (isYesterday) {
    return `Ontem às ${timeString}`;
  }

  // Para datas mais antigas, exibe a data completa (ex: "28/10/2026")
  const dateString = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return `${dateString} às ${timeString}`;
}
