const initialData = [
    {
        id: 1,
        fullName: "Soheil Ghadimi",
        number: "+989373282324",
        group: "friends",
    },
    {
        id: 2,
        fullName: "Hamid Ghadimi",
        number: "+989373282324",
        group: "work",
    },
    {
        id: 3,
        fullName: "Vahid Ghadimi",
        number: "+989373282324",
        group: "family",
    },
    {
        id: 4,
        fullName: "Ali Ghadimi",
        number: "+989373282324",
        group: "family",
    },
    {
        id: 5,
        fullName: "Bahram Ghadimi",
        number: "+989373282324",
        group: "family",
    },
    {
        id: 6,
        fullName: "Gholi Ghadimi",
        number: "+989373282324",
        group: "family",
    },
]
export const contactUsersList = initialData.sort((a, b) => {
    let fa = a.fullName.toLowerCase(),
        fb = b.fullName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

export const makeUniqueId = () => {
    return parseInt(100 * Math.random())
}