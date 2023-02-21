const list = new Set()

list.add("Leche")
list.add("Huevos").add("Jamón")
list.add("Avena")
list.add("Carne")
list.add("Huevos") // Resulta ignorado por la naturaleza de Set

console.log(list)