export interface Contact {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    ipAddress?: string
}

export const contactData: Contact[] = [{
    id: 1,
    firstName: 'Jeanette',
    lastName: 'Penddreth',
    email: "jpenddreth0@census.gov",
  }, {
    id: 2,
    firstName: "Giavani",
    lastName: "Frediani",
    email: "gfrediani1@senate.gov",
  }, {
    id: 3,
    firstName: "Noell",
    lastName: "Bea",
    email: "nbea2@imageshack.us",
    ipAddress: "180.66.162.255"
  }, {
    id: 4,
    firstName: "Willard",
    lastName: "Valek",
    email: "wvalek3@vk.com",
    ipAddress: "67.76.188.26"
  }]