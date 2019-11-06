export const appStateMock = {
    user: {
        loading: false,
        error: 'user not logged in',
        uid: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
        displayName: 'Muhammad Hasan',
        email: 'eng.mhmo91@hotmail.com',
        photoURL: 'https://graph.facebook.com/3039261476087192/picture',
        roles: [
            'GUEST',
            'HOST'
        ]
    },
    auth: {
        authenticated: true,
        authenticating: false
    },
    resources: {
        placesTypes: [
            {
                id: '3U1IvDfOM3OtIRaEsu0O',
                name_en: 'Camp',
                standAlone: true
            },
            {
                canBeBooked: true,
                id: 'FLuha0om6ZkDQWHfVDDQ',
                name_en: 'Apartment',
                standAlone: true
            },
            {
                canBeBooked: true,
                id: 'Fkn3iO61mCZp2PvLYTen',
                name_en: 'Chalet',
                standAlone: true
            },
            {
                id: 'MpOSS5Pc2XDyFpuWJ3SU',
                name_en: 'Hostel',
                standAlone: true
            },
            {
                canBeBooked: true,
                id: 'eLgABbmtQ9OUymonqsHJ',
                name_en: 'Private room',
                standAlone: false
            },
            {
                canBeBooked: true,
                id: 'hhHXZdzsAzcwVQx4wRtC',
                name_en: 'Shared room',
                standAlone: false
            },
            {
                canBeBooked: true,
                id: 'mklsKNzDL63UoBsK6l5U',
                name_en: 'Studio',
                standAlone: true
            }
        ],
        amenities: [
            {
                name_en: 'kitchen'
            },
            {
                name_en: 'Wifi'
            },
            {
                name_en: 'Air conditioning'
            },
            {
                name_en: 'Pool'
            }
        ],
        facilities: [],
        loading: false
    },
    places: {
        ids: [
            'fVm3wCgfYPAWEPJOD4gW',
            'xRa4U18WrCOiPO2KLRsc'
        ],
        entities: {
            fVm3wCgfYPAWEPJOD4gW: {
                brandName: null,
                creatorId: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: 'fVm3wCgfYPAWEPJOD4gW',
                inside: 'standalone',
                layout: {
                    bathrooms: 1,
                    bedrooms: 2,
                    beds: 3
                },
                loading: false,
                location: {
                    latitude: 28.49964291132565,
                    longitude: 34.518781122476184
                },
                photos: [
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F8e235c40-6abb-4b1c-9c3b-0029abc53f2a.jpg%20?alt=media&token=e284bec0-166a-45ee-9e68-e0db298d6fa4',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F3e19651f-4987-4922-8233-4dee67293794.jpg%20?alt=media&token=ee2ec227-3662-44b8-b0aa-cc76b5f48b91',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F7ce87b14-3f0e-49db-9465-ffaf5c961ac7.jpg%20?alt=media&token=e6d0ad4e-e215-4d51-ab48-7c5fc88c13ce',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F1e54927d-7e44-4bc7-b6b2-10f6e1601363.jpg%20?alt=media&token=f01d5436-70b9-4d2f-bbd5-6a49ae2c939c',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F50f37082-a50e-4a4a-8059-e95aa0ecfc4c.jpg%20?alt=media&token=6ed06fb2-1c7b-4182-b2f2-01f88853f955',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F053d7a9e-a432-40e4-aaec-4ed1f700066b.jpg%20?alt=media&token=91e69b76-9849-480a-bda7-c52528b6ed1a'
                ],
                type: 'FLuha0om6ZkDQWHfVDDQ'
            },
            xRa4U18WrCOiPO2KLRsc: {
                brandName: null,
                creatorId: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: 'xRa4U18WrCOiPO2KLRsc',
                inside: 'FLuha0om6ZkDQWHfVDDQ',
                layout: {
                    beds: 1,
                    bedrooms: 1,
                    bathrooms: 1,
                    privateGarden: true
                },
                loading: false,
                location: {
                    latitude: 28.509427108354764,
                    longitude: 34.5173971026245
                },
                photos: [
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2Fa3db6436-f36a-4dc9-803b-4f151cec0443.jpg%20?alt=media&token=ba77ce4f-ae8b-4553-906d-d107ef14efb5',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2Fcf924bab-9905-452f-ae8d-44ecb7ccc1f4.jpg%20?alt=media&token=3beaeab7-713e-42f0-bf57-36c38a115137',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2F56543fa8-3755-4812-a2d7-6e491953f788.jpg%20?alt=media&token=454a3b1a-2c98-4f86-8d68-bb8eac2e8701'
                ],
                type: 'eLgABbmtQ9OUymonqsHJ'
            }
        },
        currentPlaceId: 'xRa4U18WrCOiPO2KLRsc',
        palcesFilter: {
            types: [],
            bedrooms: 1,
            adultGuests: 1,
            longTermOnly: false,
            date: null,
            budget: null
        },
        loading: false
    },
    placeWizard: {
        mode: 'UPDATE',
        busy: false,
        currentPlaceId: null,
        currentWizardStep: 0
    }
}
