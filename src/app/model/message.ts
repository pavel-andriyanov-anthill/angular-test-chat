export interface ChatMessage {
    id?: number,
    userId: number,
    userName: string,
    text: string,
    date: Date
}

export const initData: ChatMessage[] = [
    {
        id: 1,
        date: new Date(),
        text: 'test message 1.1',
        userId: 1,
        userName: 'user 1'
    },
    {
        id: 2,
        date: new Date(),
        text: 'test message 1.2',
        userId: 1,
        userName: 'user 1'
    },
    {
        id: 3,
        date: new Date(),
        text: 'test message 2.1',
        userId: 2,
        userName: 'user 2'
    },
    {
        id: 4,
        date: new Date(),
        text: 'test message 1.3',
        userId: 1,
        userName: 'user 1'
    },
    {
        id: 5,
        date: new Date(),
        text: 'test message 3.1',
        userId: 3,
        userName: 'user 3'
    },
    {
        id: 6,
        date: new Date(),
        text: 'test message 4.1',
        userId: 4,
        userName: 'user 4'
    }
]