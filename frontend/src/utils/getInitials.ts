export function getInitials(name: string): string {
  if (!name || name.trim() === "") return "";

  const cleanName = name.trim();
  const nameParts = cleanName.split(/\s+/); // Divide o nome por espaços

  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }

  // Pega a primeira letra do primeiro nome e a primeira letra do último nome
  const firstInitial = nameParts[0].charAt(0);
  const lastInitial = nameParts[nameParts.length - 1].charAt(0);

  return (firstInitial + lastInitial).toUpperCase();
}
