export const initialData = [
    {
        id: 1,
        fullName: "Soheil Ghadimi",
        number: "+989373282324",
        group: "friends",
        image:""
    },
    {
        id: 2,
        fullName: "Hamid Ghadimi",
        number: "+989373282324",
        group: "work",
        image:""
    },
    {
        id: 3,
        fullName: "Vahid Ghadimi",
        number: "+989373282324",
        group: "family",
        image:""
    },
    {
        id: 4,
        fullName: "Ali Ghadimi",
        number: "+989373282324",
        group: "family",
        image:""
    },
    {
        id: 5,
        fullName: "Bahram Ghadimi",
        number: "+989373282324",
        group: "family",
        image:""
    },
    {
        id: 6,
        fullName: "Gholi Ghadimi",
        number: "+989373282324",
        group: "family",
        image:""
    },
]

initialData.sort((a, b) => {
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
    return Math.floor(100 * Math.random())
}