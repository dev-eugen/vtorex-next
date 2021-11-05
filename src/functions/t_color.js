export default function (color) {
    switch (color) {
        case 'Зелёный':
        return 'bg-green-100'

        case 'Жёлтый':
        return 'bg-yellow-100'

        case 'Красный':
        return 'bg-red-100'

        case 'Коричневый':
        return 'bg-warmGray-100'

        case 'Фиолетовый':
        return 'bg-purple-100'

        case 'Оранжевый':
        return 'bg-orange-100'

        case 'Розовый':
        return 'bg-pink-100'

        case 'Синий':
        return 'bg-blue-100'

        case 'Чёрный':
        return 'bg-gray-200'


        default: 
        return 'bg-white-100'
             
    }
}