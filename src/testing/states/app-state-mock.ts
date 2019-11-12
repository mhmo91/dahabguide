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
                icon: 'room_service',
                id: 'D6B8YNMSczzVrTCRpdnp',
                name_en: 'kitchen'
            },
            {
                icon: 'wifi',
                id: 'TzpQRN3kKD9WuVoGb9K3',
                name_en: 'Wifi'
            },
            {
                icon: 'ac_unit',
                id: 'c6zeHnisDCJNV7UKTBxc',
                name_en: 'Air conditioning'
            },
            {
                icon: 'local_laundry_service',
                id: 'jXaNMALdmNItAaLOtpyD',
                name_en: 'Washing Machine'
            },
            {
                icon: 'pets',
                id: 'tA6DqqT8aF64DVxBSFOR',
                name_en: 'Pets Friendly 🐕 🐈'
            },
            {
                icon: 'pool',
                id: 'yWCZlBmHp5RlqowBzqpi',
                name_en: 'Pool'
            }
        ],
        facilities: [],
        loading: false
    },
    places: {
        ids: [
            '2kukU9egdhRNc8VcRfZm',
            'BaSeOuFOzAd1sWdvwreP',
            'NXG6J76h2T5xe06nB3HA',
            'fVm3wCgfYPAWEPJOD4gW',
            'tUFQ3OZyYUmc65h8Ip8m',
            'xRa4U18WrCOiPO2KLRsc'
        ],
        entities: {
            '2kukU9egdhRNc8VcRfZm': {
                amenities: [
                    'D6B8YNMSczzVrTCRpdnp',
                    'c6zeHnisDCJNV7UKTBxc',
                    'yWCZlBmHp5RlqowBzqpi',
                    'tA6DqqT8aF64DVxBSFOR',
                    'TzpQRN3kKD9WuVoGb9K3',
                    'jXaNMALdmNItAaLOtpyD'
                ],
                brandName: null,
                creatorId: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: '2kukU9egdhRNc8VcRfZm',
                inside: 'standalone',
                instantBooking: true,
                layout: {
                    bathrooms: 1,
                    bedrooms: 2,
                    beds: 3,
                    privateGarden: true
                },
                loading: false,
                location: {
                    latitude: 28.512311887617784,
                    longitude: 34.514933469676066
                },
                photos: [
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2F2kukU9egdhRNc8VcRfZm%2Fea2eedea-a483-4af9-9320-18da2a181972.jpg%20?alt=media&token=19db540e-502e-43e9-ab57-2b914d3063de',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2F2kukU9egdhRNc8VcRfZm%2F65d93281-b823-4f2a-8325-606574384c19.jpg%20?alt=media&token=e3f4656c-b9f0-4b57-b101-fa59b80fffad',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2F2kukU9egdhRNc8VcRfZm%2F6039beaa-0c90-47ab-9dcf-d1b1c582bb28.jpg%20?alt=media&token=482aab4a-8120-4288-b762-f32e507d5622'
                ],
                price: {
                    longTerm: true,
                    minMonths: null,
                    minNights: null,
                    perMonth: '5000',
                    perNight: '500',
                    shortTerm: true
                },
                type: 'FLuha0om6ZkDQWHfVDDQ'
            },
            BaSeOuFOzAd1sWdvwreP: {
                amenities: [
                    'D6B8YNMSczzVrTCRpdnp',
                    'TzpQRN3kKD9WuVoGb9K3',
                    'c6zeHnisDCJNV7UKTBxc',
                    'jXaNMALdmNItAaLOtpyD',
                    'tA6DqqT8aF64DVxBSFOR'
                ],
                brandName: null,
                creatorId: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: 'BaSeOuFOzAd1sWdvwreP',
                inside: 'standalone',
                instantBooking: null,
                layout: {
                    bathrooms: 1,
                    bedrooms: 1,
                    beds: 1,
                    privateGarden: true
                },
                location: {
                    latitude: 28.505435543177466,
                    longitude: 34.519684821938654
                },
                photos: [
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FBaSeOuFOzAd1sWdvwreP%2Fd62cbfbe-3bfc-40e3-99f7-60bc9ee7edf6.jpg%20?alt=media&token=493a8b58-cb14-487f-b69b-871aa179fd72',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FBaSeOuFOzAd1sWdvwreP%2Fc33edb14-cc72-42e0-8b81-e51083154e23.jpg%20?alt=media&token=44dabeac-bd42-469d-b2b1-25dd8f11afbe',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FBaSeOuFOzAd1sWdvwreP%2Fe03108ff-c69c-4e00-b120-7613b44e2bab.jpg%20?alt=media&token=63c6dc8a-e7e8-4914-a9cb-dc42180a62fa',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FBaSeOuFOzAd1sWdvwreP%2Fcf924bab-9905-452f-ae8d-44ecb7ccc1f4.jpg%20?alt=media&token=12267ab1-3e47-4f7e-9f80-d7c4f2cd4eac'
                ],
                price: {
                    longTerm: true,
                    minMonths: null,
                    minNights: null,
                    perMonth: '3500',
                    perNight: null,
                    shortTerm: false
                },
                type: 'Fkn3iO61mCZp2PvLYTen'
            },
            NXG6J76h2T5xe06nB3HA: {
                amenities: [
                    'D6B8YNMSczzVrTCRpdnp',
                    'TzpQRN3kKD9WuVoGb9K3',
                    'c6zeHnisDCJNV7UKTBxc',
                    'yWCZlBmHp5RlqowBzqpi',
                    'jXaNMALdmNItAaLOtpyD'
                ],
                brandName: null,
                creatorId: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: 'NXG6J76h2T5xe06nB3HA',
                inside: 'standalone',
                instantBooking: null,
                layout: {
                    bathrooms: 1,
                    bedrooms: 1,
                    beds: 1,
                    privateGarden: true
                },
                location: {
                    latitude: null,
                    longitude: null
                },
                photos: [
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FNXG6J76h2T5xe06nB3HA%2Feae1bf69-bd42-462d-a68c-992a8ac74e52.jpg%20?alt=media&token=217717fe-3ae4-486d-9343-fa95254b2546',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FNXG6J76h2T5xe06nB3HA%2Ff9920cf5-9319-42ed-bedd-f5c5b2b64af3.jpg%20?alt=media&token=032690dc-3683-440c-bf82-096de81b5e59',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FNXG6J76h2T5xe06nB3HA%2Fcf924bab-9905-452f-ae8d-44ecb7ccc1f4.jpg%20?alt=media&token=91915747-a330-4415-814a-f1405788a195',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FNXG6J76h2T5xe06nB3HA%2Fe03108ff-c69c-4e00-b120-7613b44e2bab.jpg%20?alt=media&token=1f29d06a-36c2-4a7c-8a9a-cd633f6dc586',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FNXG6J76h2T5xe06nB3HA%2Fd62cbfbe-3bfc-40e3-99f7-60bc9ee7edf6.jpg%20?alt=media&token=72cb9501-0bbb-4d49-bd4b-8a361c37e2af'
                ],
                price: {
                    longTerm: true,
                    minMonths: null,
                    minNights: null,
                    perMonth: '700',
                    perNight: '400',
                    shortTerm: true
                },
                type: 'FLuha0om6ZkDQWHfVDDQ'
            },
            fVm3wCgfYPAWEPJOD4gW: {
                amenities: [
                    {
                        checked: true,
                        id: 'D6B8YNMSczzVrTCRpdnp'
                    },
                    {
                        checked: false,
                        id: 'TzpQRN3kKD9WuVoGb9K3'
                    },
                    {
                        checked: false,
                        id: null
                    },
                    {
                        checked: true,
                        id: 'jXaNMALdmNItAaLOtpyD'
                    },
                    {
                        checked: true,
                        id: 'yWCZlBmHp5RlqowBzqpi'
                    },
                    'D6B8YNMSczzVrTCRpdnp',
                    'TzpQRN3kKD9WuVoGb9K3',
                    'c6zeHnisDCJNV7UKTBxc'
                ],
                brandName: null,
                creatorId: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: 'fVm3wCgfYPAWEPJOD4gW',
                inside: 'standalone',
                instantBooking: null,
                layout: {
                    bathrooms: 1,
                    bedrooms: 2,
                    beds: 3,
                    privateGarden: true
                },
                loading: false,
                location: {
                    latitude: 28.502047002017473,
                    longitude: 34.52037466433626
                },
                photos: [
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F053d7a9e-a432-40e4-aaec-4ed1f700066b.jpg%20?alt=media&token=91e69b76-9849-480a-bda7-c52528b6ed1a',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F50f37082-a50e-4a4a-8059-e95aa0ecfc4c.jpg%20?alt=media&token=6ed06fb2-1c7b-4182-b2f2-01f88853f955',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2F6039beaa-0c90-47ab-9dcf-d1b1c582bb28.jpg%20?alt=media&token=cfdb971d-1903-488d-a2e5-f005a1d74551',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FfVm3wCgfYPAWEPJOD4gW%2Fcf924bab-9905-452f-ae8d-44ecb7ccc1f4.jpg%20?alt=media&token=1fb981a7-bf7f-47e2-95ff-e50d961e29aa'
                ],
                price: {
                    longTerm: true,
                    minMonths: null,
                    minNights: null,
                    perMonth: '4000',
                    perNight: '300',
                    shortTerm: true
                },
                type: 'FLuha0om6ZkDQWHfVDDQ'
            },
            tUFQ3OZyYUmc65h8Ip8m: {
                amenities: [
                    'yWCZlBmHp5RlqowBzqpi'
                ],
                brandName: 'moh',
                creatorId: 'Fx4I1hWEMqV4HnclsWfCjWItvUF3',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: 'tUFQ3OZyYUmc65h8Ip8m',
                inside: 'standalone',
                layout: {
                    bathrooms: 2,
                    bedrooms: 2,
                    beds: 3,
                    privateGarden: true
                },
                location: {
                    latitude: 28.50566356442508,
                    longitude: 34.51319139888915
                },
                type: 'FLuha0om6ZkDQWHfVDDQ'
            },
            xRa4U18WrCOiPO2KLRsc: {
                amenities: [
                    {
                        checked: true,
                        id: 'D6B8YNMSczzVrTCRpdnp'
                    },
                    {
                        checked: false,
                        id: 'TzpQRN3kKD9WuVoGb9K3'
                    },
                    {
                        checked: false,
                        id: 'c6zeHnisDCJNV7UKTBxc'
                    },
                    {
                        checked: false,
                        id: 'jXaNMALdmNItAaLOtpyD'
                    },
                    {
                        checked: true,
                        id: 'yWCZlBmHp5RlqowBzqpi'
                    },
                    'c6zeHnisDCJNV7UKTBxc',
                    'jXaNMALdmNItAaLOtpyD',
                    'yWCZlBmHp5RlqowBzqpi'
                ],
                brandName: null,
                creatorId: 'n8jHhdBRI4NEaS5zNo4Tz3PMeA43',
                guests: {
                    adults: 2,
                    children: 2,
                    infants: 1
                },
                id: 'xRa4U18WrCOiPO2KLRsc',
                inside: 'FLuha0om6ZkDQWHfVDDQ',
                instantBooking: true,
                layout: {
                    bathrooms: 1,
                    bedrooms: 1,
                    beds: 1,
                    privateGarden: true
                },
                loading: false,
                location: {
                    latitude: 28.509427108354764,
                    longitude: 34.5173971026245
                },
                photos: [
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2F50996e2d-2daf-490d-be34-5b863e0ec17f.jpg%20?alt=media&token=34c38a08-2230-4a62-ac2f-eac298d23357',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2F27636009-e9e2-429c-b091-5527711a35bb.jpg%20?alt=media&token=efbf6d60-8ddd-4ec9-83bb-7cc52e126909',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2F6039beaa-0c90-47ab-9dcf-d1b1c582bb28.jpg%20?alt=media&token=ac910dfd-d461-46e2-bbe5-443fb77cfc7c',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2Fa3db6436-f36a-4dc9-803b-4f151cec0443.jpg%20?alt=media&token=c172dc1b-2536-49c7-b338-0ce912f4fd83',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2Fe03108ff-c69c-4e00-b120-7613b44e2bab.jpg%20?alt=media&token=de5be7ab-363c-4679-8040-6e4b4f506170',
                    'https://firebasestorage.googleapis.com/v0/b/dahab-guide-staging.appspot.com/o/places%2FxRa4U18WrCOiPO2KLRsc%2Fea2eedea-a483-4af9-9320-18da2a181972.jpg%20?alt=media&token=d41a24b8-7166-4f4b-82f8-8e80cbd6e213'
                ],
                price: {
                    longTerm: true,
                    minMonths: null,
                    minNights: null,
                    perMonth: '8000',
                    perNight: '700',
                    shortTerm: true
                },
                type: 'eLgABbmtQ9OUymonqsHJ'
            }
        },
        currentPlaceId: '2kukU9egdhRNc8VcRfZm',
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
