export const dummy = [
    {
        id: '1',
        status: 'going for pickup',
        icon: 'truck-fast',
        waybillNo: 'WB0402',
        items: 'mobile phone',
        senderName: 'Johnson Emeka',
        sendersAddress: 'Wuse zone II, Banex plaza ',
        ReceiverName: 'Frank Edward',
        sendersProfilePicture: require('../assets/img/person1.png') ,
        receiversProfilePicture: require('../assets/img/person2.png') ,
        receiversAddress: 'Kongo plaza, Lafia, Nasarawa State',
        delivered: 'Delivered',
        itemPhoto:  require('../assets/img/item1.png') ,

    },
    {
        id: '2',
        status: 'Pickedup',
        icon: 'truck-check',
        waybillNo: 'WB0402',
        items: 'mobile phone',
        senderName: 'Johnson Emeka',
        sendersAddress: 'Jikwoyi phase II, Banex plaza ',
        ReceiverName: 'Frank Edward',
        receiversAddress: 'BIR, Lafia, Nasarawa State',
        sendersProfilePicture: require('../assets/img/person1.png') ,
        receiversProfilePicture: require('../assets/img/person2.png') ,
        delivered: 'cancelled',
        itemPhoto:  require('../assets/img/item2.png') ,


    },
    {
        id: '3',
        status: 'Deliverying...',
        waybillNo: 'WB0402',
        icon: 'truck-delivery',
        items: 'mobile phone',
        senderName: 'Johnson Emeka',
        sendersAddress: 'Wuse zone II, Banex plaza ',
        receiverName: 'Frank Edward',
        receiversAddress: 'Kongo plaza, Lafia, Nasarawa State',
        sendersProfilePicture: require('../assets/img/person1.png') ,
        receiversProfilePicture: require('../assets/img/person2.png') ,
        delivered: 'pending',
        itemPhoto:  require('../assets/img/item1.png') ,

    },
]


export const Driverdummy = [
    {
        id: '1',
        name: 'Ay.James',
        status: 'Available',
        Mobile_Number: '08068257152',
        carImage: require('../assets/img/car1.png'),
        profilePhoto: require('../assets/img/driver1.png'),

    },
    {
        id: '2',
        name: 'Favour M',
        status: 'Available',
        Mobile_Number: '08068257152',
        carImage: require('../assets/img/car2.png'),
        profilePhoto: require('../assets/img/driver2.png'),

    },
    {
        id: '3',
        name: 'Musa Isah',
        status: 'Available',
        Mobile_Number: '08068257152',
        carImage: require('../assets/img/car3.png'),
        profilePhoto: require('../assets/img/driver3.png'),

    },
]
