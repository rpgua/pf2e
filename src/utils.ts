const getActions = (action: number) => {

    if (action >= 6) {
        return getDuration(action)
    } else {
        switch (action) {
            case 1:
                return '[one-action]'
            case 2:
                return '[two-actions]'
            case 3:
                return '[three-actions]'
            case 0:
                return '[free-action]'
            case 4:
                return '[reaction]'
            default:
                return null
        }
    }

    
}

const getDuration = (duration: number) => {
    if (duration == 6 ) {
        return '1 round'
        
    } else if (duration == 12 ) {
        return '2 round'
    } else if (12 < duration && duration < 60){
        const rounds = duration / 6
        return `${rounds} rounds`
    } else if (60 <=duration && duration<3600) {
        const min = duration / 60
        return `${min} min.`
    } else if (3600 <=duration && duration < 86400) {
        const hrs = duration / 3600
        return `${hrs} hrs.`
    } else if (86400 <=duration && duration < 2592000) {
        const days = duration / 86400
        return `${days} days.`
    }
}

export { getActions, getDuration }